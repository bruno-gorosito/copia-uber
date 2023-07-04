import { FormattedMessage } from "react-intl";



const ArrowBox = ({text}: {text: string}) => {
    return(
        <>
            <li 
                className="border-b-black border border-t-0 border-x-0 px-4 py-16 mt-20 text-4xl font-bold hover:text-gray-500 cursor-pointer flex justify-between items-center"
            >
                <FormattedMessage id={text}/>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="m22.2 12-6.5 9h-3.5l5.5-7.5H2v-3h15.7L12.2 3h3.5l6.5 9Z" fill="currentColor"></path></svg>
            </li>
        </>
    )
}

export default ArrowBox;