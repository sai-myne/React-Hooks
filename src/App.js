import React, { useState } from 'react';
import Form from './components/Form';
import NewestPerson from './components/NewestPerson';
import People from './components/People';

function App() {
  const [people, setPeople] = useState([
    {
      firstName: 'John',
      lastName: 'Doe'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe'
    }
  ]);
  const addPerson = (person) => {
    setPeople([...people, person]);
  }
  
  return (
    <div className="container mt-4">
      <div className="row">
        <Form addPerson={addPerson} />
        <People people={people} />
        <NewestPerson newestPerson={people[people.length-1]} />
      </div>
    </div>
  );
}

export default App;
