/**
 * Represents scenario component
 */
class Scenario {
    constructor() {
        this._title = '';
        this._actions = {};
        this._results = {};
    }

    setTitle(title) {
        this._title = title;
    }

    getTitle() { 
        return this.title; 
    }

    addAction(id, action) {
        this._actions[id] = action;
    }

    action(id) {
        if (this._actions.hasOwnProperty(id)) 
            return this._actions[id];

        return null;
    }

    addResult(id, result) {
        this._results[id] = result;
    }

    result(id) {
        if (this._results.hasOwnProperty(id)) 
            return this._results[id];

        return null;
    }

    hasAction(id) {
        return this._actions.hasOwnProperty(id);
    }

    hasResult(id) {
        return this._results.hasOwnProperty(id);
    }

    anyAction() {
        return Object.keys(this._actions).length > 0
    }

    anyResult() {
        return Object.keys(this._results).length > 0
    }

    removeAction(id) {
        if (!this.hasAction(id)) 
            return false;
        
        delete this._actions[id];
        return true;
    }

    removeResult(id) {
        if (!this.hasResult(id))
            return false;

        delete this._results[id];
        return true;
    }

    countActions() {
        return Object.keys(this._actions).length;
    }

    countResults() {
        return Object.keys(this._results).length;
    }

    actions() {
        return this._actions;
    }

    results() {
        return this._results;
    }

    firstAction() {
        if (!this.anyAction())
            return null;

        return this._actions[Object.keys(this._actions)[0]];
    }

    firstResult() {
        if (!this.anyResult())
            return null;

        return this._results[Object.keys(this._results)[0]];
    }
}

export default Scenario;