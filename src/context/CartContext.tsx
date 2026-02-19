"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface CartItem {
    id: number;
    name: string;
    image: string;
    price: number;
    weight: string;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: CartItem) => void;
    removeFromCart: (id: number, weight: string) => void;
    updateQuantity: (id: number, weight: string, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    // Load cart from localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem("alan_chips_cart");
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (error) {
                console.error("Failed to parse cart from localStorage", error);
            }
        }
        setIsInitialized(true);
    }, []);

    // Save cart to localStorage
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem("alan_chips_cart", JSON.stringify(cart));
        }
    }, [cart, isInitialized]);

    const addToCart = (product: CartItem) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(
                (item) => item.id === product.id && item.weight === product.weight
            );

            if (existingItemIndex > -1) {
                const newCart = [...prevCart];
                newCart[existingItemIndex].quantity += product.quantity;
                return newCart;
            }

            return [...prevCart, product];
        });
    };

    const removeFromCart = (id: number, weight: string) => {
        setCart((prevCart) => prevCart.filter((item) => !(item.id === id && item.weight === weight)));
    };

    const updateQuantity = (id: number, weight: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(id, weight);
            return;
        }

        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.weight === weight ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalItems,
                subtotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
