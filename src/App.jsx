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
}*/

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