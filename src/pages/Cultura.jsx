import React from 'react';

function Cultura() {
  return (
    <section className="cultura">
      <h2>Cogumelos na Cultura Humana</h2>
      <p>Ao longo da história, os cogumelos têm desempenhado papéis importantes na medicina, espiritualidade, culinária e arte.</p>

      <div className="cultura-blocos">
        <div className="bloco">
          <h3>Medicina Tradicional</h3>
          <p>Cogumelos como o Reishi e o Shiitake são usados há séculos na medicina oriental por seus efeitos imunológicos e antioxidantes.</p>
        </div>

        <div className="bloco">
          <h3>Espiritualidade e Rituais</h3>
          <p>Algumas culturas indígenas utilizam cogumelos alucinógenos em rituais de cura e conexão espiritual.</p>
        </div>

        <div className="bloco">
          <h3>Culinária Gourmet</h3>
          <p>Trufas e cogumelos selvagens são ingredientes valorizados na alta gastronomia mundial.</p>
        </div>
      </div>
    </section>
  );
}

export default Cultura;