"use client";
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, List } from 'lucide-react';

interface Song {
    title: string;
    artist: string;
    work: "Mixer" | "Producer";
    url: string;
}

const playlist: Song[] = [
    {
        title: "Aluminum",
        artist: "SoundGallery",
        work: "Producer",
        url: "./music/aluminum.mp3"
    },
    {
        title: "Cinematic Atmosphere",
        artist: "SoundGallery",
        work: "Mixer",
        url: "https://cdn.pixabay.com/audio/2025/02/02/audio_bc0d239807.mp3"
    },
    {
        title: "Epic Cinematic",
        artist: "AudioCoffee",
        work: "Producer",
        url: "https://cdn.pixabay.com/audio/2025/02/03/audio_502e27ab2b.mp3"
    }
];

export function PyxlPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [volume, setVolume] = useState(1);
    const [showPlaylist, setShowPlaylist] = useState(false);
    const [songDurations, setSongDurations] = useState<{ [key: string]: number }>({});
    const [isAudioLoaded, setIsAudioLoaded] = useState(false);

    const audioRef = useRef<HTMLAudioElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);

    // Load audio when user interacts
    const loadAudio = () => {
        if (!isAudioLoaded && audioRef.current) {
            setIsAudioLoaded(true);
            audioRef.current.load();
        }
    };

    // Load metadata for a specific song
    const loadSongMetadata = (songUrl: string) => {
        if (!songDurations[songUrl]) {
            const audio = new Audio();
            audio.preload = "metadata";
            audio.src = songUrl;

            const handleMetadata = () => {
                setSongDurations(prev => ({
                    ...prev,
                    [songUrl]: audio.duration
                }));
                audio.removeEventListener('loadedmetadata', handleMetadata);
                audio.remove();
            };

            audio.addEventListener('loadedmetadata', handleMetadata);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                loadAudio();
                audioRef.current.play().catch(() => {
                    setIsPlaying(false);
                });
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentSongIndex]);

    const formatTime = (time: number) => {
        if (!time || isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handlePlayPause = () => {
        loadAudio();
        setIsPlaying(!isPlaying);
        loadSongMetadata(playlist[currentSongIndex].url);
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration);
        }
    };

    const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (progressBarRef.current && audioRef.current) {
            loadAudio();
            const rect = progressBarRef.current.getBoundingClientRect();
            const pos = (event.clientX - rect.left) / rect.width;
            audioRef.current.currentTime = pos * duration;
        }
    };

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    const handleNext = () => {
        const nextIndex = (currentSongIndex + 1) % playlist.length;
        loadSongMetadata(playlist[nextIndex].url);
        setCurrentSongIndex(nextIndex);
        if (isPlaying) loadAudio();
    };

    const handlePrev = () => {
        const prevIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSongMetadata(playlist[prevIndex].url);
        setCurrentSongIndex(prevIndex);
        if (isPlaying) loadAudio();
    };

    const handleSongSelect = (index: number) => {
        loadSongMetadata(playlist[index].url);
        setCurrentSongIndex(index);
        setIsPlaying(true);
        loadAudio();
    };

    return (
        <div className="bg-black/70 backdrop-blur-lg rounded-xl p-6 w-full max-w-xl mx-auto">
            <div className="mb-6 grid grid-cols-2 gap-4">
                <div>
                    <h2 className="text-white text-xl font-bold mb-1">{playlist[currentSongIndex].title}</h2>
                    <p className="text-gray-300">{playlist[currentSongIndex].artist}</p>
                </div>
                <div className="grid items-center text-right">
                    <p>Void Born Audio</p>
                    <p className="text-gray-300">{playlist[currentSongIndex].work}</p>
                </div>
            </div>

            <audio
                ref={audioRef}
                src={playlist[currentSongIndex].url}
                preload="none"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleTimeUpdate}
                onEnded={handleNext}
            />

            <div
                ref={progressBarRef}
                className="h-2 bg-gray-600/50 rounded-full mb-4 cursor-pointer relative group"
                onClick={handleProgressClick}
            >
                <div
                    className="absolute h-full bg-purple-500 rounded-full transition-all group-hover:bg-purple-400"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform" />
                </div>
            </div>

            <div className="flex justify-between text-gray-400 text-sm mb-4">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
            </div>

            <div className="flex items-center justify-center gap-8 mb-6">
                <button
                    onClick={handlePrev}
                    className="text-white hover:text-purple-400 transition transform hover:scale-110"
                >
                    <span className="sr-only">Skip Back</span>
                    <SkipBack size={24} />
                </button>

                <button
                    onClick={handlePlayPause}
                    className="bg-purple-600 border-2 border-purple-600 hover:bg-transparent text-white p-4 rounded-full transition transform hover:scale-105 active:scale-95 shadow-lg"
                >
                    {isPlaying ? (
                        <>
                            <span className="sr-only">Pause Music</span>
                            <Pause size={24} />
                        </>
                    ) : (
                        <>
                            <span className="sr-only">Play Music</span>
                            <Play size={24} />
                        </>
                    )}
                </button>

                <button
                    onClick={handleNext}
                    className="text-white hover:text-purple-400 transition transform hover:scale-110"
                >
                    <span className="sr-only">Skip Forward</span>
                    <SkipForward size={24} />
                </button>
            </div>

            <div className="flex items-center gap-2 mb-4 group">
                <Volume2 size={20} className="text-gray-400 group-hover:text-purple-400 transition" />
                <div className="relative w-full h-8 flex items-center">
                    <label htmlFor="volume" className="sr-only">Music Volume</label>
                    <input
                        type="range"
                        id="volume"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-full h-2 appearance-none bg-gray-600/50 rounded-full outline-none cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg
                [&::-webkit-slider-thumb]:transition [&::-webkit-slider-thumb]:hover:scale-110
                [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4
                [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-lg
                [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:transition [&::-moz-range-thumb]:hover:scale-110"
                        style={{
                            background: `linear-gradient(to right, #A855F7 0%, #A855F7 ${volume * 100}%, rgba(75, 85, 99, 0.5) ${volume * 100}%, rgba(75, 85, 99, 0.5) 100%)`
                        }}
                    />
                </div>
            </div>

            <div className="border-t border-gray-700 pt-4">
                <button
                    onClick={() => setShowPlaylist(!showPlaylist)}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition group w-full"
                >
                    <List size={20} className="group-hover:text-purple-400" />
                    <span>Playlist</span>
                </button>

                {showPlaylist && (
                    <div className="mt-4 space-y-2">
                        {playlist.map((song, index) => (
                            <div
                                key={index}
                                onClick={() => handleSongSelect(index)}
                                className={`flex justify-between items-center p-3 border-2 rounded-xl cursor-pointer transition
                    ${currentSongIndex === index
                                        ? 'bg-purple-500/20 text-white border-purple-600/50'
                                        : 'text-gray-300 border-transparent hover:border-purple-600'
                                    }`}
                            >
                                <div className="flex items-center gap-3 w-full mr-8">
                                    {currentSongIndex === index && isPlaying ? (
                                        <Pause size={16} className="text-purple-400" />
                                    ) : (
                                        <Play size={16} className="text-gray-400" />
                                    )}
                                    <div className="grid grid-cols-2 gap-4 w-full">
                                        <div>
                                            <p className="font-medium">{song.title}</p>
                                            <p className="text-sm text-gray-400">{song.artist}</p>
                                        </div>
                                        <div className="flex items-center justify-end">
                                            <p className="font-medium">{song.work}</p>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-400">
                                    {formatTime(songDurations[song.url])}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}