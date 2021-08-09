import { HttpError } from "core/types/HttpError";
import { useQuery } from "react-query";
import { Flex } from "shared";
import { User } from "../domain/entity/User";
import { GetPersonalInformationUseCase } from "../domain/usecase/GetPersonalInformationUseCase";
import "./index.scss";

export default function HomePage() {
  const { data, isLoading } = useQuery<User, HttpError>("guest", () =>
    GetPersonalInformationUseCase.execute()
  );

  if (isLoading) return <p>Cargando...</p>;
  return (
    <Flex
      width="100%"
      height="100vh"
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="home-container"
    >
      <img src={data?.avatar} alt={data?.name} />
      <h1>Bienvenido {data?.name}</h1>
      <p>Actualmente estas conectado a la plataforma</p>
    </Flex>
  );
}
