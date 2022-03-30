import React from 'react';
import { render } from 'react-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const axios = require('axios').default;
/* 
Looping Exercise

//REPLACED THE OPTIONS IN THE DROPDOWN LIST WITH NAMES FROM THE JSON array
//THE IDS ARE ASSIGNED TO THE VALUES

*/

function List() {
  const [users, setUsers] = useState([]);
  users.map(function (user) {
    return user.id;
  });

  //Pulls the data from typicode
  useEffect(() => {
    (async () => {
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(result.data);
    })();
  }, []);

  const userList = users.map((user) => user.name);

  var selectUser = document.getElementById('select-user');
  //console.log(users);
  //referenced for help with adding to drop dropdown
  //https://stackoverflow.com/questions/9895082/javascript-populate-drop-down-list-with-array
  for (var i = 0; i < users.length; i++) {
    var name = users[i].name;
    var id = users[i].id;
    var el = document.createElement('option');
    el.textContent = name;
    el.value = id;
    selectUser.appendChild(el);
  }

  //ALL BOOTSTRAP & STYLING TAKES PLACE HERE IN THE RENDER FUNCTION
  return (
    <div
      style={{ color: 'blue', marginTop: '20px', fontFamily: 'bebas' }}
      className="container"
    >
      <div className="row">
        <div className="col-12">
          <h3>User Dropdown</h3>
          <select
            style={{
              marginRight: '20px',
              fontFamily: 'georgia',
              width: 'auto',
            }}
            className="form-select form-select-sm"
            id="select-user"
          ></select>
        </div>
      </div>
    </div>
  );
}

render(<List />, document.getElementById('my-app'));
