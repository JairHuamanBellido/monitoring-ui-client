import { HttpErrorMessageUIAdapter } from "core/adapter/HttpErrorMessageAdapter";
import { HttpError } from "core/types/HttpError";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { Button, ContainerError, Flex, Input, PulseLoader } from "shared";
import { AuthenticationUseCase } from "../domain/usecase/AuthenticationUseCase";
import { AuthenticationResponseUseCaseDto } from "../domain/usecase/dto/AuthenticationResponseUseCaseDto";
import "./index.scss";

export default function LoginPage() {
  const [formPayload, setFormPayload] = useState({
    username: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState<string>("");

  const mutation = useMutation<AuthenticationResponseUseCaseDto, HttpError>(
    () => AuthenticationUseCase.execute(formPayload),
    {
      onError: (error) => {
        setErrMsg(HttpErrorMessageUIAdapter.parse(error.response?.data.type));
      },
    }
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormPayload({ ...formPayload, [name]: value });
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <div className="login-page-container">
      <div className="header">
        <h2>Bienvenido</h2>
        <p>Ingrese sus credenciales para ingresar al sistema</p>
      </div>
      <form onSubmit={onSubmit} className="form-container">
        <Flex direction="column" className="field">
          <label htmlFor="username">Usuario</label>
          <Input
            placeholder="Ingrese su usuario"
            value={formPayload.username}
            type="text"
            onChange={handleInput}
            name="username"
            required={true}
          />
        </Flex>
        <Flex direction="column" className="field">
          <label htmlFor="password">Contraseña</label>
          <Input
            placeholder="Ingrese su contraseña"
            value={formPayload.password}
            type="password"
            onChange={handleInput}
            name="password"
            required={true}
          />
        </Flex>
        {mutation.isError && <ContainerError message={errMsg} />}
        {mutation.isLoading && (
          <Flex width="100%" justifyContent="center">
            <PulseLoader />
          </Flex>
        )}
        {!mutation.isLoading && (
          <Flex width="100%" margin="48px 0px">
            <Button text="Ingresar" className="submit-btn rounded transition" />
          </Flex>
        )}
      </form>
      <p className="register-label">
        ¿Aun no tienes un cuenta?
        <span>
          <Link to="/register">Aquí</Link>
        </span>
      </p>
    </div>
  );
}
