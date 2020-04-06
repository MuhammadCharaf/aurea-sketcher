/**
 * Represents Scenario Action data model.
 */
class ScenarioActionData {
    /**
     * Constructor
     */
    constructor() {
        this.id = Date.now().toString();
        this.number = null;
        this.action = null;

        console.log(this.id)
    }

    /**
     * Sets action property.
     * @param {String} action 
     */
    setAction(action) {
        this.action = action;
    }

    /**
     * Sets number property.
     * @param {Number} number 
     */
    setNumber(number) {
        this.number = number;
    }

    /**
     * @returns {Number} id
     */
    getId() {
        return this.id;
    }
}

export default ScenarioActionData;