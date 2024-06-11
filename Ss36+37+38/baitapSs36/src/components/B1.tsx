import React, { useState } from 'react'

export default function B1() {
  const [title, setTitle] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  document.title = title;
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={handleInputChange}
      />
    </div>
  )
}
