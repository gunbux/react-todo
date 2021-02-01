import PropTypes from 'prop-types'


const Button = ({ text , onClick , color }) => {
  return (
    <button className='btn' style={{backgroundColor: color}} onClick={onClick}>
      {text}
    </button>
  )
}

const def = () => {
  console.log('Click')
}

Button.defaultProps = {
  text: 'Button',
  color: 'steelblue',
  onClick: def,
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
