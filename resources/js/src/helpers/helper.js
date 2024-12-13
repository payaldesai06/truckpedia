import { v4 as uuidv4 } from 'uuid';
import { join } from 'lodash';
import dayjs from 'dayjs';
import XLSX from 'xlsx';

export const getUniqueIdV4 = () => {
  return uuidv4();
};

export const urlToFile = async (url, filename, mimeType = 'image/png') => {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  return await new File([buffer], filename, { type: mimeType });
};

export const formatDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD');
};

export const getUniqueFileName = (file) => {
  const extension = file.name.split('.').reverse()[0];
  return `${uuidv4()}.${extension}`;
};

export const redirectToNewTab = (url) => {
  return window.open(url);
};

export const validateEmail = async (mail) => {
  const email = mail.trim();
  const atCount = email.length - email.replaceAll('@', '').length;
  if (atCount == 1) {
    return true;
  }
  return false;
};

export const encodeRFC5987ValueChars = (str) => {
  return (
    encodeURIComponent(str)
      // Note that although RFC3986 reserves "!", RFC5987 does not,
      // so we do not need to escape it
      .replace(/['()]/g, escape) // i.e., %27 %28 %29
      .replace(/\*/g, '%2A')
      // The following are not required for percent-encoding per RFC5987,
      // so we can allow for a little better readability over the wire: |`^
      .replace(/%(?:7C|60|5E)/g, unescape)
  );
};

export const formatAmount = (amount) => {
  if (isNullOrUndefined(amount) || isNaN(amount)) return null;

  return Number(amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const generateUniqueFileName = async () => {
  let currentDate = new Date();
  const name =
    currentDate.format('Ymd-His') + '-' + Math.random().toString(16).slice(2);
  return name;
};

export const sentenceCase = (str) => {
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
};

export const parseFloatWithTrim = (value, defaultDecimalPoints = 2) => {
  const floatValue = parseFloat(value);
  const decimalPortion = floatValue % 1;
  const trimmedValue =
    decimalPortion === 0
      ? floatValue.toFixed(0)
      : defaultDecimalPoints
      ? floatValue.toFixed(defaultDecimalPoints)
      : floatValue;
  return trimmedValue;
};

export const commaSeparatedValue = (value) => {
  return (value || '').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const extractAddress = (addressObj) => {
  let address = addressObj.formatted_address
    .split(', ')
    .slice(0, -3)
    .join(', ');

  if (!address) {
    address = addressObj.formatted_address.split(', ')[0];
  }

  let cityArr = addressObj.address_components
    .filter((address) => address.types.includes('locality'))
    .map((address) => address.long_name);

  if (cityArr.length == 0) {
    cityArr = addressObj.address_components
      .filter((address) => address.types.includes('neighborhood'))
      .map((address) => address.long_name);
  }
  if (cityArr.length == 0) {
    cityArr = [''];
  }

  const city = cityArr[0];

  const state = addressObj.address_components
    .filter((address) => address.types.includes('administrative_area_level_1'))
    .map((address) => address.short_name)[0];

  const zip_code = addressObj.address_components
    .filter((address) => address.types.includes('postal_code'))
    .map((address) => address.short_name)[0];

  return {
    address,
    city,
    state,
    zip_code,
  };
};

// Test case 1: Resize an image that is smaller than the maximum size
// Expected output: Resized file: File object representing the resized image

// Test case 2: Resize an image that exceeds the maximum size
// Expected output: Resized image exceeds the maximum size of 300KB in the console

export const dataUrlToFile = async (dataurl, filename) => {
  return fetch(dataurl)
    .then((response) => response.arrayBuffer())
    .then((buffer) => new File([buffer], filename, { type: 'image/png' }));
};

// Default maximum size is 100KB
export const resizeImage = (item, callback, maxSizeInBytes = 100 * 1024) => {
  const reader = new FileReader();
  reader.readAsDataURL(item);
  reader.onload = async function (event) {
    const img = new Image();
    img.src = event.target.result;
    img.onload = async function () {
      const scaleFactor = Math.min(1, maxSizeInBytes / (item.size || 1));
      const width = img.width * scaleFactor;
      const height = img.height * scaleFactor;

      const elem = document.createElement('canvas');
      elem.width = width;
      elem.height = height;

      const ctx = elem.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const srcEncoded = ctx.canvas.toDataURL('image/jpeg', 0.8);
      const fileObject = await dataUrlToFile(srcEncoded, item.name);
      console.log('New file size in KB: ', fileObject.size / 1024);
      if (fileObject.size <= maxSizeInBytes) {
        callback(fileObject);
      } else {
        // Handle case when resized image exceeds the maximum size
        console.log('Resized image exceeds the maximum size of 300KB');
      }
    };
  };
};

export const arrayToCommaSeparatedString = (array) => {
  if (!array || !array.length) return '';
  return join(
    array.map((item) => item.trim()),
    ', '
  );
};

// Function to get first frame of the video as image
export const getVideoImage = (path, secs = 1) => {
  return new Promise((resolve, reject) => {
    try {
      let video = document.createElement('video');
      video.src = path;

      video.onloadedmetadata = function () {
        this.currentTime = Math.min(
          Math.max(0, (secs < 0 ? this.duration : 0) + secs),
          this.duration
        );
      };

      video.onseeked = function (e) {
        let canvas = document.createElement('canvas');
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        let ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        let img = canvas.toDataURL();
        resolve(img);
      };
      video.onerror = function (e) {
        console.log('video error=>', e);
        reject();
      };
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

export const getFileExtension = (files) => {
  const fileExtension = files.map((file) => {
    const extension = file.name.split('.').pop();
    return { extension };
  });

  return fileExtension;
};

export const getInitialFromFullName = (fullName) => {
  if (!fullName) return '';

  const name = fullName.trim().split(' ');
  const initials =
    name.length > 1 ? name[0][0] + name[name.length - 1][0] : name[0][0];
  if (!initials) return '';
  return initials.toUpperCase();
};

export const getApiErrorMsg = (error) => {
  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.message
  ) {
    return error.response.data.message;
  } else if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.errors &&
    error.response.data.errors[0] &&
    error.response.data.errors[0].msg
  ) {
    return error.response.data.errors[0].msg;
  } else {
    return error;
  }
};

export const getSelectedFileExtension = (fileObj, keys = ['name']) => {
  if (!fileObj) return '';

  const fileName = keys.reduce((acc, key) => {
    if (acc) return acc;
    return fileObj[key];
  }, '');

  return fileName.split('.').reverse()[0];
};

export const formatStatusToCamelCamelCase = (status) => {
  if (status) {
    const words = status.split(/(?=[A-Z][a-z]*|\s+)/);
    const formattedWords = words.map((word) => {
      if (word.length > 1) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word;
      }
    });
    return formattedWords.join(' ');
  }
};

/*
DO NOT USE IT. THIS CODE IS WRONG.
export const formatToLocalTime = (utcTime, format) => {
  format = format || 'MM/DD/YY HH:mm z';
  return this.$dayjs.utc(utcTime).local().format(format);
}*/

export const formatAddressCityState = (address, city, state) => {
  let formattedAddress = '';
  if (address && address != city) {
    formattedAddress += address;
  }
  if (city || state) {
    if (formattedAddress) {
      formattedAddress += ', ';
    }

    if (city && state) {
      formattedAddress += `${city}, ${state}`;
    } else if (city) {
      formattedAddress += `${city}`;
    } else {
      formattedAddress += `${state}`;
    }
  }

  return formattedAddress;
};

export const formatAddressCityStateZipCode = (
  address,
  city,
  state,
  zipCode
) => {
  let formattedAddress = formatAddressCityState(address, city, state);
  if (zipCode) {
    if (formattedAddress) {
      formattedAddress += ' ';
    }
    formattedAddress += zipCode;
  }

  return formattedAddress;
};

export const isNullOrUndefined = (value) => {
  return value === null || value === undefined;
};

export const base64UrlToBase64 = (input) => {
  // Replace non-url compatible chars with base64 standard chars
  input = input.replace(/-/g, '+').replace(/_/g, '/');

  // Pad out with standard base64 required padding characters
  var pad = input.length % 4;
  if (pad) {
    if (pad === 1) {
      throw new Error(
        'InvalidLengthError: Input base64url string is the wrong length to determine padding'
      );
    }
    input += new Array(5 - pad).join('=');
  }
  return input;
};

export const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
  const byteCharacters = window.atob(b64Data);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = new Array(slice.length);

    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
};

export const formatUtcToLocalTime = (utcTime) => {
  return this.$dayjs.utc(utcTime).local().format('MM/DD/YY HH:mm z');
};

export const getObjectDifference = (oldobj, newobj) => {
  const keys = Array.from(
    new Set([...Object.keys(oldobj), ...Object.keys(newobj)])
  );
  const diff = Object.entries({ ...oldobj, ...newobj }).filter(
    ([key]) => oldobj[key] !== newobj[key]
  );
  return Object.fromEntries(diff);
};

export const getContrastColor = (rgbColor) => {
  // Extract RGB values from the input string
  let rgbValues = rgbColor.match(/\d+/g);
  let r = parseInt(rgbValues[0]);
  let g = parseInt(rgbValues[1]);
  let b = parseInt(rgbValues[2]);

  // Calculate luminance
  let luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  // Return black or white based on luminance
  return luminance > 0.3 ? '#000000' : '#ffffff';
};

export const getRandomColorById = (id) => {
  const seed = parseInt(id) || 0;
  const hue = (seed * 72) % 360;
  const saturation = 100;
  const lightness = 40;
  // Function to convert HSL to RGB
  const hslToRgb = (h, s, l) => {
    s /= 100;
    l /= 100;

    const k = (n) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n) => l - a * Math.max(Math.min(k(n) - 3, 9 - k(n), 1), -1);

    return [
      Math.round(f(0) * 255),
      Math.round(f(8) * 255),
      Math.round(f(4) * 255),
    ];
  };

  // Convert HSL to RGB
  const [r, g, b] = hslToRgb(hue, saturation, lightness);

  // Generate the RGB color string
  const backgroundColor = `rgb(${r}, ${g}, ${b})`;

  const color = {
    backgroundColor,
    color: getContrastColor(backgroundColor),
  };

  return color;
};

export const nullToEmptyString = (payload, doNotChange = []) => {
  Object.keys(payload).forEach((key) => {
    if (payload[key] === null && !doNotChange.includes(key)) {
      payload[key] = '';
    } else if (typeof payload[key] === 'object' && payload[key] !== null) {
      nullToEmptyString(payload[key], doNotChange);
    }
  });
  return payload;
};

export const emptyStringToNull = (payload) => {
  Object.keys(payload).forEach((key) => {
    if (payload[key] === '') {
      payload[key] = null;
    } else if (typeof payload[key] === 'object' && payload[key] !== null) {
      emptyStringToNull(payload[key]);
    }
  });
  return payload;
};

export const downloadXlsx = (sheetsData, fileName) => {
  // Differentiating CSV from XLSX due to "SheetName exceed limit (31 characters) error"
  // Create a new workbook
  const wb = XLSX.utils.book_new();
  // Loop through the sheets data and append each sheet to the workbook
  sheetsData.forEach((sheet) => {
    var ws = XLSX.utils.aoa_to_sheet(sheet.rows);
    XLSX.utils.book_append_sheet(wb, ws, sheet.sheetName);
  });
  // Write the workbook to a file
  XLSX.writeFile(wb, fileName);
};

export const downloadCsv = (csvData, name) => {
  const blob = new Blob([csvData], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('download', name);
  a.click();
  window.URL.revokeObjectURL(url);
};

export const getMonthName = (month) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return monthNames[month - 1];
};

export const isValidInputValue = (value, checks = [null, undefined, '']) => {
  return !checks.includes(value);
};
