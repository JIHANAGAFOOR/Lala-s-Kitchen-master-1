const idiyappam = require('./assets/idiyappam.jpg')
const RiceAndFish = require('./assets/RiceAndFish.jpg')
const PorottaAndBeef = require('./assets/PorottaAndBeef.jpg')
const DosaAndSambar = require('./assets/DosaAndSambar.jpg')
const RiceAndVegCurry = require('./assets/RiceAndVegCurry.jpg')
const ChapatiAndGreenPeas = require('./assets/ChapatiAndGreenPeas.jpg')
const IdiyappamAndVegStew = require('./assets/IdiyappamAndVegStew.jpg')
const CurriedRice = require('./assets/CurriedRice.jpg')
const WheatDosa = require('./assets/WheatDosa.jpg')
const IdliAndSambar = require("./assets/IdliAndSambar.jpg")
const ChappathiAndVegCurry = require('./assets/ChappathiAndVegCurry.jpg')
const RiceAndCurd = require('./assets/RiceAndCurd.jpg')
const NadanChickenCurry = require('./assets/NadanChickenCurry.jpg')
const BeefChilly = require("./assets/BeefChilly.jpg")
const BeefFry = require("./assets/BeefFry.jpg")
const ChoclateMilkShake = require("./assets/ChoclateMilkShake.jpg")
const Gopi65 = require("./assets/Gopi65.jpg")
const FishFry = require("./assets/FishFry.jpg")
const ChickenBiriyani = require("./assets/ChickenBiriyani.jpg")

export const ItemsDataEasyFilter = [
    {
        id: 1,
        name: "Semi-Gravy",
        selected: false
    },
    {
        id: 2,
        name: "Dry-Fry",
        selected: false
    },
    {
        id: 3,
        name: "Gravy/Curry",
        selected: false
    },
    {
        id: 4,
        name: "Chicken",
        selected: false
    },
    {
        id: 5,
        name: "Fish",
        selected: false
    },
    {
        id: 6,
        name: "Beef",
        selected: false
    }
]
export const ItemFull = [
    {
        id: 1,
        typeOfMeal: "Non-Veg",
        type: "Gravy",
        name: "Naadan Chicken Curry",
        ingredient: "Chicken",
        quantity: 0,
        price: 160,
        animation: false,
        image: NadanChickenCurry,
    },
    {
        id: 2,
        typeOfMeal: "Non-Veg",
        type: "Dry-Fry",
        name: "Beef Chilly",
        ingredient: "Beef",
        quantity: 0,
        price: 90,
        animation: false,
        image: BeefChilly,
    },
    {
        id: 3,
        typeOfMeal: "Veg",
        type: "Drinks",
        name: "Choclate Milk Shake",
        ingredient: "Choclate",
        quantity: 0,
        price: 80,
        animation: false,
        image: ChoclateMilkShake,
    },
    {
        id: 4,
        typeOfMeal: "Non-Veg",
        type: "Main Course",
        name: "Chicken Biriyani",
        ingredient: "Chicken",
        quantity: 0,
        price: 140,
        animation: false,
        image: ChickenBiriyani
    },
    {
        id: 5,
        typeOfMeal: "Non-Veg",
        type: "Semi-Gravy",
        name: "Beef Fry",
        ingredient: "Beef",
        quantity: 0,
        price: 100,
        animation: false,
        image: BeefFry
    },
    {
        id: 6,
        typeOfMeal: "Non-Veg",
        type: "Dry-Fry",
        name: "Fish Fry",
        ingredient: "Fish",
        quantity: 0,
        price: 40,
        animation: false,
        image: FishFry,
    },
    {
        id: 7,
        typeOfMeal: "Veg",
        type: "Dry-Fry",
        name: "Gopi 65",
        ingredient: "Cauliflower",
        quantity: 0,
        price: 60,
        animation: false,
        image: Gopi65
    },


]
export const Category = [
    {
        id: 0,
        category: 'Regular'
    },
    {
        id: 1,
        category: "Healthy"
    },
    {
        id: 2,
        category: "Diabetic"
    }
]
export const Days = [
    {
        id: 0,
        day: 'Sunday',
    },
    {
        id: 1,
        day: 'Monday',
    },
    {
        id: 2,
        day: 'Tuesday',
    },
    {
        id: 3,
        day: 'Wednesday',
    },
    {
        id: 4,
        day: 'Thursday',
    },
    {
        id: 5,
        day: 'Friday',
    },
    {
        id: 6,
        day: 'Saturday',
    },

]

