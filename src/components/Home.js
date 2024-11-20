import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const [products, setProducts] = useState([]); // จัดการข้อมูลสินค้า
  const [loading, setLoading] = useState(true); // สถานะการโหลด
  const navigate = useNavigate();
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
    <div className="container mt-4">
      <h1 className="text-center mb-4">Product List</h1>
      <div className="row">
        {products.map((product) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            key={product.id}
          >
            <div className="card h-100">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top mt-4"
                style={{ height: "180px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{product.title}</h6>
                <p className="card-text text-success text-center">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  type="button"
                  className="btn btn-outline-success mt-auto"
                  onClick={() => navigate(`/detail/${product.id}`)}
                >
                  รายละเอียด
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
