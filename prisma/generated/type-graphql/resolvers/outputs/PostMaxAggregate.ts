import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { userContentFlag } from "../../enums/userContentFlag";

@TypeGraphQL.ObjectType("PostMaxAggregate", {
  isAbstract: true
})
export class PostMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  communityId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postBody!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  points!: number | null;

  @TypeGraphQL.Field(_type => userContentFlag, {
    nullable: true
  })
  flag!: "offfensive" | "useful" | "best" | "default" | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAnnouncement!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;
}
