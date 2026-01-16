import { Flex, Title } from '@mantine/core';
import { Link } from 'react-router';
import style from './Navbar.module.css';
import { useWindowScroll } from '@mantine/hooks';

const Navbar = ({ home }) => {
  const [scroll] = useWindowScroll();

  return (
    <Flex
      c='white'
      justify='space-between'
      align='center'
      className={
        style.navbar +
        ' ' +
        (home && style.homeNavbar) +
        ' ' +
        (home && scroll.y < 339 && style.navbarTransparent)
      }
      top={0}
      w='100%'
    >
      <Title ff='caveat'>
        <Link to='/'>Neil.</Link>
      </Title>
      <Link to='/about'>About me</Link>
    </Flex>
  );
};

export default Navbar;
