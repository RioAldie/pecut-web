'use client';
import { Box, Button, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: 0,
    backgroundColor: '#E60112',
    color: 'white',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#C10513',
    },
  },
}));
const Buy = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        maxWidth: '860px',
        maxHeight: '260px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>
      <Typography
        sx={{
          fontSize: '26px',
          fontWeight: '700',
          color: '#C10513',
          textAlign: 'center',
        }}>
        Tertarik untuk memesan Pecut Samandiman?
      </Typography>
      <Typography
        sx={{
          fontSize: '18px',
          fontWeight: '500',
          color: '#959595',
          textAlign: 'center',
        }}>
        Jika kamu tertarik dengan Pecut Samandiman, kamu bisa memesan
        Pecut langsung dari Pengrajin di Kelurahan Kemasan, kamu juga
        bisa melakukan request desain pecut sesuai dengan
        keinginnanmu.
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          variant="contained"
          size="large"
          className={classes.button}
          startIcon={<MailIcon />}>
          Kirim Email
        </Button>
      </Box>
    </Box>
  );
};

export default Buy;
