import React from 'react';



const Advert = ({ name, price, sale, tags }) => {
  const tagsLine = tags.join(", ");
  

  return (

   <article className="advert-row">
        <div>
          <p className="advert-name">{name}</p>
          <p className="advert-price">{price}€</p>
          <div className="row-display">
          <p className="advert-sale">{sale ? 'compra' : 'venta'}</p>
          { <p className="advert-tags"><b>Tags: </b> {tagsLine}</p> }
          </div>
        </div>
    </article> 

  );
};

export default Advert;
