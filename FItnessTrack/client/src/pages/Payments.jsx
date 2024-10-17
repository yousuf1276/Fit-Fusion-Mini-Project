import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Title = styled.div`
  padding: 0px 16px;
  font-size: 24px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  margin-bottom: 16px;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const PlanCard = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  width: 300px;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
`;

const PlanTitle = styled.h3`
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`;

const Price = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 12px;
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  color: ${({ theme }) => theme.text_secondary};
`;

const FeatureItem = styled.li`
  margin-bottom: 8px;
  font-size: 16px;
`;

const PayButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 18px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.primary_hover};
  }
`;

const PaymentPage = () => {
    const [selectedPlan, setSelectedPlan] = useState("");
  
    useEffect(() => {
      // Dynamically load Razorpay script when the component is mounted
      const script = document.createElement('script');
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }, []);
  
    const handlePayment = async (plan) => {
      setSelectedPlan(plan);
      try {
        const { data: order } = await axios.post("http://localhost:8080/api/payment/create-order", { plan });
        if (!order) throw new Error("Order creation failed");
  
        const options = {
          key: "rzp_test_yourKeyHere", // Replace with your Razorpay Key ID
          amount: order.amount,
          currency: "INR",
          name: "Your Gym",
          description: `${plan} Plan Subscription`,
          order_id: order.id,
          handler: async function (response) {
            try {
              const verificationResult = await axios.post("http://localhost:8080/api/payment/verify-payment", {
                payment_id: response.razorpay_payment_id,
                order_id: response.razorpay_order_id,
                signature: response.razorpay_signature,
              });
              if (verificationResult.data.success) {
                alert("Payment successful!");
              } else {
                alert("Payment verification failed.");
              }
            } catch (error) {
              console.error("Error verifying payment:", error);
              alert("Payment verification failed.");
            }
          },
          prefill: {
            name: "Your Name",
            email: "email@example.com",
            contact: "9999999999",
          },
          theme: {
            color: "#F37254",
          },
        };
  
        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } catch (error) {
        console.error("Error initiating payment:", error);
        alert("Error initiating payment");
      }
    };
  return (
    <Container>
      <Wrapper>
        <Title>Choose Your Plan</Title>
        <FlexWrap>
          <PlanCard>
            <PlanTitle>Basic Plan</PlanTitle>
            <Price>$20/month</Price>
            <Features>
              <FeatureItem>Access to basic workouts</FeatureItem>
              <FeatureItem>Community support</FeatureItem>
              <FeatureItem>1 coaching session/month</FeatureItem>
            </Features>
            <PayButton onClick={() => handlePayment("Basic")}>
              Subscribe Now
            </PayButton>
          </PlanCard>

          <PlanCard>
            <PlanTitle>Premium Plan</PlanTitle>
            <Price>$50/month</Price>
            <Features>
              <FeatureItem>Access to all workouts</FeatureItem>
              <FeatureItem>Priority support</FeatureItem>
              <FeatureItem>5 coaching sessions/month</FeatureItem>
              <FeatureItem>Meal plans</FeatureItem>
            </Features>
            <PayButton onClick={() => handlePayment("Premium")}>
              Subscribe Now
            </PayButton>
          </PlanCard>

          <PlanCard>
            <PlanTitle>Platinum Plan</PlanTitle>
            <Price>$100/month</Price>
            <Features>
              <FeatureItem>Unlimited access to all features</FeatureItem>
              <FeatureItem>Personal trainer support</FeatureItem>
              <FeatureItem>Unlimited coaching sessions</FeatureItem>
              <FeatureItem>Custom meal & workout plans</FeatureItem>
            </Features>
            <PayButton onClick={() => handlePayment("Platinum")}>
              Subscribe Now
            </PayButton>
          </PlanCard>
        </FlexWrap>
      </Wrapper>
    </Container>
  );
};

export default PaymentPage;
