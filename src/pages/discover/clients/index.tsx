import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';

const DiscoverClients = () => {
  const { setRouteName } = useAppContext();

  useEffect(() => {
    setRouteName('Discover Clients');
  }, []);

  return (
    <>
      <Title>Discover Clients</Title>
      Discover Clients
    </>
  );
};

export default DiscoverClients;
