import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BadgeOrderByWithRelationInput } from "../../../inputs/BadgeOrderByWithRelationInput";
import { BadgeWhereInput } from "../../../inputs/BadgeWhereInput";
import { BadgeWhereUniqueInput } from "../../../inputs/BadgeWhereUniqueInput";
import { BadgeScalarFieldEnum } from "../../../../enums/BadgeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstBadgeArgs {
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

  @TypeGraphQL.Field(_type => [BadgeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "badgeName" | "points" | "createdAt" | "updatedAt"> | undefined;
}
