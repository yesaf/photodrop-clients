export interface IPhoto {
    photoId: string,
    createdAt: string,
    albumId: string,
    clients: string,
    url: string,
    thumbnail: string,
}

export interface IAlbum {
    albumId: string,
    createdAt: string,
    name: string,
    location: string,
    isUnlocked: boolean,
    cover: string,
    photos: IPhoto[],
}

export interface IGetAlbumsResponse extends Array<IAlbum> {}

export interface IGetAlbumResponse extends Array<IAlbum> {}
