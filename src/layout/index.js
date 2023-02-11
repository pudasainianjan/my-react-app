import { Layout } from "antd";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
//custom history object that can be accessed by any component in app
import Contents from "../routes/index";
import Header from "../shared/components/header/Navbar";
import "./style.css";

const { Footer } = Layout;
const Home = () => {
  //for sidenav collapse
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <BrowserRouter>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        {/* <SideBar collapsed={collapsed} setCollapsed={setCollapsed} /> */}

        <Layout className="site-layout">
          <Header toggleSidebar={toggleSidebar} collapsed={collapsed} />

          <div style={{ width: "100%" }}>
            <Contents />

            <Footer style={{ textAlign: "center" }}>
              Copyright Texas ©2021 Created by TexasClz
            </Footer>
          </div>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default Home;
