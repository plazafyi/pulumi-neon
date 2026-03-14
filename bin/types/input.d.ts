import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
export interface BranchEndpoint {
    /**
     * Provisioner of the endpoint.
     */
    computeProvisioner?: pulumi.Input<string>;
    /**
     * Host of the endpoint.
     */
    host?: pulumi.Input<string>;
    /**
     * Identifier of the endpoint.
     */
    id?: pulumi.Input<string>;
    /**
     * Maximum number of compute units for the endpoint. **Default** `0.25`.
     */
    maxCu?: pulumi.Input<number>;
    /**
     * Minimum number of compute units for the endpoint. **Default** `0.25`.
     */
    minCu?: pulumi.Input<number>;
    /**
     * Suspend timeout of the endpoint. **Default** `0`.
     */
    suspendTimeout?: pulumi.Input<number>;
}
export interface ProjectBranch {
    /**
     * Read-write compute endpoint settings of the branch.
     */
    endpoint?: pulumi.Input<inputs.ProjectBranchEndpoint>;
    /**
     * Identifier of the branch.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the branch.
     */
    name?: pulumi.Input<string>;
}
export interface ProjectBranchEndpoint {
    /**
     * Provisioner of the endpoint.
     */
    computeProvisioner?: pulumi.Input<string>;
    /**
     * Host of the endpoint.
     */
    host?: pulumi.Input<string>;
    /**
     * Identifier of the endpoint.
     */
    id?: pulumi.Input<string>;
    /**
     * Maximum number of compute units for the endpoint. **Default** `0.25`.
     */
    maxCu?: pulumi.Input<number>;
    /**
     * Minimum number of compute units for the endpoint. **Default** `0.25`.
     */
    minCu?: pulumi.Input<number>;
    /**
     * Suspend timeout of the endpoint. **Default** `0`.
     */
    suspendTimeout?: pulumi.Input<number>;
}
