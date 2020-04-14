<template>
  <div>
    <div class="field is-horizontal">
      <div class="field-label is-small">
        <label class="label">{{ action.getPronoun() }}</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input
              v-model="action.description"
              class="input is-small is-rounded"
              type="text"
              placeholder="Scenario Action"
              @input="filter"
              @keydown.down="down"
              @keydown.up="up"
              @keydown.enter="enter"
              @keydown.esc="reset"
              @keyup.ctrl.13="addAction"
              @keyup.ctrl.8="removeAction"
              @focus="focus"
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
import Action from '../data/action';

export default {
  props: {
    cid: { type: String, default: '' },
    action: Action,
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
    filter() {
      if (this.action.description.length !== 0) {
        const result = [...this.actions].filter((x) => x
          .toUpperCase()
          .includes(this.action.description.toUpperCase()));

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
        this.action.description = event.srcElement.innerText;
        this.reset();
      }
    },
    down() {
      if (this.isMenuActive && this.activeIndex < this.items.length - 1) {
        this.activeIndex += 1;
        this.refreshItems();
      }
    },
    up() {
      if (this.isMenuActive && this.activeIndex > 0) {
        this.activeIndex -= 1;
        this.refreshItems();
      }
    },
    enter() {
      if (this.isMenuActive) {
        this.action.description = this.items[
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
    addAction() {
      this.$emit('add-action');
    },
    removeAction() {
      this.$emit('remove-action');
    },
    focus() {
      this.$emit('focus-action', this.cid);
    },
  },
};
</script>
