import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { usePayment } from '../Context/PaymentContext';

  const Checkout = ({ handlePaymentMethod }) => {
    const { handleCheckout } = usePayment();
  

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          width: "400px",
        }}
      >
        <h2 style={{ color: "#000", marginBottom: "20px", fontSize: "24px" }}>
          Which Payment do you Prefer?
        </h2>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => handleCheckout()}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center", // Text bleibt zentriert
              gap: "8px",
              color: "#000",
              borderColor: "#ccc",
              position: "relative", // Ermöglicht absolute Positionierung des Bildes
              "&:hover": {
                backgroundColor: "#000",
                color: "#fff",
              },
              padding: "10px 20px",
            }}
          >
            <img
              src="/paymentIcon/ec.png"
              alt="EC Karte"
              style={{
                width: "40px",
                height: "40px",
                position: "absolute",
                left: "10px", // Positioniert das Bild ganz links
              }}
            />
            EC Karte
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleCheckout()}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              color: "#000",
              borderColor: "#ccc",
              position: "relative",
              "&:hover": {
                backgroundColor: "#000",
                color: "#fff",
              },
              padding: "10px 20px",
            }}
          >
            <img
              src="/paymentIcon/PaypaLogo.png"
              alt="PayPal"
              style={{
                width: "40px",
                height: "30px",
                position: "absolute",
                left: "10px",
              }}
            />
            PayPal
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleCheckout()}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              color: "#000",
              borderColor: "#ccc",
              position: "relative",
              "&:hover": {
                backgroundColor: "#000",
                color: "#fff",
              },
              padding: "10px 20px",
            }}
          >
            <img
              src="/paymentIcon/eth-btc.png"
              alt="Barzahlung"
              style={{
                width: "40px",
                height: "22px",
                position: "absolute",
                left: "10px",
              }}
            />
            Crypto
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleCheckout()}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              color: "#000",
              borderColor: "#ccc",
              position: "relative",
              "&:hover": {
                backgroundColor: "#000",
                color: "#fff",
              },
              padding: "10px 20px",
            }}
          >
            <img
              src="/paymentIcon/mc-Visa.png"
              alt="Barzahlung"
              style={{
                width: "40px",
                height: "30px",
                position: "absolute",
                left: "10px",
              }}
            />
            Barzahlung
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
