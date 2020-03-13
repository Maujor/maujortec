import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="principal">
    <h4>404!</h4>
    <p>
      Página não encontrada ou removida. <Link to="/">Ir para Home Page</Link>
    </p>
  </main>
);

export default NotFound;
