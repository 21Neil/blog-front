import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Flex, Stack, Text } from '@mantine/core';

const Footer = () => {
  return (
    <Box w='100%' bg='main-color'>
      <Flex
        c='white'
        justify='space-between'
        align='center'
        px={28}
        py={12}
        maw={768}
        mx='auto'
      >
        <Text size='12px'>©2025 Neil</Text>
        <Stack gap={0}>
          <Text>Contact me</Text>
          <Text size='12px'>
            <FontAwesomeIcon icon='fa-solid fa-envelope' />
            neeilchu@gmail.com
          </Text>
        </Stack>
        <Flex gap={12}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.instagram.com/neil_trigger/'
          >
            <Text size='16px'>
              <FontAwesomeIcon icon='fa-brands fa-instagram' />
            </Text>
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/neil-c-100369303'
          >
            <Text size='16px'>
              <FontAwesomeIcon icon='fa-brands fa-linkedin' />
            </Text>
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/21Neil'
          >
            <Text size='16px'>
              <FontAwesomeIcon icon='fa-brands fa-github' />
            </Text>
          </a>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
