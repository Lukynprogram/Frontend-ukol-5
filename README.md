## Getting Started
First, run the development server: (mam to na portu 80 skrz to, ze to runuju v labu a testutu zaroven na mobilu a nechtelo se mi pokazde dopisovat :3000)
```bash
sudo npm run dev
```

Na zaklade doporuceni jsem implementoval UserContext.js, abych handloval uzivatele zde. Zde muzete testovat uzivatele.
```html
  const [currentUser, setCurrentUser] = useState('Lukas Jonak');
```

**Opět budu velmi vděčný za zpětnou vazbu, myslím si, že mě to značně posouvá dopředu.**

**Pokud uživatel nemá oprávnění, tak dostane hlášku, že nemá práva!**

![image](https://github.com/user-attachments/assets/59568e0a-f199-4a04-8f52-73d7e122bec8)

V souboru jsou zároveň vyrobené 2 testovací listy.
http://localhost:3000/lists/1
http://localhost:3000/lists/2

**Hlavní stránka s listy**
http://localhost:3000/

## Splnění zadání:
### Switching between dark vs. light mode
- Funkční a myslím si, že i poměrně hezky pomocí sluníčka a měsíčku, takže to nezabírá ani tolik místa. - **DONE** 
### ResponsivenessListDetail of the shopping list and display of individual itemsForms
- Myslím si, že můj design je dostatečně responsivní. Testy jsem dělal jak na mobilu, tak na počítači. - **DONE**
### MultilingualismThe application interface at least in Czech and EnglishThe option to choose language change
- Implementovaný "languageswitcher", který řeší Angličtinu a Čestinu. - **DONE**

Děkuji mnohokrát a přeji krásný zbytek dne,
Lukáš Jonák
