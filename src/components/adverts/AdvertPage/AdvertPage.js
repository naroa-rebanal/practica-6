import { useState, useEffect } from 'react';
import Page from '../../layout/Page';
import { getAdvert } from '../service';
import { useParams } from 'react-router-dom';
import AdvertSingle from './AdvertSingle';


const useAdvert = (id) => {
  const [advert, setAdvert] = useState([]);

  useEffect(() => {
    const execute = async () => {
      const advert = await getAdvert(id);
      setAdvert(advert);
    };
    execute();

    return () => {};
  }, []);

  return advert;
};



const AdvertPage = () => {

  const { advertId } = useParams();

  const advert = useAdvert(advertId);

  return (
    <Page title={advert.name}>
        <div> 
        <AdvertSingle {...advert} />
        </div>
      </Page>
  );


};

export default AdvertPage;
