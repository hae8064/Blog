import { getPostData } from '@/app/api/posts';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

export default async function Postpage({ params: { slug } }: Props) {
  const post = await getPostData(slug);

  return (
    <>
      <h1>{post.title}</h1>
    </>
  );
}
