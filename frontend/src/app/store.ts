import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/usersSlice";
import announcmentReducer from "../slices/announcmentsSlice";
import quizReducer from "../slices/quizesSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const userPersistConfig = {
  key: "user",
  storage,
};

const persistedReducerUser = persistReducer(userPersistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedReducerUser,
    announcment: announcmentReducer,
    quiz: quizReducer,
  },
});

export default store;
export const persistor = persistStore(store);
