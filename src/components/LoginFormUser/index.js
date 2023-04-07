import { Button, Form, Input, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonLogin, Circle, FormLogin, InputCustom, LabelCustom, LoginWrapper, Title } from "./styles";

const LoginFormUser = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onSubmit = async () => {
        const data = await form.validateFields();
        if (data.username === "admin@gmail.com" && data.password === "admin123") {
            localStorage.setItem("token", data.username + " loged in");
            navigate("/ReactGreen/users");
        } else {
            message.error("Tên người dùng hoặc mật khẩu không đúng");
        }
    };

    return (
        <div>
            <LoginWrapper>
                <Title>LOG IN</Title>
                <FormLogin form={form} layout="vertical">
                    <LabelCustom>Username</LabelCustom>
                    <Form.Item name="username" rules={[{ required: true, message: "Tên người dùng là bắt buộc" }]}>
                        <InputCustom />
                    </Form.Item>
                    <LabelCustom>Mật khẩu</LabelCustom>
                    <Form.Item name="password" rules={[{ required: true, message: "Mật khẩu là bắt buộc" }]}>
                        <InputCustom type="password" />
                    </Form.Item>
                </FormLogin>
                <ButtonLogin onClick={onSubmit}>Log in</ButtonLogin>
            </LoginWrapper>
            {/* <Circle pos="top"/>
        <Circle pos="bottom"/> */}
        </div>
    );
};

export default LoginFormUser;
