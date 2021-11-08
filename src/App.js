import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import BookDataContext from "./context/bookContext";
import Books from "./pages/books";
import Home from "./pages/Home";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Book from "./pages/book";

function App() {
  const client = new ApolloClient({
    uri: "https://quidax-feec-graphql.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <BookDataContext>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/books">
              <Books />
            </Route>
            <Route exact path="/books/:id">
              <Book />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </BookDataContext>
    </ApolloProvider>
  );
}

export default App;
