import PropTypes from 'prop-types';

export const GenreItemInDb = ({title}) => {
  return (
    <div className="col-lg-6 mb-4">
        <div className="card bg-dark text-white shadow">
            <div className="card-body">
                {title}
            </div>
        </div>
    </div>

  )
}

GenreItemInDb.propTypes = {
    title : PropTypes.string,
}

GenreItemInDb.defaultProps = {
    title : "Sin género asignado"
}