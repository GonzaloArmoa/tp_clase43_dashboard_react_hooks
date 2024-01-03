export const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "El título es requerido";
  }

  if (!values.rating) {
    errors.rating = "La pelicula no tiene rating?";
  }

  if (!values.awards) {
    errors.awards = "No hay premios?";
  }

  if (!values.length) {
    errors.length = "No duro nada?";
  }

  if (!values.release_date) {
    errors.release_date = "Nunca existió?";
  }

  if (!values.genre_id) {
    errors.genre_id = "Es degenerada?";
  }


  return errors;
};
