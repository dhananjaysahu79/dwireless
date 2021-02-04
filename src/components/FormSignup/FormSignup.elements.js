import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Form = styled.form`
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin: 2em;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;

  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  margin-bottom: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  width : 100%;
  border: 3px solid #101522;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;
export const TextArea = styled.textarea`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  margin-bottom: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  width : 100%;
  border: 3px solid #101522;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const P = styled.p`
    max-width: 440px;
    margin-bottom: 15px;
    font-size: 12px;
    line-height: 16px;
    color: green;
`;

export const Stext = styled.p`
    margin-bottom: 15px;
    font-size: 1.2em;
    line-height: 1.8em;
    font-weight: 500;
    color: #203BF5;
`;