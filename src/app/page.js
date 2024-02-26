'use client';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CollectionsIcon from '@mui/icons-material/Collections';
import Image from 'next/image';
import Link from 'next/link';
import About from '@/components/about';
import Buy from '@/components/buy';

const useStyles = makeStyles((theme) => ({
  button: {
    width: '100%',
    borderRadius: 0,
    height: '44px',
    backgroundColor: '#E60112',
    color: 'white',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#C10513',
    },
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <Box
      mt={'200px'}
      px={'150px'}
      mb={'50px'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '250px',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Box
          sx={{
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: '56px',
              fontWeight: '700',
              color: '#C10513',
              width: '490px',
            }}>
            Kampung Pecut Kemasan
          </Typography>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: '500',
              color: '#959595',
              width: '400px',
            }}>
            Sebuah Kampung di Kota Kediri yang menjadi tempat
            pelestarian Pecut Samandiman di Indonesia
          </Typography>
          <Link href={'/gallery'}>
            <Button variant="contained" className={classes.button}>
              <CollectionsIcon sx={{ marginRight: '20px' }} /> Lihat
              Gallery
            </Button>
          </Link>
        </Box>
        <Box>
          <Image
            src={'/images/pecut-thumbnail-red.png'}
            width={460}
            height={390}
          />
        </Box>
      </Box>
      <Box
        sx={{
          mt: '200px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <About />
        <Box sx={{ border: 'solid 10px #C10513 ', p: '10px' }}>
          <Image
            src={'/images/taman.jpeg'}
            alt="taman"
            width={500}
            height={500}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px',
        }}>
        <Buy />
      </Box>
    </Box>
  );
}
