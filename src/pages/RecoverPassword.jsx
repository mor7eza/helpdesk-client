import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography, Form, Input, Button } from "antd";

const { Title } = Typography;

const RecoverPassword = () => {
  return (
    <>
      <Row className="h-100">
        <Col span={8} className="login-image-gradiant">
          <div className="login-image"></div>
        </Col>
        <Col span={4} />
        <Col span={8}>
          <Row align="middle" className="h-100">
            <Col className="w-100">
              <div className="login-logo mb-2" />
              <Title level={5} type="secondary">
                {global.tr.forgot_password}
              </Title>
              <p>{global.tr.forgot_password_use_form}</p>
              <br />
              <Form layout="vertical">
                <Form.Item
                  label={<label style={{ color: "rgba(0, 0, 0, 0.45)" }}>{global.tr.email}</label>}
                  className="secondary-label"
                >
                  <Input size="large" placeHolder={global.tr.email + "..."} />
                </Form.Item>
                <br />
                <Button type="primary" htmlType="submit" className="left">
                  {global.tr.recover_password}
                </Button>
                <Link to="/login">{global.tr.login}</Link>
              </Form>
            </Col>
          </Row>
        </Col>
        <Col span={4} />
      </Row>
    </>
  );
};

export default RecoverPassword;
