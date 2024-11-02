import React from "react";

import ResourceCard from "../Components/ResourceCard";

import { Container, Row, Col } from "react-bootstrap";

const resource = [
  {
    id: 1,
    title: "React Workshop",
    date: "2024-11-10",
    description: "Jacob Parliament",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "React Workshop",
    date: "2024-11-10",
    description: "Jacob Parliament",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "React Workshop",
    date: "2024-11-10",
    description: "Jacob Parliament",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imageUrl: "https://via.placeholder.com/150",
  },
];

function Resources() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Resources</h2>
      <Row>
        {resource.map((resource) => (
          <Col key={resource.id} md={4} className="mb-4">
            <ResourceCard
              id={resource.id}
              title={resource.title}
              date={resource.date}
              author={resource.author}
              content={resource.content}
              imageUrl={resource.imageUrl}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Resources;
