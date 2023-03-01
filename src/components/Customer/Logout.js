// import { useNavigate } from "react-router-dom";

function Logout() {
//   const navigate = useNavigate();
  localStorage.removeItem("customer_login");
  localStorage.removeItem("customer_username");
  window.location.href = "/customer/login";
  //   navigate("/customer/login");
}

export default Logout;
