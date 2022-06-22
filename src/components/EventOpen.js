import RaceTable from './RaceTable';

export default function EventOpen() {
  return (
    <>
      <div className="event-open">
        <div className="container">
          <div className="event-open-inner">
            <h2>Races Open</h2>
            <div className="event-open-select">
              <button className="active">All</button>
              <button>Discovery</button>
              <button>Class VI</button>
              <button>Class V</button>
              <button>Class IV</button>
              <button>Class III</button>
              <button>Class II</button>
              <button>Class I</button>
            </div>
          </div>
          <RaceTable />
        </div>
      </div>
      <style jsx>
        {`
          .event-open {
            background: var(--background);
            padding: 60px 0;
          }

          .event-open-inner {
            display: flex;
            align-items: center;
            color: #5b6068;
            gap: 100px;
            margin-bottom: 30px;
          }

          .event-open-inner h2 {
            text-transform: uppercase;
            font-size: 18px;
            font-weight: 500;
          }

          .event-open-select button {
            background: var(--eventButtonBg);
            border: none;
            border-radius: 50px;
            padding: 8px 20px;
            color: var(--eventButtonColor);
            margin: 0 10px;
            cursor: pointer;
          }
          .event-open-select button.active {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            box-shadow: 0 0 8px 0px#f0b90b5e;
            color: #fff;
          }
          @media screen and (max-width: 991px) {
            .event-open-inner {
              display: grid;
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .event-open {
              padding: 40px 0;
            }

            .event-open-select {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              gap: 14px;
            }

            .event-open-select button {
              margin: 0;
            }
          }
        `}
      </style>
    </>
  );
}
