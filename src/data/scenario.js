/**
 * Represents scenario component
 */
class Scenario {
  constructor() {
    this.title = '';
    this.actionsMap = new Map();
    this.resultsMap = new Map();
  }

  setTitle(title) {
    this.title = title;
  }

  actions() {
    return [...this.actionsMap.values()];
  }

  addAction(id, action) {
    this.actionsMap.set(id, action);
  }

  action(id) {
    return this.hasAction(id) ? this.actionsMap.get(id) : null;
  }

  hasAction(id) {
    return this.actionsMap.has(id);
  }

  anyAction() {
    return this.actionsMap.length > 0;
  }

  firstAction() {
    if (!this.anyAction()) {
      return null;
    }

    return this.actionsMap.values().next().value;
  }

  removeAction(id) {
    return this.actionsMap.delete(id);
  }

  countActions() {
    return this.actionsMap.length;
  }

  addResult(id, result) {
    this.resultsMap.set(id, result);
  }

  result(id) {
    return this.resultsMap.get(id);
  }

  hasResult(id) {
    return this.resultsMap.has(id);
  }

  anyResult() {
    return this.resultsMap.length > 0;
  }

  removeResult(id) {
    return this.resultsMap.delete(id);
  }

  countResults() {
    return this.resultsMap.length;
  }

  getResults() {
    return this.resultsMap;
  }

  firstResult() {
    if (!this.anyResult()) { return null; }

    return this.resultsMap.values().next().value;
  }
}

export default Scenario;
