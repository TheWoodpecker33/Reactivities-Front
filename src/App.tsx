import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import './App.css';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.40.160:5000/api/activities').then(response => {
      console.log(response);
      setActivities(response.data);
    })
  }, []) // [] to only run once

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
        <List>
          {activities.map((activity: any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
