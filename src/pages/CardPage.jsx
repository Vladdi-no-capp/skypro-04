import { useNavigate, useParams } from "react-router-dom";
import { cards } from "../data/cards";
import { Button, CloseLink, EmptyState, Field, Form, Input, Modal, ModalHead, Muted, Overlay } from "../styles/ui";

function CardPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const card = cards.find((item) => item.id === id);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <Overlay>
      <Modal>
        <ModalHead>
          <div><Muted>Просмотр и редактирование</Muted><h1>Карточка #{id}</h1></div>
          <CloseLink to="/" aria-label="Закрыть карточку">×</CloseLink>
        </ModalHead>
        {card ? (
          <Form onSubmit={handleSubmit}>
            <Field>Английское слово<Input name="word" defaultValue={card.word} required /></Field>
            <Field>Перевод<Input name="translation" defaultValue={card.translation} required /></Field>
            <Field>Пример<Input name="example" defaultValue={card.example} /></Field>
            <Button type="submit">Сохранить</Button>
          </Form>
        ) : (
          <EmptyState><strong>Карточка не найдена</strong><p>В коллекции пока нет карточки с таким идентификатором.</p></EmptyState>
        )}
      </Modal>
    </Overlay>
  );
}

export default CardPage;
