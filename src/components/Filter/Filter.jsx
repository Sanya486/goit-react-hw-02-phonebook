import React from 'react'
import PropTypes from 'prop-types'

const Filter = ({text, onChange}) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={text} onChange={onChange} />
      </label>
    </div>
  );
}

Filter.propTypes = {

}

export default Filter
