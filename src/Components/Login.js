import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <Logo1 src="assets/images/cta-logo-one.svg" alt="" />
        <SignUp>GET IT ALL HERE</SignUp>
        <Description>
          Get Premier access to Raya and Last Dragon and enjoy a discount of 10%
          off for the premium disney+ pack. For Indian users it will be rich
          experience as the collaboration for the top content creators will
          bring about something aweomse . Are you up for the surpise?
        </Description>
        <Logo2 src="assets/images/cta-logo-two.png" alt="" />
      </CTA>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-alignment: center;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-image: url("/assets/images/login-background.jpg");
  padding: 80px 40px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Logo1 = styled.img`
  margin-bottom: 12px;
  display: block;
  width: 100%;
  min-height: 1px;
  max-width: 600px;
  cursor: pointer;
`;
const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
`;

const SignUp = styled.a`
  font-weight: 600;
  width: 100%;
  padding: 15px 0;
  letter-spacing: 1.5px;
  text-align: center;
  border-radius: 4px;
  margin-bottom: 12px;
  font-size: 18px;
  background-color: #0063e5;
  border: 1px solid transparent;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-weight: 300;
  letter-spacing: 1.3px;
  margin: 0 0 24px;
  line-height: 1.5;
  font-size: 11px;
`;

const Logo2 = styled.img`
  max-width: 600px;
  width: 100%;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  cursor: pointer;
`;

export default Login;
