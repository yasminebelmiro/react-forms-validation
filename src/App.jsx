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
  ErrorMessage,
  Column,
} from "./style";
import { LuDog } from "react-icons/lu";
import { axiosInstace } from "./service/axios";
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const schema = Yup.object().shape({
    name: Yup.string().required("Nome é um campo obrigatório!"),
    phone: Yup.string().required("Telefone é um campo obrigatório!"),
    cpf: Yup.string().required("CPF é um campo obrigatório!"),
    cep: Yup.string()
      .required("CEP é obrigatório")
      .matches(/^\d{8}$/, "CEP deve ter 8 dígitos"),
    city: Yup.string(),
    state: Yup.string(),
    adress: Yup.string().required("Endereço é um campo obrigatório!"),
    neighborhood: Yup.string().required("Bairro é um campo obrigatório!"),
    email: Yup.string().required("Email é um campo obrigatório!"),
    password: Yup.string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .required("Senha é obrigatória"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "As senhas devem coincidir")
      .required("Confirmação de senha é obrigatória"),
  });

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const cep = watch("cep");
  useEffect(() => {
    const fechCep = async () => {
      if (cep && cep.length === 8) {
        setLoading(true);
        setError(null);

        try {
          const responseCep = await axiosInstace.get(`/cep/v1/${cep}`);
          setValue("city", responseCep.data.city);
          setValue("state", responseCep.data.state);
        } catch (error) {
          console.error(error);
          setError(
            "Erro ao buscar o CEP. Verifique o número e tente novamente."
          );
        } finally {
          setLoading(false);
        }
      }
    };

    fechCep();
  }, [cep, setValue]);

  const onSubmit = (data) => {
    console.log("Dados do formulário: ", data);
    alert(`${data.name}, agredecemos pelo seu cadastro.`)
  };

  return (
    <>
      <Container>
        <Left>
          <Icon as={LuDog} />
          <Subtitle>Bem vindo ao Cantinho Pet</Subtitle>
        </Left>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title>Cadastro</Title>
          <Grid>
            <Column>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    placeholder="Nome completo"
                    error={errors.name}
                  />
                )}
              />
              {errors.name && (
                <ErrorMessage>{errors.name.message} </ErrorMessage>
              )}
            </Column>
            <Column>
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    placeholder="Telefone"
                    error={errors.phone}
                  />
                )}
              />
              {errors.phone && (
                <ErrorMessage>{errors.phone.message} </ErrorMessage>
              )}
            </Column>
          
            <Column>
              <Controller
                name="cpf"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    placeholder="CPF"
                    error={errors.cpf}
                  />
                )}
              />
              {errors.cpf && <ErrorMessage>{errors.cpf.message} </ErrorMessage>}
            </Column>
            <Column>
              <Controller
                name="cep"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    placeholder="CEP"
                    error={errors.cep}
                  />
                )}
              />
              {errors.cep && <ErrorMessage>{errors.cep.message} </ErrorMessage>}
            </Column>

            <Controller
              name="city"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Cidade"
                  disabled
                  error={errors.city}
                />
              )}
            />

            <Controller
              name="state"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Estado"
                  disabled
                  error={errors.state}
                />
              )}
            />

            <Column>
              <Controller
                name="adress"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    placeholder="Endereço"
                    error={errors.adress}
                  />
                )}
              />

              {errors.adress && (
                <ErrorMessage>{errors.adress.message} </ErrorMessage>
              )}
            </Column>
            <Column>
              <Controller
                name="neighborhood"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    placeholder="Bairro"
                    error={errors.neighborhood}
                  />
                )}
              />
              {errors.neighborhood && (
                <ErrorMessage>{errors.neighborhood.message} </ErrorMessage>
              )}
            </Column>
            <Column>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    type="email"
                    placeholder="Email"
                    error={errors.email}
                  />
                )}
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message} </ErrorMessage>
              )}
            </Column>

            <Column>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    type="password"
                    placeholder="Senha"
                    error={errors.password}
                  />
                )}
              />
              {errors.password && (
                <ErrorMessage>{errors.password.message} </ErrorMessage>
              )}
            </Column>
            <Column>
              <Controller
                name="passwordConfirm"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    type="password"
                    placeholder="Confirmar senha"
                    error={errors.passwordConfirm}
                  />
                )}
              />
              {errors.passwordConfirm && (
                <ErrorMessage>{errors.passwordConfirm.message} </ErrorMessage>
              )}
            </Column>
          </Grid>

          <Button type="submit" disabled={loading}>
            {loading ? "Carregando..." : "Cadastrar"}
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default App;
