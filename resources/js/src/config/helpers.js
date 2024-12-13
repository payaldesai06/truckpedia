export const generateTextColor = (bgColor) => {
  if (!bgColor) return "color: #000000;";

  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  const rgb = hexToRgb(bgColor) || {};
  const r = rgb.r;
  const g = rgb.g;
  const b = rgb.b;
  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the bgColor is light or dark
  if (hsp > 127.5) {
    // light - Need dark Text
    return "color: #000000;";
  } else {
    // dark - Need light Text
    return "color: #FFFFFF;";
  }
};
