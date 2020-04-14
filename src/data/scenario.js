/**
 * Represents scenario component
 */
class Scenario {
  constructor() {
    this.title = '';
    this.rowsMap = new Map();
  }

  setTitle(title) {
    this.title = title;
  }

  rows() {
    return [...this.rowsMap.values()];
  }

  add(id, obj) {
    this.rowsMap.set(id, obj);
  }

  remove(id) {
    return this.rowsMap.delete(id);
  }

  get(id) {
    return this.has(id) ? this.rowsMap.get(id) : null;
  }

  has(id) {
    return this.rowsMap.has(id);
  }

  any() {
    return this.rowsMap.size > 0;
  }

  first() {
    if (!this.any()) {
      return null;
    }

    return this.rowsMap.values().next().value;
  }

  size() {
    return this.rowsMap.size;
  }
}

export default Scenario;
