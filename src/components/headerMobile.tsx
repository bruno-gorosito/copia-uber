import { useState, useContext } from "react"
import stylesMenu from './styles/header.module.css'
import { FormattedMessage } from "react-intl"
import { LangContext } from "./context/lang/langContext"
import homeImg from '../assets/home.svg'
import rideImg from '../assets/car.svg'
import driveImg from '../assets/drive.svg'
import eatImg from '../assets/restaurant.svg'
import merchantImg from '../assets/merchants.svg'
import freightImg from '../assets/freight.svg'
import bikeImg from '../assets/bike.svg'
import transitImg from '../assets/transit.svg'
import businessImg from '../assets/business.svg'
import moneyImg from '../assets/money.svg'
import ArrowBox from "./arrowBox"

const HeaderMobile = () => {

    const [companyMenu, setCompanyMenu] = useState<Boolean>(false);
    const [menuLang, setMenuLang] = useState<Boolean>(false);
    const [menuProducts, setProductsMenu] = useState<Boolean>(false);
    const [menuMobile, setMenuMobile] = useState<Boolean>(false);
    const [menuLogin, setMenuLogin] = useState<Boolean>(false);
    const [menuSigin, setMenuSigin] = useState<Boolean>(false);
    const [menuPrincipal, setMenuPrincipal] = useState<Boolean>(false);

    const context = useContext(LangContext);


    const products = [
        {img: homeImg, id: 'item1'},
        {img: rideImg, id: 'item2'},
        {img: driveImg, id: 'item3'},
        {img: eatImg, id: 'item4'},
        {img: merchantImg, id: 'item5'},
        {img: freightImg, id: 'item6'},
        {img: bikeImg, id: 'item7'},
        {img: transitImg, id: 'item8'},
        {img: businessImg, id: 'item9'},
        {img: moneyImg, id: 'item10'},
    ]

    const handleMenu = (setMenu: Function, menu: Boolean) => {
        setMenuPrincipal(false);
        setMenuLang(false);
        setMenuLogin(false)
        setMenuSigin(false)
        setCompanyMenu(false)
        setProductsMenu(false)
        setMenu(!menu);

        if (menuMobile) {
            menu ? setMenuMobile(false) : null;//Cierra el menú mobile
        } else {
            !menu ? setMenuMobile(true) : null; //Abre menu
        }
    }

    const verifyMenu = () => {
        return menuMobile ? true : false
    }


    const handleMenuMobile = () => {
        if (!menuMobile) {
            setMenuMobile(true);
            setMenuPrincipal(true)
        } else {
            setMenuMobile(false);
            setMenuPrincipal(false);
            setMenuLang(false);
            setMenuLogin(false)
            setMenuSigin(false)
            setCompanyMenu(false)
            setProductsMenu(false)
        }
        
    }


    return(
        <>
            

            {/* Header Mobile */}
            <header className={`${verifyMenu() ? "sticky top-0" : ''} block lg:hidden bg-black text-white m-0`}>
                <div className="flex justify-between items-center py-4 px-2">
                    <h1 className="text-2xl mx-5">Uber</h1>
                    <ul className="flex gap-2 font-medium px-2">
                        <li 
                            onClick={() => handleMenu(setMenuLogin, menuLogin)}
                            className="flex py-2 px-3 rounded-3xl hover:bg-gray-500/50 transition-colors duration-500 cursor-pointer"
                        >
                            <FormattedMessage id="menu.log-in"/>
                        </li>
                        <li 
                            onClick={() => handleMenu(setMenuSigin, menuSigin)}
                            className="flex py-2 px-3 rounded-3xl bg-white text-black hover:bg-white/80 transition-colors duration-500 cursor-pointer"
                        >
                            <FormattedMessage id="menu.sign-up"/>
                        </li>
                        <li 
                            className={`flex w-10 justify-center aspect-square rounded-full items-center hover:bg-gray-500/50 ${menuMobile ? 'bg-gray-500/70' : null} transition-colors duration-500 cursor-pointer`}
                            onClick={() => handleMenuMobile()}
                        >
                            {!menuMobile 
                                ? (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" color="white"><path d="M2 6h20v3H2V6Z" fill="currentColor"></path>,<path d="M2 15h20v3H2v-3Z" fill="currentColor"></path></svg>
                                )
                                : (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" color="white"><path d="m21.1 5.1-2.2-2.2-6.9 7-6.9-7-2.2 2.2 7 6.9-7 6.9 2.2 2.2 6.9-7 6.9 7 2.2-2.2-7-6.9 7-6.9Z" fill="currentColor"></path></svg>
                                )
                            }
                            
                            
                        </li>
                    </ul>
                </div>
            </header>

            {/* MENU MOBILE */}
            <div className={`${stylesMenu.menuFullWindow} ${stylesMenu.menuMobile} ${menuMobile ? stylesMenu.active : ''} lg:h-0 lg:hidden px-8`}>
                {menuPrincipal && menuMobile
                    ? (
                        <>
                            <ul className="pb-10">
                                <li
                                    className="py-4 text-4xl font-bold flex justify-between items-center hover:text-gray-600 hover:cursor-pointer"
                                    onClick={() => setCompanyMenu(!companyMenu)}
                                >
                                    <FormattedMessage id="menu.company"/>
                                    {companyMenu
                                        ?  (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 11.7v3.8l-6-4.6-6 4.6v-3.8l6-4.6 6 4.6Z" fill="currentColor"></path></svg>)
                                        :   (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z" fill="currentColor"></path></svg>)
                                    }
                                </li>
                                <ul 
                                    className={`${stylesMenu.menuCompanyMobile} ${companyMenu ? stylesMenu.active : 'hidden'} p-0`}
                                >
                                    <li 
                                        className="p-0"
                                    >
                                        <FormattedMessage id="company.list1"/>
                                    </li>
                                    <li 
                                        className="py-2 px-2"
                                    >
                                        <FormattedMessage id="company.list2"/>
                                    </li>
                                    <li 
                                        className="py-2 px-2"
                                    >
                                        <FormattedMessage id="company.list3"/>
                                    </li>
                                    <li 
                                        className="py-2 px-2"
                                    >
                                        <FormattedMessage id="company.list4"/>
                                    </li>
                                    <li 
                                        className="py-2 px-2"
                                    >
                                        <FormattedMessage id="company.list5"/>
                                    </li>
                                    <li 
                                        className="py-2 px-2"
                                    >
                                        <FormattedMessage id="company.list6"/>
                                    </li>
                                    <li 
                                        className="py-2 px-2"
                                    >
                                        <FormattedMessage id="company.list7"/>
                                    </li>
                                    <li 
                                        className="py-2 px-2"
                                    >
                                        <FormattedMessage id="company.list8"/>
                                    </li>

                                </ul>
                                <li
                                    className="py-4 text-4xl font-bold flex justify-between items-center hover:text-gray-600 hover:cursor-pointer"
                                >
                                    <FormattedMessage id="menu.safety"/>
                                </li>
                                <li
                                    className="py-4 text-4xl font-bold flex justify-between items-center hover:text-gray-600 hover:cursor-pointer"
                                >
                                    <FormattedMessage id="menu.help"/>
                                </li>
                            </ul>  
                            <p
                                className="flex items-center justify-center gap-4 text-lg mt-10 py-2 bg-gray-400/20 hover:cursor-pointer hover:bg-gray-400/30 transition rounded"
                                onClick={() => handleMenu(setProductsMenu, menuProducts)}
                            >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66671 3C0.930328 3 0.333374 2.40305 0.333374 1.66667C0.333374 0.930286 0.930328 0.333333 1.66671 0.333333C2.40309 0.333333 3.00004 0.930287 3.00004 1.66667C3.00004 2.40305 2.40309 3 1.66671 3ZM7.00004 3C6.26366 3 5.66671 2.40305 5.66671 1.66667C5.66671 0.930287 6.26366 0.333333 7.00004 0.333333C7.73642 0.333333 8.33337 0.930287 8.33337 1.66667C8.33337 2.40305 7.73642 3 7.00004 3ZM12.3334 3C11.597 3 11 2.40305 11 1.66667C11 0.930287 11.597 0.333333 12.3334 0.333333C13.0698 0.333333 13.6667 0.930287 13.6667 1.66667C13.6667 2.40305 13.0698 3 12.3334 3ZM1.66671 8.33333C0.930328 8.33333 0.333374 7.73638 0.333374 7C0.333374 6.26362 0.930328 5.66667 1.66671 5.66667C2.40309 5.66667 3.00004 6.26362 3.00004 7C3.00004 7.73638 2.40309 8.33333 1.66671 8.33333ZM7.00004 8.33333C6.26366 8.33333 5.66671 7.73638 5.66671 7C5.66671 6.26362 6.26366 5.66667 7.00004 5.66667C7.73642 5.66667 8.33337 6.26362 8.33337 7C8.33337 7.73638 7.73642 8.33333 7.00004 8.33333ZM12.3334 8.33333C11.597 8.33333 11 7.73638 11 7C11 6.26362 11.597 5.66667 12.3334 5.66667C13.0698 5.66667 13.6667 6.26362 13.6667 7C13.6667 7.73638 13.0698 8.33333 12.3334 8.33333ZM0.333374 12.3333C0.333374 13.0697 0.930328 13.6667 1.66671 13.6667C2.40309 13.6667 3.00004 13.0697 3.00004 12.3333C3.00004 11.597 2.40309 11 1.66671 11C0.930328 11 0.333374 11.597 0.333374 12.3333ZM5.66671 12.3333C5.66671 13.0697 6.26366 13.6667 7.00004 13.6667C7.73642 13.6667 8.33337 13.0697 8.33337 12.3333C8.33337 11.597 7.73642 11 7.00004 11C6.26366 11 5.66671 11.597 5.66671 12.3333ZM11 12.3333C11 13.0697 11.597 13.6667 12.3334 13.6667C13.0698 13.6667 13.6667 13.0697 13.6667 12.3333C13.6667 11.597 13.0698 11 12.3334 11C11.597 11 11 11.597 11 12.3333Z" fill="#000000"></path>
                                </svg>
                                <FormattedMessage id="menu.products" />
                            </p>
                            <button 
                                className="mt-12 font-medium flex items-center gap-3 hover:bg-gray-300/50 p-2 w-16 rounded-lg cursor-pointer"
                                onClick={() => handleMenu(setMenuLang, menuLang)}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm8 11c0 .7-.1 1.4-.3 2-.6-1.5-1.6-3.1-3-4.7l1.8-1.8c1 1.3 1.5 2.8 1.5 4.5ZM6.5 6.5c1.3 0 3.6.8 6 2.9l-3.2 3.2C7.1 9.8 6.5 7.5 6.5 6.5Zm8.1 5c2.3 2.7 2.9 5 2.9 6-1.3 0-3.6-.8-6-2.9l3.1-3.1Zm1.9-6.1-1.9 1.9c-1.6-1.4-3.2-2.4-4.7-3 .7-.2 1.3-.3 2-.3 1.8 0 3.3.5 4.6 1.4ZM4 12c0-.7.1-1.4.3-2 .6 1.5 1.6 3.1 3 4.7l-1.8 1.8C4.5 15.2 4 13.7 4 12Zm3.5 6.6 1.9-1.9c1.6 1.4 3.2 2.4 4.7 3-.7.2-1.3.3-2 .3-1.8 0-3.3-.5-4.6-1.4Z" fill="currentColor"></path></svg>
                                {context?.idioma}
                            </button>
                        </>
                    )
                    : null
                }
                {menuProducts
                    ? (
                        <>
                            <ul className="py-2">
                                {products.map(product => (
                                    <li 
                                        key={product.id}
                                        className="flex items-center justify-start gap-8 py-4 text-xl"
                                    >
                                        <img src={product.img} className="h-4 aspect-square"/>
                                        <FormattedMessage id={`productos.${product.id}`}/>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )
                    : null
                }
                {menuLogin
                    ? (
                        <ul>
                            <ul>
                                <ArrowBox text="login.item1"/>
                                <ArrowBox text="login.item2"/>
                                <ArrowBox text="login.item3"/>
                                <ArrowBox text="login.item4"/>
                            </ul>
                        </ul>
                    )
                    : null
                }
                {menuSigin
                    ? (
                        <ul className="pb-8">
                            <ArrowBox text="signup.item1"/>
                            <ArrowBox text="signup.item2"/>
                            <ArrowBox text="signup.item3"/>
                            <ArrowBox text="signup.item4"/>
                        </ul>
                    )
                    : null
                }
                {menuLang
                    ? (
                        <>
                            <h1 className="text-3xl font-semibold my-10">
                                <FormattedMessage id="idioma.text"/>
                            </h1>
                            <ul
                                
                            >
                                <li
                                    className={`${context?.idioma === 'EN' ? 'bg-gray-300/50' : ''} py-6 -translate-x-6 px-8 text-xl transition cursor-pointer hover:bg-gray-300/30 rounded-lg my-4`}
                                    onClick={() => context?.handleLang('en-US')}
                                >
                                    English
                                </li>
                                <li
                                    className={`${context?.idioma === 'ES' ? 'bg-gray-300/50' : ''} py-6 -translate-x-6 px-8 text-xl transition cursor-pointer hover:bg-gray-300/30 rounded-lg`}
                                    onClick={() => context?.handleLang('es-AR')}
                                >
                                    Español (Internacional)
                                </li>
                            </ul>
                        </>
                    )
                    : null
                }
            </div>
        </>
    ) 
}

export default HeaderMobile;