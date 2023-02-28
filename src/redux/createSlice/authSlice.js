import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: {
            isFetching: false,
            currenUser: null,
            error: false,
        },
        register: {
            isFetching: false,
            success: false,
            error: false
        },
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false
            state.login.currenUser = action.payload
            state.login.error = false
        },
        loginFail: (state) => {
            state.login.isFetching = false
            state.login.error = true
        },
        registerStart: (state) => {
            state.register.isFetching = true
        },
        registerSuccess: (state) => {
            state.register.isFetching = false
            state.register.success = true
            state.register.error = false
        },
        registerFail: (state) => {
            state.register.isFetching = false
            state.register.success = true
            state.register.error = true
        },
        logOutStart: (state) => {
            state.login.isFetching = true
        },
        logOutSuccess: (state, action) => {
            state.login.isFetching = false
            state.login.currenUser = null
            state.login.error = false
        },
        logOutFailed: (state) => {
            state.login.isFetching = false
            state.login.success = false
            state.login.error = true
        }

    }
})

export const {
    loginStart,
    loginSuccess,
    loginFail,
    registerStart,
    registerSuccess,
    registerFail,
    logOutStart,
    logOutSuccess,
    logOutFailed
} = authSlice.actions
export default authSlice.reducer;