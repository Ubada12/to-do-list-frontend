import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {
      // Debugging log
      console.log("Redirect URI:", window.location.origin)
    }
    <Auth0Provider
      domain="dev-f5h4m5nvswxd5wj0.us.auth0.com"
      clientId="sJmYWHonn9mBi6RFZSBq58NgjHRx8Ch8"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://todo.api",
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
);