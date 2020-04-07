/**
 * Represents Scenario Action data model.
 */
class ScenarioActionData {
    /**
     * Constructor
     */
    constructor() {
        this.id = null;
        this.number = null;
        this.action = null;
    }

    /**
     * Sets action property.
     * @param {String} action 
     */
    setAction(action) {
        this.action = action;
    }

    /**
     * @returns {String} action
     */
    getAction() {
        return this.action;
    }

    /**
     * Sets number property.
     * @param {Number} number 
     */
    setNumber(number) {
        this.number = number;
    }

    /**
     * @returns {Number} number
     */
    getNumber() {
        return this.number;
    }

    /**
     * Sets id property
     * @param {String} id 
     */
    setId(id) {
        this.id = id;
    }

    /**
     * @returns {String} id
     */
    getId() {
        return this.id;
    }
}

export default ScenarioActionData;