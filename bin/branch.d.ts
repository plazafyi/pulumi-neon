import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class Branch extends pulumi.CustomResource {
    /**
     * Get an existing Branch resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BranchState, opts?: pulumi.CustomResourceOptions): Branch;
    /**
     * Returns true if the given object is an instance of Branch.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Branch;
    /**
     * Read-write compute endpoint settings of the branch.
     */
    readonly endpoint: pulumi.Output<outputs.BranchEndpoint | undefined>;
    /**
     * Name of the branch.
     */
    readonly name: pulumi.Output<string>;
    /**
     * ID of the parent branch. Defaults to the primary branch.
     */
    readonly parentId: pulumi.Output<string>;
    /**
     * Project the branch belongs to.
     */
    readonly projectId: pulumi.Output<string>;
    /**
     * Create a Branch resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BranchArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Branch resources.
 */
export interface BranchState {
    /**
     * Read-write compute endpoint settings of the branch.
     */
    endpoint?: pulumi.Input<inputs.BranchEndpoint>;
    /**
     * Name of the branch.
     */
    name?: pulumi.Input<string>;
    /**
     * ID of the parent branch. Defaults to the primary branch.
     */
    parentId?: pulumi.Input<string>;
    /**
     * Project the branch belongs to.
     */
    projectId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Branch resource.
 */
export interface BranchArgs {
    /**
     * Read-write compute endpoint settings of the branch.
     */
    endpoint?: pulumi.Input<inputs.BranchEndpoint>;
    /**
     * Name of the branch.
     */
    name?: pulumi.Input<string>;
    /**
     * ID of the parent branch. Defaults to the primary branch.
     */
    parentId?: pulumi.Input<string>;
    /**
     * Project the branch belongs to.
     */
    projectId: pulumi.Input<string>;
}
