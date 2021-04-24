import React, { useState, useEffect } from "react";
import {PlayIcon, PauseIcon} from '@heroicons/react/outline';

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};


const Song = ({img, title, song}) => {
    const [playing, toggle] = useAudio(song);
    return (
        <div className="p-5 flex flex-col items-center justify-evenly sm:flex-row sm:justify-around">
            <img className="rounded-md h-40 w-40" src={img} />
            {/*<audio className="bg-yellow-300" controls src={song} />*/}
            <p className="my-4 play flex flex-col items-center cursor-pointer text-blue-dark" onClick={toggle}>
                <p className="h-10 w-10">{playing ?<PauseIcon />:<PlayIcon /> }</p>
                <p className="text-indigo-700 text-xl font-bold">{playing ? "Pause" : "Play"}</p>
            </p>
        </div>
    )
}

export default Song;
