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
        this.description = null;
    }

    /**
     * Sets description property.
     * @param {String} description 
     */
    setAction(description) {
        this.description = description;
    }

    /**
     * @returns {String} description
     */
    getAction() {
        return this.description;
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