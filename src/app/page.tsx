import React from 'react';
import Books from './books/page';
import Banner from '@/components/homepage/Banner';

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <Books></Books>
    </div>
  );
};

export default page;
