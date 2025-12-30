import { Flex, Title } from '@mantine/core';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <Flex
      bg='#797979'
      c='white'
      px='28px'
      py='8px'
      justify='space-between'
      align='center'
    >
      <Title ff='caveat' size='28px'>
        <Link>Neil.</Link>
      </Title>
      <Link>About me</Link>
    </Flex>
  );
};

export default Navbar;
