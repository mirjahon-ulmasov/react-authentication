import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  SearchOutlined,
  ImportOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import MainModal from "../ui/Modal";

const { Content, Footer, Sider } = Layout;

export default function MainLayout(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const showModalHandler = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    localStorage.clear();
    history.push("/");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <React.Fragment>
      <MainModal
        isVisible={isModalVisible}
        title="Sign Out"
        onOkay={handleOk}
        onCancel={handleCancel}
      >
        Are you sure you want to log out? You will lose any unsaved changes.
        Press OK to log out, or Cancel to stay
      </MainModal>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          style={{ backgroundColor: "#0b1133" }}
        >
          {!collapsed ? (
            <img src={process.env.PUBLIC_URL + "/logo.jpg"} alt="logo" />
          ) : (
            <div className="logo" />
          )}
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            style={{ backgroundColor: "#0b1133" }}
            mode="inline"
          >
            <Menu.Item
              key="1"
              style={{ fontSize: "16px" }}
              icon={<AppstoreOutlined style={{ transform: "scale(1.5)" }} />}
            >
              <NavLink to="/products">Products</NavLink>
            </Menu.Item>
            <Menu.Item
              disabled={!props.data}
              key="2"
              style={{ fontSize: "16px" }}
              icon={<SearchOutlined style={{ transform: "scale(1.5)" }} />}
            >
              <NavLink to="/search">Search</NavLink>
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={showModalHandler}
              style={{ fontSize: "16px" }}
              icon={<ImportOutlined style={{ transform: "scale(1.5)" }} />}
            >
              Log out
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>..</Breadcrumb.Item>
              <Breadcrumb.Item>{props.path.slice(1)}</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 460 }}
            >
              {props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Copyright &#169; 2021 Mirjahon Ulmasov. All rights reserved.
          </Footer>
        </Layout>
      </Layout>
    </React.Fragment>
  );
}
