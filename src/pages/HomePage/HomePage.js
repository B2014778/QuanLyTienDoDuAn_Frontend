import React from "react";
import FooterComponent from "../../components/FooterComponent";
import { Layout } from "antd";
import HeaderComponent from "../../components/HeaderComponent";
// import ContentComponent from "../../components/ContentComponent";

const HomePage = () => {
  return (
    <Layout>
      <HeaderComponent />
      {/* <ContentComponent /> */}
      <FooterComponent />
    </Layout>
  );
};

export default HomePage;
