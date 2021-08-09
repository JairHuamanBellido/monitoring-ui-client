import {HttpRestApi} from "core/api/HttRestApi";
import { AuthenticationPort } from "../domain/port/AuthenticationPort";
import { AuthenticationResponseUseCaseDto } from "../domain/usecase/dto/AuthenticationResponseUseCaseDto";

export class HttpRestApiLoginAdapter {
  public static async login(
    payload: AuthenticationPort
  ): Promise<AuthenticationResponseUseCaseDto> {
    const { data } = await HttpRestApi.post("/authentication", payload);

    return data;
  }
}
