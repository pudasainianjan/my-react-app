import React from "react";
import { Layout, Menu, Avatar, Typography } from "antd";
import { Link } from "react-router-dom";
import "./Sidebar.css";

import { UserAddOutlined, UsergroupAddOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const SideBar = ({ collapsed, setCollapsed }) => {
  const LOGO = "/logo.png";

  return (
    <Sider
      breakpoint="sm"
      onBreakpoint={(broken) => {
        setCollapsed(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <Link to="/">
        <div
          // className="logo"
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        >
          <span className="avatar-item">
            <Avatar
              size={50}
              className="brand"
              style={{ float: "left" }}
              src={LOGO}
            />
          </span>
        </div>
      </Link>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["user_preferences"]}
        onClick={() => {
          if (!collapsed) {
            setCollapsed(!collapsed);
          }
        }}
      >
        <Menu.Item key="client" icon={<UserAddOutlined />}>
          <Link to="/clients"> Clients</Link>
        </Menu.Item>

        <Menu.Item key="users" icon={<UsergroupAddOutlined />}>
          <Link to="/users"> Users</Link>
        </Menu.Item>

        <Menu.Item key="customers" icon={<UserAddOutlined />}>
          <Link to="/customers"> Customers</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
