import * as React from 'react';
import { Stack, Button, Box, IconButton, styled, ButtonBase, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Fingerprint from '@mui/icons-material/Fingerprint';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const images = [
    {
      url: './src/MUI/Breakfast.jpg',
      title: 'Breakfast',
      width: '40%',
    },
    {
      url: './src/MUI/Burger.jpg',
      title: 'Burgers',
      width: '30%',
    },
    {
      url: './src/MUI/Burger.jpg',
      title: 'Camera',
      width: '30%',
    },
  ];
  
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));

const CustomButton = () => {
  return (
    <div>
        <header style={{background: "green", padding: "10px", fontSize: "30px", fontweight: "bold", color: "white"}}>MUI Components</header>
        <div> 
            <h1 style={{background: "lightgreen"}}>Buttons</h1>
            <h4 style={{textAlign: "center"}}>Basic Buttons</h4>
        <Stack style={{justifyContent: 'center'}} spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
        <h4 style={{textAlign: "center"}}>Text Button</h4>
        <Stack style={{justifyContent: 'center'}} direction="row" spacing={2}>
            <Button>Primary</Button>
            <Button disabled>Disabled</Button>
            <Button href="#text-buttons">Link</Button>
        </Stack>
        <h4 style={{textAlign: "center"}}>Contained Button</h4>
        <Stack style={{justifyContent: 'center'}} direction="row" spacing={2}>
            <Button variant="contained">Contained</Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
            <Button variant="contained" href="#contained-buttons">
                Link
            </Button>
        </Stack>
        <h4 style={{textAlign: "center"}}>Outlined Button</h4>
        <Stack style={{justifyContent: 'center'}} direction="row" spacing={2}>
            <Button variant="outlined">Primary</Button>
            <Button variant="outlined" disabled>
                Disabled
            </Button>
            <Button variant="outlined" href="#outlined-buttons">
                 Link
            </Button>
        </Stack>
        <h4 style={{textAlign: "center"}}>Handling Clicks</h4>
        <Button
            onClick={() => {alert('clicked');}}>
                Click me
        </Button>
        <h4 style={{textAlign: "center"}}>Color</h4>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
            Success
        </Button>
        <Button variant="outlined" color="error">
            Error
        </Button>
        <h4 style={{textAlign: "center"}}>Sizes</h4>
        <Box sx={{ '& button': { m: 1 } }}>
        <div>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
        </div>
        <div>
            <Button variant="outlined" size="small">
                Small
            </Button>
            <Button variant="outlined" size="medium">
                Medium
            </Button>
            <Button variant="outlined" size="large">
                Large
            </Button>
        </div>
        <div>
            <Button variant="contained" size="small">
                Small
            </Button>
            <Button variant="contained" size="medium">
                Medium
            </Button>
            <Button variant="contained" size="large">
                Large
            </Button>
        </div>
        </Box>
        <h4 style={{textAlign: "center"}}>Buttons with Icons and Lables</h4>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
            Send
        </Button>
        <h4 style={{textAlign: "center"}}>Icon Button</h4>
        <IconButton aria-label="delete">
            <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" disabled color="primary">
            <DeleteIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
            <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
        </IconButton>
        <h4 style={{textAlign: "center"}}>Icon Sizes</h4>
        <IconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" size="large">
            <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" size="large">
            <DeleteIcon fontSize="inherit" />
        </IconButton>
        <h4 style={{textAlign: "center"}}>Icon Color</h4>
        <IconButton aria-label="fingerprint" color="secondary">
            <Fingerprint />
        </IconButton>
        <IconButton aria-label="fingerprint" color="success">
            <Fingerprint />
        </IconButton>
        <h4 style={{textAlign: "center"}}>File Upload</h4>
        <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}>
                Upload file
            <VisuallyHiddenInput type="file" />
        </Button>
        <h4 style={{textAlign: "center"}}>Complex Button</h4>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
    <h1 style={{background: "lightgreen"}}>Tabs</h1>
    </div>
    </div>
  );
}
export default CustomButton;