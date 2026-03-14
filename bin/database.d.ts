import * as pulumi from "@pulumi/pulumi";
export declare class Database extends pulumi.CustomResource {
    /**
     * Get an existing Database resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseState, opts?: pulumi.CustomResourceOptions): Database;
    /**
     * Returns true if the given object is an instance of Database.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Database;
    /**
     * Branch the database belongs to.
     */
    readonly branchId: pulumi.Output<string>;
    /**
     * Name of the database.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Name of the database owner.
     */
    readonly ownerName: pulumi.Output<string>;
    /**
     * Project the database belongs to.
     */
    readonly projectId: pulumi.Output<string>;
    /**
     * Create a Database resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Database resources.
 */
export interface DatabaseState {
    /**
     * Branch the database belongs to.
     */
    branchId?: pulumi.Input<string>;
    /**
     * Name of the database.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the database owner.
     */
    ownerName?: pulumi.Input<string>;
    /**
     * Project the database belongs to.
     */
    projectId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Database resource.
 */
export interface DatabaseArgs {
    /**
     * Branch the database belongs to.
     */
    branchId: pulumi.Input<string>;
    /**
     * Name of the database.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the database owner.
     */
    ownerName: pulumi.Input<string>;
    /**
     * Project the database belongs to.
     */
    projectId: pulumi.Input<string>;
}
