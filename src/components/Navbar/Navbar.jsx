import { Box, Flex, Title } from '@mantine/core';
import { Link } from 'react-router';
import style from './Navbar.module.css';
import { useViewportSize, useWindowScroll } from '@mantine/hooks';

const Navbar = ({ home }) => {
  const [scroll] = useWindowScroll();
  const { width } = useViewportSize();
  const height = width > 576 ? 450 : 200

  return (
    <Box
      w='100%'
      className={
        style.navbar +
        ' ' +
        (home && style.homeNavbar) +
        ' ' +
        (home && scroll.y < height && style.navbarTransparent)
      }
      top={0}
    >
      <Flex
        c='white'
        justify='space-between'
        align='center'
        maw={768}
        mx='auto'
        px={28}
        py={8}
      >
        <Title ff='caveat'>
          <Link to='/'>Neil.</Link>
        </Title>
        <Link to='/about'>About me</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
