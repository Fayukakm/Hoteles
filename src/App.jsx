// App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Homepage from './componentes/Homepage';
import HotelSearchPage from './componentes/HotelSearchPage';
import NotFoundPage from './componentes/NotFoundPage';


function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      {/* Aquí podrías agregar rutas para otras páginas */}
      <Footer />
    </div>
  );
}

export default App;
