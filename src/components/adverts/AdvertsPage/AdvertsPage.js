import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../layout/Page';
import Advert from './Advert';
import { getAdverts } from '../service';
import { useCallback } from 'react';


const EmptyList = () => (
  <div style={{ textAlign: 'center' }}>
    <p>There are no adverts published yet!</p>
    <Link as={Link} to="/adverts/new" className='newadbtn'>
      Create new advert
    </Link>
  </div>
);

const NoSearchResults = () => (
  <div style={{ textAlign: 'center' }}>
    <p>Ups! There are no adverts according to your filters!</p>
    <p>Search again</p>
  </div>
);


const useAdverts = () => {
  const [adverts, setAdverts] = useState([])
  useEffect(() => {
    getAdverts().then(adverts => setAdverts(adverts))
  },[])

  return adverts;
};



const AdvertsPage = () => {

const allAdverts = useAdverts();
const [search, setSearch] = useState();


const handleFilterChange = (event) =>{
  setSearch(search => ({
    ...search,
    [event.target.name]:event.target.value
  }
  ));

}

const getName = (element) => {
  return `${element.name}`;
}




const filteredAdverts = allAdverts.filter( (advert) => {

  if(search){
  const advertName = getName(advert);
const searchName = getName(search);


if (advertName.toLowerCase().includes(searchName.toLowerCase())) {
  return true
}else {
return false
}
}

  return true
});


  return (
    <Page title="what are you looking for?">

      <form>
        <input type='text' placeholder='filter by title' name='name' onChange={handleFilterChange}/>
      </form>
      <div className='adverts-colum'>
        {allAdverts.length
        ? (<ul>
            {filteredAdverts.map(advert => (
              <li key={advert.id}>
                <Link to={`/adverts/${advert.id}`}>
                  <Advert {...advert} />
                </Link>
              </li>
             ))}
          </ul>)
         
        : (<EmptyList />
        )}
      </div>
    </Page>
  );


};

export default AdvertsPage;
