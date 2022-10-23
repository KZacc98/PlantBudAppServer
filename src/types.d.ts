import ProjectAPI from "./datasources/project";
import UserAPI from "./datasources/user";

// Apollo Types
export interface DataSourceConfig<TContext> {
    context: TContext;
    cache: KeyValueCache;
};

export declare type DataSources<TContext> = {
    [name: string]: DataSource<TContext>
};

// Project types

export interface dataSources {
    userAPI: UserAPI;
}

