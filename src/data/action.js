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
     * Sets pronoun property
     * @param {String} propnoun 
     */
    setPronoun(propnoun) {
        this.propnoun = propnoun;
    }

    /**
     * @returns pronoun
     */
    getPronoun() {
        return this.propnoun;
    }

    /**
     * Sets description property.
     * @param {String} description 
     */
    setDescription(description) {
        this.description = description;
    }

    /**
     * @returns {String} description
     */
    getDescription() {
        return this.description;
    }
}

export default Action;