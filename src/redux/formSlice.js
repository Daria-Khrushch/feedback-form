// import { createSlice } from '@reduxjs/toolkit';

// export const formSlice = createSlice({
//     name: "form",
//     initialState: {
//         name: "",
//     email: "",
//     feedback: "",
//     },
//     reducers:{},
//     extraReducers: {
//         [fetchFormData.fulfilled]: (state, action) => {
//             state.form = action.payload;
//         },
//         [fetchFormData.rejected]: (state) => {
//             state.form = null;
//         },
//     }
// });

// // export const selectForm = (state) => state.form.form;
// export const formReducer = formSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
    name: "form",
    initialState: {
        form: null,
    },
    reducers: {
        sendMessage: (state, action) => {
            state.form = action.payload;
        },
    },
});

export const { sendMessage } = formSlice.actions;
export const selectForm = (state) => state.form.form;
export default formSlice.reducer;