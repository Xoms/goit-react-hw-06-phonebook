import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactsListItem from './ContactsListItem';
import  './ContactsList.scss';

const ContactsList = ({contacts}) => (
  <TransitionGroup component="ul" className="contacts-list">
    {contacts.map( ({id, ...rest}) => {
      return (
        <CSSTransition key={id} timeout={250} classNames="contacts-items">
          <ContactsListItem  id={id} {...rest}/>
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


export default ContactsList;
