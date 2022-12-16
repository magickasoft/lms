import SC from '@emotion/styled';
import {Moment} from 'moment';
import {getNumberWithZero} from 'src/helpers/number';
import {useCountdown} from 'src/hooks/useCountdown';

type SaleTimerProps = {
  endDate: Moment;
  percentage: number;
};

const TimerBlock = SC.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #333333;
  padding: 20px 0;
  width: 90%;
  margin: 0 auto;
`;
const Alert = SC.span`
  color: #FF3A44;
`;

export const SaleTimer = (props: SaleTimerProps) => {
  const {percentage, endDate} = props;
  const [days, hours, minutes, seconds] = useCountdown(endDate.unix() * 1000);

  return (
    <>
      <TimerBlock>
        -{percentage}% off before <Alert>{endDate.format('D MMM')}</Alert>. Time left:{' '}
        {days + hours + minutes + seconds > 0 ? (
          <Alert>
            {getNumberWithZero(hours)}:{getNumberWithZero(minutes)}:{getNumberWithZero(seconds)}
          </Alert>
        ) : (
          <Alert>Expired</Alert>
        )}
      </TimerBlock>
    </>
  );
};
