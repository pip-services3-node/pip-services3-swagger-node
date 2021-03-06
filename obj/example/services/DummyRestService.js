"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyRestService = void 0;
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
const pip_services3_commons_node_4 = require("pip-services3-commons-node");
const pip_services3_commons_node_5 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
const DummySchema_1 = require("../data/DummySchema");
class DummyRestService extends pip_services3_rpc_node_1.RestService {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("pip-services-dummies", "controller", "default", "*", "*"));
    }
    configure(config) {
        super.configure(config);
    }
    setReferences(references) {
        super.setReferences(references);
        this._controller = this._dependencyResolver.getOneRequired('controller');
    }
    getPageByFilter(req, res) {
        this._controller.getPageByFilter(req.params.correlation_id, new pip_services3_commons_node_2.FilterParams(req.params), new pip_services3_commons_node_3.PagingParams(req.params), this.sendResult(req, res));
    }
    getOneById(req, res) {
        this._controller.getOneById(req.params.correlation_id, req.params.dummy_id, this.sendResult(req, res));
    }
    create(req, res) {
        this._controller.create(req.params.correlation_id, req.body, this.sendCreatedResult(req, res));
    }
    update(req, res) {
        this._controller.update(req.params.correlation_id, req.body, this.sendResult(req, res));
    }
    deleteById(req, res) {
        this._controller.deleteById(req.params.correlation_id, req.params.dummy_id, this.sendDeletedResult(req, res));
    }
    register() {
        this.registerRoute('get', '/dummies', new pip_services3_commons_node_4.ObjectSchema(true)
            .withOptionalProperty("skip", pip_services3_commons_node_5.TypeCode.String)
            .withOptionalProperty("take", pip_services3_commons_node_5.TypeCode.String)
            .withOptionalProperty("total", pip_services3_commons_node_5.TypeCode.String), this.getPageByFilter);
        this.registerRoute('get', '/dummies/:dummy_id', new pip_services3_commons_node_4.ObjectSchema(true)
            .withRequiredProperty("dummy_id", pip_services3_commons_node_5.TypeCode.String), this.getOneById);
        this.registerRoute('post', '/dummies', new pip_services3_commons_node_4.ObjectSchema(true)
            .withRequiredProperty("body", new DummySchema_1.DummySchema()), this.create);
        this.registerRoute('put', '/dummies/:dummy_id', new pip_services3_commons_node_4.ObjectSchema(true)
            .withRequiredProperty("body", new DummySchema_1.DummySchema()), this.update);
        this.registerRoute('delete', '/dummies/:dummy_id', new pip_services3_commons_node_4.ObjectSchema(true)
            .withRequiredProperty("dummy_id", pip_services3_commons_node_5.TypeCode.String), this.deleteById);
        this._swaggerRoute = '/dummies/swagger';
        this.registerOpenApiSpecFromFile(__dirname + '/../../../example/services/dummy.yml');
    }
}
exports.DummyRestService = DummyRestService;
//# sourceMappingURL=DummyRestService.js.map