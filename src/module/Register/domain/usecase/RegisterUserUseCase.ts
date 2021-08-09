import { UserRole } from "core/enums/UserRoleEnum";
import { UseCase } from "core/usecase/UseCase";
import { WriteResourceUseCase } from "core/usecase/WriteResourceUseCase";
import { HttpRestApiRegisterAdapter } from "module/Register/infrastructure/HttpRestApiRegisterAdapter";
import { RegisterUserUIAdapter } from "../adapter/RegisterUserUIAdapter";
import { RegisterUserPort } from "../port/RegisterUserPort";

export class RegisterUserUseCase implements UseCase<RegisterUserUIAdapter,WriteResourceUseCase> {
    public static async execute(adapter: RegisterUserUIAdapter): Promise<WriteResourceUseCase> {
        const port: RegisterUserPort = {
            age: adapter.age,
            dni: adapter.dni,
            email: adapter.email,
            file: adapter.file,
            lastname: adapter.lastname,
            name: adapter.name,
            password: adapter.password,
            rol: UserRole.USER,
            username: adapter.username
        }

        const httpResponse = await HttpRestApiRegisterAdapter.register(port);

        return httpResponse;
    }
    
}