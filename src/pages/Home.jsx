import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1>Mundo dos Cogumelos</h1>
        <p>Explore o universo oculto dos fungos: espécies, ecologia, cultura e curiosidades.</p>
        <Link to="/especies" className="btn">Começar a jornada</Link>
      </div>
    </section>
  );
}

export default Home;