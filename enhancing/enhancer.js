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

  let enhancementLevel = item.enhancement
  let durabilityLevel = item.durability

  if (enhancementLevel < 15){
    durabilityLevel = durabilityLevel - 5
    return { ...item, durability: durabilityLevel}
  } else if (enhancementLevel > 15 && enhancementLevel > 16){
    durabilityLevel = durabilityLevel - 10
    enhancementLevel = enhancementLevel -1
    return {
      ...item, 
      enhancement: enhancementLevel, 
      durability: durabilityLevel
    }
  } else if (enhancementLevel > 15){
    durabilityLevel = durabilityLevel - 10
    return { ...item, durability: durabilityLevel}
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item }
}
