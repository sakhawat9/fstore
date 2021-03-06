import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { login } from 'redux/actionCreators/authActionCreators';
import { AppState } from 'redux/store';

interface ILoginFormData {
  username: string;
  password: string;
}

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState<ILoginFormData>({
    username: '',
    password: '',
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { data, status, error } = useSelector((state: AppState) => state.auth);

  if (data) {
    history.push('/');
  }
  return (
    <div className="login__component">
      <Container>
        <div className="py-5 login_main">
          <Row>
            {status === 'error' && (
              <Col md={{ span: 4, offset: 4 }} className="p-0">
                <Alert variant="primary">{error}</Alert>
              </Col>
            )}
            <Col
              md={{ span: 4, offset: 4 }}
              className="p-5 bg-white rounded shadow-sm float-center"
            >
              <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name="username"
                    onChange={handleOnChange}
                    type="text"
                    placeholder="Enter Your username"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    onChange={handleOnChange}
                    type="password"
                    placeholder="Enter Password"
                  />
                </Form.Group>
                <div className="gap-2 d-grid">
                  <Button
                    disabled={status === 'pending'}
                    onClick={() => dispatch(login(formData))}
                    variant="dark"
                  >
                    LOGIN
                  </Button>
                </div>
              </Form>
              <div className="text-center login-form-info">
                <p className="py-4">
                  {` Don't have an account?`}
                  <Link to="/logout" className="text-primary ps-3">
                    Sign up
                  </Link>
                </p>
                <Link to="/forgot-password" className="text-primary">
                  Forgot Password
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LoginForm;
