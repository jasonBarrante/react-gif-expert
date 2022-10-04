import { useState } from "react";

export const AddCategory = (props) => {
  const [inputValue, setInputValue] = useState('');


  const onSubmit = (event) => {
    event.preventDefault();   // para que no se haga un refresh del navegador web
    if (inputValue.trim().length < 1  ) return  //The trim() method removes whitespace from both ends of a string and returns a new string

    //props.AddCategory((categories) => [...categories, inputValue]); // al tener la funcion setCaterogies puede tene el categories por su callback
    props.onNewCategory(inputValue.trim()); 
    setInputValue(''); // TODO entender porque no funciona y xq deberia de funcionar
}
 
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        onChange={(event) => setInputValue(event.target.value)}
        value = {inputValue}
      />
    </form>
  );
};
