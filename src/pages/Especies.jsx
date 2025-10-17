import React from 'react';

function Especies() {
  return (
    <section className="especies">
      <h2>Espécies de Cogumelos</h2>
      <p>Conheça os principais tipos de cogumelos: comestíveis, medicinais, alucinógenos e venenosos.</p>

      <div className="grid-especies">
        {/* Exemplo de card - você pode duplicar e personalizar */}
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Agaricus_bisporus_1.jpg" alt="Champignon" />
          <h3>Champignon (Agaricus bisporus)</h3>
          <p>Popular na culinária, rico em proteínas e antioxidantes.</p>
        </div>

        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Amanita_muscaria_3.jpg" alt="Amanita muscaria" />
          <h3>Amanita muscaria</h3>
          <p>Cogumelo alucinógeno famoso por seu visual vermelho com pintas brancas.</p>
        </div>
      </div>
    </section>
  );
}

export default Especies;