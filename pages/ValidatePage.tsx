/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from '@emotion/react';
import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import ValidateCSV from '../components/ValidateCSV';
import Header from '../components/Header';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="md">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} css={css``}>
            <h1>Add the new rewards CSV upload file below </h1>
            <p>Ensure that the file has the correct column headers and correct number of columns</p>
          </Grid>
          <Grid item xs={12}>
            <ValidateCSV />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
