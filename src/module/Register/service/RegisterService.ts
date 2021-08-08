import HttpRestApi from "core/api/HttRestApi";
import { RegisterRequest } from "../models/RegisterRequest";

export class RegisterService {
  public static async register(payload: RegisterRequest): Promise<void> {
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

    await HttpRestApi.post("/users", formData);
  }
}
