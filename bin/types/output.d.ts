import * as outputs from "../types/output";
export interface BranchEndpoint {
    /**
     * Provisioner of the endpoint.
     */
    computeProvisioner: string;
    /**
     * Host of the endpoint.
     */
    host: string;
    /**
     * Identifier of the endpoint.
     */
    id: string;
    /**
     * Maximum number of compute units for the endpoint. **Default** `0.25`.
     */
    maxCu: number;
    /**
     * Minimum number of compute units for the endpoint. **Default** `0.25`.
     */
    minCu: number;
    /**
     * Suspend timeout of the endpoint. **Default** `0`.
     */
    suspendTimeout: number;
}
export interface ProjectBranch {
    /**
     * Read-write compute endpoint settings of the branch.
     */
    endpoint: outputs.ProjectBranchEndpoint;
    /**
     * Identifier of the branch.
     */
    id: string;
    /**
     * Name of the branch.
     */
    name: string;
}
export interface ProjectBranchEndpoint {
    /**
     * Provisioner of the endpoint.
     */
    computeProvisioner: string;
    /**
     * Host of the endpoint.
     */
    host: string;
    /**
     * Identifier of the endpoint.
     */
    id: string;
    /**
     * Maximum number of compute units for the endpoint. **Default** `0.25`.
     */
    maxCu: number;
    /**
     * Minimum number of compute units for the endpoint. **Default** `0.25`.
     */
    minCu: number;
    /**
     * Suspend timeout of the endpoint. **Default** `0`.
     */
    suspendTimeout: number;
}
