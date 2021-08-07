import { HttpErrorType } from "core/enums/HttpErrorEnum";

export type HttpError = {
  readonly code: number;
  readonly message: string;
  readonly type: HttpErrorType;
};
