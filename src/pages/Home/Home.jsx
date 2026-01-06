import { Box, Image, Stack, Text } from '@mantine/core';
import Hero from '/src/assets/hero.jpg';
import style from './Home.module.css';

const Home = () => {
  return (
    <Stack component='main'>
      <Box className={style.hero}>
        <Image src={Hero} />
        <Box className={style.mainText}>
          <Text>為旅程</Text>
          <Text>留下清晰的</Text>
        </Box>
        <Text className={style.subText}>回憶</Text>
      </Box>
    </Stack>
  );
};

export default Home;
