import React from "react";

const List = ({ people }) => {
  return (
    <>
      {/* Ez legyen ul */}
      {people.map((person) => {
        const { id, name, age, image } = person;

        // Külön komponensbe az elemeket
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
