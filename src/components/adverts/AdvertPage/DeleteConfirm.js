import { delAdvert } from '../service';
import { useNavigate } from 'react-router-dom';

export const DeleteConfirm = (id) => {

    const navigate = useNavigate();
    const adId = id['id'];
  
    const confirmacion = async () =>{
      try {
        await delAdvert(adId);
        navigate(`/adverts`);
      } catch (error) {
        console.log(error);
      }
    }
  
    return (
      <div className='confirmBlock'>
      <p>Are you sure you want to delete this advert? </p>
      <button onClick={confirmacion}>Sí</button>
      </div>
    )
  }