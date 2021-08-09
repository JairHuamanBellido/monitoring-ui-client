import { AxiosError } from "axios";
import { HttpErrorType } from "core/enums/HttpErrorEnum";

type HttpErrorResponse = {
  readonly code: number;
  readonly message: string;
  readonly type: HttpErrorType;
}
export type HttpError = AxiosError<HttpErrorResponse>
