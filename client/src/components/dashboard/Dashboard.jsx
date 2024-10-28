import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Table, Button, Modal } from 'react-bootstrap';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://crud-backend-m0r5.onrender.com/api/user");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error while fetching users:", error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUpdate = (userId) => {
    navigate(`/user/${userId}`);
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`https://crud-backend-m0r5.onrender.com/api/user/${userId}`, {
        method: "DELETE"
      });
      if (response.ok) {
        fetchUsers();
      }
    } catch (error) {
      console.error("Error while deleting user:", error.message);
    }
  };

  const handleShowDetails = (user) => {
    setSelectedUser(user);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedUser(null);
  };

  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col>
            <h1 className='text-center'>Dashboard</h1>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.FirstName}</td>
                    <td>{user.LastName}</td>
                    <td>{user.email}</td>
                    <td>{user.Phone}</td>
                    <td>{user.Address}</td>
                    <td>{user.Gender}</td>
                    <td>
                      <Button
                        variant='info'
                        onClick={() => handleShowDetails(user)}
                        className="me-2"
                      >
                        <FaEye /> 
                      </Button>
                      <Button
                        variant='success'
                        onClick={() => handleUpdate(user._id)}
                        className="me-2" 
                      >
                        <FaEdit />
                      </Button>
                      <Button
                        variant='danger'
                        onClick={() => handleDelete(user._id)}
                      >
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Modal for User Details */}
            <Modal show={showDetails} onHide={handleCloseDetails}>
              <Modal.Header closeButton>
                <Modal.Title>User Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {selectedUser && (
                  <div>
                    <p><strong>First Name:</strong> {selectedUser.FirstName}</p>
                    <p><strong>Last Name:</strong> {selectedUser.LastName}</p>
                    <p><strong>Email:</strong> {selectedUser.email}</p>
                    <p><strong>Phone:</strong> {selectedUser.Phone}</p>
                    <p><strong>Address:</strong> {selectedUser.Address}</p>
                    <p><strong>Gender:</strong> {selectedUser.Gender}</p>
                  </div>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseDetails}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
