import { HttpErrorType } from "core/enums/HttpErrorEnum";

export class HttpErrorMessageUIAdapter {
  public static parse(error: HttpErrorType | undefined): string {

    if (error === undefined)
        return "Error no identificado";
    if (error === HttpErrorType.INVALID_CREDENTIALS)
      return "Credenciales inválidas";
    if (error === HttpErrorType.AUTHENTICATION_ADMIN_DENIED)
      return "No tiene permisos";
    if (error === HttpErrorType.ACCOUNT_BLOCKED)
      return "Cuenta bloqueada";
    if (error === HttpErrorType.INTERNAL_SERVER_ERROR)
        return 'Hubo un error en el servidor. Inténelo de nuevo.'
    return "";
  }
}
