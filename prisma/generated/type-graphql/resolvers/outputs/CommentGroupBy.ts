import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentAvgAggregate } from "../outputs/CommentAvgAggregate";
import { CommentCountAggregate } from "../outputs/CommentCountAggregate";
import { CommentMaxAggregate } from "../outputs/CommentMaxAggregate";
import { CommentMinAggregate } from "../outputs/CommentMinAggregate";
import { CommentSumAggregate } from "../outputs/CommentSumAggregate";
import { userContentFlag } from "../../enums/userContentFlag";

@TypeGraphQL.ObjectType("CommentGroupBy", {
  isAbstract: true
})
export class CommentGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  postId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  commentBody!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  points!: number;

  @TypeGraphQL.Field(_type => userContentFlag, {
    nullable: false
  })
  flag!: "offfensive" | "useful" | "best" | "default";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => CommentCountAggregate, {
    nullable: true
  })
  _count!: CommentCountAggregate | null;

  @TypeGraphQL.Field(_type => CommentAvgAggregate, {
    nullable: true
  })
  _avg!: CommentAvgAggregate | null;

  @TypeGraphQL.Field(_type => CommentSumAggregate, {
    nullable: true
  })
  _sum!: CommentSumAggregate | null;

  @TypeGraphQL.Field(_type => CommentMinAggregate, {
    nullable: true
  })
  _min!: CommentMinAggregate | null;

  @TypeGraphQL.Field(_type => CommentMaxAggregate, {
    nullable: true
  })
  _max!: CommentMaxAggregate | null;
}
