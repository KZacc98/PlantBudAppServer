import * as TypeGraphQL from "type-graphql";

export enum CareRoutineScalarFieldEnum {
  id = "id",
  plantId = "plantId",
  isCompleted = "isCompleted",
  isActive = "isActive",
  isShared = "isShared",
  flag = "flag",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(CareRoutineScalarFieldEnum, {
  name: "CareRoutineScalarFieldEnum",
  description: undefined,
});
