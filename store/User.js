import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        userDetails: [],
        userImage: "",
        otpSession: null,
        otpUser: null,
    },

    reducers: {
        userDetailsSelected(state, action) {
            console.log(action.payload);
            state.userDetails = action.payload
        },
        otpAuth(state, action) {
            // console.log("aacaaa: " + action.payload.user);
            state.otpSession = action.payload.session
            state.otpUser = action.payload.user
        },
        otpSessionData(state, action) {
            // console.log(action.payload);
            state.otpSession = action.payload
        },
        otpVerify(state, action) {
            // console.log("tttttt");
            // state.otpSession = action.payload.otpSession
            state.otpUser = action.payload.user
        },
        signOut(state, action) {
            console.log("sign out " + action.payload);
            state.otpUser = action.payload
        }
        // userImageSelected
    }
})
export const userActions = userSlice.actions
export default userSlice