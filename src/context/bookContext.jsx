import { createContext } from "react";
import { useQuery } from '@apollo/client'
import { GET_BOOKS } from "../queries/booksQueries";

export const bookContext = createContext()

const BookDataContext = ({children}) => {

    const {data: books} = useQuery(GET_BOOKS)

    return <bookContext.Provider value={{books}}>
        {children}
    </bookContext.Provider>
}

export default BookDataContext