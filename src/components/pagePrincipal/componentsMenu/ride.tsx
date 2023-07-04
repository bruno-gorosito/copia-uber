import { FormattedMessage, useIntl } from "react-intl"
import styles from '../../styles/opcionesMenu.module.css'
import imgRide from '../../../assets/viaje.webp'


const Ride = () => {
    return (
        <div
            className='p-8 lg:p-16 pr-20 text-lg'
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
            data-aos-duration="300"

        >
            <h1 className={`${styles.title} md:!text-5xl lg:!text-6xl`}>
                <FormattedMessage id="ride.title"/>
            </h1>
        
            <div className="relative my-6">
                <input 
                    className="w-full h-14 rounded bg-gray-300/20 px-14 outline-none text-lg my-2"
                    placeholder={useIntl().formatMessage({id: "ride.location"})}
                />
                <input 
                    className="w-full h-14 rounded bg-gray-300/20 px-14 outline-none text-lg"
                    placeholder={useIntl().formatMessage({id: "ride.destination"})}
                />
                <div className="absolute top-8 left-5">
                    <div
                        className="absolute top-0 h-2.5 aspect-square border-black border rounded-full"
                    ></div>
                    <div
                        className="w-px h-12 bg-black my-3 mx-1"
                    ></div>
                    <div
                        className="h-2.5 -my-2 aspect-square border-black border "
                    ></div>
                </div>
            </div>
            <div
                    className="flex flex-wrap items-center gap-4 mt-16"
                >
                    <button
                        className="bg-black  text-white px-8 py-4 rounded-lg hover:bg-black/80 transition-colors w-full md:w-auto"
                    ><FormattedMessage id="ride.button1"/></button>
                    <button
                        className="bg-gray-400/20 px-8 py-4 rounded-lg hover:bg-gray-400/40 transition-colors w-full md:w-auto"
                    ><FormattedMessage id="ride.button2"/></button>
                </div>
        </div>
    )
}

export default Ride


export const ImgRide = () => {
    return (
        <>
            <img 
                src={imgRide} 
                className={`${styles.imgPrincipal} w-full object-cover`}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
            />
        </>
    )
}