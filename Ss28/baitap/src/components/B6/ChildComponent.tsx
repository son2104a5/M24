import React from 'react';

interface User {
  id: number;
  name: string;
  address: string;
  email: string;
}

const ChildComponent = ({ users }: { users: User[] }) => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            id: {user.id}  - Tên: <strong>{user.name}</strong> - Địa chỉ: {user.address} - Email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildComponent;