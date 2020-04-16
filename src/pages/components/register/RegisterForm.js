import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Form, Input } from 'semantic-ui-react';

import constraints from '../shared/constraints';
import '../shared/validationErrors.css';

const RegisterForm = ({ setRegistered }) => {
  const { handleSubmit, register, errors } = useForm();
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    const res = await fetch('/backend/register', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    });
    switch (res.status) {
      case 500:
        setError('An internal server error has occurred! Try again later.');
        break;
      case 409:
        setError('Please use a different username.');
        break;
      case 422:
        setError('One or more fields are invalid.');
        break;
      case 201:
        setRegistered(true);
        return;
      default:
        setError(`An unknown error has occurred. Code: ${res.status}`);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {error ? <p className="error">{error}</p> : null}
      <Form.Field>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          ref={register(constraints.username)}
          required
        />
        {errors.username && (
          <p className="error">
            Invalid username (must be 3-20 characters long)
          </p>
        )}
      </Form.Field>
      <Form.Field>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          ref={register(constraints.email)}
          required
        />
        {errors.email && <p className="error">Email is required</p>}
      </Form.Field>
      <Form.Field>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          ref={register(constraints.password)}
          required
        />
        {errors.password && (
          <p className="error">
            Invalid password (must be at least 8 characters long)
          </p>
        )}
      </Form.Field>
      <Form.Field>
        <label htmlFor="password2">Confirm password</label>
        <input
          type="password"
          placeholder="Confirm password"
          id="password2"
          name="password2"
          ref={register(constraints.password)}
          required
        />
        {errors.password2 && (
          <p className="error">
            Invalid password (must be at least 8 characters long)
          </p>
        )}
      </Form.Field>
      <Input type="submit" value="Submit" />
    </Form>
  );
};

export default RegisterForm;
