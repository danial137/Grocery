// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { useCart } from "../context/CartContext"
// import { dummyAddressData } from "../assets/assets"
// import type { Address } from "../types"
// import { ArrowLeft, CheckIcon, CreditCardIcon, MapPinIcon } from "lucide-react"


// const CheckOut = () => {

//   const navigate = useNavigate()
//   const currency = import.meta.env.VITE_CURRENCY_SYMBOL || "$"


//   const { items, cartTotal } = useCart()

//   const { user } = { user: { addresses: dummyAddressData } }

//   const [step, setStep] = useState("address")
//   const [loading, setLoading] = useState(false)

//   const [address, setAddress] = useState<Address>({
//     _id: "",
//     label: "home",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//     isDefault: false,
//     lat: 0,
//     lng: 0
//   })


//   const [paymentMethod, setPaymentMethod] = useState('card')

//   const deliveryFe = cartTotal > 20 ? 0 : 1.99
//   const tax = cartTotal * 0.08
//   const total = cartTotal + deliveryFe + tax

//   const steps: { Key: string; label: string; icon: typeof MapPinIcon }[] = [
//     { Key: "address", label: "Address", icon: MapPinIcon },
//     { Key: "apayment", label: "payment", icon: CreditCardIcon },
//     { Key: "review", label: "review", icon: CheckIcon },
//   ]

//   const handleplaceOrder = async () => {
//     setLoading(true)
//     navigate("/orders")
//   }


//   useState(() => {
//     if (user?.addresses.length) {
//       const defaultAddr = user.addresses.find((a) => a.isDefault) || user.addresses[0]
//       setAddress({
//         _id: defaultAddr?._id,
//         label: defaultAddr?.label,
//         address: defaultAddr?.address,
//         city: defaultAddr?.city,
//         state: defaultAddr?.zip,
//         zip: defaultAddr?.zip,
//         isDefault: defaultAddr?.isDefault,
//         lat: defaultAddr?.lat,
//         lng: defaultAddr?.lng,

//       })
//     }
//   })


//   if (items.length === 0) {
//     return (
//       <div className="min-h-screen bg-app-cream flex-center">

//         <div className="text-center">

//           <h2 className="text-xl font-semibold text-app-green mb-2">Your cart is empty</h2>

//           <p className="text-sm text-app-text-light mb-4">Add some products to checkout</p>

//           <button onClick={() => navigate('/products')} className="px-5 py-2.5 bg-app-green text-white text-sm font-medium rounded-xl hover:bg-app-green-light transition-colors">
//             Browse products
//           </button>

//         </div>

//       </div>
//     )
//   }


//   return (
//     <div className="min-h-screen bg-app-cream">

//       <div className="max-4xl mx-auto sm:px-6 lg:px-8 py-8">


//         <button onClick={() => navigate(-1)} className="">

//           <ArrowLeft className="size-4" /> Back


//         </button>

//         <h1 className="text-2xl font-semibold text-app-green mb-8">Checkout</h1>

//         {/* steps */}

//         <div className="flex items-center gap-2 mb-8">


//           {steps.map((s, i) => (
//             <div key={s.Key} className="flex items-center gap-2">

//               <button className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${step === s.Key ? "bg-app-green text-white" : "bg-white text-app-text-light"}`}>

//                 <s.icon className="size-4" /> {s.label}

//               </button>

//             </div>
//           ))}


//         </div>

//       </div>



//     </div>
//   )
// }

// export default CheckOut