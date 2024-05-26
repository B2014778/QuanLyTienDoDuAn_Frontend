import React from "react";
import BreadcrumbComponent from "./BreadcrumbComponent";
import { Content } from "antd/es/layout/layout";
import { theme } from "antd";

const ContentComponent = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content
      style={{
        padding: "0 48px",
      }}
    >
      <BreadcrumbComponent />
      <div
        style={{
          padding: 24,
          minHeight: 550,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        Content
      </div>
    </Content>
  );
};

export default ContentComponent;
