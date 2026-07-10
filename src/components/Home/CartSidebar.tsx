import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { FastForward, ShoppingBagIcon, XIcon } from "lucide-react";

const CartSidebar = () => {

    const currency = import.meta.env.VITE_CURRENCY_SYMBOL || "$";


    const { items, updateQuantity, removeFromCart, cartTotal, isCartOpen, setIsCartOpen } = useCart()

    const navigate = useNavigate()

    if (!isCartOpen) return null

    const deliveryFee = cartTotal > 20 ? 0 : 1.99;
    const grandTotal = cartTotal + deliveryFee

    return (
        <>

            {/* overlay */}

            <div onClick={() => setIsCartOpen(false)} className="fixed inset-0 bg-block/40 z-50 transition-opacity" />


            {/* sidebar */}

            <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col animate-slide-in-right">

                {/* header */}
                <div className="flex items-center justify-between p-5 border-b border-app-border">

                    <div className="flex items-center gap-2 ">

                        <ShoppingBagIcon className="size-5" />


                        <h2 className="text-lg font-medium">Your cart have a </h2>

                        <span>{items.length} items</span>


                    </div>

                    <button className="p-2 rounded-xl hover:bg-app-cream transition-colors" onClick={() => setIsCartOpen(false)}>
                        <XIcon className="size-5" />
                    </button>
                </div>

                {/* items */}

                

            </div>


        </>

    )
}

export default CartSidebar