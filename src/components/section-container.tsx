

import React from 'react';

// Corrección: Cambio de {} a Record<string, never> para indicar un objeto vacío.
export default function SectionContainer({children, ...props}: React.PropsWithChildren<Record<string, never>>) {
  return (
    <section className='flex flex-col py-20 container space-y-4 overflow-x-hidden' {...props}>
      {children}
    </section>
  );
}
