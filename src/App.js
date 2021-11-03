import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import BookDataContext from "./context/bookContext";
import Books from "./pages/books";
import Home from "./pages/Home";

function App() {
  return (
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
      </Switch>
      <Footer />
    </Router>
    </BookDataContext>
  );
}

export default App;
