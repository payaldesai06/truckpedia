import Vue from 'vue';
import dayjs from 'dayjs';

Vue.filter('title', function (value, replacer = '_') {
  if (!value) return '';
  value = value.toString();

  const arr = value.split(replacer);
  const capitalized_array = [];
  arr.forEach((word) => {
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    capitalized_array.push(capitalized);
  });
  return capitalized_array.join(' ');
});

Vue.filter('month', function (val, showYear = true) {
  val = String(val);

  const regx = /\w+\s(\w+)\s\d+\s(\d+)./;
  if (!showYear) {
    return regx.exec(val)[1];
  } else {
    return `${regx.exec(val)[1]} ${regx.exec(val)[2]}`;
  }
});

// Define a global filter using Vue.filter
Vue.filter('utcDatetimeToLocalTimeOnly', function (value) {
  if (!value) return '';

  value = value.replace(' ', 'T').concat('Z');
  return dayjs(value).format('h:mm A');
});
