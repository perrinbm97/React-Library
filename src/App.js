import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React, { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id ? { ...item, quantity: +quantity } : item,
      ),
    );
  }

  function removeItem(item) {
    setCart(cart.filter((book) => book.id !== item.id));
  }

  function countCart() {
    let counter = 0;
    cart.forEach((book) => {
      counter += book.quantity;
    });
    return counter;
  }

  useEffect(() => {
    // console.log(cart);
  }, [cart]);

  // //Add Book object to Cart Array, but merge duplicates
  // function addToCart(book) {
  //   const dupeItem = cart.find((item) => item.id === book.id);

  //   //Look for duplicate book additions
  //   if (dupeItem) {
  //     setCart(
  //       //Look over every book in the array
  //       cart.map((item) => {
  //         //If book matches IDs, just add 1 to quantity
  //         if (item.id === dupeItem.id) {
  //           return { ...item, quantity: item.quantity + 1 };
  //         }
  //         //If book does not match IDs, return to array as normal
  //         else {
  //           return item;
  //         }
  //       }),
  //     );
  //   }
  //   //If no dupes exist yet, just add to array with a quantity of 1
  //   else {
  //     setCart([...cart, { ...book, quantity: 1 }]);
  //   }
  // }

  return (
    <Router>
      <div className="App">
        <Nav countCart={countCart()} />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo books={books} addToCart={addToCart} cart={cart} />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart
              books={books}
              cart={cart}
              changeQuantity={changeQuantity}
              removeItem={removeItem}
            />
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
