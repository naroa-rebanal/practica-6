import client from '../../api/client';

const advertsBaseUrl = '/api/v1/adverts';


  const header = {
    'content-type': 'application/json; charset=utf-8'
  }

  export const getAdverts = () => {
  const url = `${advertsBaseUrl}`;
  return client.get(url);
};


export const getAdvert = advertId => {
  const url = `${advertsBaseUrl}/${advertId}`;
  return client.get(url);
};

export const createAdvert = (advert) => {
  const url = `${advertsBaseUrl}`;
  return client.post(url, advert);
};


export const delAdvert = advertId => {
  const url = `${advertsBaseUrl}/${advertId}`;
  return client.delete(url, header);
};