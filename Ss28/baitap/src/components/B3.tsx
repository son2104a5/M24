import { useState } from 'react';

const B3 = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', address: '123 Main St, Anytown' },
    { id: 2, name: 'Jane Smith', address: '456 Elm St, Othertown' },
    { id: 3, name: 'Bob Johnson', address: '789 Oak St, Anothertown' }
  ]);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default B3;
