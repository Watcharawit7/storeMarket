import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams(); // ดึง `id` จาก URL
  const [product, setProduct] = useState(null); // เก็บข้อมูลสินค้า
  const [loading, setLoading] = useState(true); // สถานะการโหลด
  const [error, setError] = useState(null); // จัดการข้อผิดพลาด

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // แสดงข้อความขณะโหลดข้อมูล
  }

  if (error) {
    return <div>Error: {error}</div>; // แสดงข้อความข้อผิดพลาด
  }

  return (
    <div>
      <h1>Product Detail</h1>
      {product && (
        <div>
          <img
            src={product.image}
            alt={product.title}
            style={{ maxWidth: "300px" }}
          />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
