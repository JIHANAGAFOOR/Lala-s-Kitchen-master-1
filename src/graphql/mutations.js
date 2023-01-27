/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMenu = /* GraphQL */ `
  mutation CreateMenu(
    $input: CreateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    createMenu(input: $input, condition: $condition) {
      MenuKey
      Name
      FirstItemName
      SecondItemName
      Description
      IsVeg
      Ingredient
      DishType
      MealCategory
      MealSlot
      AvailableDay
      Price
      Image
      IsAddOnType
      AddOnDate
      TotalAvailableCount
      Status
      createdAt
      updatedAt
    }
  }
`;
export const updateMenu = /* GraphQL */ `
  mutation UpdateMenu(
    $input: UpdateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    updateMenu(input: $input, condition: $condition) {
      MenuKey
      Name
      FirstItemName
      SecondItemName
      Description
      IsVeg
      Ingredient
      DishType
      MealCategory
      MealSlot
      AvailableDay
      Price
      Image
      IsAddOnType
      AddOnDate
      TotalAvailableCount
      Status
      createdAt
      updatedAt
    }
  }
`;
export const deleteMenu = /* GraphQL */ `
  mutation DeleteMenu(
    $input: DeleteMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    deleteMenu(input: $input, condition: $condition) {
      MenuKey
      Name
      FirstItemName
      SecondItemName
      Description
      IsVeg
      Ingredient
      DishType
      MealCategory
      MealSlot
      AvailableDay
      Price
      Image
      IsAddOnType
      AddOnDate
      TotalAvailableCount
      Status
      createdAt
      updatedAt
    }
  }
`;
export const createMasterSubscription = /* GraphQL */ `
  mutation CreateMasterSubscription(
    $input: CreateMasterSubscriptionInput!
    $condition: ModelMasterSubscriptionConditionInput
  ) {
    createMasterSubscription(input: $input, condition: $condition) {
      MobileNumber
      Id
      FirstName
      LastName
      Address
      Orders {
        Token
        IsVeg
        MealCategory
        MealSlot
        NumberOfMealsPerToken
        Price
      }
      AddOnMealName
      IsAddOnType
      StartDate
      EndDate
      TotalPricePerDay
      NumberOfDays
      TotalPrice
      PaymentDetails
      Status
      Route
      createdAt
      updatedAt
    }
  }
`;
export const updateMasterSubscription = /* GraphQL */ `
  mutation UpdateMasterSubscription(
    $input: UpdateMasterSubscriptionInput!
    $condition: ModelMasterSubscriptionConditionInput
  ) {
    updateMasterSubscription(input: $input, condition: $condition) {
      MobileNumber
      Id
      FirstName
      LastName
      Address
      Orders {
        Token
        IsVeg
        MealCategory
        MealSlot
        NumberOfMealsPerToken
        Price
      }
      AddOnMealName
      IsAddOnType
      StartDate
      EndDate
      TotalPricePerDay
      NumberOfDays
      TotalPrice
      PaymentDetails
      Status
      Route
      createdAt
      updatedAt
    }
  }
`;
export const deleteMasterSubscription = /* GraphQL */ `
  mutation DeleteMasterSubscription(
    $input: DeleteMasterSubscriptionInput!
    $condition: ModelMasterSubscriptionConditionInput
  ) {
    deleteMasterSubscription(input: $input, condition: $condition) {
      MobileNumber
      Id
      FirstName
      LastName
      Address
      Orders {
        Token
        IsVeg
        MealCategory
        MealSlot
        NumberOfMealsPerToken
        Price
      }
      AddOnMealName
      IsAddOnType
      StartDate
      EndDate
      TotalPricePerDay
      NumberOfDays
      TotalPrice
      PaymentDetails
      Status
      Route
      createdAt
      updatedAt
    }
  }
`;
export const createDeliverySubscription = /* GraphQL */ `
  mutation CreateDeliverySubscription(
    $input: CreateDeliverySubscriptionInput!
    $condition: ModelDeliverySubscriptionConditionInput
  ) {
    createDeliverySubscription(input: $input, condition: $condition) {
      MobileNumber
      Id
      MasterSubscriptionKey
      FirstName
      LastName
      Address
      Orders {
        Token
        IsVeg
        MealCategory
        MealSlot
        NumberOfMealsPerToken
        Price
      }
      AddOnMealName
      IsAddOnType
      StartDate
      EndDate
      DeliveryDate
      TotalPricePerDay
      NumberOfDays
      TotalPrice
      PaymentDetails
      Status
      Route
      createdAt
      updatedAt
    }
  }
`;
export const updateDeliverySubscription = /* GraphQL */ `
  mutation UpdateDeliverySubscription(
    $input: UpdateDeliverySubscriptionInput!
    $condition: ModelDeliverySubscriptionConditionInput
  ) {
    updateDeliverySubscription(input: $input, condition: $condition) {
      MobileNumber
      Id
      MasterSubscriptionKey
      FirstName
      LastName
      Address
      Orders {
        Token
        IsVeg
        MealCategory
        MealSlot
        NumberOfMealsPerToken
        Price
      }
      AddOnMealName
      IsAddOnType
      StartDate
      EndDate
      DeliveryDate
      TotalPricePerDay
      NumberOfDays
      TotalPrice
      PaymentDetails
      Status
      Route
      createdAt
      updatedAt
    }
  }
`;
export const deleteDeliverySubscription = /* GraphQL */ `
  mutation DeleteDeliverySubscription(
    $input: DeleteDeliverySubscriptionInput!
    $condition: ModelDeliverySubscriptionConditionInput
  ) {
    deleteDeliverySubscription(input: $input, condition: $condition) {
      MobileNumber
      Id
      MasterSubscriptionKey
      FirstName
      LastName
      Address
      Orders {
        Token
        IsVeg
        MealCategory
        MealSlot
        NumberOfMealsPerToken
        Price
      }
      AddOnMealName
      IsAddOnType
      StartDate
      EndDate
      DeliveryDate
      TotalPricePerDay
      NumberOfDays
      TotalPrice
      PaymentDetails
      Status
      Route
      createdAt
      updatedAt
    }
  }
`;
export const createPlan = /* GraphQL */ `
  mutation CreatePlan(
    $input: CreatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    createPlan(input: $input, condition: $condition) {
      NameKey
      Description
      VegNonVegStyle
      MealCategory
      Image
      BreakfastPrice
      LunchPrice
      DinnerPrice
      TotalPricePerDay
      TotalPricePerWeek
      TotalPricePerMonth
      createdAt
      updatedAt
    }
  }
`;
export const updatePlan = /* GraphQL */ `
  mutation UpdatePlan(
    $input: UpdatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    updatePlan(input: $input, condition: $condition) {
      NameKey
      Description
      VegNonVegStyle
      MealCategory
      Image
      BreakfastPrice
      LunchPrice
      DinnerPrice
      TotalPricePerDay
      TotalPricePerWeek
      TotalPricePerMonth
      createdAt
      updatedAt
    }
  }
`;
export const deletePlan = /* GraphQL */ `
  mutation DeletePlan(
    $input: DeletePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    deletePlan(input: $input, condition: $condition) {
      NameKey
      Description
      VegNonVegStyle
      MealCategory
      Image
      BreakfastPrice
      LunchPrice
      DinnerPrice
      TotalPricePerDay
      TotalPricePerWeek
      TotalPricePerMonth
      createdAt
      updatedAt
    }
  }
`;
