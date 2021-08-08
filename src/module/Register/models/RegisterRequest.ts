import { UserRole } from "core/enums/UserRoleEnum";

export interface RegisterRequest {
  file: File;
  name: string;
  age: string;
  dni: string;
  email: string;
  lastname: string;
  rol: UserRole;
  username: string;
  password: string;
}
