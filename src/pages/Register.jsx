import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography, Form, Input, Checkbox, Button } from "antd";

const { Title, Text } = Typography;

const Register = () => {
  return (
    <>
      <Row className="h-100">
        <Col span={2} />
        <Col span={12}>
          <Row align="middle" className="h-100">
            <Col className="w-100">
              <div className="login-logo mb-2" />
              <Title level={5} type="secondary">
                {global.tr.welcome}،<br />
                {global.tr.register_create_account_1}
                <Text type="success">{global.tr.register_create_account_2}</Text>
                {global.tr.register_create_account_3}
              </Title>
              <br />
              <Form layout="vertical">
                <Row gutter="16">
                  <Col span={12}>
                    <Form.Item
                      label={<label style={{ color: "rgba(0, 0, 0, 0.45)" }}>{global.tr.email}</label>}
                      className="secondary-label"
                    >
                      <Input size="large" placeHolder={global.tr.email + "..."} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label={<label style={{ color: "rgba(0, 0, 0, 0.45)" }}>{global.tr.fullname}</label>}>
                      <Input size="large" placeHolder={global.tr.fullname + "..."} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter="16">
                  <Col span={12}>
                    <Form.Item
                      label={<label style={{ color: "rgba(0, 0, 0, 0.45)" }}>{global.tr.password}</label>}
                      className="secondary-label"
                    >
                      <Input.Password size="large" placeHolder={global.tr.password + "..."} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label={<label style={{ color: "rgba(0, 0, 0, 0.45)" }}>{global.tr.password_confirm}</label>}
                    >
                      <Input.Password size="large" placeHolder={global.tr.password_confirm + "..."} />
                    </Form.Item>
                  </Col>
                </Row>
                <Checkbox>
                  <Text type="secondary">{global.tr.term_conditions}</Text>
                </Checkbox>
              </Form>
              <br />
              <div>
                <Title level={5} className="right" style={{ marginTop: "8px" }}>
                  {global.tr.already_member} <Link to="/login">{global.tr.login}</Link>
                </Title>
                <Button type="primary" shape="round" size="large" className="left">
                  {global.tr.create_account}
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={2} />
        <Col span={8} className="login-image-gradiant">
          <div className="login-image"></div>
        </Col>
      </Row>
    </>
  );
};

export default Register;
