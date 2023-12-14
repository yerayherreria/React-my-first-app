/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      { <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> }
      <h1>Hola mundo</h1>
    </>
  )
}

export default App


const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  },
  img: "https://i.imgur.com/7vQD0fPs.jpg"
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={person.img}
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
  backgroundColor: 'black',
  color: 'pink'
}
};

export default function TodoList() {
return (
<div style={person.theme}>
  <h1>{person.name}'s Todos</h1>
  <img
    className="avatar"
    src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`}
    alt={person.name}
  />
  <ul>
    <li>Improve the videophone</li>
    <li>Prepare aeronautics lectures</li>
    <li>Work on the alcohol-fuelled engine</li>
  </ul>
</div>
);
}
import { getImageUrl } from './utils.jsx';

function Profile({person,size}) {
  return (
    <>
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(person.imageId)}
        alt={person.name}
        width={size}
        height={size}
        />

      <ul>
          <li>
            <b>Profesión: </b> 
            {person.element[0]}
          </li>
          <li>
            <b>Reconocimientos: </b> 
            {person.element[1]}
          </li>
          <li>
            <b>Descubrió: </b>
            {person.element[2]}
          </li>
        </ul>
    </>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      <section className="profile">
        <Profile
          size={70}
          person={{ 
            name: 'Maria Skłodowska-Curie', 
            imageId: 'szV5sdG',
            element: ["física y química"," Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci","polonio (elemento químico)"]
          }}
        />
        
      </section>
      <section className="profile">
        <Profile
          size={70}
          person={{ 
            name: 'Katsuko Saruhashi', 
            imageId: 'YfeOqp2',
            element: ["geoquímica","Premio Miyake de geoquímica, Premio Tanaka","un método para medir dióxido de carbono en agua de mar"]
          }}
        />
      </section>
    </div>
  );
}

import { getImageUrl } from './utils.jsx';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, size < 90 ? 's' : 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile({size}) {
  return (
    <Avatar
      size={size}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? '✔' : '❌'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Lista de Empaque de Sally Ride</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Traje espacial" 
        />
        <Item 
          isPacked={true} 
          name="Casco con hoja dorada" 
        />
        <Item 
          isPacked={false} 
          name="Foto de Tam" 
        />
      </ul>
    </section>
  );
}

function Item({ name, importance }) {
  return (
    <li className="item">
      {name} {importance>0 && <em>(Importancia: {importance})</em>}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Lista de Empaque de Sally Ride</h1>
      <ul>
        <Item 
          importance={9} 
          name="Traje espacial" 
        />
        <Item 
          importance={0} 
          name="Casco con hoja dorada" 
        />
        <Item 
          importance={6} 
          name="Foto de Tam" 
        />
      </ul>
    </section>
  );
}

function Drink({ name }) {
  let partOfPlant, caffeineContent, age;
  name==="tea"?(partOfPlant = 'hoja') && (caffeineContent = '15–70 mg/taza') && (age = '4,000+ años'):(partOfPlant = 'grano') && (caffeineContent = '80–185 mg/taza') && (age = '1,000+ años');


  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Parte de la planta</dt>
        <dd>{partOfPlant}</dd>
        <dt>Contenido de cafeína</dt>
        <dd>{caffeineContent}</dd>
        <dt>Edad</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}*/

let minion = [
  {
    name: "Kevin",
    bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
    img: "assets/img/kevin.jpg",
    birth: "1951",
    side:"de los buenos"
  },
  {
    name: "Josua",
    bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
    img: "assets/img/Josua.jpg",
    birth: "1672",
    side:"malvado"
  },
  {
    name: "Dave",
    bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
    img: "assets/img/dave.jpg",
    birth: "1723",
    side: "de los buenos"
  },
  {
    name: "Mudito",
    bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
    img: "assets/img/mudito.jpeg",
    birth: "1379",
    side:"de los buenos"
  },
  {
    name: "Llongueras",
    bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
    img: "assets/img/llongueras.jpg",
    birth: "1687",
    side: "malvado"
  },
  {
    name: "Minioncé",
    bio: "Le va el cante, dar la nota, ama los karaokes, es el rey y reina de la fiesta. Invítalo a tu fiesta o te arrepentirás.",
    img: "assets/img/minionce.jpg",
    birth: "1976",
    side: "de los buenos"
  },
  {
    name: "Lobeznion",
    bio: "No lo enfades, este bichillo tiene muy malas pulgas...aunque sólo mide medio metro y ¡no puede ser más gracioso!",
    img: "assets/img/lobeznion.jpg",
    birth: "2017",
    side: "malvado"
  },
  {
    name: "Minion Presley",
    bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
    img: "assets/img/minion-presley.jpg",
    birth: "2017",
    side: "malvado"
  }
];
minion.forEach(minion => {
  /*<div class="card" style="width: 10rem;">
            <img src={{minion.img}} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{minion.name}}</h5>
              <p class="card-text">{{minion.bio}}</p>
              <p class="card-text">{{minion.birth}}</p>
            </div>
        </div>*/
});