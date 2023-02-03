import { IAlbum } from '@/api/tmp/data';
import Albums from './components/albums/Albums';
import Photos from './components/photos/Photos';
import styled from 'styled-components';
import { useState } from 'react';

interface IWithAlbumsProps {
    albums: IAlbum[];
}

function WithAlbums({ albums }: IWithAlbumsProps) {
    const [showUnlockButton, setShowUnlockButton] = useState(true);

    return (
        <Container>
            <Albums albums={albums}/>
            <Photos albums={albums}/>
            {
                showUnlockButton &&
                <button className="unlock-button">
                    Unlock your photos
                </button>
            }
        </Container>
    );

}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  height: calc(100vh - 55px);
  overflow-y: auto;
  padding-bottom: 80px;
  
  &::-webkit-scrollbar {
    display: none;
  }

  & > .unlock-button {
    position: fixed;
    margin: 0 15px;
    bottom: 17px;
    cursor: pointer;

    height: 50px;
    width: 345px;
    background: #3300CC;
    border-radius: 50px;
    border: none;

    font-weight: 500;
    font-size: 18px;
    line-height: 23px;

    color: #FFFFFF;
    
    &:hover {
        background: #2A00A6;
    }
  }
`;

export default WithAlbums;
