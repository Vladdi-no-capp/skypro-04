import { CenterPage, ErrorCode, Lead, PrimaryLink, Title } from "../styles/ui";

function NotFoundPage({ isAuth }) {
  return (
    <CenterPage>
      <div>
        <ErrorCode>404</ErrorCode>
        <Title>Страница не найдена</Title>
        <Lead>Возможно, ссылка устарела или в адресе спряталась опечатка.</Lead>
        <PrimaryLink to={isAuth ? "/" : "/login"}>{isAuth ? "К моим карточкам" : "Перейти ко входу"}</PrimaryLink>
      </div>
    </CenterPage>
  );
}

export default NotFoundPage;
