'use client';

import { useState } from 'react';
import ShoppingListGrid from './lists/components/ShoppingListGrid';
import AddListModal from './lists/components/AddListModal';
import { shoppingLists, addNewList } from './mockData';
import ThemeToggle from './lists/components/ThemeToggle';
import { useLanguage } from './context/LanguageContext';
import LanguageSwitcher from './lists/components/LanguageSwitcher';

const ListsPage = () => {
  const [lists, setLists] = useState(Object.values(shoppingLists));
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { translations } = useLanguage();

  const handleAddList = async (newList) => {
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500)); // Fake delay
      addNewList(newList);
      setLists(Object.values(shoppingLists));
    } catch (err) {
      setError('Failed to add list');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteList = async (id) => {
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500)); // Fake delay
      delete shoppingLists[id];
      setLists(Object.values(shoppingLists));
    } catch (err) {
      setError('Failed to delete list');
    } finally {
      setLoading(false);
    }
  };

  const handleArchiveList = async (id) => {
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500)); // Fake delay
      shoppingLists[id].archived = !shoppingLists[id].archived;
      setLists(Object.values(shoppingLists));
    } catch (err) {
      setError('Failed to archive list');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-2">
        <h1 className="text-2xl font-bold">{translations.shoppingLists}</h1>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setIsAddModalOpen(true)}
          >
            {translations.addNewList}
          </button>
          <button
            className={`px-4 py-2 rounded text-white ${
              showAll
                ? 'bg-blue-500 hover:bg-blue-600'
                : 'bg-gray-500 hover:bg-gray-600'
            }`}
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? translations.hideArchived : translations.showAll}
          </button>
        </div>
      </div>

      {loading && <div className="text-center text-gray-500">Loading...</div>}

      {error && <div className="text-center text-red-500 mb-4">{error}</div>}

      <ShoppingListGrid
        lists={lists.filter((list) => showAll || !list.archived)}
        onDelete={handleDeleteList}
        onArchive={handleArchiveList}
        showAll={showAll}
      />
      <AddListModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddList}
      />
    </div>
  );
};

export default ListsPage;