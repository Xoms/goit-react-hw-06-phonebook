import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {v4 as uuid} from 'uuid';
import { CSSTransition } from 'react-transition-group';

import { connect } from 'react-redux';
import recordActions from "../../redux/phonebook/contacts/recordActions";

import ErrMsg from '../shared/ErrorMessage';
import Button from "../shared/Button";

import './PhonesForm.styles.scss';

const initialState = {
  name: '',
  number: '',
  isExist: false
}

class PhonesForm extends Component  {

  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string
    })).isRequired,
    onContactAdd: PropTypes.func.isRequired,
  };

  state = { ...initialState }

  changeHandler = ({target}) => {
    this.setState({ [target.name]: target.value })
  }

  submitHandler = (e) => {
    e.preventDefault();
    
    if (this.isContactExists(this.state.name)){
      this.showErrMsg();
      return;
    }

    const newRecord = this.makeRecord()
    this.props.onContactAdd(newRecord);
    this.setState({ ...initialState })
  }


  isContactExists(currName){
    return (this.props.contacts.some( ({name}) => name === currName));
  }

  showErrMsg() {
    this.setState({ isExist: true });
    setTimeout(() => this.hideErrMsg(), 2000);
  }

  hideErrMsg = ()=> {
    this.setState({ isExist: false });
  }

  makeRecord(){
    const id = uuid();
    const {name, number} = this.state;
    return {id, name, number}
  }

  render(){
    const {name, number, isExist} = this.state
    return (
      <form className="contacts-form" onSubmit={this.submitHandler}>

        <CSSTransition 
          in={isExist} 
          classNames="err" 
          appear={true}
          unmountOnExit 
          timeout={250}
        >
          <ErrMsg content="This person is already in your contacts list" onClick={this.hideErrMsg}/>
        </CSSTransition>

        <div className="contacts-form__group">
          <label className="contacts-form__label" htmlFor="contactName" >Name</label>
          <input className="contacts-form__input" 
            onChange={this.changeHandler} 
            id="contactName"
            name="name"
            value={name}/>
        </div>

        <div className="contacts-form__group">
          <label className="contacts-form__label" htmlFor="contactNumber">Number</label>
          <input 
            className="contacts-form__input" 
            onChange={this.changeHandler} 
            id="contactNumber"
            name="number"
            value={number}/>
        </div>

        <Button type="submit" className="contacts-form__submit-btn">Add contact</Button>       
      </form>
    )
  }  
};

////////////REDUX////////////
const mapStateToProps = state => {
  return { 
    contacts: state.contacts.items,
  }
}

const mapDispatchToProps = { 
  onContactAdd: recordActions.addContact,
}
// по факту происходит такое
// const mapDispatchToProps = dispatch => { 
//   return {
//     onContactAdd: (val) => dispatch(recordActions.addContact(val))
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(PhonesForm);