import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button, ContainerError, Flex, Input, PulseLoader } from "shared";
import useAuthentication from "./hooks/useAuthentication";
import "./index.scss";

export default function LoginPage() {
  const [formPayload, setFormPayload] = useState({
    username: "",
    password: "",
  });

  const mutation = useAuthentication(formPayload);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormPayload({ ...formPayload, [name]: value });
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate();
  };

  if (mutation.isSuccess) return <Redirect to="/home" />;
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
          <ContainerError codeError={mutation.error?.response?.data.type} />
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
