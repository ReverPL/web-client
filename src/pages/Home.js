import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Container, Header, Grid } from 'semantic-ui-react';

import './styles/home.css';

const Home = () => {
  return (
    <Container className="container-home">
      <Header as="h1" className="h1-home animated fadeInRight">
        korero
      </Header>
      <Header.Subheader as="p" className="animated fadeInLeft delay-1s">
        Poznawaj nowych ludzi poprzez pisanie na serwerach.
      </Header.Subheader>

      <Grid columns={4} stackable>
        <Grid.Column />
        <Grid.Column className="animated fadeInUp delay-2s">
          <Link to="/register">
            <Button primary size="big" fluid>
              Register
            </Button>
          </Link>
        </Grid.Column>
        <Grid.Column className="animated fadeInUp delay-2s">
          <Link to="/login">
            <Button secondary size="big" fluid>
              Log in
            </Button>
          </Link>
        </Grid.Column>
        <Grid.Column />
      </Grid>
    </Container>
  );
};

export default Home;
