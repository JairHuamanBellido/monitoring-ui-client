import { HttpError } from "core/types/HttpError";
import { AuthenticationUIAdapter } from "module/Login/domain/adapter/AuthenticationUIAdapter";
import { AuthenticationUseCase } from "module/Login/domain/usecase/AuthenticationUseCase";
import { AuthenticationResponseUseCaseDto } from "module/Login/domain/usecase/dto/AuthenticationResponseUseCaseDto";
import { useMutation } from "react-query";

export default function useAuthentication(payload: AuthenticationUIAdapter) {
  const mutation = useMutation<AuthenticationResponseUseCaseDto, HttpError>(
    () => AuthenticationUseCase.execute(payload)
  );

  return mutation
}
