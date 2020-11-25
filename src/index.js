import './index.html';
import './styles.css';

// const btn = document.querySelectorAll("button");

// const body = document.querySelector("body");

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
const refs = {
  daysHtmlSelector: document.querySelector('span[data-value="days"]'),
  hoursHtmlSelector: document.querySelector('span[data-value="hours"]'),
  minsHtmlSelector: document.querySelector('span[data-value="mins"]'),
  secsHtmlSelector: document.querySelector('span[data-value="secs"]'),

  };

const CountdownTimer = {
  start() {
    const deadLine = new Date().setFullYear(2021);
    
    function showTimeCountdown() {
      const currentTime = Date.now();
      console.log('ewrwrywrywrty');
      console.log('start -> deadLine', deadLine);
      console.log('start -> currentTime', currentTime);

      const countdownDelta = deadLine - currentTime;
      console.log(countdownDelta);
      const {days, hours, mins, secs} = measureTimeValues(countdownDelta);

      updateVisibleTimer({days, hours, mins, secs});
      // const timeValues = measureTimeValues(countdownDelta);
      // console.log(timeValues);
      console.log(`${days}:${hours}:${mins}:${secs}`);
      
    }
    setInterval(showTimeCountdown, 1000);
  },
};
 
CountdownTimer.start();

function formatNumber(value) {
  return String(value).padStart(2, '0');
}

function measureTimeValues(time) {
  const days = formatNumber(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = formatNumber(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = formatNumber(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = formatNumber(Math.floor((time % (1000 * 60)) / 1000));
  
  return {days, hours, mins, secs};
}

function updateVisibleTimer({days, hours, mins, secs}) {
  refs.daysHtmlSelector.textContent = `${days}:`;
  refs.hoursHtmlSelector.textContent = `${hours}:`;
  refs.minsHtmlSelector.textContent = `${mins}`;
  refs.secsHtmlSelector.textContent = `${secs}`;
}

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */


/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */


/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */


/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
