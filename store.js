import { createSlice, configureStore } from '@reduxjs/toolkit';

// Tạo slice để quản lý contacts
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchContactsLoading: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchContactsSuccess: (state, action) => {
      state.contacts = action.payload;
      state.loading = false;
      state.error = false;
    },
    fetchContactsError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

// Export các actions để dùng ở các màn
export const {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
} = contactsSlice.actions;

// Export store
const store = configureStore({
  reducer: contactsSlice.reducer,
});

export default store;
