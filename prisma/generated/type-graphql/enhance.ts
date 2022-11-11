import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  CareRoutine: crudResolvers.CareRoutineCrudResolver,
  RoutineStep: crudResolvers.RoutineStepCrudResolver,
  Plant: crudResolvers.PlantCrudResolver,
  PlantType: crudResolvers.PlantTypeCrudResolver,
  Community: crudResolvers.CommunityCrudResolver,
  Post: crudResolvers.PostCrudResolver,
  Comment: crudResolvers.CommentCrudResolver,
  User: crudResolvers.UserCrudResolver,
  Badge: crudResolvers.BadgeCrudResolver,
  UserBadges: crudResolvers.UserBadgesCrudResolver,
  CommunityUsers: crudResolvers.CommunityUsersCrudResolver
};
const actionResolversMap = {
  CareRoutine: {
    aggregateCareRoutine: actionResolvers.AggregateCareRoutineResolver,
    createManyCareRoutine: actionResolvers.CreateManyCareRoutineResolver,
    createOneCareRoutine: actionResolvers.CreateOneCareRoutineResolver,
    deleteManyCareRoutine: actionResolvers.DeleteManyCareRoutineResolver,
    deleteOneCareRoutine: actionResolvers.DeleteOneCareRoutineResolver,
    findFirstCareRoutine: actionResolvers.FindFirstCareRoutineResolver,
    careRoutines: actionResolvers.FindManyCareRoutineResolver,
    careRoutine: actionResolvers.FindUniqueCareRoutineResolver,
    groupByCareRoutine: actionResolvers.GroupByCareRoutineResolver,
    updateManyCareRoutine: actionResolvers.UpdateManyCareRoutineResolver,
    updateOneCareRoutine: actionResolvers.UpdateOneCareRoutineResolver,
    upsertOneCareRoutine: actionResolvers.UpsertOneCareRoutineResolver
  },
  RoutineStep: {
    aggregateRoutineStep: actionResolvers.AggregateRoutineStepResolver,
    createManyRoutineStep: actionResolvers.CreateManyRoutineStepResolver,
    createOneRoutineStep: actionResolvers.CreateOneRoutineStepResolver,
    deleteManyRoutineStep: actionResolvers.DeleteManyRoutineStepResolver,
    deleteOneRoutineStep: actionResolvers.DeleteOneRoutineStepResolver,
    findFirstRoutineStep: actionResolvers.FindFirstRoutineStepResolver,
    routineSteps: actionResolvers.FindManyRoutineStepResolver,
    routineStep: actionResolvers.FindUniqueRoutineStepResolver,
    groupByRoutineStep: actionResolvers.GroupByRoutineStepResolver,
    updateManyRoutineStep: actionResolvers.UpdateManyRoutineStepResolver,
    updateOneRoutineStep: actionResolvers.UpdateOneRoutineStepResolver,
    upsertOneRoutineStep: actionResolvers.UpsertOneRoutineStepResolver
  },
  Plant: {
    aggregatePlant: actionResolvers.AggregatePlantResolver,
    createManyPlant: actionResolvers.CreateManyPlantResolver,
    createOnePlant: actionResolvers.CreateOnePlantResolver,
    deleteManyPlant: actionResolvers.DeleteManyPlantResolver,
    deleteOnePlant: actionResolvers.DeleteOnePlantResolver,
    findFirstPlant: actionResolvers.FindFirstPlantResolver,
    plants: actionResolvers.FindManyPlantResolver,
    plant: actionResolvers.FindUniquePlantResolver,
    groupByPlant: actionResolvers.GroupByPlantResolver,
    updateManyPlant: actionResolvers.UpdateManyPlantResolver,
    updateOnePlant: actionResolvers.UpdateOnePlantResolver,
    upsertOnePlant: actionResolvers.UpsertOnePlantResolver
  },
  PlantType: {
    aggregatePlantType: actionResolvers.AggregatePlantTypeResolver,
    createManyPlantType: actionResolvers.CreateManyPlantTypeResolver,
    createOnePlantType: actionResolvers.CreateOnePlantTypeResolver,
    deleteManyPlantType: actionResolvers.DeleteManyPlantTypeResolver,
    deleteOnePlantType: actionResolvers.DeleteOnePlantTypeResolver,
    findFirstPlantType: actionResolvers.FindFirstPlantTypeResolver,
    plantTypes: actionResolvers.FindManyPlantTypeResolver,
    plantType: actionResolvers.FindUniquePlantTypeResolver,
    groupByPlantType: actionResolvers.GroupByPlantTypeResolver,
    updateManyPlantType: actionResolvers.UpdateManyPlantTypeResolver,
    updateOnePlantType: actionResolvers.UpdateOnePlantTypeResolver,
    upsertOnePlantType: actionResolvers.UpsertOnePlantTypeResolver
  },
  Community: {
    aggregateCommunity: actionResolvers.AggregateCommunityResolver,
    createManyCommunity: actionResolvers.CreateManyCommunityResolver,
    createOneCommunity: actionResolvers.CreateOneCommunityResolver,
    deleteManyCommunity: actionResolvers.DeleteManyCommunityResolver,
    deleteOneCommunity: actionResolvers.DeleteOneCommunityResolver,
    findFirstCommunity: actionResolvers.FindFirstCommunityResolver,
    communities: actionResolvers.FindManyCommunityResolver,
    community: actionResolvers.FindUniqueCommunityResolver,
    groupByCommunity: actionResolvers.GroupByCommunityResolver,
    updateManyCommunity: actionResolvers.UpdateManyCommunityResolver,
    updateOneCommunity: actionResolvers.UpdateOneCommunityResolver,
    upsertOneCommunity: actionResolvers.UpsertOneCommunityResolver
  },
  Post: {
    aggregatePost: actionResolvers.AggregatePostResolver,
    createManyPost: actionResolvers.CreateManyPostResolver,
    createOnePost: actionResolvers.CreateOnePostResolver,
    deleteManyPost: actionResolvers.DeleteManyPostResolver,
    deleteOnePost: actionResolvers.DeleteOnePostResolver,
    findFirstPost: actionResolvers.FindFirstPostResolver,
    posts: actionResolvers.FindManyPostResolver,
    post: actionResolvers.FindUniquePostResolver,
    groupByPost: actionResolvers.GroupByPostResolver,
    updateManyPost: actionResolvers.UpdateManyPostResolver,
    updateOnePost: actionResolvers.UpdateOnePostResolver,
    upsertOnePost: actionResolvers.UpsertOnePostResolver
  },
  Comment: {
    aggregateComment: actionResolvers.AggregateCommentResolver,
    createManyComment: actionResolvers.CreateManyCommentResolver,
    createOneComment: actionResolvers.CreateOneCommentResolver,
    deleteManyComment: actionResolvers.DeleteManyCommentResolver,
    deleteOneComment: actionResolvers.DeleteOneCommentResolver,
    findFirstComment: actionResolvers.FindFirstCommentResolver,
    comments: actionResolvers.FindManyCommentResolver,
    comment: actionResolvers.FindUniqueCommentResolver,
    groupByComment: actionResolvers.GroupByCommentResolver,
    updateManyComment: actionResolvers.UpdateManyCommentResolver,
    updateOneComment: actionResolvers.UpdateOneCommentResolver,
    upsertOneComment: actionResolvers.UpsertOneCommentResolver
  },
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Badge: {
    aggregateBadge: actionResolvers.AggregateBadgeResolver,
    createManyBadge: actionResolvers.CreateManyBadgeResolver,
    createOneBadge: actionResolvers.CreateOneBadgeResolver,
    deleteManyBadge: actionResolvers.DeleteManyBadgeResolver,
    deleteOneBadge: actionResolvers.DeleteOneBadgeResolver,
    findFirstBadge: actionResolvers.FindFirstBadgeResolver,
    badges: actionResolvers.FindManyBadgeResolver,
    badge: actionResolvers.FindUniqueBadgeResolver,
    groupByBadge: actionResolvers.GroupByBadgeResolver,
    updateManyBadge: actionResolvers.UpdateManyBadgeResolver,
    updateOneBadge: actionResolvers.UpdateOneBadgeResolver,
    upsertOneBadge: actionResolvers.UpsertOneBadgeResolver
  },
  UserBadges: {
    aggregateUserBadges: actionResolvers.AggregateUserBadgesResolver,
    createManyUserBadges: actionResolvers.CreateManyUserBadgesResolver,
    createOneUserBadges: actionResolvers.CreateOneUserBadgesResolver,
    deleteManyUserBadges: actionResolvers.DeleteManyUserBadgesResolver,
    deleteOneUserBadges: actionResolvers.DeleteOneUserBadgesResolver,
    findFirstUserBadges: actionResolvers.FindFirstUserBadgesResolver,
    findManyUserBadges: actionResolvers.FindManyUserBadgesResolver,
    findUniqueUserBadges: actionResolvers.FindUniqueUserBadgesResolver,
    groupByUserBadges: actionResolvers.GroupByUserBadgesResolver,
    updateManyUserBadges: actionResolvers.UpdateManyUserBadgesResolver,
    updateOneUserBadges: actionResolvers.UpdateOneUserBadgesResolver,
    upsertOneUserBadges: actionResolvers.UpsertOneUserBadgesResolver
  },
  CommunityUsers: {
    aggregateCommunityUsers: actionResolvers.AggregateCommunityUsersResolver,
    createManyCommunityUsers: actionResolvers.CreateManyCommunityUsersResolver,
    createOneCommunityUsers: actionResolvers.CreateOneCommunityUsersResolver,
    deleteManyCommunityUsers: actionResolvers.DeleteManyCommunityUsersResolver,
    deleteOneCommunityUsers: actionResolvers.DeleteOneCommunityUsersResolver,
    findFirstCommunityUsers: actionResolvers.FindFirstCommunityUsersResolver,
    findManyCommunityUsers: actionResolvers.FindManyCommunityUsersResolver,
    findUniqueCommunityUsers: actionResolvers.FindUniqueCommunityUsersResolver,
    groupByCommunityUsers: actionResolvers.GroupByCommunityUsersResolver,
    updateManyCommunityUsers: actionResolvers.UpdateManyCommunityUsersResolver,
    updateOneCommunityUsers: actionResolvers.UpdateOneCommunityUsersResolver,
    upsertOneCommunityUsers: actionResolvers.UpsertOneCommunityUsersResolver
  }
};
const crudResolversInfo = {
  CareRoutine: ["aggregateCareRoutine", "createManyCareRoutine", "createOneCareRoutine", "deleteManyCareRoutine", "deleteOneCareRoutine", "findFirstCareRoutine", "careRoutines", "careRoutine", "groupByCareRoutine", "updateManyCareRoutine", "updateOneCareRoutine", "upsertOneCareRoutine"],
  RoutineStep: ["aggregateRoutineStep", "createManyRoutineStep", "createOneRoutineStep", "deleteManyRoutineStep", "deleteOneRoutineStep", "findFirstRoutineStep", "routineSteps", "routineStep", "groupByRoutineStep", "updateManyRoutineStep", "updateOneRoutineStep", "upsertOneRoutineStep"],
  Plant: ["aggregatePlant", "createManyPlant", "createOnePlant", "deleteManyPlant", "deleteOnePlant", "findFirstPlant", "plants", "plant", "groupByPlant", "updateManyPlant", "updateOnePlant", "upsertOnePlant"],
  PlantType: ["aggregatePlantType", "createManyPlantType", "createOnePlantType", "deleteManyPlantType", "deleteOnePlantType", "findFirstPlantType", "plantTypes", "plantType", "groupByPlantType", "updateManyPlantType", "updateOnePlantType", "upsertOnePlantType"],
  Community: ["aggregateCommunity", "createManyCommunity", "createOneCommunity", "deleteManyCommunity", "deleteOneCommunity", "findFirstCommunity", "communities", "community", "groupByCommunity", "updateManyCommunity", "updateOneCommunity", "upsertOneCommunity"],
  Post: ["aggregatePost", "createManyPost", "createOnePost", "deleteManyPost", "deleteOnePost", "findFirstPost", "posts", "post", "groupByPost", "updateManyPost", "updateOnePost", "upsertOnePost"],
  Comment: ["aggregateComment", "createManyComment", "createOneComment", "deleteManyComment", "deleteOneComment", "findFirstComment", "comments", "comment", "groupByComment", "updateManyComment", "updateOneComment", "upsertOneComment"],
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "users", "user", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Badge: ["aggregateBadge", "createManyBadge", "createOneBadge", "deleteManyBadge", "deleteOneBadge", "findFirstBadge", "badges", "badge", "groupByBadge", "updateManyBadge", "updateOneBadge", "upsertOneBadge"],
  UserBadges: ["aggregateUserBadges", "createManyUserBadges", "createOneUserBadges", "deleteManyUserBadges", "deleteOneUserBadges", "findFirstUserBadges", "findManyUserBadges", "findUniqueUserBadges", "groupByUserBadges", "updateManyUserBadges", "updateOneUserBadges", "upsertOneUserBadges"],
  CommunityUsers: ["aggregateCommunityUsers", "createManyCommunityUsers", "createOneCommunityUsers", "deleteManyCommunityUsers", "deleteOneCommunityUsers", "findFirstCommunityUsers", "findManyCommunityUsers", "findUniqueCommunityUsers", "groupByCommunityUsers", "updateManyCommunityUsers", "updateOneCommunityUsers", "upsertOneCommunityUsers"]
};
const argsInfo = {
  AggregateCareRoutineArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCareRoutineArgs: ["data", "skipDuplicates"],
  CreateOneCareRoutineArgs: ["data"],
  DeleteManyCareRoutineArgs: ["where"],
  DeleteOneCareRoutineArgs: ["where"],
  FindFirstCareRoutineArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCareRoutineArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCareRoutineArgs: ["where"],
  GroupByCareRoutineArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCareRoutineArgs: ["data", "where"],
  UpdateOneCareRoutineArgs: ["data", "where"],
  UpsertOneCareRoutineArgs: ["where", "create", "update"],
  AggregateRoutineStepArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyRoutineStepArgs: ["data", "skipDuplicates"],
  CreateOneRoutineStepArgs: ["data"],
  DeleteManyRoutineStepArgs: ["where"],
  DeleteOneRoutineStepArgs: ["where"],
  FindFirstRoutineStepArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRoutineStepArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueRoutineStepArgs: ["where"],
  GroupByRoutineStepArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyRoutineStepArgs: ["data", "where"],
  UpdateOneRoutineStepArgs: ["data", "where"],
  UpsertOneRoutineStepArgs: ["where", "create", "update"],
  AggregatePlantArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPlantArgs: ["data", "skipDuplicates"],
  CreateOnePlantArgs: ["data"],
  DeleteManyPlantArgs: ["where"],
  DeleteOnePlantArgs: ["where"],
  FindFirstPlantArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPlantArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePlantArgs: ["where"],
  GroupByPlantArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPlantArgs: ["data", "where"],
  UpdateOnePlantArgs: ["data", "where"],
  UpsertOnePlantArgs: ["where", "create", "update"],
  AggregatePlantTypeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPlantTypeArgs: ["data", "skipDuplicates"],
  CreateOnePlantTypeArgs: ["data"],
  DeleteManyPlantTypeArgs: ["where"],
  DeleteOnePlantTypeArgs: ["where"],
  FindFirstPlantTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPlantTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePlantTypeArgs: ["where"],
  GroupByPlantTypeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPlantTypeArgs: ["data", "where"],
  UpdateOnePlantTypeArgs: ["data", "where"],
  UpsertOnePlantTypeArgs: ["where", "create", "update"],
  AggregateCommunityArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCommunityArgs: ["data", "skipDuplicates"],
  CreateOneCommunityArgs: ["data"],
  DeleteManyCommunityArgs: ["where"],
  DeleteOneCommunityArgs: ["where"],
  FindFirstCommunityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCommunityArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCommunityArgs: ["where"],
  GroupByCommunityArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCommunityArgs: ["data", "where"],
  UpdateOneCommunityArgs: ["data", "where"],
  UpsertOneCommunityArgs: ["where", "create", "update"],
  AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPostArgs: ["data", "skipDuplicates"],
  CreateOnePostArgs: ["data"],
  DeleteManyPostArgs: ["where"],
  DeleteOnePostArgs: ["where"],
  FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePostArgs: ["where"],
  GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPostArgs: ["data", "where"],
  UpdateOnePostArgs: ["data", "where"],
  UpsertOnePostArgs: ["where", "create", "update"],
  AggregateCommentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCommentArgs: ["data", "skipDuplicates"],
  CreateOneCommentArgs: ["data"],
  DeleteManyCommentArgs: ["where"],
  DeleteOneCommentArgs: ["where"],
  FindFirstCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCommentArgs: ["where"],
  GroupByCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCommentArgs: ["data", "where"],
  UpdateOneCommentArgs: ["data", "where"],
  UpsertOneCommentArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateBadgeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyBadgeArgs: ["data", "skipDuplicates"],
  CreateOneBadgeArgs: ["data"],
  DeleteManyBadgeArgs: ["where"],
  DeleteOneBadgeArgs: ["where"],
  FindFirstBadgeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyBadgeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueBadgeArgs: ["where"],
  GroupByBadgeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyBadgeArgs: ["data", "where"],
  UpdateOneBadgeArgs: ["data", "where"],
  UpsertOneBadgeArgs: ["where", "create", "update"],
  AggregateUserBadgesArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserBadgesArgs: ["data", "skipDuplicates"],
  CreateOneUserBadgesArgs: ["data"],
  DeleteManyUserBadgesArgs: ["where"],
  DeleteOneUserBadgesArgs: ["where"],
  FindFirstUserBadgesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserBadgesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserBadgesArgs: ["where"],
  GroupByUserBadgesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserBadgesArgs: ["data", "where"],
  UpdateOneUserBadgesArgs: ["data", "where"],
  UpsertOneUserBadgesArgs: ["where", "create", "update"],
  AggregateCommunityUsersArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCommunityUsersArgs: ["data", "skipDuplicates"],
  CreateOneCommunityUsersArgs: ["data"],
  DeleteManyCommunityUsersArgs: ["where"],
  DeleteOneCommunityUsersArgs: ["where"],
  FindFirstCommunityUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCommunityUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCommunityUsersArgs: ["where"],
  GroupByCommunityUsersArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCommunityUsersArgs: ["data", "where"],
  UpdateOneCommunityUsersArgs: ["data", "where"],
  UpsertOneCommunityUsersArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  CareRoutine: relationResolvers.CareRoutineRelationsResolver,
  RoutineStep: relationResolvers.RoutineStepRelationsResolver,
  Plant: relationResolvers.PlantRelationsResolver,
  PlantType: relationResolvers.PlantTypeRelationsResolver,
  Community: relationResolvers.CommunityRelationsResolver,
  Post: relationResolvers.PostRelationsResolver,
  Comment: relationResolvers.CommentRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  Badge: relationResolvers.BadgeRelationsResolver,
  UserBadges: relationResolvers.UserBadgesRelationsResolver,
  CommunityUsers: relationResolvers.CommunityUsersRelationsResolver
};
const relationResolversInfo = {
  CareRoutine: ["routineSteps", "plant"],
  RoutineStep: ["careRoutine"],
  Plant: ["careRoutine", "user", "plantType"],
  PlantType: ["plants"],
  Community: ["posts", "users"],
  Post: ["comments", "user", "community"],
  Comment: ["user", "post"],
  User: ["plants", "badges", "communities", "posts", "comments"],
  Badge: ["users"],
  UserBadges: ["user", "badge"],
  CommunityUsers: ["user", "community"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  CareRoutine: ["id", "plantId", "isCompleted", "isActive", "isShared", "flag", "createdAt", "updatedAt"],
  RoutineStep: ["id", "careRoutineId", "description", "stepFrequency", "otherFrequency", "isCompleted", "completedAt", "createdAt", "updatedAt"],
  Plant: ["id", "plantName", "plantTypeId", "plantImage", "plantState", "plantPlacement", "createdAt", "updatedAt", "userId"],
  PlantType: ["id", "species", "type", "description", "createdAt", "updatedAt"],
  Community: ["id", "communityName", "isActive", "createdAt", "updatedAt"],
  Post: ["id", "communityId", "userId", "postBody", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt"],
  Comment: ["id", "postId", "userId", "commentBody", "image", "points", "flag", "createdAt", "updatedAt"],
  User: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "points", "userType", "active", "createdAt", "updatedAt"],
  Badge: ["id", "badgeName", "points", "createdAt", "updatedAt"],
  UserBadges: ["userId", "badgeId", "createdAt", "updatedAt"],
  CommunityUsers: ["userId", "communityId", "createdAt", "updatedAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateCareRoutine: ["_count", "_min", "_max"],
  CareRoutineGroupBy: ["id", "plantId", "isCompleted", "isActive", "isShared", "flag", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateRoutineStep: ["_count", "_min", "_max"],
  RoutineStepGroupBy: ["id", "careRoutineId", "description", "stepFrequency", "otherFrequency", "isCompleted", "completedAt", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregatePlant: ["_count", "_min", "_max"],
  PlantGroupBy: ["id", "plantName", "plantTypeId", "plantImage", "plantState", "plantPlacement", "createdAt", "updatedAt", "userId", "_count", "_min", "_max"],
  AggregatePlantType: ["_count", "_min", "_max"],
  PlantTypeGroupBy: ["id", "species", "type", "description", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateCommunity: ["_count", "_min", "_max"],
  CommunityGroupBy: ["id", "communityName", "isActive", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregatePost: ["_count", "_avg", "_sum", "_min", "_max"],
  PostGroupBy: ["id", "communityId", "userId", "postBody", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateComment: ["_count", "_avg", "_sum", "_min", "_max"],
  CommentGroupBy: ["id", "postId", "userId", "commentBody", "image", "points", "flag", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "points", "userType", "active", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateBadge: ["_count", "_avg", "_sum", "_min", "_max"],
  BadgeGroupBy: ["id", "badgeName", "points", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUserBadges: ["_count", "_min", "_max"],
  UserBadgesGroupBy: ["userId", "badgeId", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateCommunityUsers: ["_count", "_min", "_max"],
  CommunityUsersGroupBy: ["userId", "communityId", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  CareRoutineCount: ["routineSteps"],
  CareRoutineCountAggregate: ["id", "plantId", "isCompleted", "isActive", "isShared", "flag", "createdAt", "updatedAt", "_all"],
  CareRoutineMinAggregate: ["id", "plantId", "isCompleted", "isActive", "isShared", "flag", "createdAt", "updatedAt"],
  CareRoutineMaxAggregate: ["id", "plantId", "isCompleted", "isActive", "isShared", "flag", "createdAt", "updatedAt"],
  RoutineStepCountAggregate: ["id", "careRoutineId", "description", "stepFrequency", "otherFrequency", "isCompleted", "completedAt", "createdAt", "updatedAt", "_all"],
  RoutineStepMinAggregate: ["id", "careRoutineId", "description", "stepFrequency", "otherFrequency", "isCompleted", "completedAt", "createdAt", "updatedAt"],
  RoutineStepMaxAggregate: ["id", "careRoutineId", "description", "stepFrequency", "otherFrequency", "isCompleted", "completedAt", "createdAt", "updatedAt"],
  PlantCountAggregate: ["id", "plantName", "plantTypeId", "plantImage", "plantState", "plantPlacement", "createdAt", "updatedAt", "userId", "_all"],
  PlantMinAggregate: ["id", "plantName", "plantTypeId", "plantImage", "plantState", "plantPlacement", "createdAt", "updatedAt", "userId"],
  PlantMaxAggregate: ["id", "plantName", "plantTypeId", "plantImage", "plantState", "plantPlacement", "createdAt", "updatedAt", "userId"],
  PlantTypeCount: ["plants"],
  PlantTypeCountAggregate: ["id", "species", "type", "description", "createdAt", "updatedAt", "_all"],
  PlantTypeMinAggregate: ["id", "species", "type", "description", "createdAt", "updatedAt"],
  PlantTypeMaxAggregate: ["id", "species", "type", "description", "createdAt", "updatedAt"],
  CommunityCount: ["posts", "users"],
  CommunityCountAggregate: ["id", "communityName", "isActive", "createdAt", "updatedAt", "_all"],
  CommunityMinAggregate: ["id", "communityName", "isActive", "createdAt", "updatedAt"],
  CommunityMaxAggregate: ["id", "communityName", "isActive", "createdAt", "updatedAt"],
  PostCount: ["comments"],
  PostCountAggregate: ["id", "communityId", "userId", "postBody", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt", "_all"],
  PostAvgAggregate: ["points"],
  PostSumAggregate: ["points"],
  PostMinAggregate: ["id", "communityId", "userId", "postBody", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt"],
  PostMaxAggregate: ["id", "communityId", "userId", "postBody", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt"],
  CommentCountAggregate: ["id", "postId", "userId", "commentBody", "image", "points", "flag", "createdAt", "updatedAt", "_all"],
  CommentAvgAggregate: ["points"],
  CommentSumAggregate: ["points"],
  CommentMinAggregate: ["id", "postId", "userId", "commentBody", "image", "points", "flag", "createdAt", "updatedAt"],
  CommentMaxAggregate: ["id", "postId", "userId", "commentBody", "image", "points", "flag", "createdAt", "updatedAt"],
  UserCount: ["plants", "badges", "communities", "posts", "comments"],
  UserCountAggregate: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "points", "userType", "active", "createdAt", "updatedAt", "_all"],
  UserAvgAggregate: ["points"],
  UserSumAggregate: ["points"],
  UserMinAggregate: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "points", "userType", "active", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "points", "userType", "active", "createdAt", "updatedAt"],
  BadgeCount: ["users"],
  BadgeCountAggregate: ["id", "badgeName", "points", "createdAt", "updatedAt", "_all"],
  BadgeAvgAggregate: ["points"],
  BadgeSumAggregate: ["points"],
  BadgeMinAggregate: ["id", "badgeName", "points", "createdAt", "updatedAt"],
  BadgeMaxAggregate: ["id", "badgeName", "points", "createdAt", "updatedAt"],
  UserBadgesCountAggregate: ["userId", "badgeId", "createdAt", "updatedAt", "_all"],
  UserBadgesMinAggregate: ["userId", "badgeId", "createdAt", "updatedAt"],
  UserBadgesMaxAggregate: ["userId", "badgeId", "createdAt", "updatedAt"],
  CommunityUsersCountAggregate: ["userId", "communityId", "createdAt", "updatedAt", "_all"],
  CommunityUsersMinAggregate: ["userId", "communityId", "createdAt", "updatedAt"],
  CommunityUsersMaxAggregate: ["userId", "communityId", "createdAt", "updatedAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  CareRoutineWhereInput: ["AND", "OR", "NOT", "id", "plantId", "routineSteps", "isCompleted", "isActive", "isShared", "flag", "createdAt", "updatedAt", "plant"],
  CareRoutineOrderByWithRelationInput: ["id", "plantId", "routineSteps", "isCompleted", "isActive", "isShared", "flag", "createdAt", "updatedAt", "plant"],
  CareRoutineWhereUniqueInput: ["id", "plantId"],
  CareRoutineOrderByWithAggregationInput: ["id", "plantId", "isCompleted", "isActive", "isShared", "flag", "createdAt", "updatedAt", "_count", "_max", "_min"],
  CareRoutineScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "plantId", "isCompleted", "isActive", "isShared", "flag", "createdAt", "updatedAt"],
  RoutineStepWhereInput: ["AND", "OR", "NOT", "id", "careRoutineId", "description", "stepFrequency", "otherFrequency", "isCompleted", "completedAt", "createdAt", "updatedAt", "careRoutine"],
  RoutineStepOrderByWithRelationInput: ["id", "careRoutineId", "description", "stepFrequency", "otherFrequency", "isCompleted", "completedAt", "createdAt", "updatedAt", "careRoutine"],
  RoutineStepWhereUniqueInput: ["id"],
  RoutineStepOrderByWithAggregationInput: ["id", "careRoutineId", "description", "stepFrequency", "otherFrequency", "isCompleted", "completedAt", "createdAt", "updatedAt", "_count", "_max", "_min"],
  RoutineStepScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "careRoutineId", "description", "stepFrequency", "otherFrequency", "isCompleted", "completedAt", "createdAt", "updatedAt"],
  PlantWhereInput: ["AND", "OR", "NOT", "id", "plantName", "plantTypeId", "plantImage", "careRoutine", "plantState", "plantPlacement", "createdAt", "updatedAt", "userId", "user", "plantType"],
  PlantOrderByWithRelationInput: ["id", "plantName", "plantTypeId", "plantImage", "careRoutine", "plantState", "plantPlacement", "createdAt", "updatedAt", "userId", "user", "plantType"],
  PlantWhereUniqueInput: ["id"],
  PlantOrderByWithAggregationInput: ["id", "plantName", "plantTypeId", "plantImage", "plantState", "plantPlacement", "createdAt", "updatedAt", "userId", "_count", "_max", "_min"],
  PlantScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "plantName", "plantTypeId", "plantImage", "plantState", "plantPlacement", "createdAt", "updatedAt", "userId"],
  PlantTypeWhereInput: ["AND", "OR", "NOT", "id", "species", "type", "description", "createdAt", "updatedAt", "plants"],
  PlantTypeOrderByWithRelationInput: ["id", "species", "type", "description", "createdAt", "updatedAt", "plants"],
  PlantTypeWhereUniqueInput: ["id"],
  PlantTypeOrderByWithAggregationInput: ["id", "species", "type", "description", "createdAt", "updatedAt", "_count", "_max", "_min"],
  PlantTypeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "species", "type", "description", "createdAt", "updatedAt"],
  CommunityWhereInput: ["AND", "OR", "NOT", "id", "communityName", "posts", "users", "isActive", "createdAt", "updatedAt"],
  CommunityOrderByWithRelationInput: ["id", "communityName", "posts", "users", "isActive", "createdAt", "updatedAt"],
  CommunityWhereUniqueInput: ["id"],
  CommunityOrderByWithAggregationInput: ["id", "communityName", "isActive", "createdAt", "updatedAt", "_count", "_max", "_min"],
  CommunityScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "communityName", "isActive", "createdAt", "updatedAt"],
  PostWhereInput: ["AND", "OR", "NOT", "id", "communityId", "userId", "postBody", "comments", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt", "user", "community"],
  PostOrderByWithRelationInput: ["id", "communityId", "userId", "postBody", "comments", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt", "user", "community"],
  PostWhereUniqueInput: ["id"],
  PostOrderByWithAggregationInput: ["id", "communityId", "userId", "postBody", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "communityId", "userId", "postBody", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt"],
  CommentWhereInput: ["AND", "OR", "NOT", "id", "postId", "userId", "commentBody", "image", "points", "flag", "createdAt", "updatedAt", "user", "post"],
  CommentOrderByWithRelationInput: ["id", "postId", "userId", "commentBody", "image", "points", "flag", "createdAt", "updatedAt", "user", "post"],
  CommentWhereUniqueInput: ["id"],
  CommentOrderByWithAggregationInput: ["id", "postId", "userId", "commentBody", "image", "points", "flag", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  CommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "postId", "userId", "commentBody", "image", "points", "flag", "createdAt", "updatedAt"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "userName", "email", "phoneNumber", "password", "gender", "plants", "badges", "communities", "posts", "comments", "points", "userType", "active", "createdAt", "updatedAt"],
  UserOrderByWithRelationInput: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "plants", "badges", "communities", "posts", "comments", "points", "userType", "active", "createdAt", "updatedAt"],
  UserWhereUniqueInput: ["id", "userName", "email"],
  UserOrderByWithAggregationInput: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "points", "userType", "active", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "userName", "email", "phoneNumber", "password", "gender", "points", "userType", "active", "createdAt", "updatedAt"],
  BadgeWhereInput: ["AND", "OR", "NOT", "id", "badgeName", "points", "users", "createdAt", "updatedAt"],
  BadgeOrderByWithRelationInput: ["id", "badgeName", "points", "users", "createdAt", "updatedAt"],
  BadgeWhereUniqueInput: ["id"],
  BadgeOrderByWithAggregationInput: ["id", "badgeName", "points", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  BadgeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "badgeName", "points", "createdAt", "updatedAt"],
  UserBadgesWhereInput: ["AND", "OR", "NOT", "userId", "user", "badgeId", "badge", "createdAt", "updatedAt"],
  UserBadgesOrderByWithRelationInput: ["userId", "user", "badgeId", "badge", "createdAt", "updatedAt"],
  UserBadgesWhereUniqueInput: ["userId_badgeId"],
  UserBadgesOrderByWithAggregationInput: ["userId", "badgeId", "createdAt", "updatedAt", "_count", "_max", "_min"],
  UserBadgesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "userId", "badgeId", "createdAt", "updatedAt"],
  CommunityUsersWhereInput: ["AND", "OR", "NOT", "userId", "user", "communityId", "community", "createdAt", "updatedAt"],
  CommunityUsersOrderByWithRelationInput: ["userId", "user", "communityId", "community", "createdAt", "updatedAt"],
  CommunityUsersWhereUniqueInput: ["userId_communityId"],
  CommunityUsersOrderByWithAggregationInput: ["userId", "communityId", "createdAt", "updatedAt", "_count", "_max", "_min"],
  CommunityUsersScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "userId", "communityId", "createdAt", "updatedAt"],
  CareRoutineCreateInput: ["id", "routineSteps", "isCompleted", "isActive", "isShared", "flag", "createdAt", "updatedAt", "plant"],
  CareRoutineUpdateInput: ["id", "routineSteps", "isCompleted", "isActive", "isShared", "flag", "createdAt", "updatedAt", "plant"],
  CareRoutineCreateManyInput: ["id", "plantId", "isCompleted", "isActive", "isShared", "flag", "createdAt", "updatedAt"],
  CareRoutineUpdateManyMutationInput: ["id", "isCompleted", "isActive", "isShared", "flag", "createdAt", "updatedAt"],
  RoutineStepCreateInput: ["id", "description", "stepFrequency", "otherFrequency", "isCompleted", "completedAt", "createdAt", "updatedAt", "careRoutine"],
  RoutineStepUpdateInput: ["id", "description", "stepFrequency", "otherFrequency", "isCompleted", "completedAt", "createdAt", "updatedAt", "careRoutine"],
  RoutineStepCreateManyInput: ["id", "careRoutineId", "description", "stepFrequency", "otherFrequency", "isCompleted", "completedAt", "createdAt", "updatedAt"],
  RoutineStepUpdateManyMutationInput: ["id", "description", "stepFrequency", "otherFrequency", "isCompleted", "completedAt", "createdAt", "updatedAt"],
  PlantCreateInput: ["id", "plantName", "plantImage", "careRoutine", "plantState", "plantPlacement", "createdAt", "updatedAt", "user", "plantType"],
  PlantUpdateInput: ["id", "plantName", "plantImage", "careRoutine", "plantState", "plantPlacement", "createdAt", "updatedAt", "user", "plantType"],
  PlantCreateManyInput: ["id", "plantName", "plantTypeId", "plantImage", "plantState", "plantPlacement", "createdAt", "updatedAt", "userId"],
  PlantUpdateManyMutationInput: ["id", "plantName", "plantImage", "plantState", "plantPlacement", "createdAt", "updatedAt"],
  PlantTypeCreateInput: ["id", "species", "type", "description", "createdAt", "updatedAt", "plants"],
  PlantTypeUpdateInput: ["id", "species", "type", "description", "createdAt", "updatedAt", "plants"],
  PlantTypeCreateManyInput: ["id", "species", "type", "description", "createdAt", "updatedAt"],
  PlantTypeUpdateManyMutationInput: ["id", "species", "type", "description", "createdAt", "updatedAt"],
  CommunityCreateInput: ["id", "communityName", "posts", "users", "isActive", "createdAt", "updatedAt"],
  CommunityUpdateInput: ["id", "communityName", "posts", "users", "isActive", "createdAt", "updatedAt"],
  CommunityCreateManyInput: ["id", "communityName", "isActive", "createdAt", "updatedAt"],
  CommunityUpdateManyMutationInput: ["id", "communityName", "isActive", "createdAt", "updatedAt"],
  PostCreateInput: ["id", "postBody", "comments", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt", "user", "community"],
  PostUpdateInput: ["id", "postBody", "comments", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt", "user", "community"],
  PostCreateManyInput: ["id", "communityId", "userId", "postBody", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt"],
  PostUpdateManyMutationInput: ["id", "postBody", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt"],
  CommentCreateInput: ["id", "commentBody", "image", "points", "flag", "createdAt", "updatedAt", "user", "post"],
  CommentUpdateInput: ["id", "commentBody", "image", "points", "flag", "createdAt", "updatedAt", "user", "post"],
  CommentCreateManyInput: ["id", "postId", "userId", "commentBody", "image", "points", "flag", "createdAt", "updatedAt"],
  CommentUpdateManyMutationInput: ["id", "commentBody", "image", "points", "flag", "createdAt", "updatedAt"],
  UserCreateInput: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "plants", "badges", "communities", "posts", "comments", "points", "userType", "active", "createdAt", "updatedAt"],
  UserUpdateInput: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "plants", "badges", "communities", "posts", "comments", "points", "userType", "active", "createdAt", "updatedAt"],
  UserCreateManyInput: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "points", "userType", "active", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "points", "userType", "active", "createdAt", "updatedAt"],
  BadgeCreateInput: ["id", "badgeName", "points", "users", "createdAt", "updatedAt"],
  BadgeUpdateInput: ["id", "badgeName", "points", "users", "createdAt", "updatedAt"],
  BadgeCreateManyInput: ["id", "badgeName", "points", "createdAt", "updatedAt"],
  BadgeUpdateManyMutationInput: ["id", "badgeName", "points", "createdAt", "updatedAt"],
  UserBadgesCreateInput: ["user", "badge", "createdAt", "updatedAt"],
  UserBadgesUpdateInput: ["user", "badge", "createdAt", "updatedAt"],
  UserBadgesCreateManyInput: ["userId", "badgeId", "createdAt", "updatedAt"],
  UserBadgesUpdateManyMutationInput: ["createdAt", "updatedAt"],
  CommunityUsersCreateInput: ["user", "community", "createdAt", "updatedAt"],
  CommunityUsersUpdateInput: ["user", "community", "createdAt", "updatedAt"],
  CommunityUsersCreateManyInput: ["userId", "communityId", "createdAt", "updatedAt"],
  CommunityUsersUpdateManyMutationInput: ["createdAt", "updatedAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  RoutineStepListRelationFilter: ["every", "some", "none"],
  BoolFilter: ["equals", "not"],
  EnumuserContentFlagFilter: ["equals", "in", "notIn", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PlantRelationFilter: ["is", "isNot"],
  RoutineStepOrderByRelationAggregateInput: ["_count"],
  CareRoutineCountOrderByAggregateInput: ["id", "plantId", "isCompleted", "isActive", "isShared", "flag", "createdAt", "updatedAt"],
  CareRoutineMaxOrderByAggregateInput: ["id", "plantId", "isCompleted", "isActive", "isShared", "flag", "createdAt", "updatedAt"],
  CareRoutineMinOrderByAggregateInput: ["id", "plantId", "isCompleted", "isActive", "isShared", "flag", "createdAt", "updatedAt"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  EnumuserContentFlagWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumcareRoutineStepFrequencyFilter: ["equals", "in", "notIn", "not"],
  CareRoutineRelationFilter: ["is", "isNot"],
  RoutineStepCountOrderByAggregateInput: ["id", "careRoutineId", "description", "stepFrequency", "otherFrequency", "isCompleted", "completedAt", "createdAt", "updatedAt"],
  RoutineStepMaxOrderByAggregateInput: ["id", "careRoutineId", "description", "stepFrequency", "otherFrequency", "isCompleted", "completedAt", "createdAt", "updatedAt"],
  RoutineStepMinOrderByAggregateInput: ["id", "careRoutineId", "description", "stepFrequency", "otherFrequency", "isCompleted", "completedAt", "createdAt", "updatedAt"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumcareRoutineStepFrequencyWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumplantStateFilter: ["equals", "in", "notIn", "not"],
  EnumplantPlacementFilter: ["equals", "in", "notIn", "not"],
  UserRelationFilter: ["is", "isNot"],
  PlantTypeRelationFilter: ["is", "isNot"],
  PlantCountOrderByAggregateInput: ["id", "plantName", "plantTypeId", "plantImage", "plantState", "plantPlacement", "createdAt", "updatedAt", "userId"],
  PlantMaxOrderByAggregateInput: ["id", "plantName", "plantTypeId", "plantImage", "plantState", "plantPlacement", "createdAt", "updatedAt", "userId"],
  PlantMinOrderByAggregateInput: ["id", "plantName", "plantTypeId", "plantImage", "plantState", "plantPlacement", "createdAt", "updatedAt", "userId"],
  EnumplantStateWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumplantPlacementWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  PlantListRelationFilter: ["every", "some", "none"],
  PlantOrderByRelationAggregateInput: ["_count"],
  PlantTypeCountOrderByAggregateInput: ["id", "species", "type", "description", "createdAt", "updatedAt"],
  PlantTypeMaxOrderByAggregateInput: ["id", "species", "type", "description", "createdAt", "updatedAt"],
  PlantTypeMinOrderByAggregateInput: ["id", "species", "type", "description", "createdAt", "updatedAt"],
  PostListRelationFilter: ["every", "some", "none"],
  CommunityUsersListRelationFilter: ["every", "some", "none"],
  PostOrderByRelationAggregateInput: ["_count"],
  CommunityUsersOrderByRelationAggregateInput: ["_count"],
  CommunityCountOrderByAggregateInput: ["id", "communityName", "isActive", "createdAt", "updatedAt"],
  CommunityMaxOrderByAggregateInput: ["id", "communityName", "isActive", "createdAt", "updatedAt"],
  CommunityMinOrderByAggregateInput: ["id", "communityName", "isActive", "createdAt", "updatedAt"],
  CommentListRelationFilter: ["every", "some", "none"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CommunityRelationFilter: ["is", "isNot"],
  CommentOrderByRelationAggregateInput: ["_count"],
  PostCountOrderByAggregateInput: ["id", "communityId", "userId", "postBody", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt"],
  PostAvgOrderByAggregateInput: ["points"],
  PostMaxOrderByAggregateInput: ["id", "communityId", "userId", "postBody", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt"],
  PostMinOrderByAggregateInput: ["id", "communityId", "userId", "postBody", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt"],
  PostSumOrderByAggregateInput: ["points"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  PostRelationFilter: ["is", "isNot"],
  CommentCountOrderByAggregateInput: ["id", "postId", "userId", "commentBody", "image", "points", "flag", "createdAt", "updatedAt"],
  CommentAvgOrderByAggregateInput: ["points"],
  CommentMaxOrderByAggregateInput: ["id", "postId", "userId", "commentBody", "image", "points", "flag", "createdAt", "updatedAt"],
  CommentMinOrderByAggregateInput: ["id", "postId", "userId", "commentBody", "image", "points", "flag", "createdAt", "updatedAt"],
  CommentSumOrderByAggregateInput: ["points"],
  EnumgenderFilter: ["equals", "in", "notIn", "not"],
  UserBadgesListRelationFilter: ["every", "some", "none"],
  EnumuserTypeFilter: ["equals", "in", "notIn", "not"],
  UserBadgesOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "points", "userType", "active", "createdAt", "updatedAt"],
  UserAvgOrderByAggregateInput: ["points"],
  UserMaxOrderByAggregateInput: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "points", "userType", "active", "createdAt", "updatedAt"],
  UserMinOrderByAggregateInput: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "points", "userType", "active", "createdAt", "updatedAt"],
  UserSumOrderByAggregateInput: ["points"],
  EnumgenderWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumuserTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  BadgeCountOrderByAggregateInput: ["id", "badgeName", "points", "createdAt", "updatedAt"],
  BadgeAvgOrderByAggregateInput: ["points"],
  BadgeMaxOrderByAggregateInput: ["id", "badgeName", "points", "createdAt", "updatedAt"],
  BadgeMinOrderByAggregateInput: ["id", "badgeName", "points", "createdAt", "updatedAt"],
  BadgeSumOrderByAggregateInput: ["points"],
  BadgeRelationFilter: ["is", "isNot"],
  UserBadgesUserIdBadgeIdCompoundUniqueInput: ["userId", "badgeId"],
  UserBadgesCountOrderByAggregateInput: ["userId", "badgeId", "createdAt", "updatedAt"],
  UserBadgesMaxOrderByAggregateInput: ["userId", "badgeId", "createdAt", "updatedAt"],
  UserBadgesMinOrderByAggregateInput: ["userId", "badgeId", "createdAt", "updatedAt"],
  CommunityUsersUserIdCommunityIdCompoundUniqueInput: ["userId", "communityId"],
  CommunityUsersCountOrderByAggregateInput: ["userId", "communityId", "createdAt", "updatedAt"],
  CommunityUsersMaxOrderByAggregateInput: ["userId", "communityId", "createdAt", "updatedAt"],
  CommunityUsersMinOrderByAggregateInput: ["userId", "communityId", "createdAt", "updatedAt"],
  RoutineStepCreateNestedManyWithoutCareRoutineInput: ["create", "connectOrCreate", "createMany", "connect"],
  PlantCreateNestedOneWithoutCareRoutineInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  RoutineStepUpdateManyWithoutCareRoutineNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  BoolFieldUpdateOperationsInput: ["set"],
  EnumuserContentFlagFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  PlantUpdateOneRequiredWithoutCareRoutineNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CareRoutineCreateNestedOneWithoutRoutineStepsInput: ["create", "connectOrCreate", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  EnumcareRoutineStepFrequencyFieldUpdateOperationsInput: ["set"],
  CareRoutineUpdateOneRequiredWithoutRoutineStepsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CareRoutineCreateNestedOneWithoutPlantInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutPlantsInput: ["create", "connectOrCreate", "connect"],
  PlantTypeCreateNestedOneWithoutPlantsInput: ["create", "connectOrCreate", "connect"],
  CareRoutineUpdateOneWithoutPlantNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  EnumplantStateFieldUpdateOperationsInput: ["set"],
  EnumplantPlacementFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutPlantsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PlantTypeUpdateOneRequiredWithoutPlantsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PlantCreateNestedManyWithoutPlantTypeInput: ["create", "connectOrCreate", "createMany", "connect"],
  PlantUpdateManyWithoutPlantTypeNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PostCreateNestedManyWithoutCommunityInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommunityUsersCreateNestedManyWithoutCommunityInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostUpdateManyWithoutCommunityNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommunityUsersUpdateManyWithoutCommunityNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommentCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  CommunityCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  CommentUpdateManyWithoutPostNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneRequiredWithoutPostsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CommunityUpdateOneRequiredWithoutPostsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PlantCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserBadgesCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommunityUsersCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumgenderFieldUpdateOperationsInput: ["set"],
  PlantUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserBadgesUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommunityUsersUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PostUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommentUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  EnumuserTypeFieldUpdateOperationsInput: ["set"],
  UserBadgesCreateNestedManyWithoutBadgeInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserBadgesUpdateManyWithoutBadgeNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutBadgesInput: ["create", "connectOrCreate", "connect"],
  BadgeCreateNestedOneWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutBadgesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  BadgeUpdateOneRequiredWithoutUsersNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutCommunitiesInput: ["create", "connectOrCreate", "connect"],
  CommunityCreateNestedOneWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutCommunitiesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CommunityUpdateOneRequiredWithoutUsersNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedEnumuserContentFlagFilter: ["equals", "in", "notIn", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedEnumuserContentFlagWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumcareRoutineStepFrequencyFilter: ["equals", "in", "notIn", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedEnumcareRoutineStepFrequencyWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumplantStateFilter: ["equals", "in", "notIn", "not"],
  NestedEnumplantPlacementFilter: ["equals", "in", "notIn", "not"],
  NestedEnumplantStateWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumplantPlacementWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumgenderFilter: ["equals", "in", "notIn", "not"],
  NestedEnumuserTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumgenderWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumuserTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  RoutineStepCreateWithoutCareRoutineInput: ["id", "description", "stepFrequency", "otherFrequency", "isCompleted", "completedAt", "createdAt", "updatedAt"],
  RoutineStepCreateOrConnectWithoutCareRoutineInput: ["where", "create"],
  RoutineStepCreateManyCareRoutineInputEnvelope: ["data", "skipDuplicates"],
  PlantCreateWithoutCareRoutineInput: ["id", "plantName", "plantImage", "plantState", "plantPlacement", "createdAt", "updatedAt", "user", "plantType"],
  PlantCreateOrConnectWithoutCareRoutineInput: ["where", "create"],
  RoutineStepUpsertWithWhereUniqueWithoutCareRoutineInput: ["where", "update", "create"],
  RoutineStepUpdateWithWhereUniqueWithoutCareRoutineInput: ["where", "data"],
  RoutineStepUpdateManyWithWhereWithoutCareRoutineInput: ["where", "data"],
  RoutineStepScalarWhereInput: ["AND", "OR", "NOT", "id", "careRoutineId", "description", "stepFrequency", "otherFrequency", "isCompleted", "completedAt", "createdAt", "updatedAt"],
  PlantUpsertWithoutCareRoutineInput: ["update", "create"],
  PlantUpdateWithoutCareRoutineInput: ["id", "plantName", "plantImage", "plantState", "plantPlacement", "createdAt", "updatedAt", "user", "plantType"],
  CareRoutineCreateWithoutRoutineStepsInput: ["id", "isCompleted", "isActive", "isShared", "flag", "createdAt", "updatedAt", "plant"],
  CareRoutineCreateOrConnectWithoutRoutineStepsInput: ["where", "create"],
  CareRoutineUpsertWithoutRoutineStepsInput: ["update", "create"],
  CareRoutineUpdateWithoutRoutineStepsInput: ["id", "isCompleted", "isActive", "isShared", "flag", "createdAt", "updatedAt", "plant"],
  CareRoutineCreateWithoutPlantInput: ["id", "routineSteps", "isCompleted", "isActive", "isShared", "flag", "createdAt", "updatedAt"],
  CareRoutineCreateOrConnectWithoutPlantInput: ["where", "create"],
  UserCreateWithoutPlantsInput: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "badges", "communities", "posts", "comments", "points", "userType", "active", "createdAt", "updatedAt"],
  UserCreateOrConnectWithoutPlantsInput: ["where", "create"],
  PlantTypeCreateWithoutPlantsInput: ["id", "species", "type", "description", "createdAt", "updatedAt"],
  PlantTypeCreateOrConnectWithoutPlantsInput: ["where", "create"],
  CareRoutineUpsertWithoutPlantInput: ["update", "create"],
  CareRoutineUpdateWithoutPlantInput: ["id", "routineSteps", "isCompleted", "isActive", "isShared", "flag", "createdAt", "updatedAt"],
  UserUpsertWithoutPlantsInput: ["update", "create"],
  UserUpdateWithoutPlantsInput: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "badges", "communities", "posts", "comments", "points", "userType", "active", "createdAt", "updatedAt"],
  PlantTypeUpsertWithoutPlantsInput: ["update", "create"],
  PlantTypeUpdateWithoutPlantsInput: ["id", "species", "type", "description", "createdAt", "updatedAt"],
  PlantCreateWithoutPlantTypeInput: ["id", "plantName", "plantImage", "careRoutine", "plantState", "plantPlacement", "createdAt", "updatedAt", "user"],
  PlantCreateOrConnectWithoutPlantTypeInput: ["where", "create"],
  PlantCreateManyPlantTypeInputEnvelope: ["data", "skipDuplicates"],
  PlantUpsertWithWhereUniqueWithoutPlantTypeInput: ["where", "update", "create"],
  PlantUpdateWithWhereUniqueWithoutPlantTypeInput: ["where", "data"],
  PlantUpdateManyWithWhereWithoutPlantTypeInput: ["where", "data"],
  PlantScalarWhereInput: ["AND", "OR", "NOT", "id", "plantName", "plantTypeId", "plantImage", "plantState", "plantPlacement", "createdAt", "updatedAt", "userId"],
  PostCreateWithoutCommunityInput: ["id", "postBody", "comments", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt", "user"],
  PostCreateOrConnectWithoutCommunityInput: ["where", "create"],
  PostCreateManyCommunityInputEnvelope: ["data", "skipDuplicates"],
  CommunityUsersCreateWithoutCommunityInput: ["user", "createdAt", "updatedAt"],
  CommunityUsersCreateOrConnectWithoutCommunityInput: ["where", "create"],
  CommunityUsersCreateManyCommunityInputEnvelope: ["data", "skipDuplicates"],
  PostUpsertWithWhereUniqueWithoutCommunityInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutCommunityInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutCommunityInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "communityId", "userId", "postBody", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt"],
  CommunityUsersUpsertWithWhereUniqueWithoutCommunityInput: ["where", "update", "create"],
  CommunityUsersUpdateWithWhereUniqueWithoutCommunityInput: ["where", "data"],
  CommunityUsersUpdateManyWithWhereWithoutCommunityInput: ["where", "data"],
  CommunityUsersScalarWhereInput: ["AND", "OR", "NOT", "userId", "communityId", "createdAt", "updatedAt"],
  CommentCreateWithoutPostInput: ["id", "commentBody", "image", "points", "flag", "createdAt", "updatedAt", "user"],
  CommentCreateOrConnectWithoutPostInput: ["where", "create"],
  CommentCreateManyPostInputEnvelope: ["data", "skipDuplicates"],
  UserCreateWithoutPostsInput: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "plants", "badges", "communities", "comments", "points", "userType", "active", "createdAt", "updatedAt"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  CommunityCreateWithoutPostsInput: ["id", "communityName", "users", "isActive", "createdAt", "updatedAt"],
  CommunityCreateOrConnectWithoutPostsInput: ["where", "create"],
  CommentUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  CommentScalarWhereInput: ["AND", "OR", "NOT", "id", "postId", "userId", "commentBody", "image", "points", "flag", "createdAt", "updatedAt"],
  UserUpsertWithoutPostsInput: ["update", "create"],
  UserUpdateWithoutPostsInput: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "plants", "badges", "communities", "comments", "points", "userType", "active", "createdAt", "updatedAt"],
  CommunityUpsertWithoutPostsInput: ["update", "create"],
  CommunityUpdateWithoutPostsInput: ["id", "communityName", "users", "isActive", "createdAt", "updatedAt"],
  UserCreateWithoutCommentsInput: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "plants", "badges", "communities", "posts", "points", "userType", "active", "createdAt", "updatedAt"],
  UserCreateOrConnectWithoutCommentsInput: ["where", "create"],
  PostCreateWithoutCommentsInput: ["id", "postBody", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt", "user", "community"],
  PostCreateOrConnectWithoutCommentsInput: ["where", "create"],
  UserUpsertWithoutCommentsInput: ["update", "create"],
  UserUpdateWithoutCommentsInput: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "plants", "badges", "communities", "posts", "points", "userType", "active", "createdAt", "updatedAt"],
  PostUpsertWithoutCommentsInput: ["update", "create"],
  PostUpdateWithoutCommentsInput: ["id", "postBody", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt", "user", "community"],
  PlantCreateWithoutUserInput: ["id", "plantName", "plantImage", "careRoutine", "plantState", "plantPlacement", "createdAt", "updatedAt", "plantType"],
  PlantCreateOrConnectWithoutUserInput: ["where", "create"],
  PlantCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  UserBadgesCreateWithoutUserInput: ["badge", "createdAt", "updatedAt"],
  UserBadgesCreateOrConnectWithoutUserInput: ["where", "create"],
  UserBadgesCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  CommunityUsersCreateWithoutUserInput: ["community", "createdAt", "updatedAt"],
  CommunityUsersCreateOrConnectWithoutUserInput: ["where", "create"],
  CommunityUsersCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  PostCreateWithoutUserInput: ["id", "postBody", "comments", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt", "community"],
  PostCreateOrConnectWithoutUserInput: ["where", "create"],
  PostCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  CommentCreateWithoutUserInput: ["id", "commentBody", "image", "points", "flag", "createdAt", "updatedAt", "post"],
  CommentCreateOrConnectWithoutUserInput: ["where", "create"],
  CommentCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  PlantUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  PlantUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  PlantUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  UserBadgesUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  UserBadgesUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  UserBadgesUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  UserBadgesScalarWhereInput: ["AND", "OR", "NOT", "userId", "badgeId", "createdAt", "updatedAt"],
  CommunityUsersUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  CommunityUsersUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  CommunityUsersUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  PostUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  CommentUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  UserBadgesCreateWithoutBadgeInput: ["user", "createdAt", "updatedAt"],
  UserBadgesCreateOrConnectWithoutBadgeInput: ["where", "create"],
  UserBadgesCreateManyBadgeInputEnvelope: ["data", "skipDuplicates"],
  UserBadgesUpsertWithWhereUniqueWithoutBadgeInput: ["where", "update", "create"],
  UserBadgesUpdateWithWhereUniqueWithoutBadgeInput: ["where", "data"],
  UserBadgesUpdateManyWithWhereWithoutBadgeInput: ["where", "data"],
  UserCreateWithoutBadgesInput: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "plants", "communities", "posts", "comments", "points", "userType", "active", "createdAt", "updatedAt"],
  UserCreateOrConnectWithoutBadgesInput: ["where", "create"],
  BadgeCreateWithoutUsersInput: ["id", "badgeName", "points", "createdAt", "updatedAt"],
  BadgeCreateOrConnectWithoutUsersInput: ["where", "create"],
  UserUpsertWithoutBadgesInput: ["update", "create"],
  UserUpdateWithoutBadgesInput: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "plants", "communities", "posts", "comments", "points", "userType", "active", "createdAt", "updatedAt"],
  BadgeUpsertWithoutUsersInput: ["update", "create"],
  BadgeUpdateWithoutUsersInput: ["id", "badgeName", "points", "createdAt", "updatedAt"],
  UserCreateWithoutCommunitiesInput: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "plants", "badges", "posts", "comments", "points", "userType", "active", "createdAt", "updatedAt"],
  UserCreateOrConnectWithoutCommunitiesInput: ["where", "create"],
  CommunityCreateWithoutUsersInput: ["id", "communityName", "posts", "isActive", "createdAt", "updatedAt"],
  CommunityCreateOrConnectWithoutUsersInput: ["where", "create"],
  UserUpsertWithoutCommunitiesInput: ["update", "create"],
  UserUpdateWithoutCommunitiesInput: ["id", "name", "userName", "email", "phoneNumber", "password", "gender", "plants", "badges", "posts", "comments", "points", "userType", "active", "createdAt", "updatedAt"],
  CommunityUpsertWithoutUsersInput: ["update", "create"],
  CommunityUpdateWithoutUsersInput: ["id", "communityName", "posts", "isActive", "createdAt", "updatedAt"],
  RoutineStepCreateManyCareRoutineInput: ["id", "description", "stepFrequency", "otherFrequency", "isCompleted", "completedAt", "createdAt", "updatedAt"],
  RoutineStepUpdateWithoutCareRoutineInput: ["id", "description", "stepFrequency", "otherFrequency", "isCompleted", "completedAt", "createdAt", "updatedAt"],
  PlantCreateManyPlantTypeInput: ["id", "plantName", "plantImage", "plantState", "plantPlacement", "createdAt", "updatedAt", "userId"],
  PlantUpdateWithoutPlantTypeInput: ["id", "plantName", "plantImage", "careRoutine", "plantState", "plantPlacement", "createdAt", "updatedAt", "user"],
  PostCreateManyCommunityInput: ["id", "userId", "postBody", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt"],
  CommunityUsersCreateManyCommunityInput: ["userId", "createdAt", "updatedAt"],
  PostUpdateWithoutCommunityInput: ["id", "postBody", "comments", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt", "user"],
  CommunityUsersUpdateWithoutCommunityInput: ["user", "createdAt", "updatedAt"],
  CommentCreateManyPostInput: ["id", "userId", "commentBody", "image", "points", "flag", "createdAt", "updatedAt"],
  CommentUpdateWithoutPostInput: ["id", "commentBody", "image", "points", "flag", "createdAt", "updatedAt", "user"],
  PlantCreateManyUserInput: ["id", "plantName", "plantTypeId", "plantImage", "plantState", "plantPlacement", "createdAt", "updatedAt"],
  UserBadgesCreateManyUserInput: ["badgeId", "createdAt", "updatedAt"],
  CommunityUsersCreateManyUserInput: ["communityId", "createdAt", "updatedAt"],
  PostCreateManyUserInput: ["id", "communityId", "postBody", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt"],
  CommentCreateManyUserInput: ["id", "postId", "commentBody", "image", "points", "flag", "createdAt", "updatedAt"],
  PlantUpdateWithoutUserInput: ["id", "plantName", "plantImage", "careRoutine", "plantState", "plantPlacement", "createdAt", "updatedAt", "plantType"],
  UserBadgesUpdateWithoutUserInput: ["badge", "createdAt", "updatedAt"],
  CommunityUsersUpdateWithoutUserInput: ["community", "createdAt", "updatedAt"],
  PostUpdateWithoutUserInput: ["id", "postBody", "comments", "image", "points", "flag", "isAnnouncement", "createdAt", "updatedAt", "community"],
  CommentUpdateWithoutUserInput: ["id", "commentBody", "image", "points", "flag", "createdAt", "updatedAt", "post"],
  UserBadgesCreateManyBadgeInput: ["userId", "createdAt", "updatedAt"],
  UserBadgesUpdateWithoutBadgeInput: ["user", "createdAt", "updatedAt"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

