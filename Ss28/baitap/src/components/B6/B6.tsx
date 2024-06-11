import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const users = [
    { id: 1, name: 'John Doe', address: '123 Main St', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', address: '456 Elm St', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', address: '789 Oak St', email: 'bob@example.com' }
  ];

  return (
    <div>
      <h2>Thông tin users:</h2>
      <ChildComponent users={users} />
    </div>
  );
};

export default ParentComponent;
