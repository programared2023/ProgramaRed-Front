import { NavLink, useSearchParams } from "react-router-dom";
import Posts from "../components/Posts";
import Filters from "../components/Filters/Filters";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../redux/actions";
import { useCallback, useEffect } from "react";
import axios from "axios";

// const MP_PUBLIC_KEY = "TEST-5511f904-81cd-4d76-b9f5-72f286ec7543"
const FORM_ID = "payment-form"

const Home = () => {
  const dispatch = useDispatch();
  const [searchParams, _] = useSearchParams()

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch, paymentData])

  const realizarPago = useCallback(async () => {
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
    if (res.data.preferenceId) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js'
      script.setAttribute('data-preference-id', res.data.preferenceId)
      const form = document.getElementById(FORM_ID)
      form.appendChild(script)
    }
  })

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
      <form id={FORM_ID} method="get" />
      <button onClick={realizarPago} className="bg-blue-500 px-3 py-1 hover:bg-blue-700 rounded-xl border border-black">Realizar Pago</button>

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

/**
 * CREDENCIALES DE PRUEBA MERCADO PAGO
 * USERNAME: TEST_USER_2109952451
 * PASSWORD: dJqrzvx9YU 
 */