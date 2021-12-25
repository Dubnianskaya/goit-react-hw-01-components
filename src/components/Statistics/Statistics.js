import PropTypes from 'prop-types';
import {
  Section,
  StatisticTitle,
  StatisticList,
  StatisticItem,
  Label,
  Percentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticList>
        {stats.map(item => (
          <StatisticItem key={item.id}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </StatisticItem>
        ))}
      </StatisticList>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
