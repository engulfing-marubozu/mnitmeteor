
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

export default function LostFoundSkeleton() {

  return (
    <Card sx={{ width: "100%", mt: "1rem" }}>
      <CardHeader
        avatar={
          <Skeleton animation="wave" variant="circular" width={40} height={40} />
        }
        title={
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 4 }}
          />
        }
        subheader={
          <Skeleton animation="wave" height={10} width="40%" />
        }
      />
      <CardContent>
        <React.Fragment>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 4 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </React.Fragment>
      </CardContent>
      <Skeleton sx={{ height: 220 }} animation="wave" variant="rectangular" />
    </Card>
  );
}