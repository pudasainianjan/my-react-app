import {
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme, Avatar } from "antd";
import { useState } from "react";
import "./Navbar.css";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    "My Introducton",
    "1",
    <Link to="/">
      <UserOutlined />
    </Link>
  ),
  getItem("My Projects", "proj", <DesktopOutlined />, [
    getItem(<Link to="/showJoke">Jokes Fetching</Link>, "proj1"),
    getItem("Fetching Movies", "proj2"),
  ]),
  getItem("Contact", "sub2", <TeamOutlined />),
  getItem("My Github", "9", <FileOutlined />),
];
const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const LOGO = "/logo512.png";

  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Link to="/">
          <div className="logo">
            <span className="avatar-item">
              <Avatar
                size={50}
                className="brand-logo"
                style={{ float: "left", width: "100%" }}
                src={LOGO}
              />
            </span>
          </div>
        </Link>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
    </>
  );
};
export default Navbar;
