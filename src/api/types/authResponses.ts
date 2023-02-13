export interface IUser {
    clientId: string,
    createdAt: string,
    phone: string,
    selfieId: string | null,
    email: string | null,
    fullName: string | null
}

export interface ISelfie {
    selfieId: string,
    selfieUrl: string,
    selfieThumbnail: string,
    shiftX: number,
    shiftY: number,
    zoom: number,
    width: number,
    height: number,
    createdAt: string
}

export interface IVerifyResponse {
    accessToken: string;
    user: IUser;
    selfie?: ISelfie;
}

export interface IGetMeResponse {
    user: IUser;
    selfie?: ISelfie;
}
