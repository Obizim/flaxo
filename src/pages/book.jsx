import { useParams } from "react-router"

const Book = () => {
    const {name} = useParams()
    return <div> 
        {name}
    </div>
}

export default Book