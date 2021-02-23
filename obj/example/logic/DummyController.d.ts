import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ICommandable } from 'pip-services3-commons-node';
import { CommandSet } from 'pip-services3-commons-node';
import { IDummyController } from './IDummyController';
import { Dummy } from '../data/Dummy';
export declare class DummyController implements IDummyController, ICommandable {
    private _commandSet;
    private readonly _entities;
    getCommandSet(): CommandSet;
    getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, result: DataPage<Dummy>) => void): void;
    getOneById(correlationId: string, id: string, callback: (err: any, result: Dummy) => void): void;
    create(correlationId: string, entity: Dummy, callback: (err: any, result: Dummy) => void): void;
    update(correlationId: string, newEntity: Dummy, callback: (err: any, result: Dummy) => void): void;
    deleteById(correlationId: string, id: string, callback: (err: any, result: Dummy) => void): void;
}
