const imageUrlToFile = async function (url: string, filename: string): Promise<File> {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'no-cors',
    });
    const blob = await response.blob();
    return new File([blob], filename, { type: blob.type });
}

export default imageUrlToFile;
