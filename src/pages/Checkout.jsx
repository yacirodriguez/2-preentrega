import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Navigate } from "react-router-dom";
import { addDoc, collection, updateDoc, doc as getDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

const Checkout = () => {
    const { cart, emptyCart, total } = useContext(CartContext);
    
    const [values, setValues] = useState({
        name: '',
        address: '',
        email: '',
    });

    const [orderId, setOrderId] = useState(null);
    const [stockError, setStockError] = useState(null);

    const handleInputChange = (e) => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        });
    };

    const ordersRef = collection(db, 'orders');

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(values.name.length <3){
            alert('El nombre es muy corto');
        }
        const order = {
            cart,
            datosCliente: values,
            fyh: new Date(),
            total: total()
        };
        addDoc(ordersRef, order).then((doc)=>{
            setOrderId(doc.id);
            emptyCart();
        });
        cart.forEach((item) =>{
            const docRef= getDoc(db, 'products', item.id);
            getDoc(docRef)
            .then((doc)=>{ 
                let  stock = doc.data().stock;
                if (stock - item.cantidad >= 0){
                    updateDoc(docRef, { stock: stock - item.cantidad });
                } else{
                    setStockError(`Lo siento, no hay stock suficiente de ${doc.data().nameProduct}`);
                }
                }
            );
        });
    };

    if (orderId) {
        return (
            <div className="container mx-auto mt-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h3 className="text-2xl font-semibold mb-4">¡Compra exitosa!</h3>
                    <p className="mb-4">Tu compra se efectuó correctamente. Guarda el código de tu orden: <strong>{orderId}</strong></p>
                    <p className="text-sm text-gray-500">Te hemos enviado un correo electrónico con los detalles de tu compra.</p>
                </div>
            </div>
        );
    }

    if (cart.length === 0) {
        return <Navigate to='/'/>;
    }

    return (
        <div className="container mx-auto mt-8">
            <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
                {stockError && <p className="text-red-500">{stockError}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Tu nombre"
                            name='name'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Dirección</label>
                        <input
                            type="text"
                            id="address"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Dirección"
                            name='address'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Tu email"
                            name='email'
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md" type="submit">Confirmar compra</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
