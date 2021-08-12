import { HttpError } from "core/types/HttpError";
import { WriteResourceUseCase } from "core/usecase/WriteResourceUseCase";
import { RegisterUserUIAdapter } from "module/Register/domain/adapter/RegisterUserUIAdapter";
import { RegisterUserUseCase } from "module/Register/domain/usecase/RegisterUserUseCase";
import { useMutation } from "react-query";

export default function useRegister(payload: RegisterUserUIAdapter) {
  return useMutation<WriteResourceUseCase, HttpError>(() =>
    RegisterUserUseCase.execute(payload)
  );
}
