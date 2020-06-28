import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import helmetFunc from '../../helpers/helmet';
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
  const helmet = helmetFunc({
    title: 'Users',
  });
  return (
    <div>
      {helmet}
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

const loadData = (store) => {
  return store.dispatch(fetchUsers());
};
export { loadData };
export default connect(mapStateToProps, { fetchUsers })(Users);
