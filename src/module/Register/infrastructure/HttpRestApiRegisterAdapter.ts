import {HttpRestApi} from "core/api/HttRestApi";
import { WriteResourceUseCase } from "core/usecase/WriteResourceUseCase";
import { RegisterUserPort } from "../domain/port/RegisterUserPort";

export class HttpRestApiRegisterAdapter {
  public static async register(
    payload: RegisterUserPort
  ): Promise<WriteResourceUseCase> {
    const formData = new FormData();

    formData.append("file", payload.file);
    formData.append("name", payload.name);
    formData.append("age", payload.age);
    formData.append("dni", payload.dni);
    formData.append("email", payload.email);
    formData.append("lastname", payload.lastname);
    formData.append("rol", payload.rol);
    formData.append("username", payload.username);
    formData.append("password", payload.password);

    const { data } = await HttpRestApi.post<WriteResourceUseCase>(
      "/users",
      formData
    );

    return data;
  }
}
