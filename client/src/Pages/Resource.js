import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import Header from '../Components/Header';

const resources = [
    {
      id: 1,
      title: "React Workshop",
      date: "2024-11-10",
      author: "Jacob Parliament",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "React Basics",
      date: "2024-11-15",
      author: "Jacob Parliament",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "JavaScript Deep Dive",
      date: "2024-12-01",
      author: "Jacob Parliament",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

function Resource() {
    const { id } = useParams();
    const resource = resources.find((resource) => resource.id === parseInt(id, 10));
  
    if (!resource) {
      return <Container className="my-5"><h2>Resource Not Found</h2></Container>;
    }
  
    return (
      <Container className="my-5">
        < Header />
        <Card>
          <Card.Img variant="top" src={resource.imageUrl} />
          <Card.Body>
            <Card.Title>{resource.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{resource.date}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{resource.author}</Card.Subtitle>
            <Card.Text>{resource.content}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
  
export default Resource