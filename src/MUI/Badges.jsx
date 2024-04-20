import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { CircularProgress, Box, Stack } from '@mui/material';


const SimpleBadge = () => {
    const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
    <h1 style={{background: "lightgreen"}}>Badges</h1>
        <h4 style={{textAlign: "center"}}>Basic Badge</h4>
    <Badge badgeContent={4} color="primary">
        <MailIcon color="action" />
    </Badge>
        <h4 style={{textAlign: "center"}}>Color Badge</h4>
    <Badge badgeContent={4} color="secondary">
        <MailIcon color="action" />
    </Badge>
    <Badge badgeContent={4} color="success">
        <MailIcon color="action" />
    </Badge>
    <br></br>
    <h1 style={{background: "lightgreen"}}>Spinners</h1>
        <h4 style={{textAlign: "center"}}>Circular indeterminate</h4>
    <Box sx={{ display: 'flex', justifyContent: "center" }}>
        <CircularProgress />
    </Box> 
        <h4 style={{textAlign: "center"}}>Circular color</h4>
    <Stack sx={{ color: 'grey.500', justifyContent: "center" }} spacing={2} direction="row">
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
    </Stack>
        <h4 style={{textAlign: "center"}}>Circular determinate</h4>
    <Stack sx={{justifyContent: "center" }} spacing={2} direction="row">
        <CircularProgress variant="determinate" value={25} />
        <CircularProgress variant="determinate" value={50} />
        <CircularProgress variant="determinate" value={75} />
        <CircularProgress variant="determinate" value={100} />
        <CircularProgress variant="determinate" value={progress} />
    </Stack>
    
    </div>
  );
}

export default SimpleBadge;