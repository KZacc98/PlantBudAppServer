import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("UserTokenWhereUniqueInput", {
  isAbstract: true
})
export class UserTokenWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  token?: string | undefined;
}
