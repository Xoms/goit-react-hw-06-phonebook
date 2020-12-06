import React  from 'react';
import { CSSTransition } from 'react-transition-group';

import Title from './components/shared/Title';
import Container from './components/shared/Container';
import PhonesForm from './components/PhonesForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';

import './App.scss';

const App = () => {   

    return (
      <Container className="container phonebook">
        <CSSTransition in={true} 
          appear={true}
          classNames="fade" 
          unmountOnExit 
          timeout={500}
        >
          <Title title="Phonebook"/>
        </CSSTransition>

        <PhonesForm/>
        <Title title="Contacts" className="main-title"/>
        <Filter/>
        <ContactsList/>

      </Container>
    );  
}
export default App;
