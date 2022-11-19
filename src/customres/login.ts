import * as TypeGraphQL from "type-graphql";
import { PrismaClient } from "@prisma/client";
import { CreateOneUserArgs, FindFirstUserArgs, User } from "../../prisma/generated/type-graphql";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import { Authorized, Ctx, Resolver } from "type-graphql";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../prisma/generated/type-graphql/helpers";
import * as bcrypt from "bcryptjs"
import * as jwt from "jsonwebtoken"

const prisma = new PrismaClient()
@Resolver()
export class login {
    // @TypeGraphQL.Mutation(_returns => User, {
    //     nullable: true
    // })
    @TypeGraphQL.Query(_returns => User, {
        nullable: true
    })
    async login(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Info() info: GraphQLResolveInfo,
        //@TypeGraphQL.Args() args: FindFirstUserArgs,
        @TypeGraphQL.Arg("username", { defaultValue: "dupadupa" }) username: string,
        @TypeGraphQL.Arg("password") password: string
    ): Promise<[User]> {
        const { _count } = transformFields(
            graphqlFields(info as any)
        );

        const user = await getPrismaFromContext(ctx).user.findFirst({
            where: {
                userName: username
            }
        });
        if (user){
            await prisma.userToken.deleteMany({
                where: {
                  userId: user.id,
                },
              })
              //throw new Error("userId " + user.id)
        }
        
        if (!user) {
            throw new Error("invalid username: " + username)
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("invalid password")
        }

        const token = jwt.sign({
            id: user.id,
            userName: username
        },
            "alyssa's Secret",
            {
                expiresIn: '30d'
            }
        )

        const userToken = await prisma.userToken.create({
            data: {
                userId: user.id,
                token: token
            }
        });

        const userWithToken = await getPrismaFromContext(ctx).user.findFirst({
            where: {
                userName: username
            }
        });

        return userWithToken
    }
}