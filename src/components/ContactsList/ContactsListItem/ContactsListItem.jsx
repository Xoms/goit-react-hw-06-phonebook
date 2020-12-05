import React from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import recordActions from "../../../redux/contacts/recordActions";

import Button from '../../shared/Button';
import './ContactsListItem.scss';


const ContactsListItem = ({id, name, number, onDelete}) => (
  
    <li className="contacts-list__item">
      <span className="contacts-list__item-text">{name}: {number}</span>
      <Button type="button" onClick={() => onDelete(id)} className="contacts-list__item-btn">X</Button>
    </li>

);

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete:  PropTypes.func.isRequired
};


const mapDispatchToProps = {
  onDelete: recordActions.delContact,
}
export default connect(null, mapDispatchToProps)(ContactsListItem);