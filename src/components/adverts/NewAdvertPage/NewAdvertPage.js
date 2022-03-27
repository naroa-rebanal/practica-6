import Page from '../../layout/Page';
import FormField from '../../common/FormField';
import { useMemo, useState } from 'react';
import { createAdvert } from '../service';
import { useNavigate } from 'react-router-dom';


const NewAdvertPage = () => {
  const navigate = useNavigate();
const [error, setError] = useState(false);
  //const [createdAdvert, setCreatedAdvert] = useState(null);

  const [info, setInfo] = useState({
    name: '',
    sale: true,
    price: '',    
  });

const {name, sale, price, } = info;


  const handleChange = (event) => {
    setInfo( info => ({
      ...info,
      [event.target.name]: 
      event.target.type === 'select-one'
      ? (
        event.target.value === '1'
          ? true
          : false
      )
      : event.target.value
      
      
    }));
  };




  const [image, setImage] = useState(0);

  const handleChangePhoto = (event) => {
    setImage({[event.target.name]: 
        event.target.files[0]
      });
    };




  const [tagsAll, setTagsAll] = useState({
    lifestyle: false,
    motor: false,
    mobile: false,
    work: false,
  });

  const { lifestyle, motor, mobile, work } = tagsAll;
   
  

  const handleChangeTags = (event) => {
    setTagsAll( tagsAll => ({
      ...tagsAll,
        [event.target.name]: event.target.checked
    
    }));
  };

  const buttonDisabled = useMemo(() => {
    return !name || !price || (!lifestyle && !motor && !mobile && !work);
  }, [name, price, tagsAll]);




  const handleSubmit = async event => {
    event.preventDefault();

    const condition = [true];
    const finalTags = Object.keys(tagsAll).reduce(function(r, e) {
      if (condition.includes(tagsAll[e])) r[e] = tagsAll[e]
      return r;
    }, {});
    
    const tags = Object.keys(finalTags);

    const finalData = {...info, tags, ...image };

    const formData = new FormData();
    for(var key in finalData){
        formData.append(key, finalData[key]);
    }
   
    try {
      const createdAdvert = await createAdvert(formData);
     navigate(`/adverts/${createdAdvert.id}`);
    } catch (error) {
      setError(error);
    }
  };



  

  return (
    <Page title="Create a new advert">
      <div className="newAdvertPage">
          <form onSubmit={handleSubmit}>
{
          <FormField
          type="text"
          name="name"
          label="Title of the advert"
          value={name}
          onChange={handleChange}
        /> }


           <FormField
          type="number"
          name="price"
          label="Price"
          value={price}
          onChange={handleChange}
        />

<div className='formField'>
<label className='formField-label'><span>Advert type</span></label>
<select className='formSel' name="sale" onChange={handleChange}>
<option   value="1">compra</option>
<option value="0">venta</option>
</select>
</div>

 
<div className='formTagCont'> 
  <label className='formTagTit'>Tags (Select, at least, 1 tag)</label>
<FormField
          type="checkbox"
          name="lifestyle"
          label="lifestyle"
          className="tagSel"
          value="lifestyle"
          onChange={handleChangeTags}
        />


<FormField
          type="checkbox"
          name="motor"
          label="motor"
          className="tagSel"
          value="motor"
          onChange={handleChangeTags}

        />
<FormField
          type="checkbox"
          name="work"
          label="work"
          className="tagSel"
          value="work"
          onChange={handleChangeTags}

        />

<FormField
          type="checkbox"
          name="mobile"
          label="mobile"
          className="tagSel"
          value="mobile"
          onChange={handleChangeTags}

        />

</div>

<label className='formTagTit'>Select and image for your advert</label>

<input
          type="file"
          name="photo"
          onChange={handleChangePhoto}
        />

              <button type="submit" value='submit'
                className="formBtn"
                disabled={buttonDisabled}
              >
                Create!
              </button>
          </form>
        </div>
    </Page>
  );
};

export default NewAdvertPage;
