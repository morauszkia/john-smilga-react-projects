import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

import data from "./data";

import AddPerson from "./AddPerson";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const [showForm, setShowForm] = useState(false);

  return (
    <main>
      <section className="container">
        {/* Külön komponensbe */}
        <header>
          <h3>{people.length} birthdays in the list</h3>
          <button onClick={() => setShowForm(!showForm)}>
            {showForm ? <FaTimes /> : <FaPlus />}
          </button>
        </header>
        {showForm && <AddPerson />}
        <List people={people} />
      </section>
    </main>
  );
}

export default App;
