function getModifier(score) {
  let modifier = Math.floor((score - 10) / 2);
  return modifier === 0 ? 0 : modifier > 0 ? `+${modifier}` : modifier;
}

export default getModifier;
