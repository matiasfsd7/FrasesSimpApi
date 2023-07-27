import { Card } from "react-bootstrap";

const Frase = ({ datosPersonaje }) => {
  return (
    <section className="my-5">
      <h2> {datosPersonaje.character} </h2>
      <hr />
      <img
        className="mb-3"
        src={datosPersonaje.image}
        alt={datosPersonaje.character}
      />
      <Card>
        <Card.Body>
          <figure>
            <blockquote className="blockquote">
              <p>
                Shoplifting is a victimless crime, like punching someone in the
                dark.
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Nelson Muntz in <cite title="Source Title">The simpsons</cite>
            </figcaption>
          </figure>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Frase;
