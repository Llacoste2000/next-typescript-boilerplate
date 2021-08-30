import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import counter from "@redux/slices/counter";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["counter"],
};

const rootReducer = combineReducers({ counter });

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
