import React from 'react';
import Song from './Song';
import jaiSultan from '../images/jai-sultan.jpg';
import materTheBlaster from '../images/master-the-blaster.jpg';
import yaarayumIvaloAzhaga from '../images/yaarayum-ivalo-azhaga.jpg';
import renduKadhal from '../images/rendu-kadhal.jpg';
import neeKavithaigala from '../images/nee-kavithaigala.jpg';

import jaiSultanSong from '../sounds/jai-sultan.mp3';
import materTheBlasterSong from '../sounds/master-the-blaster.mp3'
import yaarayumIvaloAzhagaSong from '../sounds/yaaraiyum-ivlo-azhaga.mp3';
import renduKadhalSong from '../sounds/rendu-kadhal.mp3';
import neeKavithaigalaSong from '../sounds/nee-kavithaigala.mp3';

const SongList = () => {
      
    return (
        <div>
            <Song img={jaiSultan} title='Jai Sultan' song={jaiSultanSong} />
            <Song img={materTheBlaster} title='Master The Blaster' song={materTheBlasterSong} />
            <Song img={yaarayumIvaloAzhaga} title='Yaaraiyum Ivlo Azhaga' song={yaarayumIvaloAzhagaSong} />
            <Song img={renduKadhal} title='Rendu Kadhal' song={renduKadhalSong} />
            <Song img={neeKavithaigala} title='Nee Kavithaigala' song={neeKavithaigalaSong} />
        </div>
    )
}

export default SongList;
