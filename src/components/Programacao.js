import React from "react";
import { Link } from "react-router-dom";

const Programacao = ({ livros }) => (
  <main className="principal">
    <h2>Categoria programacao</h2>
    {livros
      .filter(cat => cat.categoria === "programacao")
      .map(livro => (
        <div className="card" key={livro.id}>
          <div className="thumb">
            <img
              src={"/imagens/capas/" + livro.isbn.replace(/-/g, "") + ".jpg"}
              alt="Thumbnail da capa do livro ..."
            />
          </div>
          {livros
            .filter(c => c.slug === livro.slug)
            .map(livro => (
              <Link to={`/livro/${livro.slug}`} key={livro.id}>
                {
                  <div className="detalhes">
                    <h3>{livro.titulo}</h3>
                    <p>{livro.descricao.slice(0, 130) + "..."}</p>
                    <p>Leia mais ></p>
                  </div>
                }
              </Link>
            ))}
        </div>
      ))}
  </main>
);

export default Programacao;
