import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommunityUsersCreateManyInput } from "../../../inputs/CommunityUsersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCommunityUsersArgs {
  @TypeGraphQL.Field(_type => [CommunityUsersCreateManyInput], {
    nullable: false
  })
  data!: CommunityUsersCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
