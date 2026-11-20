import { useNavigate } from "react-router-dom";
import { Button, CloseLink, Field, Form, Input, Modal, ModalHead, Muted, Overlay } from "../styles/ui";

function NewCardPage() {
  const navigate = useNavigate();
  const handleSubmit = (event) => { event.preventDefault(); navigate("/"); };

  return (
    <Overlay>
      <Modal>
        <ModalHead>
          <div><Muted>Расширяйте словарный запас</Muted><h1>Новая карточка</h1></div>
          <CloseLink to="/" aria-label="Закрыть форму">×</CloseLink>
        </ModalHead>
        <Form onSubmit={handleSubmit}>
          <Field>Английское слово<Input name="word" placeholder="например, discover" required /></Field>
          <Field>Перевод<Input name="translation" placeholder="открывать" required /></Field>
          <Field>Пример<Input name="example" placeholder="Discover something new." /></Field>
          <Button type="submit">Добавить карточку</Button>
        </Form>
      </Modal>
    </Overlay>
  );
}

export default NewCardPage;
