import PropTypes from 'prop-types';

const comedianShape = PropTypes.shape({
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  id: PropTypes.string,
});

export default { comedianShape };
