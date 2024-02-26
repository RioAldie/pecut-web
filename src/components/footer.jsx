import { Box, Typography } from '@mui/material';
import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box
      bgcolor={'primary'}
      sx={{
        minWidth: '350px',
        maxWidth: '100%',
        minHeight: '300px',
        marginTop: '100px',
        bgcolor: '#E60112',
        borderTop: '20px #C10513 solid',
        borderTopLeftRadius: '80px',
        display: 'flex',
        flexDirection: {
          md: 'row',
          sm: 'column',
          xs: 'column',
          lg: 'row',
        },
        alignItems: 'center',
        gap: '20px',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginBottom: '0px',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: '50px',
          gap: '10px',
        }}>
        <Image
          src="/images/logo-pecut-crop.png"
          width={100}
          height={100}
          alt="logo"
        />
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#fff',
            maxWidth: '300px',
          }}>
          Pecut Samandiman Kemasan
        </Typography>
      </Box>
      <Box sx={{ marginTop: '30px' }}>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
          {' '}
          <HomeIcon />
          Jln. Patiunus No.23, Kediri 64125
        </Typography>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginTop: '20px',
          }}>
          {' '}
          <LocalPhoneIcon /> +62895702695858{' '}
        </Typography>
      </Box>
      <Typography
        sx={{
          color: '#fff',
          width: '100%',
          marginBottom: '30px',
          marginTop: '20px',
          textAlign: 'center',
        }}>
        © 2023 Presented by KKN Kemasan 24 UNP Kediri
      </Typography>
    </Box>
  );
};

export default Footer;
