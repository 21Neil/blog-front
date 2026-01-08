import { Flex, Title } from '@mantine/core';
import { Link } from 'react-router';
import style from './Navbar.module.css';

const Navbar = ({ home }) => {
  return (
    <Flex
      c='white'
      justify='space-between'
      align='center'
      className={style.navbar + ' ' + (home && style.navbarTransparent)}
    >
      <Title ff='caveat' size={28}>
        <Link>Neil.</Link>
      </Title>
      <Link>About me</Link>
    </Flex>
  );
};

export default Navbar;
