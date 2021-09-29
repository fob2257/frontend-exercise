import React from 'react';

import Catalog from '../../components/Catalog';
import { useCustom } from '../../providers/Custom.provider';

function HomePage() {
  const ctx = useCustom();

  const dogs = ctx?.data || [];

  return (
    <section className="homepage">
      <Catalog dogs={dogs.slice(0, 6)} showAdoptBtn />
    </section>
  );
}

export default HomePage;
