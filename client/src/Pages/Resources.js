import React, { useState, useEffect } from "react";
import axios from "axios";
import ResourceCard from "../Components/ResourceCard";
import { Container, Row, Col, Form } from "react-bootstrap";

function Resources() {
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch resources from the backend
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/resources");
        setResources(response.data.data);
        console.log("Fetched resources:", response.data.data);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchResources();
  }, []);

  const filteredResources = resources.filter((resource) =>
    resource.resourceTitle
      ? resource.resourceTitle.toLowerCase().includes(searchTerm.toLowerCase())
      : false
  );

  return (
    <Container className="my-5">
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
            <Col key={resource._id} md={12} className="mb-4">
              <ResourceCard
                id={resource._id}
                title={resource.resourceTitle}
                date={resource.resourceDate}
                author={resource.resourceAuthor}
                content={resource.resourceContent}
                imageUrl={resource.imageUrl || "https://via.placeholder.com/150"}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <Row>
          <Col>
            <p className="text-center" style={{ color: "black", marginTop: "20px" }}>
              No results found
            </p>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Resources;



