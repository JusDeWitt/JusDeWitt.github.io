// https://www.youtube.com/watch?v=w3vs4a03y3I&ab_channel=ArpanNeupane

import React, { useEffect, useState } from 'react';

import KPICard from './KPICard';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import SelectPeriod from '../SelectPeriod';
// import { css } from '@emotion/react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

type kpiType = {
  KPI: string;
  value: string;
};

export default function KPIDisplay(props: any) {
  // const { periodParam } = props;

  const [backendData, setBackEndData] = useState<kpiType[]>([]);
  const [refreshKPIData, setRefreshKPIData] = useState<boolean>(true);
  const [errorFlag, setErrorFlag] = useState<boolean>(false);
  const [periodParam, setPeriodParam] = useState<string>('2022-06-01-2022-06-14'); // default distribPeriodKey: 2022-06-01-2022-06-14

  useEffect(() => {
    const fetchData = async () => {
      fetch('http://localhost:5000/get-report-data/?period=' + periodParam + '')
        .then(async (response) => {
          if (response.ok) {
            const result = await response.json();
            const KPI_data = result || [];
            const newValue = KPI_data.map(({ KPI, value }: kpiType) => ({
              KPI,
              value,
            }));
            setBackEndData(newValue);
            setErrorFlag(false);
          } else {
            throw new Error(" fetch response failed to return 'ok' ");
          }
        })
        .catch((error) => {
          console.log('ERROR: ', error);
          console.log('ATTENTION: Please select a Distribution Period from the drop-down list.');
          setErrorFlag(true);
        });
    };

    if (refreshKPIData) {
      fetchData();
      // console.log('data fetched on click');
      setRefreshKPIData(false);
    }
  }, [periodParam, refreshKPIData]);

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Key Performance Indicators</h1>
      </div>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item>
          <SelectPeriod setPeriodParam={setPeriodParam} />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              setRefreshKPIData(true);
              console.log('set refresh parameter', refreshKPIData);
            }}
          >
            Refresh data
          </Button>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        {errorFlag ? (
          <Alert severity="error">Failed to retrieve data — Please try again later.</Alert>
        ) : (
          backendData.map((kpi: kpiType) => <KPICard KPI={kpi.KPI} value={kpi.value} />)
        )}
      </Grid>
    </Container>
  );
}
