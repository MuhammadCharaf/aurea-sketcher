<template>
  <div>
    <div class="field is-horizontal">
      <div class="field-label is-small">
        <label class="label">{{ viewModel.getPronoun() }}</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input
              v-model="viewModel.description"
              class="input is-small is-rounded"
              type="text"
              placeholder="Scenario Action"
              @input="onInput"
              @keydown.down="onKeydownDown"
              @keydown.up="onKeydownUp"
              @keydown.enter="onKeydownEnter"
              @keydown.esc="reset"
              @keyup.ctrl.13="onKeyupCtrlEnter"
              @keyup.ctrl.8="onKeyupCtrlDelete"
              @focus="onFocus"
            >
          </p>
        </div>
      </div>
    </div>
    <div
      v-if="isMenuActive"
      class="box"
    >
      <div class="menu">
        <ul class="menu-list">
          <li
            v-for="item in items"
            :key="item.description"
          >
            <a
              :class="{ 'dropdown-item': true, 'is-active': item.isActive }"
              @click="select"
            >{{ item.description }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ScenarioInstruction from '../data/scenarioInstruction';

export default {
  props: {
    uniqueId: { type: String, default: '' },
    viewModel: ScenarioInstruction,
  },
  data() {
    return {
      actions: [
        'I switch to main window [in "<ui driver instance id>"]',
        'I <action> "<value>" to "<selector>" value [in "<ui driver instance id>"]',
        'I set "<selector>" value to "<value>" [in "<ui driver instance id>"]',
      ],
      activeIndex: 0,

      // Component properties
      items: [],
      isMenuActive: false,
      text: '',
      label: 'When',
    };
  },
  methods: {
    onInput() {
      if (this.viewModel.description.length !== 0) {
        const result = [...this.viewModels].filter((x) => x
          .toUpperCase()
          .includes(this.viewModel.description.toUpperCase()));

        if (result.length !== 0) {
          this.isMenuActive = true;
          this.activeIndex = 0;
          this.items = result.map((x) => ({ description: x, isActive: false }));
          this.refreshItems();
        } else {
          this.reset();
        }
      } else {
        this.reset();
      }
    },
    select(event) {
      if (this.isMenuActive) {
        this.viewModel.description = event.srcElement.innerText;
        this.reset();
      }
    },
    onKeydownDown() {
      if (this.isMenuActive && this.activeIndex < this.items.length - 1) {
        this.activeIndex += 1;
        this.refreshItems();
      }
    },
    onKeydownUp() {
      if (this.isMenuActive && this.activeIndex > 0) {
        this.activeIndex -= 1;
        this.refreshItems();
      }
    },
    onKeydownEnter() {
      if (this.isMenuActive) {
        this.viewModel.description = this.items[
          this.activeIndex
        ].description;
        this.reset();
      }
    },
    refreshItems() {
      this.items.forEach((item) => {
        const localItem = item;
        localItem.isActive = false;
      });
      this.items[this.activeIndex].isActive = true;
    },
    reset() {
      this.activeIndex = 0;
      this.items = [];
      this.isMenuActive = false;
    },
    onKeyupCtrlEnter() {
      this.$emit('sr-add');
    },
    onKeyupCtrlDelete() {
      this.$emit('sr-remove');
    },
    onFocus() {
      this.$emit('sr-focus', this.uniqueId);
    },
  },
};
</script>
