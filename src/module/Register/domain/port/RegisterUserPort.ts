import { UserRole } from "core/enums/UserRoleEnum";

export interface RegisterUserPort {
  age: string;
  dni: string;
  email: string;
  lastname: string;
  name: string;
  password: string;
  username: string;
  file: File;
  rol: UserRole;
}
