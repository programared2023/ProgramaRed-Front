import { NavLink, useLocation, useParams, useSearchParams } from "react-router-dom";
import Posts from "../components/Posts";
import Filters from "../components/Filters/Filters";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../redux/actions";
import { useEffect, useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";

const MP_PUBLIC_KEY = "TEST-9cd5ef81-313e-40ed-9aa7-f8d0f163a1e2"
const Home = () => {
  const dispatch = useDispatch();
  initMercadoPago(MP_PUBLIC_KEY)
  const [preferenceId, setPreferenceId] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()

  console.log(searchParams);
  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  return (
    <div className="flex justify-start flex-col items-center h-full overflow-hidden w-full">
      <NavLink to="/createPost" className="p-2 m-4 font-medium rounded-md bg-ligthGreen transition-all duration-500 hover:bg-mediumGreen hover:scale-130">Sube un posteo</NavLink>
      <Filters />
      <div id="wallet_container"></div>
      <div className="h-full overflow-hidden py-4">
        <div className="h-full overflow-y-auto scrollbar-none">
          <Posts />
        </div>
      </div>

      <Wallet onReady={() => {
        console.log('Ready:', 'Pago listo para crearse');
      }}
        onSubmit={async () => {
          const res = await axios.post('http://localhost:3001/subcriptions',
            {
              "title": "Subscripcion Premium",
              "description": "Pagar una subscripcion premium para poder publicar videos",
              "price": 500,
              "user": {
                "username": "nicolas123",
                "email": "juncosnicolas36@gmail.com"
              }
            })
          if (res?.data.preferenceId) {
            console.log(res?.data);
            setPreferenceId(res.data.preferenceId)
          }
        }}
        onError={(error) => { console.error('Error:', error); }}
        initialization={{ preferenceId: preferenceId }} />

      {
        searchParams.get('error') && <span className="text-red-700">Hubo un error al realizar el pago</span>
      }
      {
        searchParams.get('success') && <span className="text-green-700">Pago exitoso!</span>
      }
    </div>
  );
};

export default Home;

//filtros combinados

//posts  => ok

//SideBar derecha
//barra busqueda
//favoritos

//navBar izquierda
//links
