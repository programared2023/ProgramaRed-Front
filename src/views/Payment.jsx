import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const MP_PUBLIC_KEY = "TEST-9cd5ef81-313e-40ed-9aa7-f8d0f163a1e2";

const Payment = () => {
  initMercadoPago(MP_PUBLIC_KEY);
  const [preferenceId, setPreferenceId] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);
  return (
    <div id="wallet_container">
      <h2>Obtiene tu membresía Premium</h2>
      <p>Hazte Premium para obtener beneficios adicionales en tu cuenta</p>
      <span>Subir y descargar archivos</span>
      <br />
      <span>Compartir videos y tutoriales</span>

      <Wallet
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
      />

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
