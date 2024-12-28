'use client';

import { act, createContext, useContext, useState } from 'react';
import { addNewList, shoppingLists } from '../mockData';
import AddListModal from '../lists/components/AddListModal';

const LanguageContext = createContext();

const translations = {
  en: {
    permissionsDenied: 'Permissions Denied',
    saveName: 'Save Name',
    discardChanges: 'Discard Changes',
    editName: 'Edit Name',
    addItem: 'Add Item',
    itemNamePlaceholder: 'Item Name',
    itemQuantityPlaceholder: 'Quantity',
    editItem: 'Edit Item',
    markAsCompleted: 'Mark as Completed',
    deleteItem: 'Delete Item',
    unselectAll: 'Unselect All',
    cancel: 'Cancel',
    save: 'Save',
    addNewMember: 'Add New Member',
    addMember: 'Add Member',
    removeMember: 'Remove',
    leaveList: 'Leave List',
    members: 'Members',
    ownerCannotRemove: 'Owner cannot remove themselves',
    quantity: "Quantity",
    productName: "Product Name",
    resolved: "Resolved",
    showAllResolved: "Show all resolved",
    showOnlyUnresolved: "Show only unresolved",
    items: "Items",
    name: "Name",
    role: "Role",
    actions: "Actions",
    owner: "Owner",
    member: "Member",
    ownerdelete: "Owner cannot remove themselves",
    leavelist: "Leave List",
    membername: "Member Name",
    shoppingLists: "Shopping Lists",
    addNewList: "Add New List",
    showAll: "Show All",
    hideArchived: "Hide Archived",
    delete: "Delete",
    archive: "Archive",
    unarchive: "Unarchive",
    archived: "Archived",
    active: "Active",
    sure: "Are you sure you want to",
    deletelist: "delete the list",
    addNewShoppingList: "Add New Shopping List",
    listName: "List Name",
    addList: "Add",
  },
  cs: {
    permissionsDenied: 'Přístup odepřen',
    saveName: 'Uložit jméno',
    discardChanges: 'Zrušit změny',
    editName: 'Upravit jméno',
    addItem: 'Přidat položku',
    itemNamePlaceholder: 'Název položky',
    itemQuantityPlaceholder: 'Množství',
    editItem: 'Upravit položku',
    markAsCompleted: 'Označit jako dokončené',
    deleteItem: 'Smazat položku',
    unselectAll: 'Zrušit výběr',
    cancel: 'Zrušit',
    save: 'Uložit',
    addNewMember: 'Přidat nového člena',
    addMember: 'Přidat člena',
    removeMember: 'Odstranit',
    leaveList: 'Opustit seznam',
    members: 'Členové',
    ownerCannotRemove: 'Vlastník se nemůže odstranit',
    quantity: "Množství",
    productName: "Název produktu",
    resolved: "Vyřešeno",
    showAllResolved: "Zobrazit vyřešené",
    showOnlyUnresolved: "Zobrazit nevyřešené",
    items: "Položky",
    name: "Jméno",
    role: "Role",
    actions: "Akce",
    owner: "Vlastník",
    member: "Člen",
    ownerdelete: "Vlastník se nemůže odstranit",
    leavelist: "Opustit seznam",
    membername: "Jméno člena",
    shoppingLists: "Nákupní seznamy",
    addNewList: "Přidat nový seznam",
    showAll: "Zobrazit vše",
    hideArchived: "Skrýt archivované",
    delete: "Smazat",
    archive: "Archivovat",
    unarchive: "Obnovit",
    archived: "Archivováno",
    active: "Aktivní",
    sure: "Opravdu chcete",
    deletelist: "smazat seznam",
    addNewShoppingList: "Přidat nový nákupní seznam",
    listName: "Název seznamu",
    addList: "Přidat",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English

  const switchLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);