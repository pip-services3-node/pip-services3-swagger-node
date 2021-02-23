/** @module build */
import { Factory } from 'pip-services3-components-node';
import { Descriptor } from 'pip-services3-commons-node';
/**
 * Creates Swagger components by their descriptors.
 *
 * @see [[https://pip-services3-node.github.io/pip-services3-components-node/classes/build.factory.html Factory]]
 * @see [[HttpEndpoint]]
 * @see [[HeartbeatRestService]]
 * @see [[StatusRestService]]
 */
export declare class DefaultSwaggerFactory extends Factory {
    static readonly Descriptor: Descriptor;
    static readonly SwaggerServiceDescriptor: Descriptor;
    /**
     * Create a new instance of the factory.
     */
    constructor();
}