export const MealCorrected = [
    {
        "id": 1,
        "type": "Non-Veg",
        "day": "Sunday",
        "slot": "breakfast",
        "category": "Regular",
        "itemName": "Appam -3 Nos",
        "Curry": "chicken Stew",
        "image": idiyappam,
        "cost":50

    },
    {
        "id": 2,
        "type": "Non-Veg",
        "day": "Sunday",
        "slot": "breakfast",
        "category": "Healthy",
        "itemName": "Plain Dosa",
        "Curry": "Sambar",
        "image": DosaAndSambar,
        "cost":50

    },
    {
        "id": 3,
        "type": "Non-Veg",
        "day": "Sunday",
        "slot": "breakfast",
        "category": "Diabetic",
        "itemName": "Idiyappam ",
        "Curry": "Veg Stew",
        "image": IdiyappamAndVegStew,
        "cost":50

    },
    {
        "id": 4,
        "type": "Veg",
        "day": "Sunday",
        "slot": "breakfast",
        "category": "Regular",
        "itemName": "Idli - 3 Nos ",
        "Curry": "Sambar",
        "image": IdliAndSambar,
        "cost":50

    }, {
        "id": 5,
        "type": "Veg",
        "day": "Sunday",
        "slot": "breakfast",
        "category": "Healthy",
        "itemName": "Plain Dosa ",
        "Curry": "sambar",
        "image": DosaAndSambar,
        "cost":50

    },
    {
        "id": 6,
        "type": "Veg",
        "day": "Sunday",
        "slot": "breakfast",
        "category": "Diabetic",
        "itemName": "Idiyappam ",
        "Curry": "Veg Stew",
        "image": IdiyappamAndVegStew,
        "cost":50

    },


    {
        "id": 7,
        "type": "Non-Veg",
        "day": "Sunday",
        "category": "Regular",
        "slot": "lunch",
        "itemName": "Rice - 1 Portion",
        "Curry": "Fish Fry, Curry and Dishes",
        "image": RiceAndFish,
        "cost":50

    },
    {
        "id": 8,
        "type": "Non-Veg",
        "day": "Sunday",
        "category": "Healthy",
        "slot": "lunch",
        "itemName": "Rice - 1 Portion",
        "Curry": "Veg Curries and salads",
        "image": RiceAndVegCurry,
        "cost":50

    },
    {
        "id": 9,
        "type": "Non-Veg",
        "day": "Sunday",
        "category": "Diabetic",
        "itemName": "Curried Rice",
        "slot": "lunch",
        "Curry": "salads",
        "image": CurriedRice,
        "cost":50

    },
    {
        "id": 10,
        "type": "Veg",
        "day": "Sunday",
        "category": "Regular",
        "slot": "lunch",
        "itemName": "Rice - 1 Portion",
        "Curry": "Curd,Curry and Salads",
        "image": RiceAndCurd,
        "cost":50

    },
    {
        "id": 11,
        "type": "Veg",
        "day": "Sunday",
        "category": "Healthy",
        "slot": "lunch",
        "itemName": "Rice - 1 Portion",
        "Curry": "Curd",
        "image": RiceAndVegCurry,
        "cost":50

    },
    {
        "id": 12,
        "type": "Veg",
        "day": "Sunday",
        "slot": "lunch",
        "category": "Diabetic",
        "itemName": "Curried Rice",
        "Curry": "salads",
        "image": CurriedRice,
        "cost":50

    },
    {
        "id": 13,
        "type": "Non-Veg",
        "day": "Sunday",
        "slot": "dinner",
        "category": "Regular",
        "itemName": "Porotta",
        "Curry": "Beef Fry",
        "image": PorottaAndBeef,
        "cost":50

    },
    {
        "id": 14,
        "type": "Non-Veg",
        "day": "Sunday",
        "category": "Healthy",
        "slot": "dinner",
        "itemName": "Chappathi",
        "Curry": "Green peas Curry",
        "image": ChapatiAndGreenPeas,
        "cost":50

    },
    {
        "id": 15,
        "type": "Non-Veg",
        "day": "Sunday",
        "slot": "dinner",
        "category": "Diabetic",
        "itemName": "Wheat Dosa",
        "Curry": "Chutneys",
        "image": WheatDosa,
        "cost":50

    },
    {
        "id": 16,
        "type": "Veg",
        "day": "Sunday",
        "category": "Regular",
        "slot": "dinner",
        "itemName": "Chappathi",
        "Curry": "Mixed Veg Curry",
        "image": ChappathiAndVegCurry,
        "cost":50

    },
    {
        "id": 17,
        "type": "Veg",
        "day": "Sunday",
        "category": "Healthy",
        "slot": "dinner",
        "itemName": "Chappathi",
        "Curry": "Green peas Curry",
        "image": ChapatiAndGreenPeas,
        "cost":50

    },
    {
        "id": 18,
        "type": "Veg",
        "day": "Sunday",
        "slot": "dinner",
        "category": "Diabetic",
        "itemName": "Wheat Dosa",
        "Curry": "Chutneys",
        "image": WheatDosa,
        "cost":50

    },
]




