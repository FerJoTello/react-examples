import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function PokemonListItem({ name, url }) {
    const getId = () => url.split("/")[6];
    const variant = 'Dark';
    return (
        <Card
            bg={variant.toLowerCase()}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
        >
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button variant="light">
                    <Link to={`/pokemon/${getId()}`} style={{ textDecoration: "none", color:"black" }}>Ver detalle</Link>
                </Button>
            </Card.Body>
        </Card>
    );
}