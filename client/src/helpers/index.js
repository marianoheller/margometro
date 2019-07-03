export const padZero = (str, len) => {
  len = len || 2;
  var zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
};

const hueShift = (h, s) => {
  h += s;
  while (h >= 360.0) h -= 360.0;
  while (h < 0.0) h += 360.0;
  return h;
};

const min3 = (a, b, c) => {
  return a < b ? (a < c ? a : c) : b < c ? b : c;
};
const max3 = (a, b, c) => {
  return a > b ? (a > c ? a : c) : b > c ? b : c;
};

export const HEX2RGB = hex => {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.");
  }
  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16)
  };
};

export const RGB2HEX = rgb => {
  return "#" + padZero(rgb.r) + padZero(rgb.g) + padZero(rgb.b);
};

export const RGB2HSV = rgb => {
  const hsv = {};
  const max = max3(rgb.r, rgb.g, rgb.b);
  const dif = max - min3(rgb.r, rgb.g, rgb.b);

  hsv.saturation = max == 0.0 ? 0 : (100 * dif) / max;
  if (hsv.saturation == 0) hsv.hue = 0;
  else if (rgb.r == max) hsv.hue = (60.0 * (rgb.g - rgb.b)) / dif;
  else if (rgb.g == max) hsv.hue = 120.0 + (60.0 * (rgb.b - rgb.r)) / dif;
  else if (rgb.b == max) hsv.hue = 240.0 + (60.0 * (rgb.r - rgb.g)) / dif;
  if (hsv.hue < 0.0) hsv.hue += 360.0;

  hsv.value = Math.round((max * 100) / 255);
  hsv.hue = Math.round(hsv.hue);
  hsv.saturation = Math.round(hsv.saturation);

  return hsv;
};

export const HSV2RGB = hsv => {
  const rgb = {};
  if (hsv.saturation == 0) {
    rgb.r = rgb.g = rgb.b = Math.round(hsv.value * 2.55);
  } else {
    hsv.hue /= 60;
    hsv.saturation /= 100;
    hsv.value /= 100;
    const i = Math.floor(hsv.hue);
    const f = hsv.hue - i;
    const p = hsv.value * (1 - hsv.saturation);
    const q = hsv.value * (1 - hsv.saturation * f);
    const t = hsv.value * (1 - hsv.saturation * (1 - f));
    switch (i) {
      case 0:
        rgb.r = hsv.value;
        rgb.g = t;
        rgb.b = p;
        break;
      case 1:
        rgb.r = q;
        rgb.g = hsv.value;
        rgb.b = p;
        break;
      case 2:
        rgb.r = p;
        rgb.g = hsv.value;
        rgb.b = t;
        break;
      case 3:
        rgb.r = p;
        rgb.g = q;
        rgb.b = hsv.value;
        break;
      case 4:
        rgb.r = t;
        rgb.g = p;
        rgb.b = hsv.value;
        break;
      default:
        rgb.r = hsv.value;
        rgb.g = p;
        rgb.b = q;
    }
    rgb.r = Math.round(rgb.r * 255);
    rgb.g = Math.round(rgb.g * 255);
    rgb.b = Math.round(rgb.b * 255);
  }
  return rgb;
};

export const invertColor = hex => {
  const rgb = HEX2RGB(hex);
  const inverted = {
    r: (255 - rgb.r).toString(16),
    g: (255 - rgb.g).toString(16),
    b: (255 - rgb.b).toString(16)
  };
  return RGB2HEX(inverted);
};

export const complementColor = hex => {
  const rgb = HEX2RGB(hex);
  const hsv = RGB2HSV(rgb);
  hsv.hue = hueShift(hsv.hue, 180.0);
  return RGB2HEX(HSV2RGB(hsv));
};
