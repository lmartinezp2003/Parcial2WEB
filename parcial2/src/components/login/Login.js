import { Button, Card, Col, Form, Row } from "react-bootstrap";
import React, { useState } from 'react';
import './Login.css';

const Login = () => {

  const [usuario, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {

    login(usuario, password)
      .then((response) => {
        console.log(response.status)
        if (response.status === 200) {
          window.location.href = 'http://localhost:3001/cafes';
        } else {
          setError('Error de autenticacion. Revise sus credenciales.');
        }
      })
      .catch((error) => {
        console.log(error);
        setError('Se produjo un error.');
      });
  };


  const login = (usuario, password) => {
    return fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ usuario, password }),
    });
  };

  return (
    <div>
      <h3 className="ByMe-h3">Inicio de sesion</h3>
      <div className="ByMe-container">
        <Card className="ByMy-Card shadow-none rounded-0">
              {error && <div className="alert alert-danger">{error}</div>}
              <Form className="ByMe-form" onSubmit={handleSubmit}>
                <div className="ByMe-form-content">
                  <div className="form-group text-start">
                    <label htmlFor="usuario" className="form-label">Nombre de Usuario</label>
                    <input type="usuario" className="form-control mt-1" id="email" value={usuario} onChange={handleEmailChange} />
                  </div>
                  <div className="form-group mt-3 text-start">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control mt-1" id="password" value={password} onChange={handlePasswordChange} />
                  </div>
                  <div class="row ByMe-Margin">
                    <Col>
                      <button type="submit" className="btn btn-primary">Ingresar</button>
                    </Col>
                    <Col>
                      <button className="btn btn-primary">Cancelar</button>
                    </Col>
                  </div>
                </div>
              </Form>
        </Card>
      </div>
    </div>
  );
};

export default Login;