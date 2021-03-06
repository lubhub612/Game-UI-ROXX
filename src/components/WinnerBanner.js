import { useState } from 'react';
import Switch from 'react-switch';
import NoResultFound from './NoResultFound';
import ResultTable from './ResultTable';
export default function WinnerBanner() {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="result-banner">
        <div className="container">
          <div className="result-banner-inner">
            <h2>
              <strong>WINNINGS</strong>
            </h2>
            <div className="result-banner-count">
              <span>
                <span className="primary-color">$0 USD</span>
                <strong>TOTAL WON</strong>
              </span>
            </div>
          </div>
          <div className="tournament-event">
            <Switch
              onChange={() => setActive((e) => !e)}
              checked={active}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor="#f0b90c"
              height={10}
              width={40}
              handleDiameter={25}
            />
            Tournament Events
          </div>
          {!active ? <ResultTable /> : <NoResultFound />}
        </div>
      </div>

      <style jsx>
        {`
          .result-banner {
            background: var(--background);
            padding: 60px 0;
          }

          .result-banner-inner {
            color: var(--colorWhite);
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .result-banner-count {
            background: var(--resultBtnBg);
            border-radius: 8px;
            box-shadow: 0 4px 8px rgb(0 0 0 / 12%);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 30px;
            min-width: 300px;
            font-weight: 600;
            position: relative;
          }

          .result-banner-count strong {
            color: var(--colorWhite);
            margin-left: 10px;
          }
          .result-banner-count:before {
            background: url('/images/to-horse.svg') no-repeat center center /
              cover;
            bottom: 0;
            content: '';
            left: 0;
            position: absolute;
            top: 0;
            width: 100px;
            filter: var(--resultBtnImg);
          }
          .primary-color {
            color: #f0b90c;
          }
          .result-banner-inner h2 strong {
            font-weight: 500;
            color: #5b6068;
          }
          .result-banner-inner h2 {
            display: flex;
            align-items: center;
            gap: 20px;
          }
          .result-banner-inner h2 span {
            border: 1px solid #32363d;
            padding: 8px 10px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            gap: 10px;
            color: #fff;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
          }

          .result-banner-inner h2 span svg {
            width: 24px;
            height: 24px;
          }
          .tournament-event {
            display: flex;
            align-items: center;
            gap: 20px;
            color: var(--colorWhite);
            font-weight: 500;
            font-size: 14px;
            margin: 80px 0;
          }
          @media screen and (max-width: 991px) {
            .result-banner-inner {
              display: grid;
              gap: 20px;
              text-align: center;
              justify-content: center;
            }
            .result-banner {
              padding: 50px 0;
            }
            .result-banner-count {
              min-width: unset;
              gap: 40px;
            }
            .result-banner-inner h2 {
              justify-content: center;
            }
            .tournament-event {
              justify-content: center;
              margin: 40px 0;
            }
          }
        `}
      </style>
    </>
  );
}
