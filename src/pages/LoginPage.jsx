import { Link, useNavigate } from "react-router-dom";
import { AuthCard, AuthLayout, AuthTitle, Brand, Button, Field, Form, FormFooter, Input, Muted } from "../styles/ui";

function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
    navigate("/");
  };

  return (
    <AuthLayout>
      <AuthCard>
        <Brand to="/login">Word<span>ly</span></Brand>
        <AuthTitle>Вход</AuthTitle>
        <Muted>Продолжайте учить английский в своём темпе.</Muted>
        <Form onSubmit={handleSubmit}>
          <Field>Email<Input name="email" type="email" autoComplete="email" required /></Field>
          <Field>Пароль<Input name="password" type="password" autoComplete="current-password" required /></Field>
          <Button type="submit">Войти</Button>
        </Form>
        <FormFooter>Нет аккаунта? <Link to="/register">Зарегистрироваться</Link></FormFooter>
      </AuthCard>
    </AuthLayout>
  );
}

export default LoginPage;
