'use client';

import { useState } from 'react';
import { useUser } from '../../context/UserContext';

const AddListModal = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const { currentUser } = useUser();

  const handleAdd = () => {
    if (name.trim()) {
      const newList = {
        id: Date.now(),
        name,
        owner: currentUser,
        members: [],
        archived: false,
        items: [],
      };
      console.log('Creating new list:', newList);
      onAdd(newList);
      setName('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg text-gray-900 dark:bg-gray-800 dark:text-white w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Add New Shopping List</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="List Name"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:focus:ring-blue-400"
        />
        <div className="flex justify-center gap-4">
          <button
            className="flex-1 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddListModal;
