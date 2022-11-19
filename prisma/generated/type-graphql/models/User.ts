import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Comment } from "../models/Comment";
import { CommunityUsers } from "../models/CommunityUsers";
import { Plant } from "../models/Plant";
import { Post } from "../models/Post";
import { UserBadges } from "../models/UserBadges";
import { UserToken } from "../models/UserToken";
import { gender } from "../enums/gender";
import { userType } from "../enums/userType";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phoneNumber?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => gender, {
    nullable: false
  })
  gender!: "male" | "female" | "other" | "preferNotToTell";

  plants?: Plant[];

  badges?: UserBadges[];

  communities?: CommunityUsers[];

  posts?: Post[];

  comments?: Comment[];

  token?: UserToken[];

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  points!: number;

  @TypeGraphQL.Field(_type => userType, {
    nullable: false
  })
  userType!: "user" | "admin";

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | null;

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
