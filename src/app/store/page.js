
// "use client";
// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Card, Button, Form, Badge, InputGroup   } from "react-bootstrap";

// export default function StorePage() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("الكل");
//   const [loading, setLoading] = useState(true);
//   const [sortBy, setSortBy] = useState("newest");

//   // جلب المنتجات والفئات
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
        
//         // جلب المنتجات
//         const productsRes = await fetch("/api/products");
//         const productsData = await productsRes.json();
//         setProducts(productsData);
//         setFilteredProducts(productsData);

//         // جلب الفئات
//         const categoriesRes = await fetch("/api/categories");
//         const categoriesData = await categoriesRes.json();
//         setCategories(categoriesData);
        
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // فلترة وترتيب المنتجات
//   useEffect(() => {
//     let filtered = products;

//     // الفلترة حسب الفئة
//     if (selectedCategory !== "الكل") {
//       filtered = filtered.filter((product) => product.category === selectedCategory);
//     }

//     // الترتيب
//     if (sortBy === "price-low") {
//       filtered = [...filtered].sort((a, b) => a.price - b.price);
//     } else if (sortBy === "price-high") {
//       filtered = [...filtered].sort((a, b) => b.price - a.price);
//     } else if (sortBy === "newest") {
//       filtered = [...filtered].sort((a, b) => b.id - a.id); // افترضنا إن الـ ID بيكون متزايد
//     }

//     setFilteredProducts(filtered);
//   }, [selectedCategory, sortBy, products]);

//   if (loading) {
//     return (
//       <Container className="py-5 text-center">
//         <div className="spinner-border text-success" role="status">
//           <span className="visually-hidden">جار التحميل...</span>
//         </div>
//         <p className="mt-3">جارٍ تحميل المتجر...</p>
//       </Container>
//     );
//   }

//   return (
//     <Container className="py-5">
//       <h1 className="text-center mb-4">🛍️ متجرنا</h1>

//       {/* 🔹 أدوات الفلترة والترتيب */}
//       <div className="row justify-content-between mb-4">
//         <div className="col-md-4 mb-3">
//           <Form.Select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="shadow-sm"
//           >
//             <option value="الكل">📂 كل المنتجات</option>
//             {categories.map((category) => (
//               <option key={category.id} value={category.name}>
//                 {category.name}
//               </option>
//             ))}
//           </Form.Select>
//         </div>

//         <div className="col-md-4 mb-3">
//           <Form.Select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="shadow-sm"
//           >
//             <option value="newest">🆕 الأحدث</option>
//             <option value="price-low">💰 السعر: من الأقل للأعلى</option>
//             <option value="price-high">💰 السعر: من الأعلى للأقل</option>
//           </Form.Select>
//         </div>
//       </div>

//       {/* 🔹 مؤشر النتائج */}
//       <div className="text-center mb-4">
//         <p className="text-muted">
//           {selectedCategory === "الكل" 
//             ? `عرض ${filteredProducts.length} منتج`
//             : `عرض ${filteredProducts.length} منتج في فئة "${selectedCategory}"`
//           }
//         </p>
//       </div>

//       {/* 🔹 شبكة المنتجات */}
//       <Row>
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//   //           <Col lg={3} md={4} sm={6} key={product.id} className="mb-4">
//   //             <Card className="shadow-sm h-100 product-card">
//   //               {/* صورة المنتج */}
//   //               {product.images && product.images[0] && (
//   //                 <Card.Img
//   //                   variant="top"
//   //                   src={product.images[0]}
//   //                   style={{ 
//   //                     height: "200px", 
//   //                     objectFit: "cover",
//   //                     cursor: "pointer"
//   //                   }}
//   //                   alt={product.name}
//   //                   onClick={() => window.location.href = `/products/${product.id}`}
//   //                 />
//   //               )}
                
//   //               <Card.Body className="d-flex flex-column">
//   //                 {/* الفئة */}
//   //                 {product.category && (
//   //                   <div className="mb-2">
//   //                     <Badge bg="outline-primary" text="dark" className="border">
//   //                       {product.category}
//   //                     </Badge>
//   //                   </div>
//   //                 )}
                  
//   //                 <Card.Title className="flex-grow-1" style={{ fontSize: "1.1rem" }}>
//   //                   {product.name}
//   //                 </Card.Title>
                  
//   //                 <Card.Text className="text-muted flex-grow-1" style={{ fontSize: "0.9rem" }}>
//   //                   {product.description?.slice(0, 80) || "لا يوجد وصف..."}
//   //                 </Card.Text>
                  
