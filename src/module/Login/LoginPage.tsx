import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Flex, Input } from "../../shared";
import "./index.scss";

interface AuthRequest {
  username: string;
  password: string;
}
export default function LoginPage() {
  const [formPayload, setFormPayload] = useState<AuthRequest>({
    username: "",
    password: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormPayload({ ...formPayload, [name]: value });
  };

  return (
    <div className="login-page-container">
      <div className="header">
        <h2>Bienvenido</h2>
        <p>Ingrese sus credenciales para ingresar al sistema</p>
      </div>
      <form className="form-container">
        <Flex direction="column" className="field">
          <label htmlFor="username">Usuario</label>
          <Input
            placeholder="Ingrese su usuario"
            value={formPayload.username}
            type="text"
            onChange={handleInput}
            name="username"
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
          />
        </Flex>
        <Flex width="100%" margin="48px 0px">
          <Button text="Ingresar" className="submit-btn rounded transition" />
        </Flex>
        <p className="register-label">
          ¿Aun no tienes un cuenta?
          <span>
            <Link to="/register">Aquí</Link>
          </span>
        </p>
      </form>
    </div>
  );
}
