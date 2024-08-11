import PropTypes from 'prop-types';

const HackathonCard = ({ title, description, date }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gradient bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-gray-300 mt-2">{description}</p>
      <p className="text-gray-400 text-sm mt-4">{date}</p>
    </div>
  );
};

HackathonCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default HackathonCard;
