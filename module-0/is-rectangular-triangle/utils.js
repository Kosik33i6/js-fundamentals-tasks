const compareNumeric = function(a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
};

export default compareNumeric;
