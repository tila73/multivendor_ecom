function SellerLogout() {
  localStorage.removeItem("seller_login");
  localStorage.removeItem("seller_username");
  localStorage.removeItem("seller_id");
  window.location.href = "/seller/login";
}

export default SellerLogout;

// import React from 'react';
// import { useNavigate } from "react-router-dom";

// function SellerLogout() {
//   const navigate = useNavigate();
  
//   React.useEffect(() => {
//     localStorage.removeItem("seller_login");
//     localStorage.removeItem("seller_username");
//     localStorage.removeItem("seller_id");
//     navigate("/seller/login");
//   }, [navigate]);
  
//   return null;
// }

// export default SellerLogout;

