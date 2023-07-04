import { FormattedMessage } from "react-intl"
import styles from '../../styles/opcionesMenu.module.css'
import imgConduce from '../../../assets/conduce.webp'

const Drive = () => {
    return (
        <div 
            className='p-8 lg:p-16 pr-20 text-lg'
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="0"
            data-aos-duration="300"
        >
            <h1 
                className={`${styles.title} md:!text-5xl lg:!text-6xl mb-6`}
            >
                <FormattedMessage id="conduce.title"/>
            </h1>
            <p 
                className="text-lg font-light my-6"
            >
                <FormattedMessage id="conduce.text"/>
            </p>
            <div
                className="flex flex-wrap items-center  gap-4 gap-x-6"
            >
                <button
                    className="bg-black lg: text-white px-8 py-4 rounded-xl hover:bg-black/80 transition-colors lg:mr-60 lg:my-4"
                ><FormattedMessage id="conduce.button"/></button>
                <div
                    className="group/text-hover relative"
                >
                    <a
                        href="#!"
                        className="text-lg font-light border border-x-0 border-t-0 border-black/20 py-1"
                    >
                        <FormattedMessage id="conduce.link"/>
                    </a>
                    <div className="w-full absolute bottom group-hover/text-hover:scale-x-100 bg-black h-px scale-x-0 origin-left transition-all duration-300"></div>
                </div>
            </div>
        </div>
    )
}

export default Drive



export const ImgDrive = () => {
    return (
        <>
            <img
                src={imgConduce} 
                className={`${styles.imgPrincipal} w-full object-cover`}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300" />
        </>
    )
}