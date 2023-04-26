import { configureStore } from '@reduxjs/toolkit';

import user from './slices/user';
import birds from './slices/birds';

const isProduction = process.env.REACT_APP_ENV !== 'production';

export const store = configureStore({
  devTools: !isProduction,
  reducer: {
    user,
    birds,
  },
});
