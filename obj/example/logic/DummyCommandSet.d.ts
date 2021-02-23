import { CommandSet } from 'pip-services3-commons-node';
import { IDummyController } from './IDummyController';
export declare class DummyCommandSet extends CommandSet {
    private _controller;
    constructor(controller: IDummyController);
    private makeGetPageByFilterCommand;
    private makeGetOneByIdCommand;
    private makeCreateCommand;
    private makeUpdateCommand;
    private makeDeleteByIdCommand;
}
