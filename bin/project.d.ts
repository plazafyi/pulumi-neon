import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class Project extends pulumi.CustomResource {
    /**
     * Get an existing Project resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProjectState, opts?: pulumi.CustomResourceOptions): Project;
    /**
     * Returns true if the given object is an instance of Project.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Project;
    /**
     * Primary branch settings of the project.
     */
    readonly branch: pulumi.Output<outputs.ProjectBranch>;
    /**
     * Name of the project.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Organization of the project.
     */
    readonly orgId: pulumi.Output<string | undefined>;
    /**
     * PostgreSQL version of the project. **Default** `15`.
     */
    readonly pgVersion: pulumi.Output<number>;
    /**
     * Platform of the project.
     */
    readonly platformId: pulumi.Output<string>;
    /**
     * Region of the project.
     */
    readonly regionId: pulumi.Output<string>;
    /**
     * Create a Project resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProjectArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Project resources.
 */
export interface ProjectState {
    /**
     * Primary branch settings of the project.
     */
    branch?: pulumi.Input<inputs.ProjectBranch>;
    /**
     * Name of the project.
     */
    name?: pulumi.Input<string>;
    /**
     * Organization of the project.
     */
    orgId?: pulumi.Input<string>;
    /**
     * PostgreSQL version of the project. **Default** `15`.
     */
    pgVersion?: pulumi.Input<number>;
    /**
     * Platform of the project.
     */
    platformId?: pulumi.Input<string>;
    /**
     * Region of the project.
     */
    regionId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Project resource.
 */
export interface ProjectArgs {
    /**
     * Primary branch settings of the project.
     */
    branch?: pulumi.Input<inputs.ProjectBranch>;
    /**
     * Name of the project.
     */
    name?: pulumi.Input<string>;
    /**
     * Organization of the project.
     */
    orgId?: pulumi.Input<string>;
    /**
     * PostgreSQL version of the project. **Default** `15`.
     */
    pgVersion?: pulumi.Input<number>;
    /**
     * Region of the project.
     */
    regionId: pulumi.Input<string>;
}
