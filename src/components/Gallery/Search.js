import React, { useState } from "react";
import Scroll from "./Scroll";
import SearchList from "./SearchList";
import "./SearchStyles.css";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter((person) => {
    return (
      person.eventName.toLowerCase().includes(searchField.toLowerCase()) ||
      person.name1.toLowerCase().includes(searchField.toLowerCase()) ||
      person.name2.toLowerCase().includes(searchField.toLowerCase()) ||
      person.name3.toLowerCase().includes(searchField.toLowerCase()) ||
      person.name4.toLowerCase().includes(searchField.toLowerCase()) ||
      person.name5.toLowerCase().includes(searchField.toLowerCase()) ||
      person.name6.toLowerCase().includes(searchField.toLowerCase()) ||
      person.name7.toLowerCase().includes(searchField.toLowerCase()) ||
      person.name8.toLowerCase().includes(searchField.toLowerCase()) ||
      person.name9.toLowerCase().includes(searchField.toLowerCase()) ||
      person.name10.toLowerCase().includes(searchField.toLowerCase()) ||
      person.name11.toLowerCase().includes(searchField.toLowerCase()) ||
      person.name12.toLowerCase().includes(searchField.toLowerCase()) ||
      person.name13.toLowerCase().includes(searchField.toLowerCase()) ||
      person.name14.toLowerCase().includes(searchField.toLowerCase()) ||
      person.name15.toLowerCase().includes(searchField.toLowerCase()) ||
      person.name16.toLowerCase().includes(searchField.toLowerCase()) ||
      person.name17.toLowerCase().includes(searchField.toLowerCase())
    );
  }); 

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredPersons={filteredPersons} />
      </Scroll>
    );
  }

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleChange(event);
    }
  };
const handleSubmit = (event) => {
  event.preventDefault();
};

const [inputFocus, setInputFocus] = useState(false);
const [showPlaceholder, setShowPlaceholder] = useState(false);

const handleFocus = () => {
  setInputFocus(true);
  setTimeout(() => {
    setShowPlaceholder(true);
  }, 300);
};

const handleBlur = () => {
  setShowPlaceholder(false);
  setInputFocus(false);
};



  return (
    <section>
      <form className="TheForm bouncy " onSubmit={handleSubmit}>
        <input
          className="TheInput  mt-3"
          pattern=".*\S.*"
          type="search"
          required
          id="search"
          onChange={handleChange}
          onKeyUp={handleKeyPress}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={
            showPlaceholder ? "Try 'Aviel' or 'Jeremiah' or 'Meya'" : ""
          }
          style={{ padding: "1" }}
        />
        <span className="caret mb-3"></span>
      </form>
      {searchList()}
    </section>
  );
}

export default Search;
