import React from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import recordActions from "../../../redux/phonebook/contacts/recordActions";

import Button from '../../shared/Button';
import './ContactsListItem.scss';


const ContactsListItem = ({name, number, onDelete}) => (
  
    <li className="contacts-list__item">
      <span className="contacts-list__item-text">{name}: {number}</span>
      <Button type="button" onClick={onDelete} className="contacts-list__item-btn">X</Button>
    </li>

);

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string, //? хз при первом удалении куда-то деваются, потом нормально О_о 
  number: PropTypes.string, //? хз при первом удалении куда-то деваются, потом нормально О_о 
  onDelete:  PropTypes.func.isRequired
};
ContactsListItem.defaultProps = {
  name: '',
  number: '',
}

//Чего нельзя было сразу из листа взять??
const mapStateToProps = (state, ownProps) => {
    const item = state.contacts.items.find( el => el.id === ownProps.id)
    return {
      ...item
    } 
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(recordActions.delContact(ownProps.id))
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactsListItem);