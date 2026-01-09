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
      <Title ff='caveat'>
        <Link to='/'>Neil.</Link>
      </Title>
      <Link to='/about'>About me</Link>
    </Flex>
  );
};

export default Navbar;
