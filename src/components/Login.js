import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'test' && password === 'password@123') {
      onLogin(true);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail" className='mb-3'>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          {error && <div className="text-danger">{error}</div>}
          <Button variant="primary" type="submit" className="w-100" >
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
