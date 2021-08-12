import { HttpError } from "core/types/HttpError";
import { User } from "module/Home/domain/entity/User";
import { GetPersonalInformationUseCase } from "module/Home/domain/usecase/GetPersonalInformationUseCase";
import { useQuery } from "react-query";

export default function useGuestUser() {
  return useQuery<User, HttpError>("user", () =>
    GetPersonalInformationUseCase.execute()
  );
}
