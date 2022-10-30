import { DataSource } from 'apollo-datasource'
import { DataSourceConfig } from '../types'
import { gender, User } from '@prisma/client';
import { NIL } from 'uuid';

class UserAPI extends DataSource {
    store: any;
    context: any;

    constructor({ store }: { store: any }) {
        super();
        this.store = store
    }

    initialize(config: DataSourceConfig<any>): void | Promise<void> {
        this.context = config.context
    }

    createNewUser = async (
        name: String,
        userName: String,
        email: String,
        password: String,
        phoneNumber: String,
        userGender: gender
    ) => {
        const newUser = await this.store.user.create({
            data: {
                name: name,
                userName: userName,
                email: email,
                password: password,
                phoneNumber: phoneNumber,
                gender: userGender ?? gender.preferNotToTell,
            },
        })
        return newUser
    }
    deleteUser = async (userId: String) => {
        const deleteUser = await this.store.user.delete({
            where: {
                id: userId,
            },
        })
        return deleteUser
    }

    getAllUsers = async () => {
        const result = await this.store.user.findMany()
        const allUsers = result.map((user: User) => {
            return { ...user }
        })

        return allUsers
    }

    getUserByEmail = async (email: String) => {
        const result = await this.store.user.findUnique({
            where: {
                email: email
            }
        })
        const user = result

        return user
    }

    getUserPlants = async (userId: String) => {
        const result = await this.store.plant.findMany({
            where: {
                userId: {
                    contains: userId
                }
            },
            include: {
                careRoutine: {
                    include: {
                        routineSteps: true
                    }
                }
            }
        })
        const userPlants = result

        return userPlants
    }
}

export default UserAPI