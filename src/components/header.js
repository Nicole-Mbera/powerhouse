import React, { useState } from "react";
import "./header.css"
import { Drawer } from "antd";
import logo from "../assets/images/logo2cropped.png"
import { MenuOutlined } from '@ant-design/icons'
import Menu from "../views/menu";

const Header = ({ data }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const handleclickDrawerVisible = () => {
    setDrawerVisible(true);
  };
  const closeDrawervisible = () => {
    setDrawerVisible(false);
  };
  return (
    <>
      <Drawer
        placement="right"
        visible={drawerVisible}
        width={250}
        // height={20}
        onClose={() => closeDrawervisible()}
      >
        {/* <EmptyCart data={data} /> */} <Menu data={data}></Menu>
      </Drawer>
      <div className="headerContainer">
        <div className="logo">
          <img src={logo} alt="company brand" />

        </div>
        

        <div className="Navbar">
          <a href="/home" > Home </a>
          <a href="/challenges"> Challenges</a>
          <a href="/aboutus">About us</a>
          <a href="/gallery">Gallery</a>
          

        </div>

        <div className="button-container">
          <h1 href="/shop" onClick={() => handleclickDrawerVisible()} style={{fontSize: "25px", color: "black", paddingTop:"30px", paddingRight:"15px"}}> <MenuOutlined /></h1>
        

        </div>

      </div>
    </>
  )

}

export default Header;