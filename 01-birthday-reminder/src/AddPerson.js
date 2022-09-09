import React from "react";

const AddPerson = () => {
  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="form-control">
        <label htmlFor="birthday">Name</label>
        <input type="date" name="birthday" id="birthday" />
      </div>
      <div className="form-control">
        <label htmlFor="img">Name</label>
        <input type="text" name="img" id="img" />
      </div>
      <button type="submit">Add Birthday</button>
    </form>
  );
};

export default AddPerson;
