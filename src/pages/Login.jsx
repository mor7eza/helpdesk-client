import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography, Divider, Form, Input, Checkbox, Button } from "antd";

const { Title, Text } = Typography;

const Login = () => {
  return (
    <>
      <Row className="h-100">
        <Col span={8} className="login-image-gradiant">
          <div className="login-image"></div>
        </Col>
        <Col span={2} />
        <Col span={12}>
          <Row align="middle" className="h-100">
            <Col className="w-100">
              <div className="login-logo mb-2" />
              <Title level={5} type="secondary">
                {global.tr.welcome}،<br />
                {global.tr.please_signin}
              </Title>
              <Title level={5} type="secondary">
                {global.tr.no_account} <Link to="/register">{global.tr.signup_now}</Link>
              </Title>
              <Divider />
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
                    <Form.Item label={<label style={{ color: "rgba(0, 0, 0, 0.45)" }}>{global.tr.password}</label>}>
                      <Input.Password size="large" placeHolder={global.tr.password + "..."} />
                    </Form.Item>
                  </Col>
                </Row>
                <Checkbox>
                  <Text type="secondary">{global.tr.keep_me_loggedin}</Text>
                </Checkbox>
                <Divider />
                <Button type="primary" htmlType="submit" className="left">
                  {global.tr.login}
                </Button>
                <Link to="/recover-password" className="left ml-2" style={{ marginTop: "5px" }}>
                  {global.tr.recover_password}
                </Link>
              </Form>
            </Col>
          </Row>
        </Col>
        <Col span={2} />
      </Row>
    </>
  );
};

export default Login;
