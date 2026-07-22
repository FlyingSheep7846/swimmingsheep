import styles from "./SongsCard.module.css";

export default function SongBlock({ track, featured = false }) {
    if (!track) return null;

    return (
        <a
            href={track.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={
                featured
                    ? styles.featuredSong
                    : styles.song
            }
        >
            <img
                src={track.albumArt}
                alt={`${track.name} album cover`}
                className={styles.albumArt}
            />

            <div className={styles.songInfo}>
                <h2>{track.name}</h2>
                <p>{track.artists.join(", ")}</p>
            </div>
        </a>
    );
}