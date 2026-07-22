module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/pages/api/spotify-track.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
function extractTrackId(spotifyUrl) {
    try {
        const url = new URL(spotifyUrl);
        const parts = url.pathname.split("/").filter(Boolean);
        if (parts[0] !== "track" || !parts[1]) {
            throw new Error("Invalid Spotify track URL");
        }
        return parts[1];
    } catch  {
        throw new Error("Invalid Spotify track URL");
    }
}
async function getAccessToken() {
    const credentials = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString("base64");
    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization: `Basic ${credentials}`,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "grant_type=client_credentials"
    });
    if (!response.ok) {
        throw new Error("Failed to authenticate with Spotify");
    }
    const data = await response.json();
    return data.access_token;
}
async function handler(req, res) {
    const { url } = req.query;
    if (!url) {
        return res.status(400).json({
            error: "Spotify URL is required"
        });
    }
    try {
        const trackId = extractTrackId(url);
        const accessToken = await getAccessToken();
        const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}?market=CA`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error("Failed to retrieve Spotify track");
        }
        const track = await response.json();
        return res.status(200).json({
            name: track.name,
            artists: track.artists.map((artist)=>artist.name),
            album: track.album.name,
            albumArt: track.album.images[0]?.url ?? "",
            spotifyUrl: track.external_urls.spotify,
            durationMs: track.duration_ms
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0vl82is._.js.map