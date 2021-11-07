import {gql} from '@apollo/client'

export const GET_BOOKS = gql`
    query All_Books {
    books {
        id
        title
        image_url
        featured
        price
        authors {
        name
        }
        rating
    }
    }
`