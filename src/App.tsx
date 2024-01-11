import React, { useState } from 'react';
import './App.css';
import '../src/foodcard.css';
import FoodCard from '../components/FoodCard.jsx';
import NavBar from '../components/NavBar.jsx';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity?: number; // Agregar esta línea para incluir la propiedad quantity opcional
}

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [deliveryAddress, setDeliveryAddress] = useState<string>('');

  const addToCart = (product: Product) => {
    const existingProductIndex = cart.findIndex((p) => p.id === product.id);

    if (existingProductIndex !== -1) {
      // Si el producto ya está en el carrito, actualizamos la cantidad
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity = (updatedCart[existingProductIndex].quantity || 0) + 1;
      setCart(updatedCart);
    } else {
      // Si el producto no está en el carrito, lo añadimos con cantidad 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + (product.price * (product.quantity || 1)), 0);
  };

  const buildWhatsAppMessage = () => {
    const message = 'Hola, me gustaría hacer una compra. Detalles del carrito: ';

    const cartDetails = cart.map((item) => {
      const quantity = item.quantity || 0;
      return `${item.name}: ${quantity} unidades`;
    });

    const total = `Total: $${calculateTotal()}`;
    const address = `Dirección a entregar: ${deliveryAddress}`;

    return `${message}${cartDetails.join(', ')} ${total} ${address}`;
  };

  const whatsappLink = `https://api.whatsapp.com/send?phone=91139478029&text=${encodeURIComponent(
    buildWhatsAppMessage()
  )}`;

  return (
    <div className="App">
      <div className="mainLayout">
        <NavBar />
        <div className="grid">
          <FoodCard
            title='Porcion de Chocotorta'
            imageSrc='src\assets\comida sin fondo\3.png'
            price='Consultar'
            addToCart={() => addToCart({ id: 1, name: 'Porcion de Chocotorta', price: 8000 })}
          />
          <FoodCard
            title='Porcion de Torta 3 Leches'
            imageSrc='src\assets\comida sin fondo\3leches.png'
            price='Consultar'
            addToCart={() => addToCart({ id: 2, name: 'Porcion de Torta 3 Leches', price: 300 })}
          />
          <FoodCard
            title='Porcion de Chocotorta con baño de chocolate'
            imageSrc='src\assets\comida sin fondo\13.png'
            price='Consultar'
            addToCart={() => addToCart({ id: 3, name: 'Porcion de Chocotorta con baño de chocolate', price: 200 })}
          />
          <FoodCard
            title='Pasapalos Dulces'
            imageSrc='src\assets\comida sin fondo\12.png'
            price='Consultar'
            addToCart={() => addToCart({ id: 4, name: 'Pasapalos dulces 1', price: 500 })}
          />
          <FoodCard
            title='Pasapalos Dulces'
            imageSrc='src\assets\comida sin fondo\postrecitos.jpg'
            price='Consultar'
            addToCart={() => addToCart({ id: 5, name: 'Pasapalos dulces 2', price: 500 })}
          />
          <FoodCard
            title='Tequeños de jamón/queso'
            imageSrc='src\assets\comida sin fondo\tequeños.png'
            price='Consultar'
            addToCart={() => addToCart({ id: 6, name: 'Tequeños de jamón/queso', price: 500 })}
          />
          <FoodCard
            title='Pollo Frito con arepitas y ensalada'
            imageSrc='src\assets\comida sin fondo\pollo.png'
            price='Consultar'
            addToCart={() => addToCart({ id: 7, name: 'Pollo Frito con arepitas y ensalada', price: 500 })}
          />
            <FoodCard
            title='Empanadas'
            imageSrc='src\assets\comida sin fondo\Empanada.png'
            price='Consultar'
            addToCart={() => addToCart({ id: 9, name: 'Empanadas', price: 500 })}
          />
            <FoodCard
            title='Torta de chocolate'
            imageSrc='src\assets\comida sin fondo\Torta.png'
            price='Consultar'
            addToCart={() => addToCart({ id: 10, name: 'Torta', price: 500 })}
          />
            <FoodCard
            title='Torta cereza fantasía'
            imageSrc='src\assets\comida sin fondo\Torta2.png'
            price='Consultar'
            addToCart={() => addToCart({ id: 11, name: 'Torta cereza fantasía', price: 500 })}
          />
            <FoodCard
            title='Torta decorado de cumpleaños'
            imageSrc='src\assets\comida sin fondo\Torta3.png'
            price='Consultar'
            addToCart={() => addToCart({ id: 12, name: 'Torta decorado de cumpleaños 1', price: 500 })}
          />
            <FoodCard
            title='Torta de piña'
            imageSrc='src\assets\comida sin fondo\tortapiña.png'
            price='Consultar'
            addToCart={() => addToCart({ id: 14, name: 'Torta de piña', price: 500 })}
          />
            <FoodCard
            title='Porción de torta de piña'
            imageSrc='src\assets\comida sin fondo\Trozo de torta.png'
            price='Consultar'
            addToCart={() => addToCart({ id: 15, name: 'Porción de torta de piña', price: 500 })}
          />
            <FoodCard
            title='Deliciosa Torta de Chocolate humeda'
            imageSrc='src\assets\comida sin fondo\Torta5.png'
            price='Consultar'
            addToCart={() => addToCart({ id: 16, name: 'Torta de chocolate con leche', price: 500 })}
          />
            <FoodCard
            title='Torta con Galletas'
            imageSrc='src\assets\comida sin fondo\Torta4.png'
            price='Consultar'
            addToCart={() => addToCart({ id: 17, name: 'Torta con galletas', price: 500 })}
          />
            <FoodCard
            title='Delicioso Quesillo'
            imageSrc='src\assets\comida sin fondo\quesillo2.png'
            price='Consultar'
            addToCart={() => addToCart({ id: 18, name: 'Torta de chocolate', price: 500 })}
          />
            <FoodCard
            title='Porción de Quesillo'
            imageSrc='src\assets\comida sin fondo\quesillo.png'
            price='Consultar'
            addToCart={() => addToCart({ id: 18, name: 'Torta de chocolate', price: 500 })}
          />
        </div>
      </div>
      {/* -----------------------------------Shopping Cart ------------------------------------------- */}
      <div className="cart" id='cart'>
          <h1 className='ShoppingCart_title'>Shopping Cart</h1>
          <div className='carList'>
            {cart.length > 0 ? (
              <>
                <ul>
                  {cart.map((cartItem) => (
                    <li key={cartItem.id} className='lista'>
                      <div className='item'>
                        {cartItem.name} - Cantidad: {cartItem.quantity}
                        <button className='btn mg-left' onClick={() => removeFromCart(cartItem.id)}>x</button>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className='text-center'>Total: ${calculateTotal()}</p>
              </>
            ) : (
              <p>Tu carrito está vacío</p>
            )}
          </div>

          <div className='form'>
              <label htmlFor="deliveryAddress">Dirección de Entrega: </label>
              <input
                type="text"
                id="deliveryAddress"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                className='input'
                placeholder='Calle, altura, piso y departamento'
              />
          </div>
          {/* ------------------------------Send Button-------------------------------- */}
          <div className='send'>
            <a href={whatsappLink} target="_blank" className='btn'>
              Pedir Ya
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
            </a>
          </div>
          {/* --------------------------------About us--------------------------------- */}
          <div>
            <h1 className='ShoppingCart_title'>Sobre nosotros</h1>
            <div className='parrafo'>
              <p>Te ofrecemos postres, por porciones a tu gusto y medida. A demás contamos con cajas de pasapalos dulces y salados.</p>
              <br />
              <p>Consulta nuestros precios y más información al  <a href='https://api.whatsapp.com/send?phone=91139478029&text=Hola, me interesa obtener más información' target="_blank"><span className='neon'>whatsapp.</span></a></p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default App;
