import { Outlet } from 'react-router-dom';
import PortfolioFooter from './PortfolioFooter';

export default function Portfolio() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
      <PortfolioFooter />
    </div>
  );
}