//   //                 <div className="d-flex justify-content-between align-items-center mt-auto">
//   //                   <span className="h5 text-success mb-0">
//   //                     {product.price} ج.م
//   //                   </span>
//   //                   <Button 
//   //                     variant="primary" 
//   //                     size="sm"
//   // href={`/store/${product.id}`} // ⬅️ غير من /products/ إلى /store/
//   //                   >
//   //                     عرض المنتج
//   //                   </Button>
//   //                 </div>
//   //               </Card.Body>
//   //             </Card>
//   //           </Col>
//   <Col lg={3} md={4} sm={6} key={product.id} className="mb-4">
//   <Card className="shadow-sm h-100 product-card">
//     {product.images && product.images[0] && (
//       <Card.Img
//         variant="top"
//         src={product.images[0]}
//         style={{ 
//           height: "200px", 
//           objectFit: "cover",
//           cursor: "pointer"
//         }}
//         alt={product.name}
//         onClick={() => window.location.href = `/store/${product.id}`}
//       />
//     )}
    
//     <Card.Body className="d-flex flex-column">
//       {product.category && (
//         <div className="mb-2">
//           <Badge bg="outline-primary" text="dark" className="border">
//             {product.category}
//           </Badge>
//         </div>
//       )}
      
//       <Card.Title className="flex-grow-1" style={{ fontSize: "1.1rem" }}>
//         {product.name}
//       </Card.Title>
      
//       <Card.Text className="text-muted flex-grow-1" style={{ fontSize: "0.9rem" }}>
//         {product.description?.slice(0, 80) || "لا يوجد وصف..."}
//       </Card.Text>
      
//       <div className="d-flex justify-content-between align-items-center mt-auto">
//         <span className="h5 text-success mb-0">
//           {product.price} ج.م
//         </span>
//         <Button 
//           variant="primary" 
//           size="sm"
//           href={`/store/${product.id}`}
//         >
//           عرض المنتج
//         </Button>
//       </div>

//       {/* 🔥 زر إضافة للسلة في الكارت */}
//       <div className="mt-3">
//         <AddToCartButton product={product} />
//       </div>
//     </Card.Body>
//   </Card>
// </Col>
//           ))
//         ) : (
//           <Col className="text-center py-5">
//             <div className="alert alert-warning">
//               <h4>📭 لا توجد منتجات</h4>
//               <p>
//                 {selectedCategory === "الكل" 
//                   ? "لا توجد منتجات متاحة حالياً"
//                   : `لا توجد منتجات في فئة "${selectedCategory}"`
//                 }
//               </p>
//               {selectedCategory !== "الكل" && (
//                 <Button 
//                   variant="outline-primary" 
//                   onClick={() => setSelectedCategory("الكل")}
//                 >
//                   عرض كل المنتجات
//                 </Button>
//               )}
//             </div>
//           </Col>
//         )}
//       </Row>

//       {/* 🔹 إعلان أسفل الصفحة */}
//       <div className="text-center mt-5 p-4 bg-light rounded">
//         <h5>🚀 تسوق الآن واحصل على أفضل العروض!</h5>
//         <p className="text-muted">تشكيلة واسعة من المنتجات بأسعار منافسة</p>
//       </div>
//     </Container>
//   );
// }


"use client";
import React, { useEffect, useState } from "react";
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button, 
  Form, 
  Badge, 
  Modal, 
  InputGroup,
  Spinner,
  Alert 
} from "react-bootstrap";

