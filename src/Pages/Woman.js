import { useState } from "react";

import classes from "./Category.module.css";
import TextField from "@mui/material/TextField";
import ManList from "./ShopList";
import WomanFashion from "../shop/WomanFashion";



function Woman() {
  const [category, setCategory] = useState("All");
  const [inputText, setInputText] = useState("");

  const categories = [
    "All",
    ...new Set(WomanFashion.map(({ category }) => category)),
  ];

  const selectedCategory = WomanFashion.filter((item) => {
    if (category === "All" || category === item.category) {
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
      <h1 className={classes.title}>Women's Store</h1>
      <div className={classes.kontener}>
          <div className={classes.search}>
            <TextField
              onChange={inputHandler}
              label="Search Products..."
            />
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

export default Woman;
