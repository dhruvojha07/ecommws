import { Product } from "@/payload-types"
import {create} from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type CartItem = {
    
    product: Product
}
type CartState = {
    items: CartItem[]
    addItem: (product: Product) => void
    removeItem: (productId: string) => void
    clearCart: () => void
}
//use this hook to add,remove items or clear cart.
export const useCart = create<CartState>()(
    persist(
        (set) => ({
            items: [],
            addItem: (product) => set((state) => {
                return {items: [...state.items, {product}]}

            }),
            removeItem: (id) => set((state) => ({
                items: state.items.filter((item) => item.product.id !== id)
            })),
            clearCart: () => set({items: []})
        }), {
            name: "cart-storage",
            storage: createJSONStorage(() => localStorage),

        })
)