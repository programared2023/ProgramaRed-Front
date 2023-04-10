import { NavLink, useSearchParams } from "react-router-dom";
import Posts from "../components/Posts";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../redux/actions";
import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import axios from "axios";

const Home = ({ toggleDetails }) => {
  const dispatch = useDispatch();
  const [searchParams, _] = useSearchParams()
  // const [initialization, setInitialization] = useState({ preferenceId: '' })
  const [message, setMessage] = useState("")

  useEffect(() => {
    dispatch(getAllPosts());
    if (searchParams.get('status')
      && searchParams.get('payment_id')
      && localStorage.getItem('id')) {
      completePayment()
    }
  }, [dispatch]);

  const completePayment = async () => {
    try {
      console.log(
        {
          paymentId: searchParams.get('payment_id'),
          productTitle: "Subscripcion Premium",
          price: 500 * 1.30,
          userId: Number(localStorage.getItem('id')),
          status: searchParams.get('status')
        }
      );
      const res = await axios.post('/payments', {
        paymentId: searchParams.get('payment_id'),
        productTitle: "Subscripcion Premium",
        price: 500 * 1.30,
        userId: Number(localStorage.getItem('id')),
        status: searchParams.get('status')
      })
      if (res.status === 200) {
        setMessage(res.data)
      }
    } catch (error) {
      console.log(error);
      setMessage(error.message)
    }
  }

  return (
    <>
      <div className="flex justify-start flex-col items-center h-full overflow-hidden w-full relative">
        <SideBar />
        <NavLink
          to="/createPost"
          className="p-2 m-4 font-medium rounded-md bg-ligthGreen transition-all duration-500 hover:bg-mediumGreen hover:scale-130"
        >
          Sube un posteo
        </NavLink>

        {message && (
          <h3 className='text-xl text-green-700'>{message}</h3>
        )}

        <div className="h-full w-full overflow-hidden py-3">
          <div className=" h-screen overflow-y-auto scrollbar-none">
            <Posts toggleDetails={toggleDetails} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
