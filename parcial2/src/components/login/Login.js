import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import React, { useState } from 'react';
import './Login.css';

const Login = () => {

  const [usuario, setUusario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsuarioChange = (e) => {
    setUusario(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    login(usuario, password)
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          window.location.href = 'http://localhost:3000/cafes';
        } else {
          setError(<FormattedMessage id="loginError"/>);
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
      body: JSON.stringify({"login": usuario, "password": password }),
    });
  };

  return (
    <div className="ByMe-Div">
      <h3 className="ByMe-h3"><FormattedMessage id="inicio"/></h3>
      <div className="ByMe-container">
        <Card className="ByMe-Card shadow-none rounded-0">
              {error && <div className="alert alert-danger">{error}</div>}
              <Form className="ByMe-form" onSubmit={handleSubmit}>
                <div className="ByMe-form-content ByMe-Margin">
                  <div className="form-group text-start">
                    <label htmlFor="usuario" className="ByMe-LabelForm"><FormattedMessage id="usuario"/></label>
                    <input type="usuario" className="form-control mt-1 rounded-0 ByMe-FormColor" id="email" value={usuario} onChange={handleUsuarioChange} />
                  </div>
                  <div className="form-group mt-3 text-start">
                    <label htmlFor="password" className="ByMe-LabelForm"><FormattedMessage id="contraseña"/></label>
                    <input type="password" className="form-control mt-1 rounded-0 ByMe-FormColor" id="password" value={password} onChange={handlePasswordChange} />
                  </div>
                  <div class="row ByMe-Margin">
                    <Col>
                      <button type="submit" className="btn btn-primary ByMe-ButtonColorIngresar rounded-0"><FormattedMessage id="ingresar"/></button>
                    </Col>
                    <Col>
                      <button className="btn btn-primary ByMe-ButtonColorCancelar rounded-0"><FormattedMessage id="cancelar"/></button>
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