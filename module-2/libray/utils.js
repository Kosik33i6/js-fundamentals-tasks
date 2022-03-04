const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');

dayjs.extend(relativeTime);

const inidDates = (bookListElement) => {
  const bookingDate = dayjs().format('YYYY-MM-DD');
  const returnDate = dayjs().add(7, 'days').format('YYYY-MM-DD');
  bookListElement.setBookingDate(bookingDate);
  bookListElement.setReturnDate(returnDate);
};

export default inidDates;
