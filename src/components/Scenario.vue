<template>
  <div class="section">
    <div class="container">
      <div class="menu">
        <scenario-title :scenario="scenario" />
        <div
          v-for="item in scenario.actions()"
          :key="item.id"
          class="menu-list"
        >
          <scenario-row
            :action="item"
            :cid="item.id"
            @add-action="onAddAction"
            @remove-action="onRemoveAction"
            @focus-action="onFocus"
          />
          <!-- <div class="menu-list" v-for="(item, id) in scenario.results()" :key="id">
                    <scenario-row
                        :action="item"
                        :cid="id"
                    /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScenarioRow from './ScenarioRow.vue';
import ScenarioTitle from './ScenarioTitle.vue';
import Action from '../data/action';
import Scenario from '../data/scenario';

export default {
  components: { ScenarioRow, ScenarioTitle },
  data() {
    return {
      selectedActionItem: null,
      scenario: new Scenario(),
    };
  },
  created() {
    this.addActionItem();
  },
  methods: {
    onAddAction() {
      this.addActionItem();
      this.$forceUpdate();
    },
    onRemoveAction() {
      if (
        !this.selectedActionItem
                || !this.scenario.anyAction()
                || this.selectedActionItem === this.scenario.firstAction()
      ) return;

      const id = this.selectedActionItem.getId();
      this.scenario.removeAction(id);
      this.selectedActionItem = null;

      if (this.scenario.anyAction()) {
        this.scenario.firstAction().setPronoun('When');
      }

      this.$forceUpdate();
    },
    onFocus(id) {
      if (!this.scenario.hasAction(id)) return;

      this.selectedActionItem = this.scenario.action(id);
    },
    addActionItem() {
      const id = Date.now().toString();
      const number = this.scenario.countActions() + 1;

      const action = new Action();
      action.setId(id);
      action.setNumber(number);
      action.setPronoun(action.number > 1 ? 'And' : 'When');

      this.scenario.addAction(id, action);
      this.$forceUpdate();
    },
    onAddResult() {

    },
    onRemoveResult() {

    },
    onFocusResult() {

    },
  },
};
</script>
