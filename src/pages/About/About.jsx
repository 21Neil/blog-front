import { Box, Image, Stack, Text, Title } from '@mantine/core';
import aboutMe1 from '/src/assets/about-me-1.jpg';
import aboutMe2 from '/src/assets/about-me-2.jpg';
import aboutMe3 from '/src/assets/about-me-3.jpg';

const About = () => {
  return (
    <Box component='main' px={24}>
      <Title order={2} my={16}>
        關於我
      </Title>

      <Stack gap={16}>
        <Image src={aboutMe1} bdrs={5} />

        <Box>
          <Text>常常很隨性的拿起相機的，</Text>
          <Text>因為記憶不太好，</Text>
          <Text>所以透過相片記錄下每次的回憶。</Text>
        </Box>

        <Box pos='relative' h={300}>
          <Image
            src={aboutMe2}
            bdrs={5}
            w={142}
            pos='absolute'
            left='5%'
            top='2%'
          />
          <Image
            src={aboutMe3}
            bdrs={5}
            w={138}
            pos='absolute'
            right='5%'
            bottom='8%'
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
