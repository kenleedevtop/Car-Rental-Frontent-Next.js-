import React, { useEffect } from 'react';
import { Title } from 'components/core';
import { useAppContext } from 'context';
import { OverviewPage } from 'features';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const Overview = () => {
  const { setRouteName } = useAppContext();

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    setRouteName('Overview');
  }, []);
  return (
    <>
      <Title>Overview</Title>
      <OverviewPage carId={query.carId} />
    </>
  );
};

// export async function getStaticProps({ locale }: { locale: string }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['account', 'common'])),
//     },
//   };
// }

export default Overview;
