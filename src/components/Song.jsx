import React from "react";
import styles from '../stylesheets/Song.module.css';

const Song = ({songInfo, label}) => {
    if (!songInfo || songInfo.length === 0) return null;
    
    const item = songInfo[0]; // Get first entry only
    const name = item.properties.Name?.title[0]?.plain_text || '';
    const artist = item.properties.Artist?.rich_text[0]?.plain_text || '';
    const albumArt = item.properties['Album Art']?.files[0]?.file?.url || item.properties['Album Art']?.files[0]?.external?.url || '';
    const spotifyLink = item.properties['Spotify Link']?.url || '';
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h3 style={{alignSelf: 'flex-start'}}>Currently Listening To...</h3>
                {albumArt && (
                    <a href={spotifyLink} target="_blank" rel="noopener noreferrer">
                        <img src={albumArt} alt={name} className={styles.albumArt} />
                    </a>
                )}
                <h2 className={styles.title}>{name}</h2>
                <h3 className={styles.artist}>{artist}</h3>
            </div>
        </div>
    );
}

export default Song