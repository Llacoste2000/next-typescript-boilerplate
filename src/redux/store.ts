import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { persistStore } from "redux-persist";

import rootReducer from "./reducers";

const store = configureStore({
    reducer: rootReducer,
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export { store, persistor };
