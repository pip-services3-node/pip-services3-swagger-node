"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultSwaggerFactory = void 0;
/** @module build */
const pip_services3_components_node_1 = require("pip-services3-components-node");
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const SwaggerService_1 = require("../services/SwaggerService");
/**
 * Creates Swagger components by their descriptors.
 *
 * @see [[https://pip-services3-node.github.io/pip-services3-components-node/classes/build.factory.html Factory]]
 * @see [[HttpEndpoint]]
 * @see [[HeartbeatRestService]]
 * @see [[StatusRestService]]
 */
class DefaultSwaggerFactory extends pip_services3_components_node_1.Factory {
    /**
     * Create a new instance of the factory.
     */
    constructor() {
        super();
        this.registerAsType(DefaultSwaggerFactory.SwaggerServiceDescriptor, SwaggerService_1.SwaggerService);
    }
}
exports.DefaultSwaggerFactory = DefaultSwaggerFactory;
DefaultSwaggerFactory.Descriptor = new pip_services3_commons_node_1.Descriptor("pip-services", "factory", "swagger", "default", "1.0");
DefaultSwaggerFactory.SwaggerServiceDescriptor = new pip_services3_commons_node_1.Descriptor("pip-services", "swagger-service", "*", "*", "1.0");
//# sourceMappingURL=DefaultSwaggerFactory.js.map