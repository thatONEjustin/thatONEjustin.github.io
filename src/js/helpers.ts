const API_URL = import.meta.env.PUBLIC_API_URL;
const BEARER_TOKEN = `Bearer ${import.meta.env.PUBLIC_API_TOKEN}`


export async function getData(endpoint: string) {
    // console.log(API_URL)
    return await
        fetch(`${API_URL}/api/${endpoint}`, {
            method: "GET",
            headers: {
                "Authorization": BEARER_TOKEN,
            },
        })
            .then(response => response.json())
            .catch(error => console.log(error))
}

export function blogDate(date: Date): string {
    return new Date(date).toLocaleDateString("en-GB")
}
