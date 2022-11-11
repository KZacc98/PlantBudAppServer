import * as TypeGraphQL from "type-graphql";

export enum PlantTypeScalarFieldEnum {
  id = "id",
  species = "species",
  type = "type",
  description = "description",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(PlantTypeScalarFieldEnum, {
  name: "PlantTypeScalarFieldEnum",
  description: undefined,
});
