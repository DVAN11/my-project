import { createContext, useContext,  useState } from "react";
import { toast } from 'react-toastify';

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState(localStorage.getItem("FOOD") ? JSON.parse(localStorage.getItem("FOOD")) : [])
    const handleAddCart = (product, count) => {
        const newCart = [...cart];
        const checkIndex = cart.findIndex((item) => item.id === product.id)
        if(checkIndex >= 0){
            newCart[checkIndex].quantity += count;
        }
        else{
            product.quantity = count;
            newCart.push(product);
        }
        setCart(newCart);
        localStorage.setItem("FOOD", JSON.stringify(newCart));
        toast.success(`Added to the cart!`, {
            position: "top-center",
            autoClose: 2000,
          });
    }
    const handleQuantity = (type, index) => {
        const newCart = [...cart];
        if(type === "plus"){
            newCart[index].quantity ++;
        }
        else{
            newCart[index].quantity = newCart[index].quantity > 1 ? newCart[index].quantity - 1 : newCart[index].quantity;
        }
        setCart(newCart);
        localStorage.setItem("FOOD", JSON.stringify(newCart));
        toast.success(`Quantity changed!`, {
            position: "top-center",
            autoClose: 2000,
          });
    }
    const handleDele = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1); 
        setCart(newCart);
        localStorage.setItem("FOOD", JSON.stringify(newCart));
        toast.error(`Removed from the cart.`, {
            position: "top-center",
            autoClose: 2000,
        });
        if (newCart.length === 0) {
            toast.info("Cart is now empty.", {
                position: "top-center",
                autoClose: 2000,
            });
        }
    };
    
    const [showModalBook, setShowModalBook] = useState(false);
    const handleShowModalBook = () => {
      setShowModalBook(true);
  };
  
  const handleCloseModalBook = () => {
      setShowModalBook(false);
  };
    return <CartContext.Provider value={{cart, handleAddCart, handleQuantity, handleDele, handleShowModalBook, handleCloseModalBook, showModalBook, setCart }}>{children}</CartContext.Provider>
}
 const UseCart = () => {
    return useContext(CartContext);
 }
 export { CartProvider, UseCart};