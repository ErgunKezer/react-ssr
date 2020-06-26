import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
const Users = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    renderUsers(props.users);
  }, [props.users]);
  useEffect(() => {
    props.fetchUsers();
  }, []);

  const renderUsers = (users) => {
    setUsers(
      <ul>
        {users.map((o, i) => (
          <li key={i}>{o.name}</li>
        ))}
      </ul>
    );
  };
  return (
    <div>
      <p className='test'>Users</p>
      {users}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchUsers })(Users);
