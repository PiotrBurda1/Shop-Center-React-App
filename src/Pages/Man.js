import { useState } from "react";

import ManList from "./ShopList";
import DUMMY_Object from "../shop/ManFashion";
import TextField from "@mui/material/TextField";
import classes from "./Category.module.css";


function Man() {
  const [category, setCategory] = useState("All");
  const [inputText, setInputText] = useState("");
  const categories = [
    "All",
    ...new Set(DUMMY_Object.map(({ category }) => category)),
  ];

  const selectedCategory = DUMMY_Object.filter((item) => {
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
      <h1 className={classes.title}>Men's Store</h1>
      <div className={classes.kontener}>
        <div className={classes.search}>
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            label="Search Products..."
            variant="outlined"
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

export default Man;
