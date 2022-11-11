import * as TypeGraphQL from "type-graphql";

export enum PlantScalarFieldEnum {
  id = "id",
  plantName = "plantName",
  plantTypeId = "plantTypeId",
  plantImage = "plantImage",
  plantState = "plantState",
  plantPlacement = "plantPlacement",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userId = "userId"
}
TypeGraphQL.registerEnumType(PlantScalarFieldEnum, {
  name: "PlantScalarFieldEnum",
  description: undefined,
});
