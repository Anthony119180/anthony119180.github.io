import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import cn from './cn.json';
import eng from './eng.json';

const resources = {
    eng: {
        translation:eng
    },
    cn: {
        translation:cn
    }
}

i18n
.use(initReactI18next)
.init({
    resources:resources,
    lng:'eng',
    fallbackLng:'cn',
    debug:true
},(error)=>{
    if(error){
        return console.debug(">>>> i18n went wrong:",error);
    }
});

export default i18n;