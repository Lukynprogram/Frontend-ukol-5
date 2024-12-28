'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useUser } from '../../context/UserContext';
import ThemeToggle from '../../lists/components/ThemeToggle';
import LanguageSwitcher from '../../lists/components/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';

const ShoppingListDetail = ({ list }) => {
  const { currentUser } = useUser();
  const { translations } = useLanguage();
  const [currentList, setCurrentList] = useState({ ...list });
  const [filterResolved, setFilterResolved] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', quantity: 1 });
  const [editItem, setEditItem] = useState(null);
  const [newMember, setNewMember] = useState('');
  const [showAddMemberPopup, setShowAddMemberPopup] = useState(false);
  const [error, setError] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [editingName, setEditingName] = useState(false);
  const [editedName, setEditedName] = useState(currentList.name);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAddItemPopup, setShowAddItemPopup] = useState(false);
  const [showEditItemPopup, setShowEditItemPopup] = useState(false);

  const isOwner = currentList.owner === currentUser;
  const isMember = currentList.members.includes(currentUser);
  
  if (!isOwner) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">{translations.permissionsDenied}</h1>
      </div>
    );
  }

  const toggleItemSelection = (itemId) => {
    setSelectedItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const markItemsCompleted = () => {
    setCurrentList((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        selectedItems.includes(item.id) ? { ...item, resolved: true } : item
      ),
    }));
    setSelectedItems([]);
  };

  const deleteSelectedItems = () => {
    setCurrentList((prev) => ({
      ...prev,
      items: prev.items.filter((item) => !selectedItems.includes(item.id)),
    }));
    setSelectedItems([]);
  };

  {error && (
    <div className="text-red-500 mb-4">
      {error}
    </div>
  )}
  
  const addItem = () => {
    if (!newItem.name.trim()) {
      setError('Item name cannot be empty');
      return;
    }
    if (newItem.quantity <= 0) {
      setError('Item quantity must be greater than zero');
      return;
    }
  
    setCurrentList((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        { id: Date.now(), name: newItem.name, quantity: newItem.quantity, resolved: false },
      ],
    }));
    setNewItem({ name: '', quantity: 1 });
    setError(null);
    setShowAddItemPopup(false);
  };
  

  const cancelAddItem = () => {
    setNewItem({ name: '', quantity: 1 });
    setShowAddItemPopup(false);
  };

  const editSelectedItem = () => {
    if (editItem && !editItem.name.trim()) {
      setError('Item name cannot be empty');
      return;
    }
    if (editItem && editItem.quantity <= 0) {
      setError('Item quantity must be greater than zero');
      return;
    }
  
    setCurrentList((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.id === editItem.id
          ? { ...item, name: editItem.name, quantity: editItem.quantity }
          : item
      ),
    }));
    setEditItem(null);
    setError(null);
    setShowEditItemPopup(false);
  };
  

  const cancelEditItem = () => {
    setEditItem(null);
    setShowEditItemPopup(false);
  };

  const editListName = () => {
    if (isOwner && editedName.trim()) {
      setCurrentList((prev) => ({ ...prev, name: editedName }));
      setEditingName(false);
    }
  };

  const leaveList = () => {
    setCurrentList((prev) => ({
      ...prev,
      members: prev.members.filter((member) => member !== currentUser),
    }));
  };

  const addMember = () => {
    if (isOwner && newMember.trim() && !currentList.members.includes(newMember)) {
      setCurrentList((prev) => ({ ...prev, members: [...prev.members, newMember] }));
      setNewMember('');
      setShowAddMemberPopup(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6">
    {/* Header */}
    <div className="flex items-center justify-between w-full">
    <div className="flex items-center gap-2">
      <Link href="/">
        <img
          src="/hack.png"
          alt="Hack Logo"
          className="logo w-12 h-12 object-contain cursor-pointer hover:opacity-75 flex-shrink-0"
        />
      </Link>
      {editingName ? (
        <input
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          className="bg-gray-700 text-white p-2 rounded flex-grow"
        />
      ) : (
        <h1 className="list-name text-2xl font-bold flex-grow">{currentList.name}</h1>
      )}
    </div>
      <div className="flex items-center gap-4">
        {isOwner && (
          <div className="hidden lg:flex gap-2">
            {editingName ? (
              <div className="flex gap-2">
                <button
                  className="flex-1 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
                  onClick={editListName}
                >
                  {translations.saveName}
                </button>
                <button
                  className="flex-1 bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => {
                    setEditedName(currentList.name);
                    setEditingName(false);
                  }}
                >
                  {translations.discardChanges}
                </button>
              </div>
            ) : (
              <button
                className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => setEditingName(true)}
              >
                {translations.editName}
              </button>
            )}
          </div>
        )}
        <div className="flex items-center gap-4 sm:gap-2">
          <ThemeToggle className="mr-2 sm:mr-4" />
          <LanguageSwitcher />
        </div>
      </div>
      <button
        className="burger-menu bg-gray-700 p-2 rounded lg:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white"></span>
      </button>
    </div>

