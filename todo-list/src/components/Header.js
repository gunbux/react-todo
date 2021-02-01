import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd, showform} ) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text={showform ? 'Close' : 'Add'} onClick={onAdd} color={showform ? 'red' : 'steelblue'} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Todo - List',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
