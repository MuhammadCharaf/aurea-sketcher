import Sequence from './sequence';

class Scenario {
  constructor() {
    this.actions = new Sequence();
    this.results = new Sequence();
  }
}
export default Scenario;