{/* Mobile */}
{showMobileMenu && (
  <div className="lg:hidden mt-6 space-y-4">
    {isOwner && (
      <>
        {editingName ? (
          <div className="flex gap-2">
            <button
              className="flex-1 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
              onClick={editListName}
            >
              {translations.saveName}
            </button>
            <button
              className="flex-1 bg-red-500 px-4 py-2 rounded hover:bg-red-600"
              onClick={() => {
                setEditedName(currentList.name);
                setEditingName(false);
              }}
            >
              {translations.discardChanges}
            </button>
          </div>
        ) : (
          <button
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setEditingName(true)}
          >
            {translations.editName}
          </button>
        )}
      </>
    )}
    {selectedItems.length === 1 && (
      <button
        className="w-full px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        onClick={() => {
          const selectedItem = currentList.items.find((item) => selectedItems.includes(item.id));
          if (selectedItem) {
            setEditItem(selectedItem);
            setShowEditItemPopup(true);
          }
        }}
      >
        {translations.editItem}
      </button>
    )}
    {selectedItems.length > 0 && (
      <>
        <button
          className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={markItemsCompleted}
        >
          {translations.markAsCompleted}
        </button>
        <button
          className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={deleteSelectedItems}
        >
          {translations.deleteItem}
        </button>
        <button
          className="w-full px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={() => setSelectedItems([])}
        >
          {translations.unselectAll}
        </button>
      </>
    )}
  </div>
)}
{showAddItemPopup && (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded shadow-lg text-gray-900">
      <h2 className="text-xl font-bold mb-4">{translations.addItem}</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <input
        type="text"
        placeholder={translations.name}
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        className="block w-full p-2 mb-4 border rounded"
      />
      <input
        type="number"
        placeholder="Quantity"
        value={newItem.quantity}
        onChange={(e) =>
          setNewItem({ ...newItem, quantity: parseInt(e.target.value, 10) })
        }
        className="block w-full p-2 mb-4 border rounded"
      />
      <div className="flex justify-end">
        <button
          className="px-4 py-2 mr-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={cancelAddItem}
        >
          {translations.cancel}
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={addItem}
        >
          {translations.save}
        </button>
      </div>
    </div>
  </div>
)}

{showEditItemPopup && editItem && (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded shadow-lg text-gray-900">
      <h2 className="text-xl font-bold mb-4">Edit Item</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <input
        type="text"
        placeholder="Name"
        value={editItem.name}
        onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
        className="block w-full p-2 mb-4 border rounded"
      />
      <input
        type="number"
        placeholder="Quantity"
        value={editItem.quantity}
        onChange={(e) =>
          setEditItem({ ...editItem, quantity: parseInt(e.target.value, 10) })
        }
        className="block w-full p-2 mb-4 border rounded"
      />
      <div className="flex justify-end">
        <button
          className="px-4 py-2 mr-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={cancelEditItem}
        >
          {translations.cancel}
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={editSelectedItem}
        >
          {translations.save}
        </button>
      </div>
    </div>
  </div>
)}


    {/* Desktop */}
    <div className="hidden lg:flex flex-wrap gap-4 mt-6">
    {selectedItems.length === 1 && (
    <button
      className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
      onClick={() => {
        const selectedItem = currentList.items.find((item) => selectedItems.includes(item.id));
        if (selectedItem) {
          setEditItem(selectedItem);
          setShowEditItemPopup(true);
        }
      }}
    >
      {translations.editItem}
    </button>
  )}
    {selectedItems.length > 0 && (
    <>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={markItemsCompleted}
      >
        {translations.markAsCompleted}
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={deleteSelectedItems}
      >
        {translations.deleteItem}
      </button>
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        onClick={() => setSelectedItems([])}
      >
        {translations.unselectAll}
      </button>
    </>
  )}
    </div>

