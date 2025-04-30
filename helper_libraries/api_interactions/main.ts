import { API_KEY, API_URL } from "@/constants/keys";

// fetch player profile by id

export async function getPlayerById(id: string): Promise<any> {
    const res = await fetch(`${API_URL}/players/${id}?${API_KEY}`);

    if (!res.ok) {
        if (res.status === 404) {
            throw new Error("Player not found");
        } else {
            throw new Error("An error occurred while fetching the player data");
        }
    }

    const data = await res.json();
    return data;
}
