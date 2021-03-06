"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require('lodash');
const async = require('async');
const readline = require('readline');
const process = require('process');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
const pip_services3_commons_node_4 = require("pip-services3-commons-node");
const pip_services3_commons_node_5 = require("pip-services3-commons-node");
const pip_services3_commons_node_6 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const pip_services3_components_node_2 = require("pip-services3-components-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
const pip_services3_rpc_node_2 = require("pip-services3-rpc-node");
const pip_services3_rpc_node_3 = require("pip-services3-rpc-node");
const SwaggerService_1 = require("../src/services/SwaggerService");
const DummyController_1 = require("./logic/DummyController");
const DummyRestService_1 = require("./services/DummyRestService");
const DummyCommandableHttpService_1 = require("./services/DummyCommandableHttpService");
// Create components
let logger = new pip_services3_components_node_1.ConsoleLogger();
let controller = new DummyController_1.DummyController();
let httpEndpoint = new pip_services3_rpc_node_1.HttpEndpoint();
let restService = new DummyRestService_1.DummyRestService();
let httpService = new DummyCommandableHttpService_1.DummyCommandableHttpService();
let statusService = new pip_services3_rpc_node_2.StatusRestService();
let heartbeatService = new pip_services3_rpc_node_3.HeartbeatRestService();
let swaggerService = new SwaggerService_1.SwaggerService();
let components = [
    controller,
    httpEndpoint,
    restService,
    httpService,
    statusService,
    heartbeatService,
    swaggerService
];
async.series([
    // Configure components
    (callback) => {
        logger.configure(pip_services3_commons_node_1.ConfigParams.fromTuples('level', 'trace'));
        httpEndpoint.configure(pip_services3_commons_node_1.ConfigParams.fromTuples('connection.protocol', 'http', 'connection.host', 'localhost', 'connection.port', 8080));
        restService.configure(pip_services3_commons_node_1.ConfigParams.fromTuples('swagger.enable', true));
        httpService.configure(pip_services3_commons_node_1.ConfigParams.fromTuples('base_route', 'dummies2', 'swagger.enable', true));
        callback();
    },
    // Set references
    (callback) => {
        let references = pip_services3_commons_node_2.References.fromTuples(new pip_services3_commons_node_3.Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger, new pip_services3_commons_node_3.Descriptor('pip-services', 'counters', 'log', 'default', '1.0'), new pip_services3_components_node_2.LogCounters(), new pip_services3_commons_node_3.Descriptor('pip-services', 'endpoint', 'http', 'default', '1.0'), httpEndpoint, new pip_services3_commons_node_3.Descriptor('pip-services-dummies', 'controller', 'default', 'default', '1.0'), controller, new pip_services3_commons_node_3.Descriptor('pip-services-dummies', 'service', 'rest', 'default', '1.0'), restService, new pip_services3_commons_node_3.Descriptor('pip-services-dummies', 'service', 'commandable-http', 'default', '1.0'), httpService, new pip_services3_commons_node_3.Descriptor('pip-services', 'status-service', 'rest', 'default', '1.0'), statusService, new pip_services3_commons_node_3.Descriptor('pip-services', 'heartbeat-service', 'rest', 'default', '1.0'), heartbeatService, new pip_services3_commons_node_3.Descriptor('pip-services', 'swagger-service', 'http', 'default', '1.0'), swaggerService);
        pip_services3_commons_node_4.Referencer.setReferences(references, components);
        callback();
    },
    // Open components
    (callback) => {
        pip_services3_commons_node_5.Opener.open(null, components, callback);
    },
    // Wait until user presses ENTER
    (callback) => {
        const file = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        file.question('Press Ctrl-C twice to stop the microservice...', (f) => {
            callback();
        });
    }
], (err) => {
    if (err) {
        logger.error(null, err, 'Failed to execute the microservice');
        process.exit(1);
        return;
    }
    pip_services3_commons_node_6.Closer.close(null, components);
    process.exit(0);
});
//# sourceMappingURL=main.js.map