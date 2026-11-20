import { Link } from "react-router-dom";
import styled from "styled-components";

export const Shell = styled.div`min-height: 100vh;`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
  padding: 26px 0 18px;

  @media (max-width: 640px) {
    width: min(100% - 24px, 1120px);
    align-items: flex-start;
  }
`;

export const Brand = styled(Link)`
  color: #17213a;
  font-size: clamp(1.25rem, 3vw, 1.6rem);
  font-weight: 900;
  letter-spacing: -0.05em;
  text-decoration: none;
  span { color: #6c5ce7; }
`;

export const HeaderActions = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px) {
    align-items: stretch;
    flex-direction: column;
  }
`;

export const Page = styled.main`
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
  padding: 46px 0 80px;

  @media (max-width: 640px) {
    width: min(100% - 24px, 1120px);
    padding-top: 28px;
  }
`;

export const Eyebrow = styled.p`
  margin: 0 0 12px;
  color: #4f3fc2;
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  max-width: 740px;
  margin: 0;
  font-size: clamp(2.3rem, 7vw, 5rem);
  line-height: 0.98;
  letter-spacing: -0.065em;
`;

export const Lead = styled.p`
  max-width: 620px;
  margin: 22px 0 0;
  color: #657089;
  font-size: clamp(1rem, 2vw, 1.18rem);
  line-height: 1.7;
`;

export const PrimaryLink = styled(Link)`
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  padding: 0 18px;
  border-radius: 14px;
  color: white;
  background: #6c5ce7;
  box-shadow: 0 10px 24px rgba(108, 92, 231, 0.22);
  font-size: 0.9rem;
  font-weight: 800;
  text-decoration: none;
  transition: transform 160ms ease, box-shadow 160ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 28px rgba(108, 92, 231, 0.3);
  }
`;

export const SecondaryLink = styled(Link)`
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  border-radius: 12px;
  color: #657089;
  font-size: 0.9rem;
  font-weight: 800;
  text-decoration: none;

  &:hover { color: #17213a; background: rgba(255, 255, 255, 0.65); }
`;

export const CardGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 46px;

  @media (max-width: 860px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;

export const WordCard = styled(Link)`
  position: relative;
  display: flex;
  min-height: 240px;
  flex-direction: column;
  overflow: hidden;
  padding: 24px;
  border: 1px solid rgba(23, 33, 58, 0.08);
  border-radius: 26px;
  color: #17213a;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 16px 50px rgba(48, 54, 79, 0.08);
  text-decoration: none;
  transition: transform 180ms ease, box-shadow 180ms ease;

  &::after {
    position: absolute;
    right: -42px;
    bottom: -62px;
    width: 150px;
    height: 150px;
    border-radius: 999px;
    background: ${({ $tone }) => $tone};
    content: "";
    opacity: 0.38;
  }

  &:hover { transform: translateY(-5px) rotate(-0.35deg); box-shadow: 0 24px 60px rgba(48, 54, 79, 0.14); }
`;

export const Badge = styled.span`
  align-self: flex-start;
  padding: 7px 10px;
  border-radius: 999px;
  color: #4f3fc2;
  background: #efedff;
  font-size: 0.72rem;
  font-weight: 900;
`;

export const Word = styled.h2`margin: 28px 0 6px; font-size: clamp(1.8rem, 4vw, 2.5rem); letter-spacing: -0.045em;`;
export const Phonetic = styled.span`color: #5f687d; font-size: 0.88rem;`;
export const Translation = styled.p`margin: auto 0 0; color: #566079; font-size: 1rem; font-weight: 700;`;

export const AuthLayout = styled.main`
  display: grid;
  min-height: 100vh;
  place-items: center;
  padding: 28px 16px;
`;

export const AuthCard = styled.section`
  width: min(100%, 440px);
  padding: clamp(28px, 6vw, 46px);
  border: 1px solid rgba(23, 33, 58, 0.08);
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 26px 80px rgba(48, 54, 79, 0.14);
  backdrop-filter: blur(18px);
`;

export const AuthTitle = styled.h1`margin: 24px 0 8px; font-size: clamp(2rem, 8vw, 3.15rem); letter-spacing: -0.06em;`;
export const Muted = styled.p`margin: 0; color: #626b80; line-height: 1.6;`;
export const Form = styled.form`display: grid; gap: 18px; margin-top: 30px;`;

export const Field = styled.label`
  display: grid;
  gap: 8px;
  color: #3c465e;
  font-size: 0.84rem;
  font-weight: 800;
`;

export const Input = styled.input`
  width: 100%;
  min-height: 50px;
  padding: 0 15px;
  border: 1px solid #d9dbe4;
  border-radius: 14px;
  color: #17213a;
  background: #fff;
  transition: border-color 150ms ease, box-shadow 150ms ease;

  &:hover, &:focus { border-color: #6c5ce7; box-shadow: 0 0 0 4px rgba(108, 92, 231, 0.09); }
`;

export const Button = styled.button`
  min-height: 50px;
  padding: 0 20px;
  border: 0;
  border-radius: 14px;
  color: #fff;
  background: #6c5ce7;
  box-shadow: 0 12px 28px rgba(108, 92, 231, 0.23);
  font-weight: 900;
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease;

  &:hover { background: #5b4bd8; transform: translateY(-2px); }
`;

export const FormFooter = styled.p`
  margin: 24px 0 0;
  color: #707a91;
  font-size: 0.92rem;
  text-align: center;
  a { color: #6c5ce7; font-weight: 900; text-decoration: none; }
`;

export const Overlay = styled.main`
  display: grid;
  min-height: 100vh;
  place-items: center;
  padding: 24px 16px;
  background: rgba(23, 33, 58, 0.52);
  backdrop-filter: blur(12px);
`;

export const Modal = styled.section`
  width: min(100%, 570px);
  padding: clamp(26px, 6vw, 42px);
  border-radius: 28px;
  background: #fffdf9;
  box-shadow: 0 36px 100px rgba(17, 24, 39, 0.28);
`;

export const ModalHead = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 26px;
  h1 { margin: 0; font-size: clamp(1.8rem, 6vw, 2.6rem); letter-spacing: -0.05em; }
`;

export const CloseLink = styled(Link)`
  display: grid;
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  place-items: center;
  border-radius: 999px;
  color: #59637a;
  background: #f0eee8;
  font-size: 1.2rem;
  font-weight: 900;
  text-decoration: none;
  &:hover { color: #17213a; background: #e7e3da; }
`;

export const ModalActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
  ${Button} { flex: 1 1 180px; }
  ${SecondaryLink} { flex: 1 1 150px; border: 1px solid #d9dbe4; }
`;

export const EmptyState = styled.div`
  padding: 34px;
  border: 1px dashed #c9c5ba;
  border-radius: 20px;
  color: #657089;
  background: #f8f5ee;
  text-align: center;
`;

export const CenterPage = styled.main`display: grid; min-height: 100vh; place-items: center; padding: 24px; text-align: center;`;
export const ErrorCode = styled.div`color: #ff8f70; font-size: clamp(6rem, 24vw, 13rem); font-weight: 950; line-height: 0.8; letter-spacing: -0.09em;`;
