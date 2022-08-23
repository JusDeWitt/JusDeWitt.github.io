// https://mui.com/material-ui/react-card/
// https://mui.com/system/the-sx-prop/ - for formatting
import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

/*
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', alignItems: 'center' }}
  >
    •
  </Box>
);
*/

export default function KPICard(props: any) {
  const { KPI } = props;
  const { value } = props;

  return (
    <Card
      sx={{
        border: 5,
        margin: 2,
        minWidth: 275,
        maxWidth: 500,
        color: 'secondary.contrastText',
        bgcolor: 'info.main',
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 16 }} gutterBottom>
          {KPI}
        </Typography>
        <Typography variant="body2">{value}</Typography>
      </CardContent>
    </Card>
  );
}
