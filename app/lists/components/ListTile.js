'use client';

import Link from 'next/link';
import { useUser } from '../../context/UserContext';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const ListTile = ({ list, onDelete, onArchive }) => {
  const { currentUser } = useUser();
  const isOwner = currentUser === list.owner;
  const { translations } = useLanguage();

  const handleDelete = () => {
    if (confirm(`${translations.sure} ${translations.deletelist} "${list.name}"?`)) {
      onDelete(list.id);
    }
  };

  const handleArchive = () => {
    if (confirm(`${translations.sure} ${list.archived ? translations.unarchive : translations.archive} list "${list.name}"?`)) {
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
      <p>{translations.owner}: {list.owner}</p>
      <p>{translations.member}: {list.members.join(', ')}</p>
      <p className={`mt-2 text-sm font-semibold ${list.archived ? 'text-red-500' : 'text-green-500'}`}>
        {list.archived ? translations.archived : translations.active}
      </p>
      <div className="flex justify-center mt-4 gap-4">
        <button
          className={`flex-1 px-4 py-2 rounded ${isOwner ? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
          onClick={isOwner ? handleArchive : null}
          disabled={!isOwner}
        >
          {list.archived ? translations.unarchive : translations.archive}
        </button>
        <button
          className={`flex-1 px-4 py-2 rounded ${isOwner ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
          onClick={isOwner ? handleDelete : null}
          disabled={!isOwner}
        >
          {translations.delete}
        </button>
      </div>
    </div>
  );
};

export default ListTile;
