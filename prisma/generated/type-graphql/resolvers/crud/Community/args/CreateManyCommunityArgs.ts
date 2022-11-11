import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommunityCreateManyInput } from "../../../inputs/CommunityCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCommunityArgs {
  @TypeGraphQL.Field(_type => [CommunityCreateManyInput], {
    nullable: false
  })
  data!: CommunityCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
