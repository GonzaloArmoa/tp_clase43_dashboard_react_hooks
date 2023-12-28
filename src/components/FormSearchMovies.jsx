import PropTypes from 'prop-types';
import { useState } from "react";


export const FormSearchMovies = ({apiCall}) => {
    const [formValues, setFormValues] = useState({})

    const hadleImputChange = ({target}) => {
         setFormValues({
            ...formValues,
            [target.name] : target.value

         })
    }

    const handleSubmit = (e) => {
       e.preventDefault()
       
       apiCall(`/api/v1/movies?keyword=${formValues.keyword}`)
        e.target.reset()
    }
 
 
 
    return (
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Buscar :</label>
        <div className="input-group mb-3">
  <input type="text" className="form-control" name="keyword" onChange={hadleImputChange}/>
  <div className="input-group-append" style={{cursor: 'pointer'}} >
  <button className="input-group-text" id="basic-addon2"> <i className="fa fa-search"></i> </button>
</div>
</div>
        

</form>

    )
}
FormSearchMovies.propTypes = {
    apiCall: PropTypes.func
}