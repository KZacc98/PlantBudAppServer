import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BadgeCreateManyInput } from "../../../inputs/BadgeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBadgeArgs {
  @TypeGraphQL.Field(_type => [BadgeCreateManyInput], {
    nullable: false
  })
  data!: BadgeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
