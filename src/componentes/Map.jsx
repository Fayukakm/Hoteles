import React, { useEffect } from 'react';

function Map() {
  useEffect(() => {
    // Función para inicializar el mapa con la API de Google Maps
    const initMap = () => {
      // Reemplaza 'TU_CLAVE_DE_API' con tu propia clave de API de Google Maps
      const apiKey = 'AIzaSyB3i1N6Nub2nrY8-03oOIu72rAUkclawF4';
      
      // Carga la API de Google Maps
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.defer = true;
      script.async = true;

      // Callback que se ejecuta cuando se carga la API de Google Maps
      script.onload = () => {
        // Lógica para inicializar el mapa o realizar otras operaciones
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: 28.6328, lng: -106.0691 }, // Coordenadas de Chihuahua
          zoom: 12, // Zoom ajustado para ver la ciudad de Chihuahua adecuadamente
        });

        // Puedes realizar más configuraciones y operaciones con el mapa según tus necesidades
      };

      document.head.appendChild(script);
    };

    // Inicializa el mapa cuando el componente se monta
    initMap();
  }, []);

  return (
    <div id="map" className="map" style={{ height: '400px' }}></div>
  );
}

export default Map;