export const Meal = {
    "breakfast":
        [{
            "id": 1,
            "type": "Non-Veg",
            "day": "Sunday",
            "category": "Regular",
            "itemName": "Appam -3 Nos",
            "Curry": "chicken Stew",
            "image": idiyappam,

        },
        {
            "id": 2,
            "type": "Non-Veg",
            "day": "Sunday",
            "category": "Healthy",
            "itemName": "Plain Dosa",
            "Curry": "Sambar",
            "image": DosaAndSambar

        },
        {
            "id": 3,
            "type": "Non-Veg",
            "day": "Sunday",
            "category": "Diabetic",
            "itemName": "Idiyappam ",
            "Curry": "Veg Stew",
            "image": IdiyappamAndVegStew

        },
        {
            "id": 4,
            "type": "Veg",
            "day": "Sunday",
            "category": "Regular",
            "itemName": "Idli - 3 Nos ",
            "Curry": "Sambar",
            "image": IdliAndSambar

        }, {
            "id": 5,
            "type": "Veg",
            "day": "Sunday",
            "category": "Healthy",
            "itemName": "Plain Dosa ",
            "Curry": "sambar",
            "image": DosaAndSambar

        },
        {
            "id": 6,
            "type": "Veg",
            "day": "Sunday",
            "category": "Diabetic",
            "itemName": "Idiyappam ",
            "Curry": "Veg Stew",
            "image": IdiyappamAndVegStew

        },
        ],
    "Lunch": [

        {
            "id": 1,
            "type": "Non-Veg",
            "day": "Sunday",
            "category": "Regular",
            "itemName": "Rice - 1 Portion",
            "Curry": "Fish Fry, Curry and Dishes",
            "image": RiceAndFish

        },
        {
            "id": 2,
            "type": "Non-Veg",
            "day": "Sunday",
            "category": "Healthy",
            "itemName": "Rice - 1 Portion",
            "Curry": "Veg Curries and salads",
            "image": RiceAndVegCurry

        },
        {
            "id": 3,
            "type": "Non-Veg",
            "day": "Sunday",
            "category": "Diabetic",
            "itemName": "Curried Rice",
            "Curry": "salads",
            "image": CurriedRice

        },
        {
            "id": 4,
            "type": "Veg",
            "day": "Sunday",
            "category": "Regular",
            "itemName": "Rice - 1 Portion",
            "Curry": "Curd,Curry and Salads",
            "image": RiceAndCurd

        },
        {
            "id": 5,
            "type": "Veg",
            "day": "Sunday",
            "category": "Healthy",
            "itemName": "Rice - 1 Portion",
            "Curry": "Curd",
            "image": RiceAndVegCurry

        },
        {
            "id": 6,
            "type": "Veg",
            "day": "Sunday",
            "category": "Diabetic",
            "itemName": "Curried Rice",
            "Curry": "salads",
            "image": CurriedRice

        }
    ],
    "Dinner": [
        {
            "id": 1,
            "type": "Non-Veg",
            "day": "Sunday",
            "category": "Regular",
            "itemName": "Porotta",
            "Curry": "Beef Fry",
            "image": PorottaAndBeef

        },
        {
            "id": 2,
            "type": "Non-Veg",
            "day": "Sunday",
            "category": "Healthy",
            "itemName": "Chappathi",
            "Curry": "Green peas Curry",
            "image": ChapatiAndGreenPeas

        },
        {
            "id": 3,
            "type": "Non-Veg",
            "day": "Sunday",
            "category": "Diabetic",
            "itemName": "Wheat Dosa",
            "Curry": "Chutneys",
            "image": WheatDosa

        },
        {
            "id": 4,
            "type": "Veg",
            "day": "Sunday",
            "category": "Regular",
            "itemName": "Chappathi",
            "Curry": "Mixed Veg Curry",
            "image": ChappathiAndVegCurry

        },
        {
            "id": 5,
            "type": "Veg",
            "day": "Sunday",
            "category": "Healthy",
            "itemName": "Chappathi",
            "Curry": "Green peas Curry",
            "image": ChapatiAndGreenPeas

        },
        {
            "id": 6,
            "type": "Veg",
            "day": "Sunday",
            "category": "Diabetic",
            "itemName": "Wheat Dosa",
            "Curry": "Chutneys",
            "image": WheatDosa

        },
    ]
}


