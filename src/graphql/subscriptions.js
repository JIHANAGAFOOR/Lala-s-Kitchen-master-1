/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMenu = /* GraphQL */ `
  subscription OnCreateMenu {
    onCreateMenu {
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
export const onUpdateMenu = /* GraphQL */ `
  subscription OnUpdateMenu {
    onUpdateMenu {
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
export const onDeleteMenu = /* GraphQL */ `
  subscription OnDeleteMenu {
    onDeleteMenu {
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
export const onCreateMasterSubscription = /* GraphQL */ `
  subscription OnCreateMasterSubscription {
    onCreateMasterSubscription {
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
export const onUpdateMasterSubscription = /* GraphQL */ `
  subscription OnUpdateMasterSubscription {
    onUpdateMasterSubscription {
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
export const onDeleteMasterSubscription = /* GraphQL */ `
  subscription OnDeleteMasterSubscription {
    onDeleteMasterSubscription {
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
export const onCreateDeliverySubscription = /* GraphQL */ `
  subscription OnCreateDeliverySubscription {
    onCreateDeliverySubscription {
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
export const onUpdateDeliverySubscription = /* GraphQL */ `
  subscription OnUpdateDeliverySubscription {
    onUpdateDeliverySubscription {
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
export const onDeleteDeliverySubscription = /* GraphQL */ `
  subscription OnDeleteDeliverySubscription {
    onDeleteDeliverySubscription {
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
export const onCreatePlan = /* GraphQL */ `
  subscription OnCreatePlan {
    onCreatePlan {
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
export const onUpdatePlan = /* GraphQL */ `
  subscription OnUpdatePlan {
    onUpdatePlan {
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
export const onDeletePlan = /* GraphQL */ `
  subscription OnDeletePlan {
    onDeletePlan {
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
