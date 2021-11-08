import { gql } from "@apollo/client";

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
`;

export const GET_BOOK = gql`
  query Book($id: ID!) {
    book(id: $id) {
      id
      title
      subtitle
      image_url
      price
      rating
      full_description
      authors {
        name
      }
      genres {
      name
    }
    }
  }
`;
