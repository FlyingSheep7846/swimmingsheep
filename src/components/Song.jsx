import React, {useState, useEffect} from "react";
import styles from '@/stylesheets/Song.module.css';

const Song = ({songInfo, label}) => {
    if (!songInfo || songInfo.length === 0) return null;
    
    const item = songInfo[0];
    const spotifyLink = item.properties["Spotify Link"]?.url;

    const [track, setTrack] = useState(null);

    useEffect(() => {
        if (!spotifyLink) return;

        fetch(`/api/spotify-track?url=${encodeURIComponent(spotifyLink)}`)
            .then(res => res.json())
            .then(setTrack)
            .catch(console.error);
    }, [spotifyLink]);

    if (!track) return <div>Loading...</div>;
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h3 style={{alignSelf: 'flex-start'}}>Currently Listening To...</h3>
                {track.albumArt && (
                    <a href={spotifyLink} target="_blank" rel="noopener noreferrer">
                        <img src={track.albumArt} alt={track.name} className={styles.albumArt} />
                    </a>
                )}
                <h2 className={styles.title}>{track.name}</h2>
                <h3 className={styles.artist}>
                    {track.artists.join(", ")}
                </h3>
            </div>
        </div>
    );
}

export default Song