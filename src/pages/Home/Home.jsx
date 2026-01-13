import { Box, Card, Grid, Image, Stack, Text, Title } from '@mantine/core';
import Hero from '/src/assets/hero.jpg';
import style from './Home.module.css';
import { useLoaderData, useNavigate } from 'react-router';

const Home = () => {
  const posts = useLoaderData();
  const navigate = useNavigate();

  const cardOnClick = id => {
    navigate('/posts/' + id)
  };

  return (
    <Stack component='main' gap={0}>
      <Box className={style.hero}>
        <Image src={Hero} />
        <Box className={style.mainText}>
          <Text>為旅程</Text>
          <Text>留下清晰的</Text>
        </Box>
        <Text className={style.subText}>回憶</Text>
      </Box>

      <Box px={28} mb={16}>
        <Title order={2} my={16}>
          全部文章
        </Title>

        <Grid>
          {posts.map(post => (
            <Grid.Col key={post.id} span={{ base: 6, xs: 4, sm: 3 }}>
              <Card withBorder h={200} p={0} onClick={() => cardOnClick(post.id)}>
                <Image src={post.imageUrl} h={110} fit='cover' />

                <Box p={8} w='100%'>
                  <Title order={3} size={16} py={4}>
                    {post.title}
                  </Title>
                  <Text>
                    {post.TEXTContent.length > 20
                      ? post.TEXTContent.slice(0, 20) + '...'
                      : post.TEXTContent}
                  </Text>
                </Box>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default Home;
