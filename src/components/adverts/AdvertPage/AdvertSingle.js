import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAdvert } from '../service';
import { useNavigate } from 'react-router-dom';
import { DeleteConfirm } from './DeleteConfirm';





const AdvertSingle = () => {
  const navigate = useNavigate();

  const useAdvert = (id) => {
    const [advert, setAdvert] = useState([]);
  
    useEffect(() => {
      const execute = async () => {
        
        try {
          const advert = await getAdvert(id);
          setAdvert(advert);
        } catch (error) {
          navigate(`/404`);
        }

      };
      execute();
  
      return () => {};
    }, []);
  
  
    
    return advert;
  };


  const handleDelete = () => {
    setDel(true);
  }

const  advertId = useParams()['advertId'];

const singleAd = useAdvert(advertId);

const{ name, price, sale, tags, photo } = singleAd;

const [del, setDel] = useState(false);


  const tagsLine = tags ? tags.join(", ") : ''


  return (

   <article className="singlePageContainer">
     <div className='deletedBtn' onClick={handleDelete}>❌</div>
     {del ? <DeleteConfirm id={advertId} ></DeleteConfirm> : '' } 
        <div className="advertSingle" id='single-container'>
          <img width='500px' src={photo ? photo : 'https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg' }/>
          <p className="advert-sale">{sale ? 'compra' : 'venta'}</p>
          <p className="advert-price">{price} €</p>
          <p className="advert-tags"><span>Tags:</span> {tagsLine}</p>
        </div>
    </article> 

  );
};

export default AdvertSingle;
