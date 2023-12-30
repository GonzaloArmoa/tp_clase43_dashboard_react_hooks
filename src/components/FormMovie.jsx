import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, CardTitle, Form } from "react-bootstrap";

export const FormMovie = () => {

    const [genres, setGenres] = useState([])

    const getGenres = async () => {
        try {
            let response = await fetch(`${import.meta.env.VITE_APP_API_URLBASE}/genres`);
            let result = await response.json()

            console.log(result.data);

            const genresArray = result.data.map(({id, name}) =>({
                id,
                name
            }));

            const genresOrder = genresArray.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)

            setGenres(genresOrder)
            
            return null

        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(() => {     
    
        getGenres()
      
    }, [genres])
    



  return (
    <Card>
      <CardHeader>
        <CardTitle>Agregar Pelicula</CardTitle>
      </CardHeader>
      <CardBody>
        <Form className="row">
          <Form.Group className="mb-3 col-12">
            <Form.Label>Título</Form.Label>
            <Form.Control type="text" placeholder="Título de la película" />
          </Form.Group>
          <Form.Group className="mb-3 col-12 col-md-6">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group className="mb-3 col-12 col-md-6">
            <Form.Label>Premios</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group className="mb-3 col-12 col-md-6">
            <Form.Label>Duración</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group className="mb-3 col-12 col-md-6">
            <Form.Label>Fecha de estreno</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group className="mb-3 col-12">
            <Form.Label>Género</Form.Label>
            <Form.Select className="form-control" aria-label="Default select example">
              <option hidden selected>Selecciona el género..</option>
              {
                genres.map(({id, name}) => <option key={id} value={id}>{name}</option>)
              }
            </Form.Select>
          </Form.Group>
          <Button variant= "outline-dark" className="w-100 mt-5">
            Guardar
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};
