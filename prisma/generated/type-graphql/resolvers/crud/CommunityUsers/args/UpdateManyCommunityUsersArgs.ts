import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommunityUsersUpdateManyMutationInput } from "../../../inputs/CommunityUsersUpdateManyMutationInput";
import { CommunityUsersWhereInput } from "../../../inputs/CommunityUsersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCommunityUsersArgs {
  @TypeGraphQL.Field(_type => CommunityUsersUpdateManyMutationInput, {
    nullable: false
  })
  data!: CommunityUsersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CommunityUsersWhereInput, {
    nullable: true
  })
  where?: CommunityUsersWhereInput | undefined;
}
