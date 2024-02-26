import { Box, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <Box>
      <Box
        sx={{
          width: '500px',
          height: '150px',
          borderBottom: '2px solid #bfbfbf',
        }}>
        <Typography
          textTransform={'uppercase'}
          sx={{ color: '#C10513', fontWeight: '700' }}>
          Pecut Samandiman
        </Typography>
        <Typography sx={{ color: '#696969', maxWidth: '500px' }}>
          Pecut Samandiman adalah pusaka berupa cambuk yang berasal
          dari Ponorogo, Jawa Timur yang dimiliki oleh Raja Klono
          Sewandono serta memiliki kesaktian untuk mengalahkan
          lawannya, Singo Barong.
        </Typography>
      </Box>
      <Box
        sx={{
          width: '500px',
          height: '200px',
          borderBottom: '2px solid #bfbfbf',
          mt: '100px',
        }}>
        <Typography
          textTransform={'uppercase'}
          sx={{ color: '#C10513', fontWeight: '700' }}>
          Kesenian Pecut Samandiman Kediri
        </Typography>
        <Typography sx={{ color: '#696969', maxWidth: '500px' }}>
          Kesenian Pecut Samandiman telah didaftarkan oleh pemerintah
          kota kediri sebagai Hak Kekayaan Intelektual (HAKI) Kota
          Kediri, Selain itu Kota Kediri juga menjadikan Kelurahan
          Kemasan sebagai Kampung Pecut, dimana di kelurahan Kemasan
          terdapat banyak pelaku kesenian Pecut samandiman dan
          pengrajin Pecut Samandiman
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
