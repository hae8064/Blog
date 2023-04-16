import { getNonFeaturedPosts } from '@/app/api/posts';
import React from 'react';
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">고정된 게시글</h2>
      <MultiCarousel>
        {posts && posts.map((post) => <PostCard key={post.path} post={post} />)}
      </MultiCarousel>
    </section>
  );
}
