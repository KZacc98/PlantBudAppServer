import * as TypeGraphQL from "type-graphql";

export enum RoutineStepScalarFieldEnum {
  id = "id",
  careRoutineId = "careRoutineId",
  description = "description",
  stepFrequency = "stepFrequency",
  otherFrequency = "otherFrequency",
  isCompleted = "isCompleted",
  completedAt = "completedAt",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(RoutineStepScalarFieldEnum, {
  name: "RoutineStepScalarFieldEnum",
  description: undefined,
});
