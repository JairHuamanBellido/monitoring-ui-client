import { AxiosError } from "axios";
import { HttpErrorMessageUIAdapter } from "core/adapter/HttpErrorMessageAdapter";
import { HttpError } from "core/types/HttpError";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { Button, Flex, Input, PulseLoader } from "../../shared";
import AuthRequestErrorComponent from "./components/error/AuthRequestErrorComponent";
import "./index.scss";
import { AuthRequest } from "./models/AuthRequest";
import { AuthenticationService } from "./service/AuthenticationService";

export default function LoginPage() {
  const [formPayload, setFormPayload] = useState<AuthRequest>({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>("");

  const mutation = useMutation(() => AuthenticationService.login(formPayload), {
    onSuccess: () => {
      console.log("enhorabuena te has logueado");
    },
    onError: (error) => {
      const e = error as AxiosError<HttpError>;
      setErrorMessage(HttpErrorMessageUIAdapter.parse(e.response?.data.type));
    },
  });

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
        {mutation.isError && (
          <AuthRequestErrorComponent message={errorMessage} />
        )}
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
