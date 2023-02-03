export interface IPhoto {
    photoId: string;
    unlockedPhotoUrl: string;
    lockedPhotoUrl: string;
    unlockedThumbnailUrl: string;
    lockedThumbnailUrl: string;
    createdAt: string;
    albumId: string;
    clients: string;
}

export interface IAlbum {
    albumId: string;
    name: string;
    location: string;
    createdAt: string;
    userId: string;
    photos: IPhoto[];
}

const albums: IAlbum[] = [
    {
        "albumId": "59bef749-ad17-4363-b682-36e4ca048144",
        "name": "test",
        "location": "notest",
        "createdAt": "2023-01-12T00:00:00.000Z",
        "userId": "cd4c1298-e215-4e5f-960a-221368a7100d",
        "photos": [
            {
                "photoId": "26803a5e-4c93-4dc7-b684-719d57407ede",
                "unlockedPhotoUrl": "https://photodrop-lambda-bucket-test.s3.amazonaws.com/6ac83dd0-f6d9-4c00-b542-03567805e48b.jpg",
                "unlockedThumbnailUrl": "https://photodrop-lambda-bucket-test.s3.amazonaws.com/5fdf082b-030d-4900-b269-c6ec29faab4e.jpeg",
                "lockedPhotoUrl": "https://photodrop-lambda-bucket-test.s3.amazonaws.com/48671540-af6f-4b33-b4d8-88d3e5fbd858.jpg",
                "lockedThumbnailUrl": "https://photodrop-lambda-bucket-test.s3.amazonaws.com/2ae50d91-ace0-4df8-891c-7c4f905a2408.jpeg",
                "createdAt": "2023-02-02T14:53:44.813Z",
                "albumId": "59bef749-ad17-4363-b682-36e4ca048144",
                "clients": ""
            },
            {
                "photoId": "0ad83a6f-6831-4820-ae05-ae53b7c21d1b",
                "unlockedPhotoUrl": "https://photodrop-lambda-bucket-test.s3.amazonaws.com/4f346692-2a57-41b5-90b4-2a2647cb774f.jpg",
                "unlockedThumbnailUrl": "https://photodrop-lambda-bucket-test.s3.amazonaws.com/a1006b70-c1e4-4b2b-8761-bdfd6efda891.jpeg",
                "lockedPhotoUrl": "https://photodrop-lambda-bucket-test.s3.amazonaws.com/b96aefda-ead4-43ed-ae46-be3a84978fd7.jpg",
                "lockedThumbnailUrl": "https://photodrop-lambda-bucket-test.s3.amazonaws.com/94d894fe-81f4-408d-ac02-04bfd3cbdd90.jpeg",
                "createdAt": "2023-02-02T15:03:27.834Z",
                "albumId": "59bef749-ad17-4363-b682-36e4ca048144",
                "clients": ""
            },
            {
                "photoId": "a0821e65-376b-4fd0-a4ad-f47dda3bfbf0",
                "unlockedPhotoUrl": "https://photodrop-lambda-bucket-test.s3.amazonaws.com/2d788121-f314-4286-af69-da2b9c3b89e2.jpg",
                "unlockedThumbnailUrl": "https://photodrop-lambda-bucket-test.s3.amazonaws.com/29f64130-5488-4914-bc62-0931baacc133.jpeg",
                "lockedPhotoUrl": "https://photodrop-lambda-bucket-test.s3.amazonaws.com/447c645e-c690-49bc-bb2e-9682fdb1b50c.jpg",
                "lockedThumbnailUrl": "https://photodrop-lambda-bucket-test.s3.amazonaws.com/429c723c-6613-42e6-a588-3651daae3e1b.jpeg",
                "createdAt": "2023-02-02T15:04:27.375Z",
                "albumId": "59bef749-ad17-4363-b682-36e4ca048144",
                "clients": "380974553233,380994553203"
            }
        ]
    }
];

let albumsExtended: IAlbum[] = [];

for (let i = 0; i < 10; i++) {
    albumsExtended.push(...albums);
}

export default albumsExtended;
