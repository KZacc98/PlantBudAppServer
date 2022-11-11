import * as TypeGraphQL from "type-graphql";

export enum careRoutineStepFrequency {
  threeTimesADay = "threeTimesADay",
  twoTimesADay = "twoTimesADay",
  daily = "daily",
  everyTwoDays = "everyTwoDays",
  everyThreeDays = "everyThreeDays",
  everyFourDays = "everyFourDays",
  everyFiveDays = "everyFiveDays",
  everySixDays = "everySixDays",
  weekly = "weekly",
  everyTwoWeeks = "everyTwoWeeks",
  everyThreeWeeks = "everyThreeWeeks",
  onceAMonth = "onceAMonth",
  onceAYear = "onceAYear",
  other = "other",
  "default" = "default"
}
TypeGraphQL.registerEnumType(careRoutineStepFrequency, {
  name: "careRoutineStepFrequency",
  description: undefined,
});
