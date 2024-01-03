import PropTypes from 'prop-types'

export const TableItemMovies = ({movie : {id, title, rating, length, genre, awards}, handleEditMovie, handleDeleteMovie }) => {
  return (
    <tr>
    <td>{title}</td>
    <td>{length}</td>
    <td>{rating}</td>
    <td>{genre?.name}</td>
    <td>{awards}</td>
    <td>
                <div className='d-flex gap-2 justify-content-around'>

                    <button className='btn btn-sm btn-primary'>
                        <i className='fas fa-eye'></i>
                    </button>
                    <button onClick={() => handleEditMovie(id)} className='btn btn-sm btn-success'>
                        <i className='fas fa-pencil-alt'></i>
                    </button>
                    <button onClick={() => handleDeleteMovie(id)} className='btn btn-sm btn-danger'>
                        <i className='fas fa-trash'></i>
                    </button>
                </div>
            </td>

</tr>
  )

 }

TableItemMovies.propTypes = {
    movie: PropTypes.object,
    handleEditMovie: PropTypes.func,
    handleDeleteMovie: PropTypes.func,
}

TableItemMovies.defaultProps = {
    genres: ["SIN ESPECIFICAR"]
}
