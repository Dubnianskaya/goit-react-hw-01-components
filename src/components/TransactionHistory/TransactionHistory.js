import PropTypes from 'prop-types';
import { Table, TableHead, TableBody } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TableBody>{item.type}</TableBody>
            <TableBody>{item.amount}</TableBody>
            <TableBody>{item.currency}</TableBody>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
