'use client';

import ListTile from './ListTile';

const ShoppingListGrid = ({ lists, onDelete, onArchive, showAll }) => {
  const filteredLists = showAll ? lists : lists.filter((list) => !list.archived);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredLists.map((list) => (
        <ListTile key={list.id} list={list} onDelete={onDelete} onArchive={onArchive} />
      ))}
    </div>
  );
};

export default ShoppingListGrid;