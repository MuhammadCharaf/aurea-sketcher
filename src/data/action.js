/**
 * Represents Scenario Action data model.
 */
class Action {
  /**
     * Constructor
     */
  constructor() {
    this.id = '';
    this.number = 0;
    this.propnoun = '';
    this.description = '';
  }

  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  setNumber(number) {
    this.number = number;
  }

  getNumber() {
    return this.number;
  }

  setPronoun(propnoun) {
    this.propnoun = propnoun;
  }

  getPronoun() {
    return this.propnoun;
  }

  setDescription(description) {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }
}

export default Action;
