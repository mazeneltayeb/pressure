



// "use client";
// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { Container, Row, Col, Carousel, Button, Badge, Spinner, Alert } from "react-bootstrap";

// export default function ProductPage() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);
//         setError("");
//         console.log("🔄 جاري جلب المنتج بالـ ID:", id);
        
//         const res = await fetch(`/api/products/${id}`);
        
//         console.log("📡 حالة الـ response:", res.status);
        
//         if (!res.ok) {
//           if (res.status === 404) {
//             setError("المنتج غير موجود");
//           } else if (res.status === 400) {
//             setError("معرف المنتج غير صحيح");
//           } else {
//             setError("حدث خطأ أثناء تحميل المنتج");
//           }
//           return;
//         }
        
//         const data = await res.json();
//         console.log("✅ البيانات المستلمة:", data);
        
//         if (data.error) {
//           setError(data.error);
//         } else {
//           setProduct(data);
//         }
//       } catch (error) {
//         console.error("💥 خطأ في الاتصال:", error);
//         setError("حدث خطأ في الاتصال بالسيرفر");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchProduct();
//     } else {
//       setError("لم يتم تحديد منتج");
//       setLoading(false);
//     }
//   }, [id]);

//   if (loading) {
//     return (
//       <Container className="py-5 text-center">
//         <Spinner animation="border" variant="primary" />
//         <p className="mt-3">جارٍ تحميل المنتج...</p>
//       </Container>
//     );
//   }

//   if (error) {
//     return (
//       <Container className="py-5">
//         <Alert variant="danger" className="text-center">
//           <h4>❌ {error}</h4>
//           <Button 
//             variant="primary" 
//             className="mt-3"
//             href="/store"
//           >
//             العودة للمتجر
//           </Button>
//         </Alert>
//       </Container>
//     );
//   }

//   if (!product) {
//     return (
//       <Container className="py-5 text-center">
//         <Alert variant="warning">
//           <h4>المنتج غير موجود</h4>
//           <Button 
//             variant="primary" 
//             className="mt-2"
//             href="/store"
//           >
//             العودة للمتجر
//           </Button>
//         </Alert>
//       </Container>
//     );
//   }

//   return (
//     <Container className="py-5">
//       <Row>
//         <Col md={6}>
//           {/* معرض صور المنتج */}
//           {product.images && product.images.length > 0 ? (
//             <Carousel>
//               {product.images.map((img, index) => (
//                 <Carousel.Item key={index}>
//                   <img
//                     className="d-block w-100"
//                     src={img}
//                     alt={`${product.name} - صورة ${index + 1}`}
//                     style={{ 
//                       height: "400px", 
//                       objectFit: "cover",
//                       borderRadius: "10px"
//                     }}
//                     onError={(e) => {
//                       console.error("❌ فشل تحميل الصورة:", img);
//                       e.target.style.display = 'none';
//                     }}
//                   />
//                 </Carousel.Item>
//               ))}
//             </Carousel>
//           ) : (
//             <div className="text-center py-5 border rounded bg-light">
//               <p>📷 لا توجد صور للمنتج</p>
//             </div>
//           )}
//         </Col>

//         <Col md={6}>
//           {/* فئة المنتج */}
//           {product.category && (
//             <Badge bg="primary" className="mb-2" style={{ fontSize: "0.9rem" }}>
//               {product.category}
//             </Badge>
//           )}
          
//           <h1 className="mb-3" style={{ color: "#2c5aa0" }}>{product.name}</h1>
          
//           <h2 className="text-success my-4" style={{ fontSize: "2rem" }}>
//             {product.price} ج.م
//           </h2>
          
//           {/* الوصف */}
//           {product.description && (
//             <div className="mb-4">
//               <h5>الوصف:</h5>
//               <p className="text-muted" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
//                 {product.description}
//               </p>
//             </div>
//           )}

//           {/* التفاصيل */}
//           {product.article && (
//             <div className="mb-4">
//               <h5>تفاصيل المنتج:</h5>
//               <p style={{ fontSize: "1rem", lineHeight: "1.8", textAlign: "right" }}>
//                 {product.article}
//               </p>
//             </div>
//           )}

//           {/* فيديو يوتيوب */}
//           {product.youtube && (
//             <div className="mb-4">
//               <h5>فيديو عن المنتج:</h5>
//               <div className="ratio ratio-16x9">
//                 <iframe
//                   src={product.youtube.replace("watch?v=", "embed/")}
//                   title="فيديو المنتج"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             </div>
//           )}

