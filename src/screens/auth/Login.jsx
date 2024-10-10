import { Button, Card, Checkbox, Form, Input, Space, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";
// import { useState } from "react";
// import { Link } from "react-router-dom";

const { Title, Paragraph,Text } = Typography;
function Login() {
  // const [isLoading,setIsLoading]= useState((false));
  const [isRemember,setIsRemember]=useState(false)
  const [form] = Form.useForm();

  const handleLogin = (values) => {
    console.log(values);
  };

  return (
    <div className="p-4">
      <Card>
        <div className="text-center">
          <Title level={2}>Login</Title>
          <Paragraph type="secondary">welcome back ! Please enter your details</Paragraph>
          <Form
            layout="vertical"
            form={form}
            onFinish={handleLogin}
            size="large"
          >
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
          <div className="row">
            <div className="col">
            <Checkbox checked={isRemember}
            onChange={(val)=>setIsRemember(val.target.checked)}
            >
                Remember for 30 days
            </Checkbox>
            </div>
            <div className="col text-right">
                <Link to={'/'} >Forgot password</Link>
            </div>
          </div>
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
          <SocialLogin></SocialLogin>
        </div>
        <div className="mt-4 text-center">
            <Space>
                <Text> Dont have an account </Text>
                <Link to={'/sign-up'}>Sign up</Link>
            </Space>
        </div>
      </Card>
    </div>
  );
}

export default Login;
