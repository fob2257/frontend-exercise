import React from 'react';

import Catalog from '../../components/Catalog';
import { useCustom } from '../../providers/Custom.provider';

function HomePage() {
  const ctx = useCustom();

  const dogs = ctx.availableDogs || [];

  return (
    <section className="homepage">
      <Catalog dogs={dogs} showAdoptBtn />
    </section>
  );
}

export default HomePage;
