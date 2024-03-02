import React, { useEffect } from 'react';

function Map() {
  useEffect(() => {
    const initMap = () => {
      const apiKey = "AIzaSyB3i1N6Nub2nrY8-03oOIu72rAUkclawF4"; // Reemplaza con tu propia clave de API de Google Maps
      
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.defer = true;
      script.async = true;

      script.onload = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: 28.6328, lng: -106.0691 }, // Coordenadas de Chihuahua
          zoom: 12,
        });

        // Coordenadas de los hoteles
        const hotelCoordinates = [
          { lat: 28.625952359070247, lng: -106.11916338185267 }, // Best Western Plus Chihuahua Juventud
          { lat: 28.627265685921884, lng: -106.11945774857723 }, // Holiday Inn Express & Suites Chihuahua Juventud
          { lat: 28.6634883437302, lng: -106.12814475158125 }, // Courtyard by Marriott Chihuahua
          { lat: 28.658226472358354, lng: -106.12762330706971 }, // Hotel María Bonita Chihuahua
          { lat: 28.63176041978389, lng: -106.0773653648619 }, // La Decima Guest House
          { lat: 28.62032530696293, lng: -106.10922779665351 }, // Hotel Highland Chihuahua
        ];

        // Agregar marcadores para cada hotel
        hotelCoordinates.forEach(({ lat, lng }) => {
          new window.google.maps.Marker({
            position: { lat, lng },
            map,
          });
        });
      };

      document.head.appendChild(script);
    };

    initMap();
  }, []);

  return (
    <div id="map" className="map"></div>
  );
}

export default Map;
