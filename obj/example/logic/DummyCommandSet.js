"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyCommandSet = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
const pip_services3_commons_node_4 = require("pip-services3-commons-node");
const pip_services3_commons_node_5 = require("pip-services3-commons-node");
const pip_services3_commons_node_6 = require("pip-services3-commons-node");
const pip_services3_commons_node_7 = require("pip-services3-commons-node");
const pip_services3_commons_node_8 = require("pip-services3-commons-node");
const DummySchema_1 = require("../data/DummySchema");
class DummyCommandSet extends pip_services3_commons_node_1.CommandSet {
    constructor(controller) {
        super();
        this._controller = controller;
        this.addCommand(this.makeGetPageByFilterCommand());
        this.addCommand(this.makeGetOneByIdCommand());
        this.addCommand(this.makeCreateCommand());
        this.addCommand(this.makeUpdateCommand());
        this.addCommand(this.makeDeleteByIdCommand());
    }
    makeGetPageByFilterCommand() {
        return new pip_services3_commons_node_2.Command("get_dummies", new pip_services3_commons_node_5.ObjectSchema(true)
            .withOptionalProperty("filter", new pip_services3_commons_node_7.FilterParamsSchema())
            .withOptionalProperty("paging", new pip_services3_commons_node_8.PagingParamsSchema()), (correlationId, args, callback) => {
            let filter = pip_services3_commons_node_3.FilterParams.fromValue(args.get("filter"));
            let paging = pip_services3_commons_node_4.PagingParams.fromValue(args.get("paging"));
            this._controller.getPageByFilter(correlationId, filter, paging, callback);
        });
    }
    makeGetOneByIdCommand() {
        return new pip_services3_commons_node_2.Command("get_dummy_by_id", new pip_services3_commons_node_5.ObjectSchema(true)
            .withRequiredProperty("dummy_id", pip_services3_commons_node_6.TypeCode.String), (correlationId, args, callback) => {
            let id = args.getAsString("dummy_id");
            this._controller.getOneById(correlationId, id, callback);
        });
    }
    makeCreateCommand() {
        return new pip_services3_commons_node_2.Command("create_dummy", new pip_services3_commons_node_5.ObjectSchema(true)
            .withRequiredProperty("dummy", new DummySchema_1.DummySchema()), (correlationId, args, callback) => {
            let entity = args.get("dummy");
            this._controller.create(correlationId, entity, callback);
        });
    }
    makeUpdateCommand() {
        return new pip_services3_commons_node_2.Command("update_dummy", new pip_services3_commons_node_5.ObjectSchema(true)
            .withRequiredProperty("dummy", new DummySchema_1.DummySchema()), (correlationId, args, callback) => {
            let entity = args.get("dummy");
            this._controller.update(correlationId, entity, callback);
        });
    }
    makeDeleteByIdCommand() {
        return new pip_services3_commons_node_2.Command("delete_dummy", new pip_services3_commons_node_5.ObjectSchema(true)
            .withRequiredProperty("dummy_id", pip_services3_commons_node_6.TypeCode.String), (correlationId, args, callback) => {
            let id = args.getAsString("dummy_id");
            this._controller.deleteById(correlationId, id, callback);
        });
    }
}
exports.DummyCommandSet = DummyCommandSet;
//# sourceMappingURL=DummyCommandSet.js.map