import { useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import ProductsList from "../../components/products/ProductListing";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  // const accessToken = localStorage.getItem("accessToken");
  // const navigate = useNavigate();
  // useEffect(() => {
  //     if (!accessToken) {
  //       navigate("/login");
  //     }
  // },[accessToken]);
  return ( 
    <>
      <div className="container mx-auto px-3">
        <Navbar />
        <Carousel />
        <ProductsList />
      </div>
    </>
  );
};

export default Homepage;
