import { useState } from "react";

import TextField from "@mui/material/TextField";
import ManList from "./ShopList";
import DUMMY_ObjectChild from "../shop/ChildrenFashion";

import classes from "./Category.module.css";

function Child() {
  const [category, setCategory] = useState("all");
  const [inputText, setInputText] = useState("");
  const categories = [
    "all",
    ...new Set(DUMMY_ObjectChild.map(({ category }) => category)),
  ];

  const selectedCategory = DUMMY_ObjectChild.filter((item) => {
    if (category === "all" || category === item.category) {
      return inputText ? item.title.toLowerCase().includes(inputText) : item;
    }
    return null;
  });
  let inputHandler = (e) => {
    //convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <section>
      <h1 className={classes.title}>Children's Store</h1>
      <div className={classes.kontener}>
        <div className={classes.search}>
          <TextField onChange={inputHandler} label="Search Products..." />
        </div>
        {categories.map((category) => (
          <button key={category} onClick={() => setCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      <ManList fashion={selectedCategory} />
    </section>
  );
}

export default Child;
