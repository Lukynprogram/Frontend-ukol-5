'use client';

import Link from 'next/link';
import { useUser } from '../../context/UserContext';

const ListTile = ({ list, onDelete, onArchive }) => {
  const { currentUser } = useUser();
  const isOwner = currentUser === list.owner;

  const handleDelete = () => {
    if (confirm(`Are you sure you want to delete the list "${list.name}"?`)) {
      onDelete(list.id);
    }
  };

  const handleArchive = () => {
    if (confirm(`Are you sure you want to ${list.archived ? 'unarchive' : 'archive'} the list "${list.name}"?`)) {
      onArchive(list.id);
    }
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded shadow-lg flex flex-col hover:shadow-2xl transition-shadow">
      <h3 className="text-lg font-bold mb-2">
        <Link href={`/lists/${list.id}`} className="hover:underline">
          {list.name}
        </Link>
      </h3>
      <p>Owner: {list.owner}</p>
      <p>Members: {list.members.join(', ')}</p>
      <p className={`mt-2 text-sm font-semibold ${list.archived ? 'text-red-500' : 'text-green-500'}`}>
        {list.archived ? 'Archived' : 'Active'}
      </p>
      <div className="flex justify-center mt-4 gap-4">
        <button
          className={`flex-1 px-4 py-2 rounded ${isOwner ? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
          onClick={isOwner ? handleArchive : null}
          disabled={!isOwner}
        >
          {list.archived ? 'Unarchive' : 'Archive'}
        </button>
        <button
          className={`flex-1 px-4 py-2 rounded ${isOwner ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
          onClick={isOwner ? handleDelete : null}
          disabled={!isOwner}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListTile;
