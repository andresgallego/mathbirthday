const makeClasses = (...classes) => classes.filter(i => Boolean(i)).join(' ');

export default React => ({ messageClass, nextMathBirthdayNumber, nextMathBirthdayFromNow }) => {
  return (
    <h3 className={
      makeClasses(messageClass, nextMathBirthdayNumber ? '' : 'hidden')
    }>
      {`Your next math birthday is your ${nextMathBirthdayNumber}-day-old birthday on ${nextMathBirthdayFromNow} days`}
    </h3>
  );
};
