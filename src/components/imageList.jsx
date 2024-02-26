import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList() {
  return (
    <Box
      sx={{
        maxWidth: '900px',
        border: 'solid #C10513 5px',
        p: '5px',
      }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: '/images/pecut-1.png',
    title: 'Bed',
  },
  {
    img: '/images/pecut-2.png',
    title: 'Books',
  },
  {
    img: '/images/pecut-3.png',
    title: 'Sink',
  },
  {
    img: '/images/pecut-4.png',
    title: 'Kitchen',
  },
  {
    img: '/images/pecut-5.png',
    title: 'Blinds',
  },
  {
    img: '/images/pecut-6.png',
    title: 'Chairs',
  },
  {
    img: '/images/pecut-7.png',
    title: 'Laptop',
  },
  {
    img: '/images/pecut-8.png',
    title: 'Doors',
  },
];
