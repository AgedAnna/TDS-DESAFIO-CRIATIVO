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
  color?: string;
}

const LayoutPag: React.FC<LayoutPagPros> = ({
  content,
  header,
  backgroundColor,
  color,
}) => {
  return (
    <Layout className={styles.layout}>
      <Layout>
        {header && (
          <Header
            style={{ padding: 10, backgroundColor, color }}
            className={styles.header}
          >
            <Link to="/">
              <ArrowLeftOutlined className={styles.icon} style={{ color }} />
            </Link>
          </Header>
        )}
        <Content className={styles.content} style={{ backgroundColor, color }}>
          {content}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPag;
