import world from "../assets/world.svg"
import apps_grid from "../assets/apps-grid.svg"
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
import HeaderMobile from "./headerMobile"



const Header = () => {

    const [companyMenu, setCompanyMenu] = useState<Boolean>(false);
    const [menuLang, setMenuLang] = useState<Boolean>(false);
    const [menuProducts, setProductsMenu] = useState<Boolean>(false);

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
        setMenuLang(false);
        setCompanyMenu(false)
        setProductsMenu(false)
        setMenu(!menu);
    }



    return (
        <>
            {/* Header Mobile */}
            <HeaderMobile />


            {/* Header Desktop */}
            <header className="bg-black text-white w-full h-0 lg:h-auto lg:block hidden select-none sticky top-0">
                <div className="flex max-w-8xl mx-auto py-3 items-center ">
                    <h1 className="text-3xl w-1/12 font-normal">Uber</h1>
                    <nav className="flex justify-between w-11/12 font-medium">
                        <ul className="flex relative gap-1">
                            <li 
                                className={`${companyMenu ? 'bg-gray-500/50' : null} flex py-2 px-3 rounded-3xl items-center gap-1 hover:bg-gray-500/50 transition-colors duration-500 cursor-pointer`}
                                onClick={() => handleMenu(setCompanyMenu, companyMenu)}
                            >
                                <FormattedMessage id="menu.company"/>
                                {companyMenu
                                    ?  (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 m-0">
                                            <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
                                        </svg>)
                                    :   (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>)
                                  
                                }
                            </li>
                            <ul 
                                className={`${stylesMenu.menuCompany} ${companyMenu ? stylesMenu.active : null}`}
                            >
                                <li 
                                    className="py-2 px-4"
                                >
                                    <FormattedMessage id="company.list1"/>
                                </li>
                                <li 
                                    className="py-2 px-4"
                                >
                                    <FormattedMessage id="company.list2"/>
                                </li>
                                <li 
                                    className="py-2 px-4"
                                >
                                    <FormattedMessage id="company.list3"/>
                                </li>
                                <li 
                                    className="py-2 px-4"
                                >
                                    <FormattedMessage id="company.list4"/>
                                </li>
                                <li 
                                    className="py-2 px-4"
                                >
                                    <FormattedMessage id="company.list5"/>
                                </li>
                                <li 
                                    className="py-2 px-4"
                                >
                                    <FormattedMessage id="company.list6"/>
                                </li>
                                <li 
                                    className="py-2 px-4"
                                >
                                    <FormattedMessage id="company.list7"/>
                                </li>
                                <li 
                                    className="py-2 px-4"
                                >
                                    <FormattedMessage id="company.list8"/>
                                </li>

                            </ul>
                            <li className="flex py-2 px-3 rounded-3xl  hover:bg-gray-500/50 transition-colors duration-500 cursor-pointer">
                                <FormattedMessage id="menu.safety"/>
                            </li>
                            <li className="flex py-2 px-3 rounded-3xl  hover:bg-gray-500/50 transition-colors duration-500 cursor-pointer">
                                <FormattedMessage id="menu.help"/>
                            </li>
                        </ul>

                        <ul className="flex items-center relative gap-1">
                            <li 
                                className=  {`${menuLang ? 'bg-gray-500/50': null} flex py-2 px-3 rounded-3xl justify-center hover:bg-gray-500/50 transition-colors duration-500 cursor-pointer gap-2 uppercase`}
                                onClick={() => handleMenu(setMenuLang, menuLang)}
                            >
                                <img src={world} className="rotate-45 aspect-square w-4"/>
                                {context?.idioma}
                            </li>
                            <li 
                                className={`${menuProducts ? 'bg-gray-500/50': null} flex py-2 px-3 rounded-3xl  hover:bg-gray-500/50 transition-colors duration-500 cursor-pointer`}
                                onClick={() => handleMenu(setProductsMenu, menuProducts)}
                            >
                                <img src={apps_grid} className="aspect-square w-5 mr-1"/>
                                    
                                <FormattedMessage id="menu.products"/>
                                
                            </li>
                            <ul 
                                className={`${stylesMenu.menuProducts} ${menuProducts ? stylesMenu.active : null} `}
                            >
                                {products.map(product => (
                                    <li
                                        className="flex px-6 gap-6 py-4 text-xl items-center hover:bg-gray-400/30 hover:cursor-pointer"
                                        key={product.id}
                                    >
                                        <img src={product.img} className="w-4 aspect-square"/>
                                        <FormattedMessage id={`productos.${product.id}`}/>
                                    </li>
                                ))}
                            </ul>
                            
                            <li className="flex py-2 px-3 rounded-3xl  hover:bg-gray-500/50 transition-colors duration-500 cursor-pointer">
                                
                                <FormattedMessage id="menu.log-in"/>
                            </li>
                            <li className="flex py-2 px-3 rounded-3xl bg-white text-black hover:bg-white/80 transition-colors duration-500 cursor-pointer">
                                
                                <FormattedMessage id="menu.sign-up"/>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>



            {/* MENU LENGUAJE */}
            <div className={`${stylesMenu.menuFullWindow} ${menuLang ? stylesMenu.active : ' hidden lg:block h-0 py-0'}`}>
                <div className="max-w-7xl w-full mx-auto px-6">
                    <div className="flex justify-end">
                        <svg className="w-12 m-4 hover:cursor-pointer" viewBox="0 0 24 24" fill="none" onClick={() => setMenuLang(false)}>
                            <path d="m18.1 8.1-2.2-2.2-3.9 4-3.9-4-2.2 2.2 4 3.9-4 3.9 2.2 2.2 3.9-4 3.9 4 2.2-2.2-4-3.9 4-3.9Z" fill="currentColor"></path>
                        </svg>
                    </div>

                    <h2 className="text-4xl font-bold">
                        <FormattedMessage id="idioma.text"/>
                    </h2>
                    <ul className="font-medium text-xl flex px-4 py-10 gap-4">
                        <li 
                            className={`${context?.idioma == 'EN' ? 'bg-gray-400/60' : null} w-1/4 hover:bg-gray-400/30 py-4 px-2 rounded-md hover:cursor-pointer`}
                            onClick={() => context?.handleLang('en-US')}
                        >English</li>
                        <li 
                            className={`${context?.idioma == 'ES' ? 'bg-gray-400/60' : null} w-1/4 hover:bg-gray-400/30 py-4 px-2 rounded-md hover:cursor-pointer`}
                            onClick={() => context?.handleLang('es-AR')}
                        >Español (Internacional)
                        </li>
                    </ul>
                </div>
            </div>


        </>
    )
}


export default Header;