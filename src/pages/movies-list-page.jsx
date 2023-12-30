import { Card, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { TableItemMovies } from "../components/TableItemMovies";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { Paginator } from "../components/Paginator";
import { FormSearchMovies } from "../components/FormSearchMovies";
import { FormMovie } from "../components/FormMovie";

export const MoviesListPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});

  const apiCall = async (endpoint = "/api/v1/movies") => {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_HOST}${endpoint}`
    );
    const result = await response.json();

    setLoading(false);
    setMovies(result.data);
    setPagination(result.meta);

    console.log(result);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Lista de Peliculas</h1>
      </div>
      <Row>
        <Col sm={12} md={4}>
          <FormMovie />
        </Col>
        <Col sm={12} md={8}>
          {loading ? (
            <Loading />
          ) : (
            <Card>
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <FormSearchMovies apiCall={apiCall} />
                  <Paginator pagination={pagination} apiCall={apiCall} />
                </div>

                <Table striped>
                  <thead>
                    <tr>
                      <th>Titulo</th>
                      <th>Duración</th>
                      <th>Rating</th>
                      <th>Géneros</th>
                      <th>Premios</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movies.map(
                      ({ title, length, genre, awards, rating }, index) => (
                        <TableItemMovies
                          key={index + title}
                          title={title}
                          length={length}
                          genre={genre}
                          awards={awards}
                          rating={rating}
                        />
                      )
                    )}
                  </tbody>
                </Table>
                <Paginator pagination={pagination} apiCall={apiCall} />
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </>
  );
};
