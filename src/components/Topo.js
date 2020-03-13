import React, { Component } from "react";
import Logo from "./Logo";
import Navegacao from "./Navegacao";

class Topo extends Component {
  render() {
    return (
      <header className="topo">
        <Logo />
        <Navegacao />
      </header>
    );
  }
}

export default Topo;
