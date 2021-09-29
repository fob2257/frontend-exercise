import React from 'react';

import { Nav, Title } from './styles';
import { useCustom } from '../../providers/Custom.provider';

const Navbar = () => {
  const ctx = useCustom();

  const cartTotal = ctx.cart?.length || 0;

  return (
    <Nav>
      <Title grow>Adopt a puppie App</Title>
      <Title>Checkout ({cartTotal}) </Title>
    </Nav>
  );
};

export default Navbar;
