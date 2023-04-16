import React from 'react';
import { getAllPosts } from '../api/posts';
import FilterablePosts from '@/components/FilterablePosts';

export default async function Postspage() {
  const posts = await getAllPosts();

  //고유한 카테고리 배열을 만들어줌 set을 이용해서 중복된 카테고리를 없애줌
  const categories = [...new Set(posts.map((post) => post.category))];
  return (
    <>
      <FilterablePosts posts={posts} categories={categories} />
    </>
  );
}
