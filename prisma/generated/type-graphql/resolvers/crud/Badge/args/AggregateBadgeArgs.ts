import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BadgeOrderByWithRelationInput } from "../../../inputs/BadgeOrderByWithRelationInput";
import { BadgeWhereInput } from "../../../inputs/BadgeWhereInput";
import { BadgeWhereUniqueInput } from "../../../inputs/BadgeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBadgeArgs {
  @TypeGraphQL.Field(_type => BadgeWhereInput, {
    nullable: true
  })
  where?: BadgeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BadgeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BadgeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BadgeWhereUniqueInput, {
    nullable: true
  })
  cursor?: BadgeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
