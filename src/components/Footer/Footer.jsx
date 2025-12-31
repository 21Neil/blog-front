import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Flex, Stack, Text } from '@mantine/core';

const Footer = () => {
  return (
    <Flex
      c='white'
      bg='main-color'
      justify='space-between'
      align='center'
      px='28px'
      py='12px'
    >
      <Text size='12px'>©2025 Neil</Text>
      <Stack gap='0'>
        <Text>Contact me</Text>
        <Text size='12px'>
          <FontAwesomeIcon icon='fa-solid fa-envelope' />
          neeilchu@gmail.com
        </Text>
      </Stack>
      <Flex gap='12px'>
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
  );
};

export default Footer;
