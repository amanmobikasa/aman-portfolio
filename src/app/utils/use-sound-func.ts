import { AnyARecord } from 'dns';
import { useState } from 'react';
import useSound from 'use-sound';

export const useSoundFunc = (musicFile : any) => {
  const [volume, setVolume] = useState(1);
  const [loop, setLoop] = useState(false);
  const [changeMusic, setChangeMusic] = useState(musicFile);
  const [play, { pause, sound }] = useSound(changeMusic, { volume, loop : loop });

  const handleSetVolume = (newVolume : number) => {
    setVolume(newVolume);
    if (sound) {
      sound.volume(newVolume);
    }
  };

  const toggleLoop = () => {
    setLoop(!loop);
  }

  const handleChangeMusic = (musicFileNew : any) => {
    setChangeMusic(musicFileNew);
  }

  const playNow= () => {
      play();
  }
  const pauseNow = () => {
    pause();
  }
  return { playNow, pauseNow, handleSetVolume, toggleLoop, handleChangeMusic, volume };
};


