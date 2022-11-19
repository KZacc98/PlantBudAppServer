import * as TypeGraphQL from "type-graphql";
import { PrismaClient } from "@prisma/client";
import { CreateOneUserArgs, User } from "../../prisma/generated/type-graphql";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import { Resolver } from "type-graphql";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../prisma/generated/type-graphql/helpers";
import * as bcrypt from "bcryptjs"


@Resolver()
export class register {
    @TypeGraphQL.Mutation(_returns => User, {
        nullable: false
      })
      async register(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUserArgs): Promise<User> {
        const { _count } = transformFields(
          graphqlFields(info as any)
        );
        
        const hashedPassword = await bcrypt.hash(args.data.password, 12)

        const newArgs = args
        newArgs.data.password = hashedPassword
        return getPrismaFromContext(ctx).user.create({
          ...newArgs,
          ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        });
      }
}