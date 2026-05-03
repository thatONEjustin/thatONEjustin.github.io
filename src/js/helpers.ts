const API_URL = import.meta.env.SECRET_API_URL;
const BEARER_TOKEN = `Bearer ${import.meta.env.SECRET_API_TOKEN}`

import { truncateWords } from '@shahid19/stringjs'

export async function getData(endpoint: string) {
    // console.log(API_URL)
    return await
        fetch(`${API_URL}/api/${endpoint}`, {
            method: "GET",
            headers: {
                "Authorization": BEARER_TOKEN,
            },
        })
}

export function blogDate(date: Date): string {
    return new Date(date).toLocaleDateString("en-US")
}

export function chop(text: string, truncate: number = 0) {
    if (!truncate) return

    return truncateWords(text, truncate)
}