<div className="mt-6">
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center">
      <h2 className="text-xl font-bold flex items-center">
        {translations.items}
          <button
            className="ml-2 text-white bg-green-500 rounded-full p-2 hover:bg-green-600"
            onClick={() => setShowAddItemPopup(true)}
            aria-label="Add New Item"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
      </h2>
    </div>
    <button
      className={`px-4 py-2 rounded text-white ${
        filterResolved ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-500 hover:bg-gray-600'
      }`}
      onClick={() => setFilterResolved((prev) => !prev)}
    >
      {filterResolved ? translations.showAllItems : translations.showOnlyUnresolved}
    </button>
  </div>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-700">
    <thead>
      <tr className="bg-gray-800 text-white">
        <th className="border border-gray-700 px-1 py-2 w-10 text-center">Select</th>
        <th className="border border-gray-700 px-2 py-2 w-20 text-center">{translations.quantity}</th>
        <th className="border border-gray-700 px-4 py-2">{translations.productName}</th>
        <th className="border border-gray-700 px-1 py-2 w-10 text-center">{translations.resolved}</th>
      </tr>
    </thead>
      <tbody>
        {currentList.items
          .filter((item) => (filterResolved ? !item.resolved : true))
          .map((item) => (
            <tr
              key={item.id}
              className={
                selectedItems.includes(item.id)
                  ? 'bg-blue-200 text-gray-900'
                  : item.resolved
                  ? 'bg-green-100 text-gray-900'
                  : 'bg-gray-100 text-gray-900'
              }
            >
              <td className="border border-gray-700 px-1 py-2 text-center w-10">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => toggleItemSelection(item.id)}
                  className="w-full"
                />
              </td>
              <td className="border border-gray-700 px-2 py-2 text-center w-20">
                {item.quantity || '-'}
              </td>
              <td className="border border-gray-700 px-4 py-2">{item.name}</td>
              <td className="border border-gray-700 px-1 py-2 text-center w-10">
                {item.resolved ? '✔️' : ''}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
</div>

<div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6"><div className="mt-6">
<div className="flex items-center justify-between mb-4">
  <div className="flex items-center">
    <h2 className="text-xl font-bold flex items-center">
      {translations.members}
      {isOwner && (
        <button
          className="ml-2 text-white bg-green-500 rounded-full p-2 hover:bg-green-600"
          onClick={() => setShowAddMemberPopup(true)}
          aria-label="Add New Member"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </h2>
  </div>
  {!isOwner && (
    <button
      className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      onClick={leaveList}
    >
      {translations.leavelist}
    </button>
  )}
</div>

  <div className="mt-4 overflow-x-auto">
    <table className="w-full border-collapse border border-gray-700 text-sm">
      <thead>
        <tr className="bg-gray-800 text-white">
          <th className="border border-gray-700 px-4 py-2 text-left">{translations.name}</th>
          <th className="border border-gray-700 px-4 py-2 text-left">{translations.role}</th>
          {isOwner && (
            <th className="border border-gray-700 px-4 py-2 text-left">{translations.actions}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {currentList.members.map((member) => (
          <tr key={member} className="bg-gray-100 text-gray-900">
            <td className="border border-gray-700 px-4 py-2">{member}</td>
            <td className="border border-gray-700 px-4 py-2">
              {member === currentList.owner ? translations.owner : translations.member}
            </td>
            {isOwner && (
              <td className="border border-gray-700 px-4 py-2">
                {member === currentList.owner ? (
                  <span className="text-sm text-gray-500">{translations.ownerdelete}</span>
                ) : (
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() =>
                      setCurrentList((prev) => ({
                        ...prev,
                        members: prev.members.filter((m) => m !== member),
                      }))
                    }
                  >
                    Remove
                  </button>
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


      {showAddMemberPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg text-gray-900">
            <h2 className="text-xl font-bold mb-4">{translations.addNewMember}</h2>
            <input
              type="text"
              placeholder={translations.membername}
              value={newMember}
              onChange={(e) => setNewMember(e.target.value)}
              className="block w-full p-2 mb-4 border rounded"
            />
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mr-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={() => setShowAddMemberPopup(false)}
              >
                {translations.cancel}
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={addMember}
              >
                {translations.save}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

{isOwner && (
  <div className="mt-6">
    <button
      className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
      onClick={() => setShowAddItemPopup(true)}
    >
      {translations.addNewMember}
    </button>
  </div>
)}

    </div>
  );
};

export default ShoppingListDetail;