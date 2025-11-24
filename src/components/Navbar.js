// "use client";
// import React from "react";
// import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import Link from "next/link";
// import Image from "next/image";

// export default function NavigationBar() {
//   return (
//     <Navbar bg="light" expand="lg" className="shadow-sm">
//       <Container>
//         {/* اللوجو */}
//         <Navbar.Brand as={Link} href="/">
//           <Image src="/logo.png" alt="Logo" width={50} height={50} />
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={Link} href="/">الرئيسية</Nav.Link>
//             <Nav.Link as={Link} href="/about">من نحن</Nav.Link>
//             <Nav.Link as={Link} href="/contact">اتصل بنا</Nav.Link>
//             <Nav.Link as={Link} href="/articles">المقالات</Nav.Link>
//             {/* قائمة الأسعار */}
//             <NavDropdown title="الأسعار" id="prices-dropdown">
//               <NavDropdown.Item as={Link} href="/prices/gold">أسعار الذهب</NavDropdown.Item>
//               <NavDropdown.Item as={Link} href="/prices/currency">أسعار الصرف</NavDropdown.Item>
//               <NavDropdown.Item as={Link} href="/prices/poultry">بورصة الدواجن</NavDropdown.Item>
//               <NavDropdown.Item as={Link} href="/prices/materials">أسعار الخامات</NavDropdown.Item>
//               <NavDropdown.Item as={Link} href="/prices/feeds">اسعار الاعلاف</NavDropdown.Item>

//             </NavDropdown>

//             <Nav.Link as={Link} href="/store">المتجر</Nav.Link>
//           </Nav>

//           {/* اللغة */}
//           <div>
//             <Image
//               src="/egypt-flag.png"
//               alt="AR"
//               width={32}
//               height={20}
//               style={{ cursor: "pointer", marginRight: "10px" }}
//             />
//             <Image
//               src="/usa-flag.png"
//               alt="EN"
//               width={32}
//               height={20}
//               style={{ cursor: "pointer" }}
//             />
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// "use client";
// import React, { useState, useEffect } from "react";
// import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
// import Link from "next/link";
// import Image from "next/image";

// export default function NavigationBar() {
//   const [cartItems, setCartItems] = useState([]);

//   // جلب محتويات السلة من localStorage
//   useEffect(() => {
//     const updateCart = () => {
//       const cart = JSON.parse(localStorage.getItem('cart') || '[]');
//       setCartItems(cart);
//     };

//     // تحديث السلة أول مرة
//     updateCart();

//     // الاستماع لتغييرات localStorage (إذا فتحنا صفحة أخرى)
//     window.addEventListener('storage', updateCart);
    
//     // تحديث السلة كلما تغيرت (لنفس الصفحة)
//     const interval = setInterval(updateCart, 1000);

//     return () => {
//       window.removeEventListener('storage', updateCart);
//       clearInterval(interval);
//     };
//   }, []);

//   // حساب إجمالي عدد القطع في السلة
//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <Navbar bg="light" expand="lg" className="shadow-sm" style={{ direction: 'rtl' }}>
//       <Container>
//         {/* اللوجو */}
//         <Navbar.Brand as={Link} href="/">
//           <Image src="/logo.png" alt="Logo" width={50} height={50} />
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={Link} href="/">الرئيسية</Nav.Link>
//             <Nav.Link as={Link} href="/about">من نحن</Nav.Link>
//             <Nav.Link as={Link} href="/contact">اتصل بنا</Nav.Link>
//             <Nav.Link as={Link} href="/articles">المقالات</Nav.Link>
            
//             {/* قائمة الأسعار */}
//             <NavDropdown title="الأسعار" id="prices-dropdown">
//               <NavDropdown.Item as={Link} href="/prices/gold">أسعار الذهب</NavDropdown.Item>
//               <NavDropdown.Item as={Link} href="/prices/currency">أسعار الصرف</NavDropdown.Item>
//               <NavDropdown.Item as={Link} href="/prices/poultry">بورصة الدواجن</NavDropdown.Item>
//               <NavDropdown.Item as={Link} href="/prices/materials">أسعار الخامات</NavDropdown.Item>
//               <NavDropdown.Item as={Link} href="/prices/feeds">اسعار الاعلاف</NavDropdown.Item>
//             </NavDropdown>

//             <Nav.Link as={Link} href="/store">المتجر</Nav.Link>
//           </Nav>

//           {/* 🔥 زر السلة مع العداد */}
//           <Nav className="ms-3">
//             <Nav.Link 
//               as={Link} 
//               href="/cart" 
//               className="position-relative"
//               style={{ 
//                 display: 'flex', 
//                 alignItems: 'center',
//                 padding: '8px 12px',
//                 borderRadius: '8px',
//                 backgroundColor: totalItems > 0 ? '#f8f9fa' : 'transparent',
//                 transition: 'all 0.3s ease'
//               }}
//             >
//               <span style={{ fontSize: '1.5rem', marginLeft: '8px' }}>🛒</span>
//               سلة التسوق
              
//               {/* عداد المنتجات */}
//               {totalItems > 0 && (
//                 <Badge 
//                   bg="danger" 
//                   className="position-absolute top-0 start-100 translate-middle"
//                   style={{ 
//                     fontSize: '0.7rem',
//                     minWidth: '20px',
//                     height: '20px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                   }}
//                 >
//                   {totalItems}
//                 </Badge>
//               )}
//             </Nav.Link>
//           </Nav>

//           {/* اللغة */}
//           <div style={{ marginRight: '15px' }}>
//             <Image
//               src="/egypt-flag.png"
//               alt="AR"
//               width={32}
//               height={20}
//               style={{ cursor: "pointer", marginRight: "10px" }}
//             />
//             <Image
//               src="/usa-flag.png"
//               alt="EN"
//               width={32}
//               height={20}
//               style={{ cursor: "pointer" }}
//             />
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }



"use client";
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function NavigationBar() {
  const [totalItems, setTotalItems] = useState(0);

  // 🔥 حل أبسط لـ hydration
  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
      setTotalItems(itemsCount);
    };

    updateCart();
    const interval = setInterval(updateCart, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} href="/">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">الرئيسية</Nav.Link>
            <Nav.Link as={Link} href="/about">من نحن</Nav.Link>
            <Nav.Link as={Link} href="/contact">اتصل بنا</Nav.Link>
            <Nav.Link as={Link} href="/articles">المقالات</Nav.Link>
            
            <NavDropdown title="الأسعار" id="prices-dropdown">
              <NavDropdown.Item as={Link} href="/prices/gold">أسعار الذهب</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/prices/currency">أسعار الصرف</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/prices/poultry">بورصة الدواجن</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/prices/materials">أسعار الخامات</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/prices/feeds">اسعار الاعلاف</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} href="/store">المتجر</Nav.Link>
          </Nav>

          {/* 🔥 زر السلة - بدون مشاكل hydration */}
          <Nav.Link as={Link} href="/cart" className="position-relative mx-2">
            🛒 السلة
            {totalItems > 0 && (
              <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle">
                {totalItems}
              </Badge>
            )}
          </Nav.Link>

          {/* اللغة */}
          <div>
            <Image
              src="/egypt-flag.png"
              alt="AR"
              width={32}
              height={20}
              style={{ cursor: "pointer", marginRight: "10px" }}
            />
            <Image
              src="/usa-flag.png"
              alt="EN"
              width={32}
              height={20}
              style={{ cursor: "pointer" }}
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}