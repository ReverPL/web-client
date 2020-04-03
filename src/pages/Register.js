import React from 'react';

import { Container } from 'semantic-ui-react';

import RegisterForm from './components-register/RegisterForm';

const Register = () => {
  return (
    <Container>
      <h1>Register</h1>
      <RegisterForm />
    </Container>
  );
};

export default Register;