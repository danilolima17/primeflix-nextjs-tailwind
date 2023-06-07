import { useEffect } from "react";

export default function Offline() {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', () => {
            navigator.serviceWorker.register('/pwabuilder-sw.js')
              .then(registration => {
                console.log('Service Worker registrado com sucesso:', registration);
              })
              .catch(error => {
                console.log('Erro ao registrar o Service Worker:', error);
              });
          });
        }
      }, []);
    return (
        <h1>Você está Offline</h1>
    )
}