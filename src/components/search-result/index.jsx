import { NavLink } from 'react-router-dom'
import './search.scss'

const SearchResult = ({searchedBooks, modalFunc, modal}) => {
    const onClick = () => {
        modalFunc(!modal)
        document.body.style.overflow = "unset";
    }   
    
    return <>
    {searchedBooks.map((s) => (
        <NavLink to={`/books/${s.id}`} className="search-result" onClick={onClick}>
        <h2><span>{s.title} <span className="by">by</span></span>
        <span className="authors">
            {s.authors.map((author, idx) => (
              <p key={idx}>
                {author.name}
                {idx < s.authors.length - 1 ? ",\u00A0" : ""}
              </p>
            ))}
          </span>
          </h2>
    </NavLink>
    ))}
    
    </>
}

export default SearchResult