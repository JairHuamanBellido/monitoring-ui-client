import HttpRestApi from "core/api/HttRestApi";
import { AuthRequest } from "../models/AuthRequest";

export class AuthenticationService {
  public static async login(payload: AuthRequest): Promise<any> {
    const { data } = await HttpRestApi.post("/authentication", payload);

    return data;
  }
}
