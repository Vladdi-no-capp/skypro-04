import { cards } from "../data/cards";
import { Badge, Brand, CardGrid, Eyebrow, Header, HeaderActions, Lead, Page, Phonetic, PrimaryLink, SecondaryLink, Shell, Title, Translation, Word, WordCard } from "../styles/ui";

const tones = ["#ff9f80", "#6c5ce7", "#63cba6", "#ffd166"];

function CardsPage() {
  return (
    <Shell>
      <Header>
        <Brand to="/">Word<span>ly</span></Brand>
        <HeaderActions aria-label="Навигация">
          <PrimaryLink to="/new-card">+ Новая карточка</PrimaryLink>
          <SecondaryLink to="/exit">Выйти</SecondaryLink>
        </HeaderActions>
      </Header>
      <Page>
        <Eyebrow>Личная коллекция · {cards.length} слов</Eyebrow>
        <Title>Мои карточки</Title>
        <Lead>Возвращайтесь к словам каждый день. Короткая практика помогает надолго сохранить их в памяти.</Lead>
        <CardGrid aria-label="Карточки английских слов">
          {cards.map((card, index) => (
            <WordCard key={card.id} to={`/card/${card.id}`} $tone={tones[index % tones.length]} aria-label={`Открыть карточку ${card.word}`}>
              <Badge>{card.level}</Badge>
              <Word>{card.word}</Word>
              <Phonetic>[{card.phonetic}]</Phonetic>
              <Translation>{card.translation}</Translation>
            </WordCard>
          ))}
        </CardGrid>
      </Page>
    </Shell>
  );
}

export default CardsPage;
