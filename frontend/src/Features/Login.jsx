import React, { useState } from "react";
import styled from "styled-components";
import { Google } from "@styled-icons/boxicons-logos/Google";
import { Apple } from "@styled-icons/boxicons-logos/Apple";
import { login } from "./form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      email,
      password,
    };
    const response = await login(data); // Wait for the signup API call
    // setSuccessMessage("Signup successful! Welcome to FurniFlex."); // Set success message
    if (response.status === 200) {
      toast.success("Sucessfully Logged in");
      // window.history.pushState(null, "", "/login");
      setTimeout(() => {
        navigate("/home");
        window.location.reload();
        setIsLoading(false);
      }, 2000);
    } else {
      toast.error(`${response.response.data.message}`);
      setIsLoading(false);
    }
    // const res = response.json();
  }
  return (
    <Container>
      <ToastContainer position="top-center" />
      <LeftSection>
        <FormContainer>
          <Title>Welcome Back!</Title>
          <Subtitle>Enter your Credentials to access your account</Subtitle>
          <Form>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Enter your email"
            />
            <PasswordInputWrapper>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                placeholder="Enter your password"
              />
              <PasswordToggle>👁️</PasswordToggle>
            </PasswordInputWrapper>
            <ForgotPassword href="#">Forgot Password</ForgotPassword>
            <CheckboxWrapper>
              <input type="checkbox" id="terms" />
              <Label htmlFor="terms">
                I agree to the <a href="#">Terms & Policy</a>
              </Label>
            </CheckboxWrapper>
            <SigninButton disabled={loading} onClick={(e) => handleSubmit(e)}>
              Sign In
            </SigninButton>
            <OrDivider>or</OrDivider>
            <OAuthButtons>
              <OAuthButton isGoogle>
                <Google color="green" height={"20px"} /> Sign in with Google
              </OAuthButton>
              <OAuthButton isApple>
                <Apple color="black" height={"20px"} /> Sign in with Apple
              </OAuthButton>
            </OAuthButtons>
            <SignupLink>
              Have an account? <a href="/signup">Sign Up</a>
            </SignupLink>
          </Form>
        </FormContainer>
      </LeftSection>
      <RightSection>
        <Overlay>
          <LogoContainer>
            <Logo>F</Logo>
            <BrandText>
              Furni<span>Flex</span>
            </BrandText>
            <Description>
              Discover a seamless shopping experience with our curated
              collection of products. From fashion to electronics, we bring
              quality.
            </Description>
          </LogoContainer>
        </Overlay>
      </RightSection>
    </Container>
  );
};

// Styled Components

const Container = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
`;

const RightSection = styled.div`
  flex: 1;
  background-image: url("../../Images/background.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Overlay = styled.div`
  background-color: rgba(44, 42, 42, 0.6);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  text-align: center;
  color: white;
`;

const Logo = styled.div`
  font-size: 60px;
  background-color: #007bff;
  color: white;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
`;

const BrandText = styled.h1`
  font-size: 32px;
  font-weight: bold;
  span {
    color: #007bff;
  }
`;

const Description = styled.p`
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.5;
`;

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 14px;
  margin-bottom: 20px;
  color: #7a7a7a;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const PasswordInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const PasswordToggle = styled.span`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

const ForgotPassword = styled.a`
  display: block;
  text-align: right;
  margin-bottom: 10px;
  color: #007bff;
  font-size: 14px;
  text-decoration: none;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Label = styled.label`
  margin-left: 5px;
  font-size: 14px;
  a {
    color: #007bff;
    text-decoration: none;
  }
`;

const SigninButton = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
`;

const OrDivider = styled.div`
  text-align: center;
  margin: 10px 0;
  font-size: 14px;
  color: #7a7a7a;
`;

const OAuthButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

// const OAuthButton = styled.button`
//   flex: 1;
//   padding: 10px;
//   font-size: 14px;
//   background-color: ${({ google, apple }) =>
//     google ? "#4285F4" : apple ? "#000" : "white"};
//   color: ${({ google, apple }) =>
//     google ? "white" : apple ? "white" : "#000"};
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const OAuthButton = styled.button`
//   flex: 1;
//   padding: 10px;
//   font-size: 14px;
//   background-color: ${({ google, apple }) =>
//     google ? "#ffffff" : apple ? "#ffffff" : "white"};
//   color: ${({ google, apple }) =>
//     google ? "black" : apple ? "black" : "white"};
//   border: 1px solid #d9d9d9;
//   border-radius: 5px;
//   cursor: pointer;
// `;
const OAuthButton = styled.button.attrs(({ isGoogle, isApple }) => ({
  // Remove isGoogle and isApple from being passed to the DOM element
  isGoogle: undefined,
  isApple: undefined,
}))`
  flex: 1;
  padding: 10px;
  font-size: 14px;
  background-color: ${({ isGoogle, isApple }) =>
    isGoogle ? "#ffffff" : isApple ? "#ffffff" : "white"};
  color: ${({ isGoogle, isApple }) =>
    isGoogle ? "black" : isApple ? "black" : "white"};
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  cursor: pointer;
`;
const SignupLink = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  a {
    color: #007bff;
    text-decoration: none;
  }
`;

export default Login;
