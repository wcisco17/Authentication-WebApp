import React from 'react'

import PropTypes from 'prop-types'


export default class AuthInput extends React.Component {
    render() {
      const {
        text,
        onChange,
        type,
        inputProps,
        value
        } = this.props;
        return (
     <div className="question">
            <input  type={type}
            { ...inputProps }
            value={value}
            onChange={onChange} required/>
            <label>{text}</label>
    </div>
        )
    }
}


AuthInput.propTypes = {
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    type: PropTypes.string,
    value: PropTypes.any,

    inputProps: PropTypes.object
}