import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { sellerReducer } from "./reducers/seller";
import { productReducer } from "./reducers/product";
import { eventReducer } from "./reducers/event";
import { cartReducer } from "./reducers/cart";
import { wishlistReducer } from "./reducers/wishlist";
import { orderReducer } from "./reducers/order";
import { careerReducer } from "./reducers/career";
import { applyCareerReducer } from "./reducers/applyCareer";
import { mailReducer } from "./reducers/mail";


const Store = configureStore({
  reducer: {
    user: userReducer,
    career: careerReducer,
    applyCareer: applyCareerReducer,
    seller: sellerReducer,
    products: productReducer,
    events: eventReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    order: orderReducer,
    mail: mailReducer,
  },
});

export default Store;
