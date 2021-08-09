import { UseCase } from "core/usecase/UseCase";
import { HttpRestApiLoginAdapter } from "../../infrastructure/HttpRestApiLoginAdapter";
import { AuthenticationUIAdapter } from "../adapter/AuthenticationUIAdapter";
import { AuthenticationPort } from "../port/AuthenticationPort";
import { AuthenticationResponseUseCaseDto } from "./dto/AuthenticationResponseUseCaseDto";

export class AuthenticationUseCase
  implements UseCase<AuthenticationUIAdapter, AuthenticationResponseUseCaseDto>
{
  public static async execute(adapter: AuthenticationUIAdapter): Promise<AuthenticationResponseUseCaseDto> {
    
    const port:AuthenticationPort = { 
      username: adapter.username,
      password: adapter.password
    }
    
    const httpResponse = await HttpRestApiLoginAdapter.login(port);
    
    return httpResponse;
  }
}
