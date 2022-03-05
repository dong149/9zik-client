import React, { useState } from 'react';

function WriteProjectForm() {
  const [name, setName] = useState('');

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    // Do something
    alert(name);
  };

  return (
    <div className="container">
      <form onSubmit={submitForm}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="프로젝트명을 입력하세요"
          className="input"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
