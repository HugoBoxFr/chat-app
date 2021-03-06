import React from 'react';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      {/* <Contact 
        name="Victoria Murray"
        avatar="https://randomuser.me/api/portraits/women/25.jpg"
        isOnline
      />

      <Contact 
        name="Tim Weaver"
        avatar="https://randomuser.me/api/portraits/men/32.jpg"
      />

      <Contact 
        name="Juan Lane"
        avatar="https://randomuser.me/api/portraits/men/94.jpg"
        isOnline
      /> */}

      <ContactList />

    </div>
  );
}

export default App;
