import styled from "styled-components";

interface ContainerProps {}

export const Container = styled.header<ContainerProps>`
  div {
    display: flex;
    padding-bottom: 55px;
    border-radius: 25px;
    border: 2px solid #71d5be;
  }
  img {
    width: 220px;
    height: auto;
    @media only screen and (max-width: 600px) {
      width: 180px;
      height: 180px;
      margin-top: 105px;
    }
  }
  .insta {
    margin-top: 162px;
    margin-left: -327px;
    width: 38px;
    height: auto;
    @media only screen and (max-width: 600px) {
      margin-top: 304px;
      margin-left: -131px;
    }
  }
  p {
    font-size: 22px;
    font-family: "Fuzzy Bubbles", cursive;
    font-weight: 700;
    margin-left: 148px;
    margin-top: 55px;
    @media only screen and (max-width: 600px) {
      font-size: 18px;
      margin-left: 14px;
      margin-top: 86px;
    }
  }
`;
