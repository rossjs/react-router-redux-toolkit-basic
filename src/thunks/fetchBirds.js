import { createAsyncThunk } from '@reduxjs/toolkit';
import { fakeFetch } from '../utils/fakeFetch';
import { setBirdCatalog } from '../slices/birds';

export const fetchBirdsThunk = createAsyncThunk('birds/fetchBirds', async (payload, thunkAPI) => {
  try {
    const resp = await fakeFetch('/api/birds');
    if (!resp.ok) {
      throw new Error('issue fetching birds', resp.status);
    }
    const data = await resp.json();
    thunkAPI.dispatch(setBirdCatalog(data));
  } catch (e) {
    // TODO: retry fetch and/or notify user
  }
});
