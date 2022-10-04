import { useState } from "react";
import { AddCategory } from "./components/AddCategory.jsx";
import { GifGrid } from "./components/GifGrid.jsx";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return; // para no incluir categorias repetidas

    setCategories( [newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />

      {
      categories.map((category) => (
        <GifGrid 
        key={category} 
        category = {category}
        />
      ))
      }


    </>
  );
};
