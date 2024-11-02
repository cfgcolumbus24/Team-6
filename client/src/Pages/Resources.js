import React, { useState } from "react";
import ResourceCard from "../Components/ResourceCard";
import { Container, Row, Col, Form } from "react-bootstrap";
import Header from "../Components/Header";

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

function Resources() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="my-5">
      < Header />
      <h2 className="text-center mb-4">Resources</h2>
      <Form.Control
        type="text"
        placeholder="Search by title..."
        className="mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredResources.length > 0 ? (
        <Row>
          {filteredResources.map((resource) => (
            <Col key={resource.id} md={12} className="mb-4">
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
      ) : (
        <Row>
          <Col>
            <p className="text-center" style={{ color: 'black', marginTop: '20px' }}>
              No results found
            </p>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Resources;


