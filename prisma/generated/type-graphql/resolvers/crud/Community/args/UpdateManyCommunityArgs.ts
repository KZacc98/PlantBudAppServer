import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommunityUpdateManyMutationInput } from "../../../inputs/CommunityUpdateManyMutationInput";
import { CommunityWhereInput } from "../../../inputs/CommunityWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCommunityArgs {
  @TypeGraphQL.Field(_type => CommunityUpdateManyMutationInput, {
    nullable: false
  })
  data!: CommunityUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CommunityWhereInput, {
    nullable: true
  })
  where?: CommunityWhereInput | undefined;
}
