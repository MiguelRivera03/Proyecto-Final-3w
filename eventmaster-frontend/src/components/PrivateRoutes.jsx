import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Componente de ruta protegida
function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
