import ScrollTopButton from "./components/scrollTopButton"

interface PagesProps {
    children: React.ReactNode
}
const PagesLayout = ({children}: PagesProps)=>{

    return (

        <div>
           {children}
        </div>
    )
}

export default PagesLayout