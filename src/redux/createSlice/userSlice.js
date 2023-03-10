import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: {
            allUsers: null,
            isFetching: false,
            error: false
        },
        msg: ""
    },
    reducers: {
        getUsersStart: (state) => {
            state.users.isFetching = true
        },
        getUsersSuccess: (state, action) => {
            state.users.isFetching = false
            state.users.allUsers = action.payload
            state.users.error = false
        },
        getUsersFailed: (state) => {
            state.users.isFetching = false
            state.users.error = true
        },
        //delete Users
        deleteUsersStart: (state) => {
            state.users.isFetching = true
        },
        deleteUsersSuccess: (state, action) => {
            state.users.isFetching = false
            state.msg = action.payload
            state.users.error = false
        },
        deleteUsersFailed: (state, action) => {
            state.users.isFetching = false
            state.msg = action.payload
            state.users.error = true
        }
    }
})

export const {
    getUsersStart,
    getUsersSuccess,
    getUsersFailed,
    deleteUsersStart,
    deleteUsersSuccess,
    deleteUsersFailed
} = userSlice.actions
export default userSlice.reducer