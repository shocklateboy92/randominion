import { CardInfo } from './card-info';
import axios from 'axios';

const paths = CardInfo.map(card => `File:${card.name}.jpg`).join('|');

(async () => {
    for (const card of CardInfo) {
    const response = await axios.get(
        `http://wiki.dominionstrategy.com/api.php?action=query&format=json&prop=imageinfo&titles=File:${card.name}.jpg&iiprop=url`
    );
        const 
    }

    for (const info of Object.values<any>(response.data.query.pages)) {
        const card = info.title
            .replace(/^File:/, '')
            .replace(/\.jpg$/, '')
            .replace('_', ' ');
        urls[card] = info.imageinfo && query.pages.info.imageinfo.url;
        
    }
})();
