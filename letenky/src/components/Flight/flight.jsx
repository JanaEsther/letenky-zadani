import './index.css';
import '../global.css';
import './flight.css';

export const Flight = () => {
  return (
    <div className="container">
      <div className="flight__icon"></div>
      <div className="flight__info">
        <div className="flight__stop">
          <p className="flight__stop-type">Odlet:</p>
          <p className="flight__stop-city">Praha</p>
          <p className="flight__stop-time">3. srpna 2022, 13:30</p>
        </div>
        <div className="flight__stop">
          <p className="flight__stop-type">Přílet:</p>
          <p className="flight__stop-city">Londýn</p>
          <p className="flight__stop-time">3. srpna 2022, 14:00</p>
        </div>
      </div>
    </div>
  );
};
