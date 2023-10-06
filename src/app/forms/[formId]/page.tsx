'use client';

import React from 'react';
import Forms from '@/views/forms';

export default function FormIdPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <Forms />;
}
