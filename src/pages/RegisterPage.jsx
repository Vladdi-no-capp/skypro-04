import { Link, useNavigate } from "react-router-dom";
import { AuthCard, AuthLayout, AuthTitle, Brand, Button, Field, Form, FormFooter, Input, Muted } from "../styles/ui";

function RegisterPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  return (
    <AuthLayout>
      <AuthCard>
        <Brand to="/login">Word<span>ly</span></Brand>
        <AuthTitle>Регистрация</AuthTitle>
        <Muted>Создайте пространство для новых английских слов.</Muted>
        <Form onSubmit={handleSubmit}>
          <Field>Имя<Input name="name" autoComplete="name" required /></Field>
          <Field>Email<Input name="email" type="email" autoComplete="email" required /></Field>
          <Field>Пароль<Input name="password" type="password" autoComplete="new-password" minLength="6" required /></Field>
          <Button type="submit">Создать аккаунт</Button>
        </Form>
        <FormFooter>Уже есть аккаунт? <Link to="/login">Войти</Link></FormFooter>
      </AuthCard>
    </AuthLayout>
  );
}

export default RegisterPage;
