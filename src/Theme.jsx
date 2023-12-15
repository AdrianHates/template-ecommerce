import { useEffect, useState } from 'react'
import './Theme.css'
import Navbar from './Components/Navbar/Navbar'
import { getAllProducts } from './services/get'
import HomePage from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import logo from './assets/logo.svg'

const footerArray = ['Configuración de las cookies', 'Nuestros Datos',
'Términos y Condiciones',
'Política de Privacidad',
'Seleccionar País',
'Uso del Sitio']

function Theme() {
  const [products,setProducts] = useState(null)  

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await getAllProducts();
        setProducts(products)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData()
  }, []);

  return (
    <>
      <header>
        <Navbar logo={logo} />
      </header>
      <Routes>
        {/* Define tus rutas */}
        <Route path="/" exact element={<HomePage products={products}/>} />
        {/* Puedes agregar una ruta por defecto para manejar rutas no encontradas */}
        <Route element={() => <div>404 Not Found</div>} />
      </Routes>
      <footer>
        <Footer array={footerArray} />
      </footer>
    </>
  )
}

export default Theme;
