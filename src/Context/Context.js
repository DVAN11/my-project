import { createContext, useContext,  useState } from "react";

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
        localStorage.setItem("FOOD", JSON.stringify(newCart))
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
        localStorage.setItem("CART", JSON.stringify(newCart))
    }
    const handleDele = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        localStorage.setItem("CART", JSON.stringify(newCart))
    }
    const [showModalBook, setShowModalBook] = useState(false);
    const handleShowModalBook = () => {
      setShowModalBook(true);
  };
  
  const handleCloseModalBook = () => {
      setShowModalBook(false);
  };
    return <CartContext.Provider value={{cart, handleAddCart, handleQuantity, handleDele, handleShowModalBook, handleCloseModalBook, showModalBook }}>{children}</CartContext.Provider>
}
 const UseCart = () => {
    return useContext(CartContext);
 }
 export { CartProvider, UseCart};