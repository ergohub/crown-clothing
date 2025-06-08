// React Components
import { createContext, useState } from "react";
import SHOP_DATA from '../shop/shop-data.json';

// const products = SHOP_DATA;
export const ProductsContext = createContext({
    product: [],
});

export const ProductsProvider = ({ children }) => {
    const [products] = useState(SHOP_DATA)
    const value = { products }

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}