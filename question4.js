// 4. (2p) Skriv en funktion getAuthorsByFullName som tar en array med författare och returnerar en 
// ny array med författarnas fullständiga namn, för och efternamn.
// Använd map

const authors = [
    { first: 'Leo', last: 'Tolstoj', year: 1828, passed: 1910 },
    { first: 'Alexander', last: 'Pusjkin', year: 1799, passed: 1837 },
    { first: 'Fjodor', last: 'Dostojevski', year: 1821, passed: 1881 },
    { first: 'Anton', last: 'Tjechov', year: 1860, passed: 1904 },
    { first: 'Vladimir', last: 'Nabokov', year: 1899, passed: 1997 },
    { first: 'Maksim', last: 'Gorkij', year: 1868, passed: 1936 },
    { first: 'Koldan', last: 'Egorov', year: 1921, passed: 1821 },
    { first: 'Nikolaj', last: 'Gogl', year: 1809, passed: 1852 },
    { first: 'Leonid', last: 'Andrejev', year: 1871, passed: 1919 },
    { first: 'Mirra', last: 'Lokhvitskaya', year: 1869, passed: 1905 },
    { first: 'Ivan', last: 'Krylov', year: 1769, passed: 1844 },
    { first: 'Michail', last: 'Lermontov', year: 1814, passed: 1841 },
    { first: 'Alexandr', last: 'Blok', year: 1880, passed: 1921 }
  ];

  function getAuthorsByFullname(authors) {
    // Din kod här
    
  }

// Test
//console.log(getAuthorsByFullname(authors)); // Ska logga: ["Leo Tolstoj", "Alexander Pusjkin", "Fjodor Dostojevski", "Anton Tjechov", "Vladimir Nabokov", "Maksim Gorkij", "Koldan Egorov", "Nikolaj Gogl", "Leonid Andrejev", "Mirra Lokhvitskaya", "Ivan Krylov", "Michail Lermontov", "Alexandr Blok" ]