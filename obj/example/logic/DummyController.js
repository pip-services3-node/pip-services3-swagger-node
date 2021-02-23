"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyController = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
const pip_services3_commons_node_4 = require("pip-services3-commons-node");
const DummyCommandSet_1 = require("./DummyCommandSet");
class DummyController {
    constructor() {
        this._entities = [];
    }
    getCommandSet() {
        if (this._commandSet == null)
            this._commandSet = new DummyCommandSet_1.DummyCommandSet(this);
        return this._commandSet;
    }
    getPageByFilter(correlationId, filter, paging, callback) {
        filter = filter != null ? filter : new pip_services3_commons_node_1.FilterParams();
        let key = filter.getAsNullableString("key");
        paging = paging != null ? paging : new pip_services3_commons_node_2.PagingParams();
        let skip = paging.getSkip(0);
        let take = paging.getTake(100);
        let result = [];
        for (var i = 0; i < this._entities.length; i++) {
            let entity = this._entities[i];
            if (key != null && key != entity.key)
                continue;
            skip--;
            if (skip >= 0)
                continue;
            take--;
            if (take < 0)
                break;
            result.push(entity);
        }
        callback(null, new pip_services3_commons_node_3.DataPage(result));
    }
    getOneById(correlationId, id, callback) {
        for (var i = 0; i < this._entities.length; i++) {
            let entity = this._entities[i];
            if (id == entity.id) {
                callback(null, entity);
                return;
            }
        }
        callback(null, null);
    }
    create(correlationId, entity, callback) {
        if (entity.id == null) {
            entity.id = pip_services3_commons_node_4.IdGenerator.nextLong();
        }
        this._entities.push(entity);
        callback(null, entity);
    }
    update(correlationId, newEntity, callback) {
        for (var index = 0; index < this._entities.length; index++) {
            let entity = this._entities[index];
            if (entity.id == newEntity.id) {
                this._entities[index] = newEntity;
                callback(null, newEntity);
                return;
            }
        }
        callback(null, null);
    }
    deleteById(correlationId, id, callback) {
        for (var index = 0; index < this._entities.length; index++) {
            let entity = this._entities[index];
            if (entity.id == id) {
                this._entities.splice(index, 1);
                callback(null, entity);
                return;
            }
        }
        callback(null, null);
    }
}
exports.DummyController = DummyController;
//# sourceMappingURL=DummyController.js.map