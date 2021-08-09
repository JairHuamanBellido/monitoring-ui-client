import { useEffect, useState } from "react";
import { HttpError } from "core/types/HttpError";
import { useQuery } from "react-query";
import { Flex, useSocket } from "shared";
import { User } from "../domain/entity/User";
import { GetPersonalInformationUseCase } from "../domain/usecase/GetPersonalInformationUseCase";
import { ListenerBlockAccountUseCase } from "../domain/usecase/ListenerBlockAccountUseCase";
import { JoinRoomUseCase } from "../domain/usecase/JoinRoomUseCase";
import "./index.scss";

export default function HomePage() {
  const { data, isLoading } = useQuery<User, HttpError>("guest", () =>
    GetPersonalInformationUseCase.execute()
  );
  const [isBlocked, setIsBlocked] = useState<boolean>(false);
  const socket = useSocket("users-management");
  useEffect(() => {
    if (socket !== undefined) {
      JoinRoomUseCase.join(socket);
      ListenerBlockAccountUseCase.listen(socket, blockAccount);
    }
  }, [socket]);

  const blockAccount = (): void => {
    setIsBlocked(true);
  };

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
      {isBlocked && <p>bloquedo</p>}
      <p>Actualmente estas conectado a la plataforma</p>
    </Flex>
  );
}
