import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography, Divider, Form, Input, Checkbox, Button } from "antd";

const { Title, Text } = Typography;

const Login = () => {
  return (
    <>
      <Row className="h-100">
        <Col span={8} className="login-image"></Col>
        <Col span={2}></Col>
        <Col span={12}>
          <Row align="middle" className="h-100">
            <Col className="w-100">
              <Title level={5} type="secondary">
                {global.tr.welcome}،
              </Title>
              <Title level={5} type="secondary">
                {global.tr.please_signin}
              </Title>
              <Title level={5} type="secondary">
                {global.tr.no_account} <Link to="/">{global.tr.signup_now}</Link>
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
                <Button type="link" className="left ml-2">
                  {global.tr.recover_password}
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
        <Col span={2}></Col>
      </Row>
    </>
  );
};

export default Login;
