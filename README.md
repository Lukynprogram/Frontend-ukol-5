## Getting Started
First, run the development server:
```bash
npm run dev
```

Na zaklade doporuceni jsem implementoval UserContext.js, abych handloval uzivatele zde. Zde muzete testovat uzivatele.
```html
  const [currentUser, setCurrentUser] = useState('Lukas Jonak');
```

**Opět budu velmi vděčný za zpětnou vazbu, myslím si, že mě to značně posouvá dopředu.**

**Pokud uživatel nemá oprávnění, tak dostane hlášku, že nemá práva!**

![image](https://github.com/user-attachments/assets/59568e0a-f199-4a04-8f52-73d7e122bec8)

**API**
- /api/lists
- /api/lists/[id]/items

V souboru jsou zároveň vyrobené 2 testovací listy.
http://localhost:3000/lists/1
http://localhost:3000/lists/2

**Hlavní stránka s listy**
http://localhost:3000/

## Splnění zadání:
### API funguje - přikládám Insomnia_API_CALLS pro test. GUI též funguje.

### Implemented server calls (loading, adding, editing, deleting data)
- API funguje na načtení, přidání, editování, mazání jak listů, tak itemů v listu, takže vlastně vše. - **DONE**

### Prepare Mock Data with Which the Application Will Work
- mockData.js obsahuje listy i itemy. - **DONE**

### Enable the Application to Use Mock Data for Development
- mockData.js + addNewList + incrementListIdCounter - **DONE**

### Implement Suitable Graphic Displays for Individual Elements
- Myslím si, že splňeno - **DONE**

### Component Decomposition - **DONE**
- Visual (ShopppingListGrid, AddListModal atd.)
- Non-visual (mockData, API routes atd.)
- Errors jsou pořešené, spousta checků atd. jak v API, tak v UI.
- Přidal jsem i fake delay, dokud se nebude integrovat vyloženě backend. (Což bude úkol 6? nebo?)

### The application is submitted with server call mocking enabled.
- Ano, funguje z mockData - **DONE**

### Mock data are included in the submission.
- Soubor mockData.js - **DONE**

Děkuji mnohokrát a přeji krásný zbytek dne,
Lukáš Jonák
