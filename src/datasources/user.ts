import { DataSource } from 'apollo-datasource'
import { DataSourceConfig } from '../types'
import { User } from '@prisma/client';

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

    getUsers = async () => {
        const result = await this.store.user.findMany({
            include: {
                gender: false,
                plants: false,
                badges: false,
                communities: false,
                posts: false,
                comments: false,
                userType: false
            }

        })
        const allUsers = result.map((user: User) => {
            return { ...user }
        })

        return allUsers
    }
}

export default UserAPI