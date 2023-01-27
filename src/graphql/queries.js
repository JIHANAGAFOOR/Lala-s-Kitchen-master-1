/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMenu = /* GraphQL */ `
  query GetMenu($MenuKey: String!, $Name: String!) {
    getMenu(MenuKey: $MenuKey, Name: $Name) {
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
export const listMenus = /* GraphQL */ `
  query ListMenus(
    $MenuKey: String
    $Name: ModelStringKeyConditionInput
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMenus(
      MenuKey: $MenuKey
      Name: $Name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getMasterSubscription = /* GraphQL */ `
  query GetMasterSubscription($MobileNumber: String!, $Id: ID!) {
    getMasterSubscription(MobileNumber: $MobileNumber, Id: $Id) {
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
export const listMasterSubscriptions = /* GraphQL */ `
  query ListMasterSubscriptions(
    $MobileNumber: String
    $Id: ModelIDKeyConditionInput
    $filter: ModelMasterSubscriptionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMasterSubscriptions(
      MobileNumber: $MobileNumber
      Id: $Id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        MobileNumber
        Id
        FirstName
        LastName
        Address
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
      nextToken
    }
  }
`;
export const getDeliverySubscription = /* GraphQL */ `
  query GetDeliverySubscription(
    $MasterSubscriptionKey: String!
    $DeliveryDate: String!
  ) {
    getDeliverySubscription(
      MasterSubscriptionKey: $MasterSubscriptionKey
      DeliveryDate: $DeliveryDate
    ) {
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
export const listDeliverySubscriptions = /* GraphQL */ `
  query ListDeliverySubscriptions(
    $MasterSubscriptionKey: String
    $DeliveryDate: ModelStringKeyConditionInput
    $filter: ModelDeliverySubscriptionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDeliverySubscriptions(
      MasterSubscriptionKey: $MasterSubscriptionKey
      DeliveryDate: $DeliveryDate
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        MobileNumber
        Id
        MasterSubscriptionKey
        FirstName
        LastName
        Address
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
      nextToken
    }
  }
`;
export const getPlan = /* GraphQL */ `
  query GetPlan($NameKey: String!) {
    getPlan(NameKey: $NameKey) {
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
export const listPlans = /* GraphQL */ `
  query ListPlans(
    $NameKey: String
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPlans(
      NameKey: $NameKey
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const subscriptionByStatus = /* GraphQL */ `
  query SubscriptionByStatus(
    $Status: StatusEnum!
    $sortDirection: ModelSortDirection
    $filter: ModelMasterSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    SubscriptionByStatus(
      Status: $Status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        MobileNumber
        Id
        FirstName
        LastName
        Address
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
      nextToken
    }
  }
`;
export const deliveryByStatus = /* GraphQL */ `
  query DeliveryByStatus(
    $Status: StatusEnum!
    $sortDirection: ModelSortDirection
    $filter: ModelDeliverySubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    DeliveryByStatus(
      Status: $Status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        MobileNumber
        Id
        MasterSubscriptionKey
        FirstName
        LastName
        Address
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
      nextToken
    }
  }
`;
