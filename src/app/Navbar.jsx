import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/quote/quoteSlice";

export const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.quote.darkMode);

  return (
    <nav className={`navBar ${theme}`}>
      <section>
        <h1>Stock Quotes</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Search</Link>
            <Link to="/favorites/">Favorites</Link>
          </div>
          <div className="dark-mode-toggle">
      <Form>
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            label="Dark mode"
            onClick={() => dispatch(toggleTheme())}
          />
        </Form>
      </div>
        </div>
      </section>
    </nav>
  );
};
