import { createContext, useEffect,useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems,setCartItems]=useState({});
    //Add cart
    // const addToCart=(itemId)=>{
    //     if(!cartItems[itemId]){
    //                  setCartItems((prev)=>({
    //            ...prev,[itemId]:1}))
    //                    }
    //        else{
    //         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    //        }
        
    // }
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1, // Ensure each item is tracked separately
        }));
    };
    // //remove cart
    // const removeFromCart=(itemId)=>{
    //     setCartItems((prev)=({...prev,[itemId]:prev[itemId]-1}))
    // }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (prev[itemId] > 1) {
                return { ...prev, [itemId]: prev[itemId] - 1 };
            } else {
                const newCart = { ...prev };
                delete newCart[itemId]; // Remove item if it reaches 0
                return newCart;
            }
        });
    };


const getTotalCartAmount=()=>{
    let totalAmount =0;
    for(const item in cartItems){
        if(cartItems[item]>0){
        let itemInfo =food_list.find((product)=>product.id=== item)
        totalAmount += itemInfo.price*cartItems[item];
    }
    }
return totalAmount;
}


    
    const contextValue = { 
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
     };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
