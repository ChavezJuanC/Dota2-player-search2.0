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

export async function getPlayersWinLossRatio(id: string): Promise<any> {
    const res = await fetch(
        `${API_URL}/players/${id}/wl/?significant=0?${API_KEY}`
    );
    if (!res.ok) {
        if (res.status === 400) {
            throw new Error(`Match history not available for Player:${id}`);
        } else {
            throw new Error("An error occured while fetching match data");
        }
    }

    const data = await res.json();
    return data;
}

//https://api.opendota.com/api/players/{account_id}/wl?key=value&
