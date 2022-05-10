export const getIAE = () => {
  const r = Math.random();
  const iae = Math.log(-r + 1) / -0.0013;
  return iae/60;
};

export const getIAS = () => {
  const r = Math.random();
  const ias = Math.log(-r + 1) / -0.0004;
  return ias/60;
};

export const getTAS = () => {
  return equiprobableFDP(1, 3);
};

const equiprobableFDP = (minValue, maxValue) =>
  minValue + (maxValue - minValue) * Math.random();

const getTAIP = () => equiprobableFDP(8, 16);
const getTAIH = () => equiprobableFDP(5, 10);

export const getTA = () => {
  const r = Math.random();

  if (r <= 0.65) {
    return getTAIH();
  } else {
      return getTAIP();
    }
};