import React from "react";
import {
  Container,
  Button,
  Form,
  Input,
  Title,
  Grid,
  Left,
  Subtitle,
  Icon,
  ImagePet,
} from "./style";
import { LuDog } from "react-icons/lu";

const App = () => {
  return (
    <>
      <Container>
        <Left>
         <Icon as={LuDog}/>
          
          <Subtitle>Bem vindo ao Cantinho pet</Subtitle>
          
        </Left>
        <Form>
          <Title>Cadastro</Title>
          <Grid>
            <Input type="text" name="name" placeholder="Nome completo" />
            <Input type="text" name="phone" placeholder="Telefone" />
            <Input type="date" name="date" placeholder="Data  de nascimento" />
            <Input type="text" name="cpf" placeholder="CPF" />
            <Input type="text" name="cep" placeholder="CEP" />
            <Input type="text" name="city" placeholder="Cidade" disabled />
            <Input type="text" name="state" placeholder="Estado" disabled />
            <Input type="text" name="adress" placeholder="Endereço" />
            <Input type="text" name="neighborhood" placeholder="Bairro" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Senha" />
            <Input
              type="password"
              name="password-confirm"
              placeholder="Confirmar senha"
            />
          </Grid>
          <Button>Cadastrar</Button>
        </Form>
      </Container>
    </>
  );
};

export default App;
