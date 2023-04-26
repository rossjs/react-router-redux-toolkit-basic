import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: {
    id: '',
    name: '',
    email: '',
  },
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload: userDetails }) => {
      state.details = userDetails;
      state.isLoggedIn = true;
    },
    resetUser: () => initialState,
  },
});

// action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

// selectors
export const getUserLoginStatus = (state) => Boolean(state.user.isLoggedIn);
export const getUserDetails = (state) => state.user.details;

// export reducer to be added to store
export default userSlice.reducer;
