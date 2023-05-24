export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(Character) {
    if (this.members.has(Character)) {
      throw new Error('The selected character is already in the team!');
    }
    this.members.add(Character);
  }

  addAll(...Character) {
    [...Character].forEach((item) => this.members.add(item));
  }

  toArray() {
    return [...this.members];
  }
}
