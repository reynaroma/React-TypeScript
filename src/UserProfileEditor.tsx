import React, { useState } from 'react';

interface User {
  name: string;
  email: string;
}

interface Props {
  user: User;
  onUpdate: (user: User) => void;
}

export default function UserProfileEditor({ user, onUpdate }: Props) {

  const [name, setName] = useState<string>(user.name);
  const [email, setEmail] = useState<string>(user.email);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onUpdate({
      ...user,
      name: name,
      email: email,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type='text'
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type='email'
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
      </div>
      <button type='submit'>Update Profile</button>
    </form>
  )
}
