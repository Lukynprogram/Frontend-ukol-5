export const shoppingLists = {
    '1': {
      id: '1',
      name: 'Groceries',
      owner: 'Lukas Jonak',
      members: ['Lukas Jonak'],
      archived: false,
      items: [
        { id: 1, name: 'Milk', resolved: false, quantity: 2 },
        { id: 2, name: 'Bread', resolved: false, quantity: 1 },
      ],
    },
    '2': {
      id: '2',
      name: 'Computer',
      owner: 'Lukas Jonak',
      members: ['Lukas Jonak'],
      archived: true,
      items: [
        { id: 1, name: 'CPU', resolved: true, quantity: 1 },
        { id: 2, name: 'RAM', resolved: false, quantity: 2 },
      ],
    },
  };
  
  let listIdCounter = Math.max(...Object.keys(shoppingLists).map(Number), 0);
  
  export const itemIdCounters = {};
  
  Object.keys(shoppingLists).forEach((listId) => {
    const maxItemId = shoppingLists[listId].items.reduce((max, item) => Math.max(max, item.id), 0);
    itemIdCounters[listId] = maxItemId;
  });
  
  export function incrementListIdCounter() {
    return ++listIdCounter;
  }

  export function addNewList(newList) {  
    const id = String(++listIdCounter);
    shoppingLists[id] = {
      id,
      name: newList.name || 'New List',
      owner: newList.owner || 'Unknown',
      members: newList.members || [],
      archived: false,
      items: [],
    };
  }