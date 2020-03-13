import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topo from "./components/Topo";
import Home from "./components/Home";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Catalogo from "./components/Catalogo";
import Rodape from "./components/Rodape";
import NotFound from "./components/NotFound";
import Livro from "./components/Livro";
import axios from "axios";
import "./index.css";

class App extends Component {
  state = {
    livros: []
  };
  componentDidMount() {
    axios
      .get("/api/todosOsLivros.json")
      .then(res => {
        const livros = res.data;
        this.setState({ livros });
      })
      .catch(function(error) {
        document
          .querySelectorAll("main")[0]
          .insertAdjacentHTML(
            "beforeend",
            "<p class='alerta'>Mensagem de erro</p>"
          );
      })
      .finally(function() {
        console.log("Sempre retorna");
      });
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Topo />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home livros={this.state.livros} />}
            />
            <Route
              exact
              path="/frontend"
              render={() => <Frontend livros={this.state.livros} />}
            />
            <Route
              exact
              path="/programacao"
              render={() => <Programacao livros={this.state.livros} />}
            />
            <Route
              exact
              path="/design"
              render={() => <Design livros={this.state.livros} />}
            />
            <Route
              exact
              path="/catalogo"
              render={() => <Catalogo livros={this.state.livros} />}
            />
            <Route
              path="/livro/:livroSlug"
              render={props => {
                const livro = this.state.livros.find(
                  livro => livro.slug === props.match.params.livroSlug
                );
                if (livro) return <Livro livro={livro} />;
                else return <NotFound />;
              }}
            />
            <Route component={NotFound} />
          </Switch>
          <Rodape />
        </Fragment>
      </Router>
    );
  }
}

export default App;
