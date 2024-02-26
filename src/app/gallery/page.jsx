import Buy from '@/components/buy';
import MasonryImageList from '@/components/imageList';
import { Box, Typography } from '@mui/material';

const Gallery = () => {
  return (
    <Box
      mt={'200px'}
      px={'100px'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: '250px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <Typography
        sx={{
          fontWeight: '700',
          color: '#C10513',
          fontSize: '46px',
        }}>
        Galleri Pecut Samandiman Kemasan
      </Typography>
      <MasonryImageList />
      <Buy />
    </Box>
  );
};

export default Gallery;
