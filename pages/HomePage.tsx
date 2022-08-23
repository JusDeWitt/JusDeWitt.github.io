/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from '@emotion/react';
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Header from '../components/Header';

// From MSAL Tutorial
// import { ProfileData } from '../components/ProfileData';
// import { callMsGraph } from '../graph';
import KPIDisplay from '../components/KPI/KPIDisplay';

export default function HomePage() {
  return (
    <Box
      css={css`
        justify-content: center;
      `}
    >
      <Header />
      <Container
        maxWidth="lg"
        css={css`
          display: flex;
          padding: 0px 0px;
        `}
      >
        <Grid
          container
          spacing={2}
          css={css`
            margin: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0px 0px;
          `}
        >
          <div className="home-page">
            <KPIDisplay />
          </div>
        </Grid>
      </Container>
    </Box>
  );
}
