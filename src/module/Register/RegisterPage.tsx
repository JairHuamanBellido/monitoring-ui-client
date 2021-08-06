import { useState } from "react";
import { Link } from "react-router-dom";
import { Flex, InputFile, Input, Button } from "../../shared";
import "./index.scss";
const ULR_AVATAR_DEFAULT =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRknowz3EhhUsGeb5FIpooL9gQWU6OyZPOW7sptvk4ZFpUz4yQflZl-B0jYDeMf_G-alE&usqp=CAU";

interface RegisterRequest {
  name: string;
  lastname: string;
  age: string;
  dni: string;
  email: string;
  username: string;
  password: string;
}

export default function RegisterPage() {
  const [imgUrl, setImgUrl] = useState<string>(ULR_AVATAR_DEFAULT);
  const [payload, setPayload] = useState<RegisterRequest>({
    age: "",
    dni: "",
    email: "",
    lastname: "",
    name: "",
    password: "",
    username: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleImange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const picture = e.target.files[0];
      setImgUrl(URL.createObjectURL(picture));
    }
  };
  return (
    <div className="register-container">
      <div className="header">
        <h2>Regístrate</h2>
        <p>Completa todos los campos y únete</p>
      </div>
      <form className="form-container">
        <Flex className="image-avatar-container" alignItems="center">
          <img width={48} height={48} src={imgUrl} alt="" />
          <InputFile onChange={handleImange} />
        </Flex>
        <Flex direction="column" className="field">
          <label htmlFor="name">Nombres</label>
          <Input
            name="name"
            onChange={handleInput}
            placeholder="Ingrese sus nombres"
            value={payload.name}
            type="text"
            required={true}
          />
        </Flex>
        <Flex direction="column" className="field">
          <label htmlFor="lastname">Apellidos</label>
          <Input
            name="lastname"
            onChange={handleInput}
            placeholder="Ingrese sus apellidos"
            value={payload.lastname}
            type="text"
            required={true}
          />
        </Flex>
        <Flex direction="column" className="field">
          <label htmlFor="age">Edad</label>
          <Input
            name="age"
            onChange={handleInput}
            placeholder="Ingrese su edad"
            value={payload.age}
            type="text"
            required={true}
          />
        </Flex>
        <Flex direction="column" className="field">
          <label htmlFor="dni">DNI</label>
          <Input
            name="dni"
            onChange={handleInput}
            placeholder="Ingrese su dni"
            value={payload.dni}
            type="text"
            required={true}
          />
        </Flex>
        <Flex direction="column" className="field">
          <label htmlFor="email">Email</label>
          <Input
            name="email"
            onChange={handleInput}
            placeholder="Ingrese su correo electrónico"
            value={payload.email}
            type="email"
            required={true}
          />
        </Flex>
        <Flex direction="column" className="field">
          <label htmlFor="username">Usuario</label>
          <Input
            name="username"
            onChange={handleInput}
            placeholder="Ingrese su usuario"
            value={payload.username}
            type="text"
            required={true}
          />
        </Flex>
        <Flex direction="column" className="field">
          <label htmlFor="password">Contraseña</label>
          <Input
            name="password"
            onChange={handleInput}
            placeholder="Ingrese su contraseña"
            value={payload.password}
            type="password"
            required={true}
          />
        </Flex>
        <Button text="Registrarse" className="submit-btn" />
        <p className="label-login">
          <Link to="/login">Regresar al inicio</Link>
        </p>
      </form>
    </div>
  );
}
