import { IAlbum } from '@/api/tmp/data';
import { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHorizontalScroll } from '@/components/hooks/useHorizontalScroll';

interface IAlbumsProps {
    albums: IAlbum[];
}

function Albums({ albums }: IAlbumsProps) {
    const scrollRef = useHorizontalScroll();

    return (
        <Container>
            <header>
                Albums
            </header>
            <div className="albums-container" ref={scrollRef}>
                {
                    albums.map((album: IAlbum, index) => {
                        return (
                            <Album key={index} to={`/albums/${album.albumId}`}>
                                <img className="cover"
                                     src={album.photos[0].unlockedThumbnailUrl} alt="album cover"/>
                                <span className="name">{album.name}</span>
                            </Album>
                        );
                    })
                }
            </div>

        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  width: 100%;

  & > header {
    margin-top: 15px;

    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    text-align: start;
  }
  
  & > .albums-container {
    width: 345px;
    
    display: flex;
    flex-direction: row;
    overflow-x: auto;

    margin-top: 10px;

    &::-webkit-scrollbar {
      display: none;
      height: 10px;
    }

    ///* Track */
    //&::-webkit-scrollbar-track {
    //  background: #f1f1f1;
    //  border-radius: 10px;
    //}
    //
    ///* Handle */
    //&::-webkit-scrollbar-thumb {
    //  background: #888;
    //  border-radius: 10px;
    //}
    //
    ///* Handle on hover */
    //&::-webkit-scrollbar-thumb:hover {
    //  background: #555;
    //}
  }
`;

const Album = styled(Link)`
  margin-right: 5px;
  overflow: hidden;
  position: relative;
  box-sizing: content-box;

  width: 110px;
  height: 140px;
  
  flex: 0 0 auto;

  display: flex;
  justify-content: center;
  border-radius: 20px;
  
  & > .name {
    width: 100%;
    position: absolute;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;

    bottom: 20px;
    padding: 0 5px;

    font-weight: 450;
    font-size: 12px;
    line-height: 15px;

    color: #FFFFFF;
  }
`;

export default memo(Albums);
