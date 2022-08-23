/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from '@emotion/react';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <Box
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <Grid
            item
            xs={12}
            sm={12}
            css={css`
              color: #0056b8;
              background-color: #fff;
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
            `}
          >
            <h1
              css={css`
                font-weight: bold;
                font-style: normal;
                font-size: 125px;
                letter-spacing: 0em;
                line-height: 1.8em;
                text-transform: none;
              `}
            >
              Oops!
            </h1>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            css={css`
              color: #00b7d3;
              background-color: #fff;
              font-family: franklin-gothic-urw, Arial, Helvetica, sans-serif;
              font-weight: bold;
              font-style: normal;
              font-size: 25px;
              letter-spacing: 0em;
              line-height: 1.8em;
              text-transform: none;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
            `}
          >
            <h2>404 - Page Not Found</h2>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            css={css`
              color: #000;
              background-color: #fff;
              font-style: normal;
              font-size: 15px;
              display: flex;
              align-items: center;
              justify-content: center;
              letter-spacing: 0em;
              line-height: 1.8em;
              text-transform: none;
              position: relative;
              text-align: center;
            `}
          >
            <p>The page you are looking for may no longer exist or may have been renamed.</p>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            `}
          >
            <Link
              to="/home"
              css={css`
                text-decoration: none;
              `}
            >
              <Button
                variant="contained"
                css={css`
              text-decoration: none;
              color: #fff;
              background-color: #18489e;
              transition: ease 250ms;
              &:hover {
                background-color: #e5e8eb;
              `}
              >
                GO TO HOMEPAGE
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default PageNotFound;
