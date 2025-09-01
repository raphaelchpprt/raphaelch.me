import React from 'react';

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return <h1>My Page: {slug}</h1>;
}
