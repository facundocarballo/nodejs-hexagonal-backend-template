import { BootstrapGetUserTracer } from "#bootstraps/tracers/get-user";
import { BootstrapGetUserUseCase } from "#bootstraps/usecases/get-user";
import { GetUserController } from "#infrastructure/controllers/get-user/get-user";

export class BootstrapGetUserController {
    private static instance: GetUserController;

    public static get(): GetUserController {
        if (!this.instance) {
            const tracer = BootstrapGetUserTracer.get();
            const usecase = BootstrapGetUserUseCase.get();
            this.instance = new GetUserController(usecase, tracer);
        }
        return this.instance;
    }

    public static register(controller: GetUserController) {
        this.instance = controller;
    }
}