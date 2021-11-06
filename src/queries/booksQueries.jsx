import {gql} from '@apollo/client'

export const GET_BOOKS = gql`
    query All_Books {
    books {
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