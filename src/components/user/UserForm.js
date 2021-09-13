import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, BankOutlined } from "@ant-design/icons";

export default function UserForm(props) {
  const onFinish = (user) => {
    props.login(user);
  };

  return (
    <div className="form">
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="company"
          rules={[
            {
              required: true,
              message: "Please input your Company!",
            },
          ]}
        >
          <Input
            prefix={<BankOutlined className="site-form-item-icon" />}
            placeholder="Company"
            size="large"
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form>
    </div>
  );
}
