import React from "react";
import { Link } from "react-router-dom";
import { Button, Input, Menu, Row, Col, Space, Typography, Divider } from "antd";
import { HomeOutlined, BookOutlined, PlusSquareFilled, CheckSquareFilled } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Search } = Input;

const Portal = () => {
  return (
    <div className="w-100 h-100 bg-gray-3">
      <div className="container-fluid bg-white">
        <div className="container">
          <Row style={{ padding: "10px 0px" }}>
            <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="logo" className="portal-logo mt-auto" />
            <div className="left mr-auto">
              <p style={{ marginBottom: "0.3rem" }}>{global.tr.welcome}</p>
              <Space>
                <Link to="/login" className="ant-btn ant-btn-primary ant-btn-rtl">
                  {global.tr.signin}
                </Link>
                <Link to="/register" className="ant-btn ant-btn-rtl">
                  {global.tr.signup}
                </Link>
              </Space>
            </div>
          </Row>

          <Menu mode="horizontal">
            <Menu.Item icon={<HomeOutlined />} style={{ marginRight: "0" }}>
              {global.tr.homepage}
            </Menu.Item>
            <Menu.Item icon={<BookOutlined />}>{global.tr.knowledge_base}</Menu.Item>
          </Menu>
        </div>
      </div>

      <div style={{ padding: "20px 0" }} className="container">
        <Title level={4}>{global.tr.how_help}</Title>
        <Row className="mt-1">
          <Col span={10}>
            <Search placeholder={global.tr.enter_search_here + "..."} size="large" />
          </Col>
        </Row>
        <Row>
          <Button
            type="link"
            icon={<PlusSquareFilled />}
            style={{ color: "rgba(0,0,0,0.65)", paddingRight: "0" }}
            className="mt-1"
          >
            {global.tr.new_ticket}
          </Button>
          <Button type="link" icon={<CheckSquareFilled />} style={{ color: "rgba(0,0,0,0.65)" }} className="mt-1">
            {global.tr.check_ticket_status}
          </Button>
        </Row>
      </div>
      <Divider style={{ marginTop: "0" }} />
      <div className="container">
        <Row className="segment">
          <Col>
            <Title level={5}>{global.tr.knowledge_base}</Title>
            <Title level={5} type="secondary">
              عمومی
            </Title>
            <Text type="strong">عنوان</Text>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Portal;
