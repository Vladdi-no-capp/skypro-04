import { useNavigate } from "react-router-dom";
import { Button, Modal, ModalActions, ModalHead, Muted, Overlay, SecondaryLink } from "../styles/ui";

function ExitPage({ onLogout }) {
  const navigate = useNavigate();
  const handleLogout = () => { onLogout(); navigate("/login"); };

  return (
    <Overlay>
      <Modal>
        <ModalHead><div><Muted>Сессия будет завершена</Muted><h1>Выйти из аккаунта?</h1></div></ModalHead>
        <Muted>Чтобы продолжить занятия, потребуется войти снова.</Muted>
        <ModalActions>
          <Button type="button" onClick={handleLogout}>Да, выйти</Button>
          <SecondaryLink to="/">Остаться</SecondaryLink>
        </ModalActions>
      </Modal>
    </Overlay>
  );
}

export default ExitPage;
