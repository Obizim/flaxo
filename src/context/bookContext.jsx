import { createContext } from "react";
import { useQuery } from '@apollo/client'
import { GET_BOOKS } from "../queries/booksQueries";

export const bookContext = createContext()

const BookDataContext = ({children}) => {

    const {data: books, loading} = useQuery(GET_BOOKS)

    return <bookContext.Provider value={{books, loading}}>
        {children}
    </bookContext.Provider>
}

export default BookDataContext