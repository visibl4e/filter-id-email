const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

const getData = (url: string) => {
  return fetch(url).then((response) => response.json());
};

interface myData {
  id: number;
  email: string;
}

getData(COMMENTS_URL).then((data: myData[]) => {
  const names = data.map(function (user) {
    return console.log(`ID:${user.id}, Email: ${user.email} `);
  });
});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
