const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  catalog: [],
  spotted: [],
};

const birdsSlice = createSlice({
  name: 'birds',
  initialState,
  reducers: {
    setBirdCatalog: (state, { payload: birdsList }) => {
      state.catalog = birdsList;
    },
    addBirdToSpotted: (state, { payload: birdName }) => {
      state.spotted.push(birdName);
    },
    removeBirdFromSpotted: (state, { payload: birdName }) => {
      state.spotted = state.spotted.filter((bird) => bird !== birdName);
    },
  },
});

// action creators are generated for each case reducer function
export const {
  setBirdCatalog,
  addBirdToSpotted,
  removeBirdFromSpotted,
} = birdsSlice.actions;

// selectors
export const getBirdCatalog = (state) => state.birds.catalog;
export const getBirdsSpotted = (state) => state.birds.spotted;

// export reducer to be added to store
export default birdsSlice.reducer;
