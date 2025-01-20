import { BASE_URL } from "./api";

export async function uploadImage(image) {
    let res = await fetch(`${BASE_URL}/upload`, {
        method: 'POST',
        headers: {
            "ContentType" : "multipart/form-data"
        },
        data: image,
    }) 
    return res;
}