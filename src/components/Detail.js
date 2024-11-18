import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams(); // ดึง `id` จาก URL

  return (
    <div>
      <h1>Detail Page</h1>
      <p>Item ID: {id}</p>
    </div>
  );
};

export default Detail;