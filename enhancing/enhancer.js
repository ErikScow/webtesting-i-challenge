module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {

  let enhancementLevel = item.enhancement

  if (enhancementLevel < 20){
    enhancementLevel ++
    return { ...item, enhancement: enhancementLevel}
  } else {
    return { ...item }
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
