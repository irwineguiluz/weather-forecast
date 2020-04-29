import React from 'react';
import Moment from 'react-moment';

const TabDetails = (props) => (
  <div className="tab-container">
    <div className="tab-details">
      <div className="in-out">
        <div className="in-out__item">
          <div className="item__img">
            <img src="/icons/sunrise.png" width="50" className="icon" alt="icon" />
          </div>
          <div className="item__info">
            <div className="info__lbl">SUNRISE</div>
            <div className="info__desc"><Moment unix format="HH:mm">{props.weatherData.sys.sunrise}</Moment></div>
          </div>
        </div>
        <div className="in-out__item">
          <div className="item__img">
            <img src="/icons/sunset.png" width="50" className="icon" alt="icon" />
          </div>
          <div className="item__info">
            <div className="info__lbl">SUNSET</div>
            <div className="info__desc"><Moment unix format="HH:mm">{props.weatherData.sys.sunset}</Moment></div>
          </div>
        </div>
      </div>


      <div className="other-data">
        <div className="other-data__item">
          <div className="item__img">
            <img src="/icons/sunrise.png" width="50" className="icon" alt="icon" />
          </div>
          <div className="item__info">
            <div className="info__lbl">Pressure</div>
            <div className="info__desc">{props.weatherData.main.pressure}</div>
          </div>
        </div>
        <div className="other-data__item">
          <div className="item__img">
            <img src="/icons/sunset.png" width="50" className="icon" alt="icon" />
          </div>
          <div className="item__info">
            <div className="info__lbl">Humidity</div>
            <div className="info__desc">{props.weatherData.main.humidity}</div>
          </div>
        </div>
        <div className="other-data__item">
          <div className="item__img">
            <img src="/icons/sunset.png" width="50" className="icon" alt="icon" />
          </div>
          <div className="item__info">
            <div className="info__lbl">Timezone</div>
            <div className="info__desc">{props.weatherData.timezone}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TabDetails;