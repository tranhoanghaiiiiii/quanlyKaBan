import { Link } from "react-router-dom";
import { Button, Card, Form, Input, Space, Typography } from "antd";
import SocialLogin from "./components/SocialLogin";
// import { useState } from "react";
// import { Link } from "react-router-dom";

const { Title, Paragraph,Text } = Typography;
function SignUp() {
    const [form] = Form.useForm();
  
    const handleLogin = (values) => {
      console.log(values);
    };
  
    return (
      <div className="p-4">
        <Card>
          <div className="text-center">
            <Title level={2}>Create an Account</Title>
            <Paragraph type="secondary">welcome back ! Please enter your details</Paragraph>
            <Form
              layout="vertical"
              form={form}
              onFinish={handleLogin}
              size="large"
            >
                            <Form.Item
                name={"name"}
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "please your name",
                  },
                ]}
              >
                <Input allowClear maxLength={100}></Input>
              </Form.Item>
                <Form.Item
            name={"email"}
            label="Email"
            rules={[
              {
                required: true,
                message: "please your email",
              },
            ]}
          >
            <Input allowClear maxLength={100} type="email"></Input>
          </Form.Item>
              <Form.Item
                name={"password"}
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "please your password",
                  },
                ]}    
              >
                <Input.Password  maxLength={100} type="password"/>
              </Form.Item>
            </Form>
            <div className="mt-4 mb-3">
              <Button
                onClick={() => form.submit()}
                type="primary"
                style={{ width: "100%" }}
                size="large"
              >
                Login
              </Button>
            </div>
          </div>
          <SocialLogin></SocialLogin>
          <div className="mt-3 text-center">
              <Space>
                  <Text> Already an account </Text>
                  <Link to={'/login'}>Login</Link>
              </Space>
          </div>
        </Card>
      </div>
    )
}

export default SignUp;