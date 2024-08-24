import React, { Suspense } from 'react'
import ViewProdi from './libs/view';
import Loading from './loading';

export default function Prodi() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ViewProdi />
      </Suspense>
    </>
  );
}
