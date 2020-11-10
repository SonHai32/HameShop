import React from "react";

import { Typography, Row, Col, Drawer, Dropdown, Menu } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./index.css";

const { Title } = Typography;

const menu = (
  <Menu style={{ marginTop: 40 }}>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
const NavMenu = () => (
  <React.Fragment>
    <div className="header-nav-item nav-before-line nav-before-circle">
      <Dropdown overlay={menu} placement='bottomCenter'>
        <span>Mỹ phẩm</span>
      </Dropdown>
    </div>
    <div className="header-nav-item nav-before-line nav-before-circle">
      <span>Mỹ phẩm</span>
    </div>
    <div className="header-nav-item nav-before-line nav-before-circle">
      <span>Hàng tiêu dùng</span>
    </div>
    <div className="header-nav-item nav-before-line nav-before-circle">
      <span>Hàng gia dụng</span>
    </div>
    <div className="header-nav-item nav-before-line nav-before-circle">
      <span>Chăm sóc sức khỏe</span>
    </div>
  </React.Fragment>
);

const Header = () => {
  const [userDrawer, setUserDrawer] = React.useState(false);
  const [searchDrawer, setSearchDrawer] = React.useState(false);
  const [cartDrawer, setCartDrawer] = React.useState(false);

  const IconController = () => (
    <React.Fragment>
      <SearchOutlined
        className="header-icon"
        onClick={() => setSearchDrawer(true)}
      />
      <UserOutlined
        className="header-icon"
        onClick={() => setUserDrawer(true)}
      />
      <ShoppingCartOutlined
        className="header-icon"
        onClick={() => setCartDrawer(true)}
      />
    </React.Fragment>
  );

  const UserDrawer = () => (
    <Drawer
      key="userDrawer"
      visible={userDrawer}
      placement="right"
      onClose={() => setUserDrawer(false)}
    >
      <h1>User</h1>
    </Drawer>
  );
  const SearchDrawer = () => (
    <Drawer
      key="searchDrawer"
      visible={searchDrawer}
      placement="right"
      onClose={() => setSearchDrawer(false)}
    >
      <h1>Search</h1>
    </Drawer>
  );
  const CartDrawer = () => (
    <Drawer
      key="cartDrawer"
      visible={cartDrawer}
      placement="right"
      onClose={() => setCartDrawer(false)}
    >
      <h1>Cart</h1>
    </Drawer>
  );
  return (
    <React.Fragment>
      <div className="header-container">
        <Row style={{ height: "100%" }}>
          <Col flex md={3} sm={24} xs={24} className="header-logo-container">
            <Title level={1} type="success">
              Logo
            </Title>
          </Col>
          <Col md={17} sm={20} xs={24} className="header-logo-container">
            <NavMenu />
          </Col>
          <Col md={4} sm={4} xs={24} className="header-logo-container">
            <IconController />
          </Col>
        </Row>
      </div>
      <UserDrawer />
      <CartDrawer />
      <SearchDrawer />
    </React.Fragment>
  );
};

export default Header;
