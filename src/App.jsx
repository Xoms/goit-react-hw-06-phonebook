import React  from 'react';
import { CSSTransition } from 'react-transition-group';

import { connect } from "react-redux";

import Title from './components/shared/Title';
import Container from './components/shared/Container';
import PhonesForm from './components/PhonesForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';

import './App.scss';

const App = ({filter, contacts}) => {

  const visibleContacts = contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()) )   

    return (
      <Container className="container phonebook">
        <CSSTransition in={true} 
          appear={true}
          classNames="fade" 
          unmountOnExit 
          timeout={500}>
          <Title title="Phonebook"/>

        </CSSTransition>
  

        <PhonesForm contacts={contacts}/>
        <Title title="Contacts" className="main-title"/>
        <Filter/>
        <ContactsList contacts={visibleContacts}/>

      </Container>
    );  
}



//////REDUX /////////
const mapStateToProps = state => {
  return { 
    contacts: state.contacts.items,
    filter: state.contacts.filter
   }
}



export default connect(mapStateToProps)(App);
