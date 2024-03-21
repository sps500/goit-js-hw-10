import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      iziToast.error({
        title: 'Error',
        position: 'topRight',
        message: 'Please choose a date in the future',
      });
      startButton.disabled = true;
      startButton.classList.remove('valid-date');
    } else {
      startButton.disabled = false;
      startButton.classList.add('valid-date');
    }
  },
};

flatpickr('#datetime-picker', options);

let timerInterval;

function startTimer() {
  const endDate = flatpickr.parseDate(
    document.querySelector('#datetime-picker').value
  );
  const currentDate = new Date();

  if (endDate <= currentDate) {
    iziToast.error({
      title: 'Error',
      position: 'topRight',
      message: 'Please choose a future date to start the timer',
    });
    return;
  }

  document.querySelector('[data-start]').disabled = true;
  document.querySelector('#datetime-picker').disabled = true;

  timerInterval = setInterval(updateTimer, 1000, endDate);
}

function updateTimer(endDate) {
  const msDifference = endDate - new Date();

  if (msDifference <= 0) {
    clearInterval(timerInterval);
    displayTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    iziToast.success({
      title: 'Success',
      message: 'Timer has finished!',
    });
    document.querySelector('#datetime-picker').disabled = false;
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(msDifference);
  displayTime({ days, hours, minutes, seconds });
}

function displayTime({ days, hours, minutes, seconds }) {
  document.querySelector('[data-days]').textContent = addLeadingZero(days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent =
    addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent =
    addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

document.querySelector('[data-start]').addEventListener('click', startTimer);
