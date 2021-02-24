import { ISwaggerService } from 'pip-services3-rpc-node';
import { RestService } from 'pip-services3-rpc-node';
export declare class SwaggerService extends RestService implements ISwaggerService {
    private _routes;
    constructor();
    private calculateFilePath;
    private calculateContentType;
    private checkFileExist;
    private loadFileContent;
    private getSwaggerFile;
    private getIndex;
    private redirectToIndex;
    private composeSwaggerRoute;
    registerOpenApiSpec(baseRoute: string, swaggerRoute?: string): void;
    register(): void;
}
