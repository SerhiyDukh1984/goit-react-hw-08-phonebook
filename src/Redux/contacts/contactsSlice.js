// import { createSlice } from '@reduxjs/toolkit';
// import { getContacts, addContacts, removeContacts } from './contactsOperation';

// const contactsSlice = createSlice({
//   name: 'contact',
//   initialState: {
//     items: [],
//     filter: '',
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     filterReduser(state, { payload }) {
//       state.filter = payload;
//     },
//   },

//   extraReducers: {
//     [getContacts.pending]: (state, { payload }) => {
//       return {
//         ...state,
//         items: [...state.items, payload],
//         isLoading: false,
//         error: null,
//       };
//     },
//     [getContacts.fulfilled]: (state, { payload }) => {
//       return {
//         ...state,
//         isLoading: false,
//         items: payload,
//       };
//     },
//     [getContacts.rejected]: (state, { payload }) => {
//       return {
//         ...state,
//         isLoading: false,
//         error: payload,
//       };
//     },
//     [addContacts.pending]: (state, { payload }) => {
//       return {
//         ...state,
//         isLoading: true,
//         error: null,
//       };
//     },
//     [addContacts.fulfilled]: (state, { payload }) => {
//       return {
//         ...state,
//         isLoading: false,
//         items: [...state.items, payload],
//       };
//     },
//     [addContacts.rejected]: (state, { payload }) => {
//       return {
//         ...state,
//         isLoading: false,
//         error: payload,
//       };
//     },
//     [removeContacts.pending]: state => {
//       state.isLoading = true;
//       state.error = null;
//     },
//     [removeContacts.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.items = state.items.filter(item => {
//         item.id !== payload;
//       });
//     },
//     [removeContacts.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },
//   },
// });

// export default contactsSlice.reducer;
