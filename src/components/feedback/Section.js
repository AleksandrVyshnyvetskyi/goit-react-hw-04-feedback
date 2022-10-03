import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div className="section">
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
};

export { Section };

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
