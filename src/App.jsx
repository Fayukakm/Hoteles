// Importa las dependencias necesarias
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importa tus componentes
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Homepage from './componentes/Homepage';
import HotelSearchPage from './componentes/HotelSearchPage';
import NotFoundPage from './componentes/NotFoundPage';
import DevelopmentPage from './componentes/DevelopmentPage'; // Importa tu nuevo componente

// Define tus rutas
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/search">
          <HotelSearchPage />
        </Route>
        <Route path="/dev"> {/* Define la nueva ruta */}
          <DevelopmentPage /> {/* Utiliza tu nuevo componente */}
        </Route>
        <Route> {/* Ruta por defecto para manejar páginas no encontradas */}
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
