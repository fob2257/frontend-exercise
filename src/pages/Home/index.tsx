import React, { useEffect, useState } from 'react';

import Catalog from '../../components/Catalog';
import { fetchDogs } from '../../utils/fetchDogs';

function HomePage() {
  const [items, setItems] = useState<any[]>([]);

  const updateItems = async () => {
    const { data } = await fetchDogs();

    setItems(data);
  };

  useEffect(() => {
    updateItems();
  }, []);

  return (
    <section className="homepage">
      <Catalog items={items.slice(0, 6)} />
    </section>
  );
}

export default HomePage;