// 🔥 كومبوننت إضافة للسلة
function AddToCartButton({ product }) {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = currentCart.findIndex(item => item.id === product.id);
    
    if (existingItemIndex > -1) {
      currentCart[existingItemIndex].quantity += quantity;
    } else {
      currentCart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0] || "",
        quantity: quantity
      });
    }
    
    localStorage.setItem('cart', JSON.stringify(currentCart));
    alert(`✅ تم إضافة ${quantity} من ${product.name} إلى السلة`);
    setShowModal(false);
    setQuantity(1);
  };

  return (
    <>
      <Button 
        variant="success" 
        className="w-100"
        onClick={() => setShowModal(true)}
      >
        🛒 اطلب الآن
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>إضافة إلى السلة</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center mb-3">
            <img 
              src={product.images?.[0] || "https://via.placeholder.com/100"} 
              alt={product.name}
              style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h6 className="mt-2">{product.name}</h6>
            <p className="text-success h5">{product.price} ج.م</p>
          </div>

          <Form.Group>
            <Form.Label>الكمية المطلوبة</Form.Label>
            <InputGroup>
              <Button 
                variant="outline-secondary"
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              >
                -
              </Button>
              <Form.Control
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                className="text-center"
              />
              <Button 
                variant="outline-secondary"
                onClick={() => setQuantity(prev => prev + 1)}
              >
                +
              </Button>
            </InputGroup>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            إلغاء
          </Button>
          <Button variant="success" onClick={addToCart}>
            🛒 إضافة إلى السلة
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default function StorePage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("newest");

  // جلب المنتجات والفئات
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // جلب المنتجات
        const productsRes = await fetch("/api/products");
        const productsData = await productsRes.json();
        setProducts(productsData);
        setFilteredProducts(productsData);

        // جلب الفئات
        const categoriesRes = await fetch("/api/categories");
        const categoriesData = await categoriesRes.json();
        setCategories(categoriesData);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // فلترة وترتيب المنتجات
  useEffect(() => {
    let filtered = products;

    // الفلترة حسب الفئة
    if (selectedCategory !== "الكل") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    // الترتيب
    if (sortBy === "price-low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === "newest") {
      filtered = [...filtered].sort((a, b) => b.id - a.id);
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, sortBy, products]);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="success" />
        <p className="mt-3">جارٍ تحميل المتجر...</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">🛍️ متجرنا</h1>

      {/* 🔹 أدوات الفلترة والترتيب */}
      <div className="row justify-content-between mb-4">
        <div className="col-md-4 mb-3">
          <Form.Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="shadow-sm"
          >
            <option value="الكل">📂 كل المنتجات</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </Form.Select>
        </div>

        <div className="col-md-4 mb-3">
          <Form.Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="shadow-sm"
          >
            <option value="newest">🆕 الأحدث</option>
            <option value="price-low">💰 السعر: من الأقل للأعلى</option>
            <option value="price-high">💰 السعر: من الأعلى للأقل</option>
          </Form.Select>
        </div>
      </div>

      {/* 🔹 مؤشر النتائج */}
      <div className="text-center mb-4">
        <p className="text-muted">
          {selectedCategory === "الكل" 
            ? `عرض ${filteredProducts.length} منتج`
            : `عرض ${filteredProducts.length} منتج في فئة "${selectedCategory}"`
          }
        </p>
      </div>

      {/* 🔹 شبكة المنتجات */}
      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Col lg={3} md={4} sm={6} key={product.id} className="mb-4">
              <Card className="shadow-sm h-100 product-card">
                {/* صورة المنتج */}
                {product.images && product.images[0] && (
                  <Card.Img
                    variant="top"
                    src={product.images[0]}
                    style={{ 
                      height: "200px", 
                      objectFit: "cover",
                      cursor: "pointer"
                    }}
                    alt={product.name}
                    onClick={() => window.location.href = `/store/${product.id}`}
                  />
                )}
                
                <Card.Body className="d-flex flex-column">
                  {/* الفئة */}
                  {product.category && (
                    <div className="mb-2">
                      <Badge bg="outline-primary" text="dark" className="border">
                        {product.category}
                      </Badge>
                    </div>
                  )}
                  
                  <Card.Title className="flex-grow-1" style={{ fontSize: "1.1rem" }}>
                    {product.name}
                  </Card.Title>
                  
                  <Card.Text className="text-muted flex-grow-1" style={{ fontSize: "0.9rem" }}>
                    {product.description?.slice(0, 80) || "لا يوجد وصف..."}
                  </Card.Text>
                  
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="h5 text-success mb-0">
                      {product.price} ج.م
                    </span>
                    <Button 
                      variant="primary" 
                      size="sm"
                      href={`/store/${product.id}`}
                    >
                      عرض المنتج
                    </Button>
                  </div>

                  {/* 🔥 زر إضافة للسلة في الكارت */}
                  <div className="mt-3">
                    <AddToCartButton product={product} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center py-5">
            <Alert variant="warning">
              <h4>📭 لا توجد منتجات</h4>
              <p>
                {selectedCategory === "الكل" 
                  ? "لا توجد منتجات متاحة حالياً"
                  : `لا توجد منتجات في فئة "${selectedCategory}"`
                }
              </p>
              {selectedCategory !== "الكل" && (
                <Button 
                  variant="outline-primary" 
                  onClick={() => setSelectedCategory("الكل")}
                >
                  عرض كل المنتجات
                </Button>
              )}
            </Alert>
          </Col>
        )}
      </Row>

      {/* 🔹 إعلان أسفل الصفحة */}
      <div className="text-center mt-5 p-4 bg-light rounded">
        <h5>🚀 تسوق الآن واحصل على أفضل العروض!</h5>
        <p className="text-muted">تشكيلة واسعة من المنتجات بأسعار منافسة</p>
        <Button variant="success" href="/cart">
          🛒 عرض سلة التسوق
        </Button>
      </div>
    </Container>
  );
}
