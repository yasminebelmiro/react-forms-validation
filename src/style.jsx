import styled from "styled-components";

export const Container = styled.div`
  width: 950px;
  height: 500px;
  display: flex;
  flex-direction: row;

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 750px) {
    width: 100%;

    flex-direction: column;
    height: auto;
  }

  @media (max-width: 400px) {
    width: 100%;
    flex-direction: column;
    height: auto;
  }
`;

export const Left = styled.div`
  width: 40%;
  height: 100%;
  background-color: #fcdc94;
  border-radius: 20px 0 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  position: relative;
  overflow: hidden;

  @media (max-width: 750px) {
    width: 100%;
    height: auto;
    border-radius: 0;
  }
`;

export const Form = styled.form`
  width: 70%;
  height: 100%;
  background-color: #fff;
  border-radius: 0 20px 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 750px) {
    width: 100%;
    height: auto;
    border-radius: 0;
  }
`;

export const Grid = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  place-items: center;
  gap: 10px 20px;

  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  color: #000;

  @media (max-width: 750px) {
    padding: 30px 0;
  }
`;

export const Icon = styled.div`
  font-size: 28rem;
  position: absolute;
  color: #ffffff;
  top: 8%;
  right: -67%;
  opacity: 0.7;
  z-index: 1;
  overflow: hidden;

  @media (max-width: 1100px) {
    font-size: 20rem;
    top: 20%;
    right: -57%;
  }

  @media (max-width: 750px) {
    font-size: 5rem;
    top: 0;
    right: -5%;
  }
`;

export const Subtitle = styled.h2`
  padding: 30px;
  font-size: 1.7rem;
  z-index: 2;
  @media (max-width: 750px) {
    font-size: 1rem;
  }
`;

export const Input = styled.input`
  width: 90%;
  height: 40px;
  border: none;
  background-color: #fff;
  box-shadow: 1px 1px 5px #fcdc94;
  border-radius: 30px;
  padding: 0 10px;
`;

export const Button = styled.button`
  width: 30%;
  height: 30px;
  border: none;
  background-color: #974814;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 750px) {
    margin: 30px 0;
    height: 40px;
    font-size: 1.1rem;
  }
`;

export const Column = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Error = styled.p`
color: red;
`


