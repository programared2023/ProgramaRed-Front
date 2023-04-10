import axios from "axios";
import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const MP_PUBLIC_KEY = "APP_USR-2e62776c-c02a-41fc-8124-39dda16ba58b";
initMercadoPago(MP_PUBLIC_KEY, {
  locale: 'es-AR'
})

const Payment = () => {
  // const [preferenceId, setPreferenceId] = useState("");
  const [cargando, setCargando] = useState(true)
  const [procesando, setProcesando] = useState(false)

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
    <div className="h-full w-full self-center pt-10">
      <div id="wallet_container" className="w-3/4 bg-ligthGreen flex flex-col items-center gap-2 my-2 mx-auto p-5 rounded-40px" >
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

        {
          cargando && <span className="text-sm text-orange-700 font-bold">Cargando...</span>
        }
        {
          procesando && <span className="text-sm text-orange-700 font-bold">Procesando Pago...</span>
        }
      </div>
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