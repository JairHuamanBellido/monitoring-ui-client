import { UseCase } from "core/usecase/UseCase";
import { HttpRestApiUserAdapter } from "module/Home/infrastructure/HttpRestApiUserAdapter";
import { User } from "../entity/User";

export class GetPersonalInformationUseCase implements UseCase<undefined, User> {
  public static async execute(): Promise<User> {
    const httpResponse = await HttpRestApiUserAdapter.getInformation();
    const user: User = new User({
      id:       httpResponse.id,
      name:     httpResponse.name,
      avatar:   httpResponse.avatar,
      email:    httpResponse.email,
      lastname: httpResponse.lastname,
    });

    return user;
  }
}
