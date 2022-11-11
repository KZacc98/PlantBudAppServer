import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommunityOrderByWithRelationInput } from "../../../inputs/CommunityOrderByWithRelationInput";
import { CommunityWhereInput } from "../../../inputs/CommunityWhereInput";
import { CommunityWhereUniqueInput } from "../../../inputs/CommunityWhereUniqueInput";
import { CommunityScalarFieldEnum } from "../../../../enums/CommunityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCommunityArgs {
  @TypeGraphQL.Field(_type => CommunityWhereInput, {
    nullable: true
  })
  where?: CommunityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CommunityOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CommunityOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CommunityWhereUniqueInput, {
    nullable: true
  })
  cursor?: CommunityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CommunityScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "communityName" | "isActive" | "createdAt" | "updatedAt"> | undefined;
}
