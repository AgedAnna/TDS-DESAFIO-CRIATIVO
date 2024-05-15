import React from "react";
import { Layout } from "antd";
import styles from "./LayoutPag.module.scss";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;

interface LayoutPagPros {
  content: React.ReactNode;
  header: boolean;
  backgroundColor?: string;
  backgroundColorHeader?: string;
}

const LayoutPag: React.FC<LayoutPagPros> = ({
  content,
  header,
  backgroundColor,
}) => {
  return (
    <Layout className={styles.layout}>
      <Layout>
        {header && (
          <Header
            style={{ padding: 10, backgroundColor }}
            className={styles.header}
          >
            <Link to="/">
              <ArrowLeftOutlined className={styles.icon} />
            </Link>
          </Header>
        )}
        <Content className={styles.content} style={{ backgroundColor }}>
          {content}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPag;
