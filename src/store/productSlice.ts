import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cartKeyName, getItem, setItem, wishlistKeyName } from "../Utils/Generals";
import { ProductType } from "../components/ProductCart";


export const productWhishListSlice = createSlice({

    name : 'wishlist',

    initialState : Array<ProductType>,

    reducers : {

        fillWishList : (state, action : PayloadAction<string>) => {

            state = JSON.parse(action.payload);

            return state;
        },

        addToWishlist : (state, action : PayloadAction<ProductType>) => {

            const getProducts = getItem(wishlistKeyName);

            if (getProducts) {
                const oldProducts = JSON.parse(getProducts);
                const newProducts : ProductType[] = [...oldProducts, action.payload];

                setItem(wishlistKeyName, newProducts);
                state = newProducts;
                return state;
            }

            state = [action.payload];

            setItem(wishlistKeyName, [action.payload]); 

            return state;
        },

        deleteProductInWishlist(state, action : PayloadAction<ProductType>) {

            state = state.filter((product) => product.id != action.payload.id);
            setItem(wishlistKeyName, state);
            return state;
        }
    }

});

export const productCartSlice = createSlice({

    name : 'cart',

    initialState : Array<ProductType>,

    reducers : {

        fillShoppingCart : (state, action : PayloadAction<string>) => {

            state = JSON.parse(action.payload);

            return state;
        },

        addToShoppingCart : (state, action : PayloadAction<ProductType>) => {

            const getProducts = getItem(cartKeyName);

            if (getProducts) {
                const oldProducts = JSON.parse(getProducts);
                const newProducts : ProductType[] = [...oldProducts, action.payload];

                setItem(cartKeyName, newProducts);
                state = newProducts;
                return state;
            }

            state = [action.payload];

            setItem(cartKeyName, [action.payload]); 

            return state;
        },

        deleteProductInCart(state, action : PayloadAction<ProductType>) {

            state = state.filter((product) => product.id != action.payload.id);
            setItem(cartKeyName, state);
            return state;
        },
    }

});


export const { fillWishList, addToWishlist, deleteProductInWishlist } = productWhishListSlice.actions;

export const {fillShoppingCart, addToShoppingCart, deleteProductInCart} = productCartSlice.actions;