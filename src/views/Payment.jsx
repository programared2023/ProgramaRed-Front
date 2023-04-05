import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// const MP_PUBLIC_KEY = "TEST-9cd5ef81-313e-40ed-9aa7-f8d0f163a1e2";
const FORM_ID = "payment-form"

const Payment = () => {
  // const [preferenceId, setPreferenceId] = useState("");
  const [searchParams, _] = useSearchParams()

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

  useEffect(() => {
    realizarPago()
    return () => { }
  }, [])

  return (
    <div id="wallet_container">
      <h2>Obtiene tu membresía Premium</h2>
      <p>Hazte Premium para obtener beneficios adicionales en tu cuenta</p>
      <span>Subir y descargar archivos</span>
      <br />
      <span>Compartir videos y tutoriales</span>

      <form id={FORM_ID} method="get" />
      {/* <button onClick={realizarPago} className="bg-blue-500 px-3 py-1 hover:bg-blue-700 rounded-xl border border-black">Realizar Pago</button> */}

      {/* <Wallet
        onReady={() => {
          console.log("Ready:", "Pago listo para crearse");
        }}
        onSubmit={async () => {
          const res = await axios.post("http://localhost:3001/subcriptions", {
            title: "Subscripcion Premium",
            description:
              "Pagar una subscripcion premium para poder publicar videos",
            price: 500,
            user: {
              username: "nicolas123",
              email: "juncosnicolas36@gmail.com",
            },
          });
          if (res?.data.preferenceId) {
            console.log(res?.data);
            setPreferenceId(res.data.preferenceId);
          }
        }}
        onError={(error) => {
          console.error("Error:", error);
        }}
        initialization={{ preferenceId: preferenceId }}
      /> */}

      {searchParams.get("error") && (
        <span className="text-red-700">Hubo un error al realizar el pago</span>
      )}
      {searchParams.get("success") && (
        <span className="text-green-700">Pago exitoso!</span>
      )}
    </div>
  );
};

export default Payment;
