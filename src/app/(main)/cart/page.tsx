"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";

export default function CartPage() {
    const { cart, updateQuantity, removeFromCart, subtotal, totalItems } = useCart();

    const shipping = subtotal > 499 ? 0 : 50;
    const total = subtotal + shipping;

    if (cart.length === 0) {
        return (
            <div className="min-h-screen pt-32 pb-20 bg-neutral-50 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="bg-white p-12 rounded-3xl shadow-sm border border-neutral-100 max-w-lg mx-auto">
                        <div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShoppingBag size={32} className="text-neutral-400" />
                        </div>
                        <h1 className="text-3xl font-black text-neutral-900 mb-4 text-center">Your cart is empty</h1>
                        <p className="text-neutral-500 mb-8 max-w-sm mx-auto">
                            Look like you haven't added anything to your cart yet. Explore our delicious chips and snacks!
                        </p>
                        <Link
                            href="/chips"
                            className="inline-flex items-center justify-center bg-green-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-800 transition-all active:scale-95"
                        >
                            Explore Products
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 bg-neutral-50 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                    <Link href="/chips" className="p-2 bg-white rounded-full shadow-sm hover:text-green-700 transition-colors">
                        <ArrowLeft size={20} />
                    </Link>
                    <h1 className="text-4xl font-black text-neutral-900">Your Shopping Bag</h1>
                    <span className="text-neutral-400 font-bold ml-2">({totalItems} items)</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Cart Items List */}
                    <div className="lg:col-span-2 space-y-4">
                        {cart.map((item) => (
                            <div
                                key={`${item.id}-${item.weight}`}
                                className="bg-white p-4 md:p-6 rounded-3xl border border-neutral-100 flex flex-col md:flex-row items-center gap-6 shadow-sm"
                            >
                                {/* Product Image */}
                                <div className="relative w-24 h-24 md:w-32 md:h-32 bg-neutral-50 rounded-2xl p-4 shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-xl font-bold text-neutral-900 mb-1">{item.name}</h3>
                                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4">
                                        <span className="px-2 py-0.5 bg-neutral-100 text-neutral-500 text-xs font-bold rounded uppercase tracking-wider">
                                            {item.weight}
                                        </span>
                                        <span className="text-neutral-400 text-sm font-medium">₹{item.price} / pack</span>
                                    </div>

                                    <div className="flex items-center justify-center md:justify-start gap-6">
                                        {/* Quantity Selector */}
                                        <div className="flex items-center bg-neutral-100 rounded-xl p-1 gap-4">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.weight, item.quantity - 1)}
                                                className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm hover:text-green-700 transition-all active:scale-90"
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="font-bold text-neutral-900 min-w-[2ch] text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.weight, item.quantity + 1)}
                                                className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm hover:text-green-700 transition-all active:scale-90"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(item.id, item.weight)}
                                            className="text-neutral-400 hover:text-red-500 transition-colors p-2"
                                            title="Remove Item"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* Subtotal */}
                                <div className="text-right shrink-0">
                                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Subtotal</p>
                                    <span className="text-2xl font-black text-neutral-900">₹{item.price * item.quantity}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm sticky top-32">
                            <h2 className="text-2xl font-black text-neutral-900 mb-8">Order Summary</h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between items-center pb-4 border-b border-neutral-50">
                                    <span className="text-neutral-500 font-medium">Items Subtotal</span>
                                    <span className="text-neutral-900 font-bold">₹{subtotal}</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-neutral-50">
                                    <span className="text-neutral-500 font-medium">Shipping</span>
                                    <span className={shipping === 0 ? "text-green-600 font-bold" : "text-neutral-900 font-bold"}>
                                        {shipping === 0 ? "FREE" : `₹${shipping}`}
                                    </span>
                                </div>
                                {shipping !== 0 && (
                                    <div className="bg-green-50 p-3 rounded-xl">
                                        <p className="text-[10px] text-green-700 font-bold uppercase tracking-wider mb-1">PRO TIP</p>
                                        <p className="text-xs text-green-600">Add ₹{500 - subtotal} more to get <span className="font-bold">FREE SHIPPING</span></p>
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-between items-center mb-10">
                                <span className="text-xl font-black text-neutral-900 uppercase tracking-tight">Total</span>
                                <span className="text-3xl font-black text-neutral-900">₹{total}</span>
                            </div>

                            <button className="w-full bg-neutral-900 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-green-700 transition-all active:scale-[0.98] shadow-lg mb-4">
                                Proceed to Checkout
                            </button>
                            <p className="text-center text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                                Secure SSL Encryption • Multiple Payment Options
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
