<template>
  <div class="section">
    <div class="container">
      <div class="menu">
        <scenario-title :scenario="scenario" />
        <div
          v-for="item in scenario.rows()"
          :key="item.id"
          class="menu-list"
        >
          <scenario-row
            :view-model="item"
            :unique-id="item.id"
            @sr-add="onAdd"
            @sr-remove="onRemove"
            @sr-focus="onFocus"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScenarioRow from './ScenarioRow.vue';
import ScenarioTitle from './ScenarioTitle.vue';

import ScenarioInstruction from '../data/scenarioInstruction';
import Scenario from '../data/scenario';

export default {
  components: { ScenarioRow, ScenarioTitle },
  data() {
    return {
      selectedRow: null,
      scenario: new Scenario(),
    };
  },
  created() {
    this.addRow();
  },
  methods: {
    onAdd() {
      this.addRow();
      this.$forceUpdate();
    },
    onRemove() {
      if (!this.selectedRow
          || !this.scenario.any()
          || this.selectedRow === this.scenario.first()) {
        return;
      }

      const id = this.selectedRow.getId();
      this.scenario.remove(id);
      this.selectedRow = null;

      if (this.scenario.any()) {
        this.scenario.first().setPronoun('When');
      }

      this.$forceUpdate();
    },
    onFocus(id) {
      if (!this.scenario.has(id)) return;

      this.selectedRow = this.scenario.get(id);
    },
    addRow() {
      const id = Date.now().toString();
      const number = this.scenario.size() + 1;

      const action = new ScenarioInstruction();
      action.setId(id);
      action.setNumber(number);
      action.setPronoun(action.number > 1 ? 'And' : 'When');

      this.scenario.add(id, action);
      this.$forceUpdate();
    },
  },
};
</script>
