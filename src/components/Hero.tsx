import Image from 'next/image';
import React from 'react';
import profileImg from '../../public/imgs/profile.jpg';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        src={profileImg}
        alt="프로필 이미지"
        width={200}
        height={200}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">
        프론트엔드 개발자 이봉희입니다
      </h2>
      <p>끊임없이 성장하며 즐겁게 코딩하는 개발자</p>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          연락하기
        </button>
      </Link>
    </section>
  );
}
