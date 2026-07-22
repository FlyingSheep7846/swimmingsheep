import { useEffect, useState } from "react";
import SongBlock from "./SongBlock";
import styles from "./SongsCard.module.css";

export default function SongsCard({ songInfo }) {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        if (!songInfo) return;

        const fetchTracks = async () => {
            const requests = songInfo.map(async (song) => {
                const spotifyLink = song.properties["Spotify Link"]?.url;
                if (!spotifyLink) return null;

                const response = await fetch(
                    `/api/spotify-track?url=${encodeURIComponent(spotifyLink)}`
                );

                if (!response.ok) return null;
                return response.json();
            });

            const results = await Promise.all(requests);
            setTracks(results.filter(Boolean));
        };

        fetchTracks();
    }, [songInfo]);

    if (tracks.length === 0) return null;

    const featuredTrack = tracks[0];
    const secondaryTracks = tracks.slice(1);

    return (
        <section className={styles.wrapper}>
            <div className={styles.contentRow}>
                <div className={styles.leftColumn}>
                    <h1 className={styles.heading}>Currently listening to</h1>

                    <div className={styles.smallRow}>
                        {secondaryTracks.map((track) => (
                            <SongBlock key={track.spotifyUrl} track={track} />
                        ))}
                    </div>
                </div>

                <div className={styles.featuredColumn}>
                    <SongBlock track={featuredTrack} featured />
                </div>
            </div>
        </section>
    );
}