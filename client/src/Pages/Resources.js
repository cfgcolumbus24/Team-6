import React, { useState, useEffect } from "react";
import axios from "axios";
import ResourceCard from "../Components/ResourceCard";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Header from "../Components/Header";
import { useNavigate } from 'react-router-dom';

function Resources() {
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newResource, setNewResource] = useState({
    resourceTitle: '',
    resourceAuthor: '',
    resourceDate: '',
    resourceContent: '',
    imageUrl: ''
  });
  const navigate = useNavigate();

  // Check if the user is logged in
  const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
  };

  // Handle create resource button click
  const handleCreateButtonClick = () => {
    if (isLoggedIn()) {
      setShowCreateModal(true);
    } else {
      navigate('/login');
    }
  };

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

  const handleCreateResource = async () => {
    try {
      const response = await axios.post("http://localhost:5001/api/resources", newResource);
      setResources([...resources, response.data.data]);
      setResources(response.data.data.reverse());
      setShowCreateModal(false);
      setNewResource({ resourceTitle: '', resourceAuthor: '', resourceDate: '', resourceContent: '', imageUrl: '' });
    } catch (error) {
      console.error("Error creating resource:", error);
    }
  };

  const filteredResources = resources.filter((resource) =>
    resource.resourceTitle
      ? resource.resourceTitle.toLowerCase().includes(searchTerm.toLowerCase())
      : false
  );

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Resources</h2>
      <Button className="mb-3" onClick={handleCreateButtonClick}>+ Create New Resource</Button>
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
                imageUrl={resource.imageUrl && resource.imageUrl.trim() !== "" ? resource.imageUrl : "https://picsum.photos/300/150"}
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

      {/* Create Resource Modal */}
      <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Resource</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="resourceTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter resource title"
                value={newResource.resourceTitle}
                onChange={(e) => setNewResource({ ...newResource, resourceTitle: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="resourceAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter author name"
                value={newResource.resourceAuthor}
                onChange={(e) => setNewResource({ ...newResource, resourceAuthor: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="resourceDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={newResource.resourceDate}
                onChange={(e) => setNewResource({ ...newResource, resourceDate: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="resourceContent">
              <Form.Label>Content</Form.Label>
              <ReactQuill
                value={newResource.resourceContent}
                onChange={(content) => setNewResource({ ...newResource, resourceContent: content })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="imageUrl">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                value={newResource.imageUrl}
                onChange={(e) => setNewResource({ ...newResource, imageUrl: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCreateModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleCreateResource}>Create Resource</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Resources;
