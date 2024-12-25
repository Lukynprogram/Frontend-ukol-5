'use client';

import { useState, useEffect } from 'react';
import ShoppingListDetail from './ShoppingListDetail';
import { shoppingLists } from '../../mockData';

export default function ListDetailPage({ params }) {
  const [list, setList] = useState(null);

  useEffect(() => {
    const loadList = async () => {
      const resolvedParams = await params;
      const { id } = resolvedParams;
      const existingList = shoppingLists[id];

      if (existingList) {
        setList(existingList);
      } else {
        console.error(`List with ID ${id} not found.`);
      }
    };

    loadList();
  }, [params]);

  if (!list) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">List Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      <ShoppingListDetail list={list} />
    </div>
  );
}