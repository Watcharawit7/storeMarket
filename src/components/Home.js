import React, { useEffect, useState } from "react";
import "./Home.css";
const Home = () => {
  const [products, setProducts] = useState([]); // จัดการข้อมูลสินค้า
  const [loading, setLoading] = useState(true); // สถานะการโหลด

  useEffect(() => {
    // ดึงข้อมูลสินค้า
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data); // อัปเดตข้อมูลสินค้า
        setLoading(false); // เปลี่ยนสถานะเมื่อโหลดเสร็จ
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // แสดงข้อความขณะกำลังโหลด
  }

  return (
    <div>
      <h1>Product List</h1>
      <div className="item-grid">
        {products.map((product) => (
          <div className="item-card" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
