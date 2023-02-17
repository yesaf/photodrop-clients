import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ISelfie } from '@/api/types/authResponses';

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 22px;
  padding: 0 15px;

  @media screen and (min-width: 1440px) {
    margin-top: 41px;
  }

  & > header {
    font-family: termina, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 345px;
    

    color: #262626;

    @media screen and (min-width: 1440px) {
      width: 420px;
      font-size: 22px;
    }
  }

  & > .actions-container {
    display: flex;
    flex-direction: column;
    margin-top: 19.5px;
  }
`;

export const SelfieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 345px;
  margin-top: 20px;

  @media screen and (min-width: 1440px) {
    width: 420px;
  }

  & > span {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 14px;
    display: flex;
    align-items: center;

    color: #262626;
  }

  & > .image-container {
    margin-top: 13px;
    border: 1px solid #CECCB5;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    overflow: hidden;
    box-sizing: content-box;

    @media screen and (min-width: 1440px) {
      width: 150px;
      height: 150px;
    }
  }


`;

export const EditButton = styled.button`
  --size: 36.5px;
  top: 91px;
  left: 81.25px;

  @media screen and (min-width: 1440px) {
    --size: 45px;
    top: 133px;
    left: 127px;
  }

  position: absolute;
  width: var(--size);
  height: var(--size);

  border: none;
  cursor: pointer;
  padding: 0;
  background-color: transparent;

  #file-input {
    display: none;
  }

  & > svg {
    width: var(--size);
    height: var(--size);

    & > image {
      width: var(--size);
      height: var(--size);
    }
  }
`;

export const ActionButton = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 345px;
  height: 50px;

  cursor: pointer;

  background: #FFFFFF;
  border: 1px solid #CECCB5;
  border-radius: 10px;

  text-decoration: none;

  padding: 10px 15px 0 15px;

  @media screen and (min-width: 1440px) {
    width: 420px;
    height: 53px;
    padding: 11px 16px 0 15px;
  }

  &:hover {
    background: #F5F5F5;
  }

  & > .text {
    display: flex;
    flex-direction: column;

    & > span {
      text-align: start;
      font-style: normal;
      font-size: 14px;
      line-height: 10px;
      color: #262626;

      @media screen and (min-width: 1440px) {
        font-size: 16px;
      }
    }

    & > .title {
      font-weight: 500;
    }

    & > .explanation {
      margin-top: 10px;
      font-weight: 400;
    }
  }

  & > svg {
    --size-width: 8px;
    --size-height: 16px;
    margin-top: 8px;

    @media screen and (min-width: 1440px) {
      --size-width: 10px;
      --size-height: 20px;
      margin-top: 6px;
    }

    width: var(--size-width);
    height: var(--size-height);

    & > image {
      width: var(--size-width);
      height: var(--size-height);
    }
  }
`;

interface IAccountImageProps {
    selfie: ISelfie | undefined;
}

export const AccountImage = styled.img.attrs<IAccountImageProps>(
    ({ selfie }) => {
        if (!selfie) {
            return { style: { height: '100%', width: '100%' } };
        }
        const { width, height, shiftX, shiftY, zoom } = selfie;
        const isHorizontal = width > height;

        return {
            style: {
                width: isHorizontal ? '100%' : 'auto',
                height: isHorizontal ? 'auto' : '100%',
                transformOrigin: '0 0',
                transform:
                    `translate(${-shiftX * zoom}%, ${-shiftY * zoom}%)` +
                    `scale(${zoom})`,
            },
        };

    })<IAccountImageProps>``;
