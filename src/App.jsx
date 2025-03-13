import React, { useEffect, useState } from "react";
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
  Column,
  Error,
} from "./style";
import { LuDog } from "react-icons/lu";
import { axiosInstace } from "./service/axios";


const App = () => {
  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fechCep = async () => {
    if (cep.length !== 8) return setError("CEP deve ter apenas números.");
    try {
      const responseCep = await axiosInstace.get(`/cep/v1/${cep}`);
      console.log(responseCep.data);
      setCep(responseCep.data);
      setCity(responseCep.data.city);
      setState(responseCep.data.state);
    } catch (error) {
      console.error(error);
      setError("CEP não encontrado");
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    if(cep.length === 8) {

      fechCep();
    }
  }, [cep]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fechCep();
  };
  return (
    <>
      <Container>
        <Left>
          <Icon as={LuDog} />
          <Subtitle>Bem vindo ao Cantinho pet</Subtitle>
        </Left>
        <Form onSubmit={handleSubmit}>
          <Title>Cadastro</Title>
          <Grid>
            <Input type="text" name="name" placeholder="Nome completo" />
            <Input type="text" name="phone" placeholder="Telefone" />
            <Input type="date" name="date" placeholder="Data de nascimento" />
            <Input type="text" name="cpf" placeholder="CPF" />
            <Column>
              <Input
                type="text"
                name="cep"
                placeholder="CEP"
                onChange={(e) => setCep(e.target.value)}
              />
              {error ? <Error>{error}</Error> : <></>}
            </Column>
            <Input
              type="text"
              name="city"
              placeholder="Cidade"
              disabled
              value={city || ""}
            />
            <Input
              type="text"
              name="state"
              placeholder="Estado"
              disabled
              value={state || ""}
            />
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
          {loading ? <p>Carregando...</p> : <></>}
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Container>
    </>
  );
};

export default App;
