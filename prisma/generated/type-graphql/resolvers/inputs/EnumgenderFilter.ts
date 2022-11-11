import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumgenderFilter } from "../inputs/NestedEnumgenderFilter";
import { gender } from "../../enums/gender";

@TypeGraphQL.InputType("EnumgenderFilter", {
  isAbstract: true
})
export class EnumgenderFilter {
  @TypeGraphQL.Field(_type => gender, {
    nullable: true
  })
  equals?: "male" | "female" | "other" | "preferNotToTell" | undefined;

  @TypeGraphQL.Field(_type => [gender], {
    nullable: true
  })
  in?: Array<"male" | "female" | "other" | "preferNotToTell"> | undefined;

  @TypeGraphQL.Field(_type => [gender], {
    nullable: true
  })
  notIn?: Array<"male" | "female" | "other" | "preferNotToTell"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumgenderFilter, {
    nullable: true
  })
  not?: NestedEnumgenderFilter | undefined;
}
