import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  const cardStyle = {
    width: '18rem',
    height: '29rem', // Ensures uniform height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const cardBodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1, // Ensures consistent spacing in the card body
    justifyContent: 'space-between',
  };

  return (
    <div>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body style={cardBodyStyle}>
          <Card.Title>Brand: {props.brand}<br></br>
          Model: {props.model} <br />
          Type :{props.type}
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
