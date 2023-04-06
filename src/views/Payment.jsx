import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const MP_PUBLIC_KEY = "APP_USR-2e62776c-c02a-41fc-8124-39dda16ba58b";
initMercadoPago(MP_PUBLIC_KEY, {
  locale: 'es-AR'
})

const Payment = () => {
  // const [preferenceId, setPreferenceId] = useState("");
  const [cargando, setCargando] = useState(true)
  const [procesando, setProcesando] = useState(false)
  const [searchParams, _] = useSearchParams()
  // const [initialization, setInitialization] = useState({ preferenceId: '' })
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (searchParams.get('status')
      && searchParams.get('payment_id')
      && localStorage.getItem('id')) {
      completePayment()
    }
  }, [])

  const completePayment = async () => {
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
    if (res.data) {
      setMessage(res.data)
    }
  }

  const onSubmit = async () => {
    // callback llamado al hacer clic en Wallet Brick
    // esto es posible porque el ladrillo es un botón
    // en este momento del envío, debe crear la preferencia
    return new Promise((resolve, reject) => {
      setProcesando(true)
      axios.post('/subcriptions', {
        title: "Subscripcion Premium",
        description: "Pagar una subscripcion premium para poder publicar videos",
        price: 500,
        user: {
          username: "nicolas123",
          email: "juncosnicolas36@gmail.com"
        }
      })
        .then((response) => response.data)
        .then((data) => {
          // resolver la promesa con el ID de la preferencia
          // setInitialization({ preferenceId: data.preferenceId })
          resolve(data.preferenceId);
        })
        .catch((error) => {
          // manejar la respuesta de error al intentar crear preferencia
          console.error(error);
          reject(error);
        }).finally(() => {
          setProcesando(false)
        })
    });
  };

  const onReady = () => {
    setCargando(false)
  }

  const onError = (error) => {
    console.error("Error:", error);
  }
  return (
    <div id="wallet_container">
      <h2>Obtiene tu membresía Premium</h2>
      <p>Hazte Premium para obtener beneficios adicionales en tu cuenta</p>
      <span>Subir y descargar archivos</span>
      <br />
      <span>Compartir videos y tutoriales</span>

      <Wallet
        customization={{ visual: { buttonBackground: 'black', borderRadius: '8rem' } }}
        onReady={onReady}
        onSubmit={onSubmit}
        onError={onError}
      />

      {message && (
        <h3 className='text-xl text-green-700'>{message}</h3>
      )}

      {
        cargando && <span className="text-sm text-orange-700 font-bold">Cargando...</span>
      }
      {
        procesando && <span className="text-sm text-orange-700 font-bold">Procesando Pago...</span>
      }
    </div>
  );
};

export default Payment;

/**
 * CUENTAS DE PRUEBA
 * 
 * COMPRADOR: 
 *    - USERNAME: TEST_USER_2020951133
 *    - PASSWORD: NxqNQ8sD4E
 * 
 * VENDEDOR:
 *    - USERNAME: TEST_USER_2109952451
 *    - PASSWORD: dJqrzvx9YU
 * 
 * 
 */