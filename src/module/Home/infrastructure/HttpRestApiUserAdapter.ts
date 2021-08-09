import { HttRestApiWithInterceptor } from "core/api/HttRestApi";
import { User } from "../domain/entity/User";

export class HttpRestApiUserAdapter {
  public static async getInformation(): Promise<User> {
    const { data } = await HttRestApiWithInterceptor.get<User>("/users/guest");

    return data;
  }
}
