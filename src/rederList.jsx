/*const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'matemática',
    accomplishment: 'los cálculos de vuelos espaciales',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'químico',
    accomplishment: 'el descubrimiento del agujero de ozono en el Ártico',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'físico',
    accomplishment: 'la teoría del electromagnetismo',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'químico',
    accomplishment: 'ser pionero en el uso de cortisona, esteroides y píldoras anticonceptivas',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrofísico',
    accomplishment: 'los cálculos de masa de estrellas enanas blancas',
    imageId: 'lrWQx8l'
  }];
  function getImageUrl(person) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }
export default function List() {
    const chemists = people.filter(person =>
        person.profession == 'químico'
      );
    const cientifico = chemists.map(person =>
        <li key={person.id}>
        <img
            src={getImageUrl(person)}
            alt={person.name}
        />
        <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            conocido/a por {person.accomplishment}
        </p>
        </li>
    );
    
    const noChemists = people.filter(person =>
        person.profession != 'químico'
      );
    const noCientifico = noChemists.map(person =>
        <li key={person.id}>
        <img
            src={getImageUrl(person)}
            alt={person.name}
        />
        <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            conocido/a por {person.accomplishment}
        </p>
        </li>
    );

return (
    <article>
    <h1>Científicos</h1>
    <ul>{cientifico}</ul>
    <h2>No Científicos</h2>
    <ul>{noCientifico}</ul>
    </article>
);
}

const recipes = [{
    id: 'greek-salad',
    name: 'Ensalada griega',
    ingredients: ['tomates', 'pepino', 'cebolla', 'aceitunas', 'queso feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Pizza hawaiana',
    ingredients: ['masa de pizza', 'salsa de pizza', 'mozzarella', 'jamón', 'piña']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['garbanzos', 'aceite de oliva', 'dientes de ajo', 'limón', 'tahini']
  }];


export default function RecipeList() {
    return (
        <div>
            <h1>Recetas</h1>
            {recipes.map(recipe =>
            <div key={recipe.id}>
                <h2>{recipe.name}</h2>
                <ul>
                {recipe.ingredients.map(ingredient =>
                    <li key={ingredient}>
                    {ingredient}
                    </li>
                )}
                </ul>
            </div>
            )}
        </div>
  

      
    );
  }


  const recipes = [{
    id: 'greek-salad',
    name: 'Ensalada griega',
    ingredients: ['tomates', 'pepino', 'cebolla', 'aceitunas', 'queso feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Pizza hawaiana',
    ingredients: ['masa de pizza', 'salsa de pizza', 'mozzarella', 'jamón', 'piña']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['garbanzos', 'aceite de oliva', 'dientes de ajo', 'limón', 'tahini']
  }];

function Recipe({name,ingredients,id}){
    return (
        <div key={id}>
                <h2>{name}</h2>
                <ul>
                {ingredients.map(ingredient =>
                    <li key={ingredient}>
                    {ingredient}
                    </li>
                )}
                </ul>
            </div>
    );
}

export default function RecipeList() {
    return (
        <div>
            <h1>Recetas</h1>
            {recipes.map(recipe =>
                <Recipe key={recipe.id} id={recipe.id} name={recipe.name} ingredients={recipe.ingredients}></Recipe>
            )}
        </div>   
    );
  }*/

import React, { Fragment } from 'react';


const poem = {
lines: [
    'Escribo, borro y reescribo',
    'Borro de nuevo, y luego',
    'Florece una amapola.'
]
};

export default function Poem() {
return (
    <article>
    {poem.lines.map((line, index) =>
        <Fragment key={index}>
            <p>
                {line}
            </p>
            {poem.lines[index+1] && <hr></hr>}
        </Fragment>
    )}
    </article>
);
}