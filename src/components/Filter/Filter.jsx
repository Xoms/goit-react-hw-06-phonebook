import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import filterActions from "../../redux/filter/filterActions";

import './Filter.scss';

const Filter = ({filter, onFilterChange}) => (
  <div className="filter">
    <label htmlFor="filterInput" className="filter__label">Find contacts by name</label>
    <input 
      type="text" 
      id="filterInput" 
      onChange={(e)=> onFilterChange(e.target.value)}
      value={filter}
      className="filter__input"/>
  </div>
);


Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};


const mapStateToProps = state => {
  return { 
    filter: state.contacts.filter
   }
}

const mapDispatchToProps = { 
  onFilterChange: filterActions.filterChange
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);