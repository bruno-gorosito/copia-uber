
import { ReactNode, useState } from 'react'
import Drive, { ImgDrive } from './componentsMenu/drive'
import Eat, { ImgEat } from './componentsMenu/eat'
import Ride, { ImgRide } from './componentsMenu/ride'
import driveIcon from '../../assets/signal.svg'
import eatIcon from '../../assets/restaurant.svg'
import rideIcon from '../../assets/car.svg'
import businessImg from '../../assets/empresas.webp'
import side1Img from '../../assets/lado1.webp'
import side2Img from '../../assets/lado2.webp'
import aboutusImg from '../../assets/person-multiple-outlined.svg'
import newsroomImg from '../../assets/document-outlined.svg'
import globalImg from '../../assets/home-outlined.svg'


import { FormattedMessage } from 'react-intl'
import stylesMenuPrincipal from '../styles/opcionesMenu.module.css'


type OpcionType = {
    id : string,
    style: string,
    img: ReactNode,
    icono: string,
    component: ReactNode

}


const PagePrincipal = ( ) => {
    

    const opcionesMenu: OpcionType[] = [
        {id: "conduce.listItem", icono: driveIcon, img: <ImgDrive />, style: stylesMenuPrincipal.drive,  component: <Drive />},
        {id: "eat.listItem",  icono: eatIcon, style: stylesMenuPrincipal.eat, img: <ImgEat />,   component: <Eat />},
        {id: "ride.listItem", icono: rideIcon, style: stylesMenuPrincipal.ride, img: <ImgRide />, component: <Ride />}
    ]

    const [opcionSeleccionada, setOpcionSeleccionada] = useState<OpcionType |  null>(opcionesMenu[0])

    const handleOpcion = (opcion: OpcionType) => {
        setOpcionSeleccionada(opcion)
    }

    return (
        <>
            <div 
                    className='relative h-full -mt-px'
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0"
            >
                    <div className='w-full mx-auto max-w-8xl'>
                        <div 
                            className='lg:max-w-2xl  lg:absolute lg:my-20 bg-white '
                        >
                            <ul className='flex lg:justify-between lg:px-16 items-stretch'>
                                {opcionesMenu.map(opcion => (
                                    <li key={opcion.id}
                                        className='p-6 flex w-28 flex-col items-center gap-2 cursor-pointer'
                                        onClick={() => handleOpcion(opcion)}
                                    >
                                        <img src={opcion.icono} className='w-6'/>
                                        
                                        <p 
                                            className='h-full flex items-center  text-center'
                                        >
                                            <FormattedMessage id={opcion.id}/>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                            <div className={`${stylesMenuPrincipal.line} ${opcionSeleccionada?.style} h-1 bg-black w-20 transition-all duration-300`}></div>
                            {opcionSeleccionada?.component}
                        </div>
                    </div>
                    <div 
                    >
                        {opcionSeleccionada?.img}
                    </div>
            </div>
            <div 
                className="relative max-h-lg"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
            >
                    <img 
                        src={businessImg} 
                        alt='business' 
                        className='absolute h-full w-full object-cover object-center'
                    />
                    <div className="relative px-6 md:pr-40 py-10 mx-auto md:max-w-8xl lg:max-w-8xl">
                        <h2 className='text-3xl md:text-4xl font-semibold my-6'>
                            <FormattedMessage id='business.title'/>
                        </h2>
                        <p className='text-lg'>
                            <FormattedMessage id='business.text' />
                        </p>
                        <button
                            className="bg-black  text-white px-8 py-4 rounded-xl hover:bg-black/80 transition-colors my-8"
                        ><FormattedMessage id='business.button'/></button>
                    </div>
            </div>
            <div
                className="my-16 max-w-8xl mx-auto px-6 text-gray-800"
            >
                    <h2 className='text-4xl font-bold my-12 lg:text-5xl max-w-5xl'>
                        <FormattedMessage id='sides.title'/>
                    </h2>
                    <div 
                        className='flex justify-between flex-wrap '
                        data-aos="fade-up"
                        data-aos-duration="500"
                    >
                        <div className="w-full md:w-1/2 border-transparent p:0 md:pr-5">
                            <img
                                src={side1Img}
                                className='w-full'
                            />
                            <h3 className='text-xl my-5'>
                                <FormattedMessage id='side1.title'/>
                            </h3>
                            <p className='text-lg'>
                                <FormattedMessage id='side1.text'/>
                            </p>
                            <div className='flex flex-wrap gap-6 my-5 text-black'>
                                <div
                                    className="group/text-hover relative"
                                >
                                    <a
                                        href="#!"
                                        className="text-lg font-light border border-x-0 border-t-0 border-black/20 py-1"
                                    >
                                        <FormattedMessage id="side1.link1"/>
                                    </a>
                                    <div className="w-full absolute bottom group-hover/text-hover:scale-x-100 bg-black h-px scale-x-0 origin-left transition-all duration-300"></div>
                                </div>
                                <div
                                    className="group/text-hover relative"
                                >
                                    <a
                                        href="#!"
                                        className="text-lg font-light border border-x-0 border-t-0 border-black/20 py-1"
                                    >
                                        <FormattedMessage id="side1.link2"/>
                                    </a>
                                    <div className="w-full absolute bottom group-hover/text-hover:scale-x-100 bg-black h-px scale-x-0 origin-left transition-all duration-300"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 border-transparent p:0 md:pl-5">
                            <img
                                src={side2Img}
                                className='w-full'
                            />
                            <h3 className='text-xl my-5'>
                                <FormattedMessage id='side2.title'/>
                            </h3>
                            <p className='text-lg'>
                                <FormattedMessage id='side2.text'/>
                            </p>
                            <div className='flex my-5'>
                                <div
                                    className="group/text-hover relative w-auto"
                                >
                                    <a
                                        href="#!"
                                        className="text-lg font-light border border-x-0 border-t-0 border-black/20 py-1"
                                    >
                                        <FormattedMessage id="side2.link"/>
                                    </a>
                                    <div className="w-full absolute bottom group-hover/text-hover:scale-x-100 bg-black h-px scale-x-0 origin-left transition-all duration-300"></div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='flex flex-wrap my-20 w-full max-w-8xl mx-auto px-6 text-gray-800'>
                <div 
                    className="w-full md:w-1/2 lg:w-1/3 px-0 md:pr-5"
                    data-aos="fade-up"
                    data-aos-duration="500"
                >
                    <img src={aboutusImg} className='w-8 aspect-square'/>
                    <h3 className='text-xl my-5'>
                        <FormattedMessage id='about-us.title'/>
                    </h3>
                    <p className='my-5'>
                        <FormattedMessage id='about-us.text'/>
                    </p>
                    <div className='flex my-8'>
                        <div
                            className="group/text-hover relative w-auto"
                        >
                            <a
                                href="#!"
                                className="text-lg font-light border border-x-0 border-t-0 border-black/20 py-1"
                            >
                                <FormattedMessage id="about-us.link"/>
                            </a>
                            <div className="w-full absolute bottom group-hover/text-hover:scale-x-100 bg-black h-px scale-x-0 origin-left transition-all duration-300"></div>
                        </div>
                    </div>
                </div>
                <div 
                    className="w-full md:w-1/2 lg:w-1/3 px-0 md:pr-5 md:px-5"
                    data-aos="fade-up"
                    data-aos-duration="500"
                >
                    <img src={newsroomImg} className='w-8 aspect-square'/>
                    <h3 className='text-xl my-5'>
                        <FormattedMessage id='newsroom.title'/>
                    </h3>
                    <p className='my-5'>
                        <FormattedMessage id='newsroom.text'/>
                    </p>
                    <div className='flex my-8'>
                        <div
                            className="group/text-hover relative w-auto"
                        >
                            <a
                                href="#!"
                                className="text-lg font-light border border-x-0 border-t-0 border-black/20 py-1"
                            >
                                <FormattedMessage id="newsroom.link"/>
                            </a>
                            <div className="w-full absolute bottom group-hover/text-hover:scale-x-100 bg-black h-px scale-x-0 origin-left transition-all duration-300"></div>
                        </div>
                    </div>
                </div>
                <div 
                    className="w-full md:w-1/2 lg:w-1/3 px-0 lg:pl-5"
                    data-aos="fade-up"
                    data-aos-duration="500"
                >
                    <img src={globalImg} className='w-8 aspect-square'/>
                    <h3 className='text-xl my-5'>
                        <FormattedMessage id='global-citizenship.title'/>
                    </h3>
                    <p className='my-5'>
                        <FormattedMessage id='global-citizenship.text'/>
                    </p>
                    <div className='flex my-8'>
                        <div
                            className="group/text-hover relative w-auto"
                        >
                            <a
                                href="#!"
                                className="text-lg font-light border border-x-0 border-t-0 border-black/20 py-1"
                            >
                                <FormattedMessage id="global-citizenship.link"/>
                            </a>
                            <div className="w-full absolute bottom group-hover/text-hover:scale-x-100 bg-black h-px scale-x-0 origin-left transition-all duration-300"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='my-20 w-full max-w-8xl mx-auto px-6 text-gray-800'
                // data-aos="fade-up"
                // data-aos-duration="500"
            >
                <h2 className='text-4xl font-bold my-12 lg:text-5xl max-w-5xl'>
                    <FormattedMessage id='apps.title'/>
                </h2>
                <ul className='flex flex-wrap'>
                    <li className='w-full lg:w-1/2 border-l-5 text-3xl font-semibold'>
                        <FormattedMessage id='apps.1' />
                    </li>
                    
                    <li className='w-full lg:w-1/2 border-r-5'>
                        <FormattedMessage id='apps.2' />
                    </li>
                </ul>
            </div>
        </>
    )
}


export default PagePrincipal;