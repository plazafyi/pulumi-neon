import * as pulumi from "@pulumi/pulumi";
export declare class Endpoint extends pulumi.CustomResource {
    /**
     * Get an existing Endpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EndpointState, opts?: pulumi.CustomResourceOptions): Endpoint;
    /**
     * Returns true if the given object is an instance of Endpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Endpoint;
    /**
     * Branch the endpoint belongs to.
     */
    readonly branchId: pulumi.Output<string>;
    /**
     * Provisioner of the endpoint.
     */
    readonly computeProvisioner: pulumi.Output<string>;
    /**
     * Host of the endpoint.
     */
    readonly host: pulumi.Output<string>;
    /**
     * Maximum number of compute units for the endpoint. **Default** `0.25`.
     */
    readonly maxCu: pulumi.Output<number>;
    /**
     * Minimum number of compute units for the endpoint. **Default** `0.25`.
     */
    readonly minCu: pulumi.Output<number>;
    /**
     * Project the endpoint belongs to.
     */
    readonly projectId: pulumi.Output<string>;
    /**
     * Suspend timeout of the endpoint. **Default** `0`.
     */
    readonly suspendTimeout: pulumi.Output<number>;
    /**
     * Type of the endpoint.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Endpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EndpointArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Endpoint resources.
 */
export interface EndpointState {
    /**
     * Branch the endpoint belongs to.
     */
    branchId?: pulumi.Input<string>;
    /**
     * Provisioner of the endpoint.
     */
    computeProvisioner?: pulumi.Input<string>;
    /**
     * Host of the endpoint.
     */
    host?: pulumi.Input<string>;
    /**
     * Maximum number of compute units for the endpoint. **Default** `0.25`.
     */
    maxCu?: pulumi.Input<number>;
    /**
     * Minimum number of compute units for the endpoint. **Default** `0.25`.
     */
    minCu?: pulumi.Input<number>;
    /**
     * Project the endpoint belongs to.
     */
    projectId?: pulumi.Input<string>;
    /**
     * Suspend timeout of the endpoint. **Default** `0`.
     */
    suspendTimeout?: pulumi.Input<number>;
    /**
     * Type of the endpoint.
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Endpoint resource.
 */
export interface EndpointArgs {
    /**
     * Branch the endpoint belongs to.
     */
    branchId: pulumi.Input<string>;
    /**
     * Maximum number of compute units for the endpoint. **Default** `0.25`.
     */
    maxCu?: pulumi.Input<number>;
    /**
     * Minimum number of compute units for the endpoint. **Default** `0.25`.
     */
    minCu?: pulumi.Input<number>;
    /**
     * Project the endpoint belongs to.
     */
    projectId: pulumi.Input<string>;
    /**
     * Suspend timeout of the endpoint. **Default** `0`.
     */
    suspendTimeout?: pulumi.Input<number>;
    /**
     * Type of the endpoint. One of `read_write` or `read_only`.
     */
    type?: pulumi.Input<string>;
}
