import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" />
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
      <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

export default Form;