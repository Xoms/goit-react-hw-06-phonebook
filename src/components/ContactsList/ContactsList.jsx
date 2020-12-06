import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';

import ContactsListItem from './ContactsListItem';
import  './ContactsList.scss';


const ContactsList = ({contacts}) => (
  <TransitionGroup component="ul" className="contacts-list">
    {contacts.map( ({id}) => {
      return (
        <CSSTransition key={id} timeout={250} classNames="contacts-items">
          <ContactsListItem  id={id}/>
        </CSSTransition>
      )
    })}
  </TransitionGroup>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string
  })).isRequired,
};


//////REDUX //////
const mapStateToProps = state => {
  const {items, filter} = state.contacts;
  const lowerCaseFilter = filter.toLowerCase();
  const visibleTasks = items.filter( ({name}) => name.toLowerCase().includes(lowerCaseFilter) );
  return { 
    contacts: visibleTasks,
   }
}

export default connect(mapStateToProps)(ContactsList) ;
