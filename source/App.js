import createTitle from 'components/title';
import createMessage from 'components/message';
import { createStore } from 'redux';
import DayPicker from 'react-day-picker';
import moment from 'moment';
import date from 'store/reducers/date';

export const store = createStore(date);

const parseToDate = (dateToParse) => {
  const dateParsed = new Date(dateToParse);
  return dateParsed;
};

// TimeDiff should be calculate when event
export const timeDiff = (date1, date2) => {
  // Difference in ms
  const diffms = Math.abs(parseToDate(date2).getTime() - parseToDate(date1).getTime());
  // Difference in days
  return Math.ceil(diffms / (1000 * 3600 * 24));
};

const handleDayClick = (e, day, { disabled }) => {
  if (disabled) {
    return;
  }
  const currentDate = moment().format('L');
  const birthday = moment(day).format('L');
  const differenceInDays = timeDiff(birthday, currentDate);
  const exp = Math.ceil(Math.log10(differenceInDays));
  let nextMathBirthdayNumber;
  if (exp === 0) {
    nextMathBirthdayNumber = 10;
  } else {
    nextMathBirthdayNumber = Math.pow(10, exp);
  }
  const nextMathBirthdayFromNow = nextMathBirthdayNumber - differenceInDays;

  store.dispatch({ type: 'SET_DATE', nextMathBirthdayNumber, nextMathBirthdayFromNow });
};

// just enable past dates
const isFutureDay = d => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return d > today;
};

store.subscribe(() => {
  console.log(store.getState());
});

export default React => ({ ...props }) => {
  const Title = createTitle(React);
  const Message = createMessage(React);
  const state = store.getState();
  const messageProps = {
    messageClass: 'message',
    nextMathBirthdayNumber: state.nextMathBirthdayNumber,
    nextMathBirthdayFromNow: state.nextMathBirthdayFromNow
  };
  return (
    <div className="content">
      <Title {...props} />
      <div className="YearNavigation">
        <DayPicker
          onDayClick={ handleDayClick.bind(this) }
          disabledDays={ isFutureDay }
          enableOutsideDays />
      </div>
      <Message {...messageProps} />
    </div>
  );
};