//           {/* أزرار الشراء */}
//           <div className="d-flex gap-3 mt-4">
//             <Button variant="success" size="lg" className="flex-fill">
//               🛒 أضف إلى السلة
//             </Button>
//             <Button variant="outline-primary" size="lg">
//               💚 المفضلة
//             </Button>
//           </div>
//           <div className="d-flex gap-3 mt-4">
//   <AddToCartButton product={product} />
//   <Button variant="outline-primary" size="lg">
//     💚 المفضلة
//   </Button>
// </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }


"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { 
  Container, 
  Row, 
  Col, 
  Carousel, 
  Button, 
  Badge, 
  Spinner, 
  Alert,
  Modal,
  InputGroup,
  Form 
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
        size="lg"
        className="flex-fill"
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

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");
        console.log("🔄 جاري جلب المنتج بالـ ID:", id);
        
        const res = await fetch(`/api/store/${id}`);
        
        console.log("📡 حالة الـ response:", res.status);
        
        if (!res.ok) {
          if (res.status === 404) {
            setError("المنتج غير موجود");
          } else if (res.status === 400) {
            setError("معرف المنتج غير صحيح");
          } else {
            setError("حدث خطأ أثناء تحميل المنتج");
          }
          return;
        }
        
        const data = await res.json();
        console.log("✅ البيانات المستلمة:", data);
        
        if (data.error) {
          setError(data.error);
        } else {
          setProduct(data);
        }
      } catch (error) {
        console.error("💥 خطأ في الاتصال:", error);
        setError("حدث خطأ في الاتصال بالسيرفر");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    } else {
      setError("لم يتم تحديد منتج");
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">جارٍ تحميل المنتج...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger" className="text-center">
          <h4>❌ {error}</h4>
          <Button 
            variant="primary" 
            className="mt-3"
            href="/store"
          >
            العودة للمتجر
          </Button>
        </Alert>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="warning">
          <h4>المنتج غير موجود</h4>
          <Button 
            variant="primary" 
            className="mt-2"
            href="/store"
          >
            العودة للمتجر
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          {/* معرض صور المنتج */}
          {product.images && product.images.length > 0 ? (
            <Carousel>
              {product.images.map((img, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={img}
                    alt={`${product.name} - صورة ${index + 1}`}
                    style={{ 
                      height: "400px", 
                      objectFit: "cover",
                      borderRadius: "10px"
                    }}
                    onError={(e) => {
                      console.error("❌ فشل تحميل الصورة:", img);
                      e.target.style.display = 'none';
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <div className="text-center py-5 border rounded bg-light">
              <p>📷 لا توجد صور للمنتج</p>
            </div>
          )}
        </Col>

        <Col md={6}>
          {/* فئة المنتج */}
          {product.category && (
            <Badge bg="primary" className="mb-2" style={{ fontSize: "0.9rem" }}>
              {product.category}
            </Badge>
          )}
          
          <h1 className="mb-3" style={{ color: "#2c5aa0" }}>{product.name}</h1>
          
          <h2 className="text-success my-4" style={{ fontSize: "2rem" }}>
            {product.price} ج.م
          </h2>
          
          {/* الوصف */}
          {product.description && (
            <div className="mb-4">
              <h5>الوصف:</h5>
              <p className="text-muted" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                {product.description}
              </p>
            </div>
          )}

          {/* التفاصيل */}
          {product.article && (
            <div className="mb-4">
              <h5>تفاصيل المنتج:</h5>
              <p style={{ fontSize: "1rem", lineHeight: "1.8", textAlign: "right" }}>
                {product.article}
              </p>
            </div>
          )}

          {/* فيديو يوتيوب */}
          {product.youtube && (
            <div className="mb-4">
              <h5>فيديو عن المنتج:</h5>
              <div className="ratio ratio-16x9">
                <iframe
                  src={product.youtube.replace("watch?v=", "embed/")}
                  title="فيديو المنتج"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {/* 🔥 أزرار الشراء */}
          <div className="d-flex gap-3 mt-4">
            <AddToCartButton product={product} />
            <Button variant="outline-primary" size="lg">
              💚 المفضلة
            </Button>
          </div>

          {/* 🔥 زر عرض السلة */}
          <div className="mt-3">
            <Button variant="outline-success" href="/cart" className="w-100">
              🛒 عرض سلة التسوق
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}