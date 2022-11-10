import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import addonSlice from './addons'
import mealSlice from './meals'
import SubscriptionSlice from './subscription'
import userSlice from './User'

const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    meal: mealSlice.reducer,
    addon: addonSlice.reducer,
    subscription: SubscriptionSlice.reducer,
    user: userSlice.reducer,
  }
})
export default store