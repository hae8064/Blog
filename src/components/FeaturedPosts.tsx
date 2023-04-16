import React from 'react';
import PostsGrid from './PostsGrid';
import { getFeaturedPosts } from '@/app/api/posts';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts(); //등록일로 정렬된 배열을 리턴해주는 함수

  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">고정된 게시물</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
