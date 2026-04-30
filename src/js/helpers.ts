const API_URL = import.meta.env.SECRET_API_URL;
const BEARER_TOKEN = `Bearer ${import.meta.env.SECRET_API_TOKEN}`

export async function getData(endpoint: string) {
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
