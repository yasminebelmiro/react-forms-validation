import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: row;
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
`;

export const Grid = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  place-items: center;
  gap: 10px 20px;
`;

export const ImagePet = styled.img`
  width: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

export const Title = styled.h1`
  color: #000;
`;
export const Icon = styled.div`
  font-size: 600px;
  position: absolute;
  color: #ffffff;
  top: -48px;
  right: -300px;
  opacity: 0.7;
  z-index: 1;
`;

export const Subtitle = styled.h2`
  padding: 30px;
  z-index: 2;
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
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
