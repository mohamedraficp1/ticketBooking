import React from "react";
import UserLayout from "../../../layout/userLayout";
import { Form, Button } from "react-bootstrap";
import appIcon from "../../../assets/icons/appLogo.png";
import useLogin from "./util";

const LoginScreen = () => {
  const { email, password, onChangeEmail, onChangePassword, onSubmit } =
    useLogin();
  return (
    <UserLayout>
      <div className="login-card">
        <div className="text-center">
          <img src={appIcon} width="100px" alt="logo" />
        </div>
        <h2 className="auth-title">PROM-IN-ENT</h2>
        <h3 className="login-title">Login</h3>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              className="app-auth-input login-input"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={onChangeEmail}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              className="app-auth-input login-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
            />
          </Form.Group>

          <div className="text-end">
            <Button
              className="mt-4 auth-btn"
              variant="primary"
              type="submit"
              onClick={onSubmit}
            >
              Login
            </Button>
          </div>
        </Form>
      </div>
    </UserLayout>
  );
};

export default LoginScreen;
