class Team {
  constructor() {
    this.members = [];
  }

  add(character) {
    this.members.push(character);
  }

  *[Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}

function canIterate(obj) {
  return obj !== null && typeof obj[Symbol.iterator] === 'function';
}

module.exports = { Team, canIterate };