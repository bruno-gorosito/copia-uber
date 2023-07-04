import { ReactNode, createContext, useState } from "react";
import { IntlProvider } from "react-intl";
import es_Messages from '../../../lang/es-AR.json';
import en_Messages from '../../../lang/en-US.json';
import { LangContextType } from "../../../types/types";

const LangContext = createContext<LangContextType | null>(null);

const LangProvider = ({children}: {children: ReactNode}) => {


    let lang = localStorage.getItem('lang');
    let defaultMessage;
    let defaultLocale;
    let defaultIdioma;

    if (lang) {
        switch(lang) {
            case 'es-AR':
                defaultMessage = es_Messages;
                defaultLocale = "es-AR";
                defaultIdioma = 'ES';
                break;
            case 'en-US':
                defaultMessage = en_Messages;
                defaultLocale = "en-US";
                defaultIdioma = 'EN';
                break;
            default:
                defaultMessage = en_Messages;
                defaultLocale = "en-US";
                defaultIdioma = 'EN';
                break;
        }
    } else {
        defaultMessage = en_Messages;
        defaultLocale = "en-US";
        defaultIdioma = 'EN';
    }


    const [messages, setMessages] = useState(defaultMessage);
    const [locale, setLocale] = useState(defaultLocale);
    const [idioma, setIdioma] = useState(defaultIdioma)

    const handleLang = (language: string) => {
        switch (language) {
            case 'es-AR':
                setMessages(es_Messages);
                setLocale(language);
                setIdioma("ES")
                localStorage.setItem('lang', 'es-AR');
                break;
            case 'en-US':
                setMessages(en_Messages);
                setLocale(language);
                setIdioma("EN")
                localStorage.setItem('lang', 'en-US');
                break;
        }
    }


    return (
        <LangContext.Provider
            value={{
                idioma,
                handleLang
            }}
        >
            <IntlProvider 
                messages={messages} 
                locale={locale} 
            >
                {children}
            </IntlProvider>
        </LangContext.Provider>
    )
}

export {LangContext, LangProvider}