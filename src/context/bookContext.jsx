import { createContext } from "react";

const bookContext = createContext()

const BookDataContext = ({children}) => {
    return <bookContext.Provider value={{}}>
        {children}
    </bookContext.Provider>
}

export default BookDataContext