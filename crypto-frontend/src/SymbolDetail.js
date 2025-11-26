import { useParams } from 'react-router-dom';
import './SymbolDetail.css';

const SymbolDetail = () => {
  const { symbol } = useParams();

  return (
    <div className="symbol-detail">
      <div className="symbol-detail-container">
        <h1>Symbol: {symbol}</h1>
        <p>This page is currently blank.</p>
      </div>
    </div>
  );
};

export default SymbolDetail;

