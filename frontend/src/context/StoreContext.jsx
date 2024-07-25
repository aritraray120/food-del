import { createContext, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null);

function StoreContextProvider(props) {

    const [cartItems, setCartItems] = useState({});

    const contextValue = {

        food_list


    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;