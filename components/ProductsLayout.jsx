import FoodCard from '../components/FoodCard.jsx'
import '../src/foodcard.css'

function ProductsLayout() {

  return (
    <>
      <div className="grid">
        <FoodCard title='Torta de chocolate' imageSrc='src\assets\comida sin fondo\3.png' price='Pedir Ya'/>
        <FoodCard title='Torta de 3 leches' imageSrc='src\assets\comida sin fondo\1.png' price='Pedir Ya'/>
        <FoodCard title='Torta de chocolate' imageSrc='src\assets\comida sin fondo\2.png' price='Pedir Ya'/>
        <FoodCard title='Torta de chocolate' imageSrc='src\assets\comida sin fondo\11.png' price='Pedir Ya'/>
      </div>
    </>
  )
}

export default ProductsLayout
