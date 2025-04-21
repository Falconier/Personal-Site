const $ = (selector) => document.querySelector(selector);

const $hour = $('.hour');
const $minute = $('.minute');
const $second = $('.second');
const $day_of_week = $('.day-of-week');
const $date = $('.date');
const $month = $('.month');
const $year = $('.year');
const $separator = $('.separator');

let showSeparator = true;

function updateClock()
{
    showSeparator = !showSeparator;
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let sec = date.getSeconds();
    let dofw = date.getDay();

    if (showSeparator)
    {
        $separator.classList.add('invisible');
    }
    else
    {
        $separator.classList.remove('invisible');
    }
    $hour.textContent = hours.toString().padStart(2, '0');
    $minute.textContent = minutes.toString().padStart(2, '0');
    // $second.textContent = date.getSeconds().toString().padStart(2, '0');

    Array.from($day_of_week.children).forEach((child) => {
        child.classList.remove('active');
        // console.log(child.textContent);
        if(child.textContent == date.toLocaleString('en-US', { weekday: 'long' }))
        {
            child.classList.add('active');
        }
    }
    );
}

setInterval(updateClock, 500);