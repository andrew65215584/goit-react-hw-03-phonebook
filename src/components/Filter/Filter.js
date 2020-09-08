import React from 'react';
import styles from './filter.module.css';
import PropTypes from 'prop-types';

function Filter({ filter, getFilterName }) {
  return (
    <>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={getFilterName}
        className={styles.input}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  getFilterName: PropTypes.func,
};

export default Filter;
