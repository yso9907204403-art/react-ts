import { useState } from "react";
import { CartContext } from "./CartContext";
import type { CartItem } from "../types/cart";

const CartProvider = ({children}: {children: React.ReactNode}) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // 장바구니에 상품 추가
    const addToCart = (productId: number, qty: number) => {
        setCartItems(prevItems => {
            // 이미 장바구니에 있는 상품인지 검색
            const existingItem = prevItems.find(item => 
                item.productId === productId)
            if(existingItem){
                // 이미 장바구니에 있는 상품(1 증가)
                return prevItems.map(item => 
                    item.productId === productId 
                    ? {...item, qty: item.qty + qty} : item
                )
            }else{
                // 장바구니에 처음으로 담기
                return [...prevItems, {productId, qty}]
            }
        })
    }

    return(
        <CartContext.Provider value={{cartItems, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;