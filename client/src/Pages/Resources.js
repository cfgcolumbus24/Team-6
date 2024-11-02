import React, { useState, useEffect } from "react";
import axios from "axios";
import ResourceCard from "../Components/ResourceCard";
import { Container, Row, Col, Form } from "react-bootstrap";

function Resources() {
  const [resources, setResources] = useState([]); // Initialize as an empty array
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/resources");
        setResources(response.data.data || []); // Ensure resources is an array
      } catch (error) {
        console.error("Error fetching resources:", error);
        setError("Failed to fetch resources.");
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  // Filter resources based on the search term, safely check for array
  const filteredResources = (resources || []).filter((resource) =>
    resource.resourceTitle
      ? resource.resourceTitle.toLowerCase().includes(searchTerm.toLowerCase())
      : false
  );

  if (loading) return <Container className="my-5"><h2>Loading...</h2></Container>;
  if (error) return <Container className="my-5"><h2>{error}</h2></Container>;

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
                imageUrl={resource.imageUrl || "https://picsum.photos/300/150"}
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
