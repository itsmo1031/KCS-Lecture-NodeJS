// https://jsonplaceholder.typicode.com/users

const URL = 'https://jsonplaceholder.typicode.com/users';

const getDataByXHR = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', URL);
  xhr.send();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);
      renderHTML(data);
    }
  };
};

const getDataByFetch = () => {
  fetch(URL, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((res) => {
      renderHTML(res);
    });
};

const renderHTML = (contents) => {
  let htmlString = '';
  for (const content of contents) {
    htmlString += `
  <h2>${content.name}</h2>
  <ul>
    <li>city: ${content.address.city}</li>
    <li>street: ${content.address.street}</li>
    <li>suite: ${content.address.suite}</li>
    <li>zipcode: ${content.address.zipcode}</li>
  </ul>
  <hr>
`;
  }
  document.getElementById('result').innerHTML = htmlString;
};
