import React, { useState, useEffect } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';

const Comments = ({ eventId }) => {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');

    // Load comments from Local Storage on component mount
    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
        const eventComments = savedComments.filter(comment => comment.eventId === eventId);
        setComments(eventComments);
    }, [eventId]);

    // Save comments to Local Storage whenever they change
    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

    const handleAddComment = () => {
        if (commentText.trim()) {
            const newComment = {
                id: Date.now(),
                text: commentText,
                date: new Date().toLocaleString(),
                eventId: eventId,  // Attach eventId to the comment
            };
            setComments([...comments, newComment]);
            setCommentText('');
        }
    };

    return (
        <Container>
            <h4>Comments</h4>
            <Form.Group controlId="commentForm">
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Write a comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                />
                <Button variant="primary" className="mt-2" onClick={handleAddComment}>
                    Add Comment
                </Button>
            </Form.Group>

            <ListGroup className="mt-4">
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <ListGroup.Item key={comment.id}>
                            <p>{comment.text}</p>
                            <small>{comment.date}</small>
                        </ListGroup.Item>
                    ))
                ) : (
                    <p>No comments yet. Be the first to comment!</p>
                )}
            </ListGroup>
        </Container>
    );
};

export default Comments;
