<template>
    <div>
        <div class="field is-horizontal">
            <div class="field-label is-small">
                <label class="label">{{ action.pronoun }}</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <p class="control">
                        <input
                            class="input is-small is-rounded"
                            type="text"
                            v-model="action.description"
                            placeholder="Scenario Action"
                            @input="filter"
                            @keydown.down="down"
                            @keydown.up="up"
                            @keydown.enter="enter"
                            @keydown.esc="reset"
                            @keyup.ctrl.13="addAction"
                            @keyup.ctrl.8="removeAction"
                            @focus="focus"
                        />
                    </p>
                </div>
            </div>
        </div>
        <div class="box" v-if="isMenuActive">
            <div class="menu">
                <ul class="menu-list">
                    <li v-for="item in items" :key="item.description">
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
import Action from "../data/action";

export default {
    props: {
        cid: String,
        action: Action
    },
    data() {
        return {
            actions: [
                'I switch to main window [in "<ui driver instance id>"]',
                'I <action> "<value>" to "<selector>" value [in "<ui driver instance id>"]',
                'I set "<selector>" value to "<value>" [in "<ui driver instance id>"]'
            ],
            activeIndex: 0,

            // Component properties
            items: [],
            isMenuActive: false,
            text: "",
            label: "When"
        };
    },
    methods: {
        filter(event) {
            if (this.action.description.length !== 0) {
                let result = [...this.actions].filter(x =>
                    x
                        .toUpperCase()
                        .includes(this.action.description.toUpperCase())
                );

                if (result.length !== 0) {
                    this.isMenuActive = true;
                    this.activeIndex = 0;
                    this.items = result.map(x => {
                        return { description: x, isActive: false };
                    });
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
        down(event) {
            if (this.isMenuActive && this.activeIndex < this.items.length - 1) {
                this.activeIndex++;
                this.refreshItems();
            }
        },
        up(event) {
            if (this.isMenuActive && this.activeIndex > 0) {
                this.activeIndex--;
                this.refreshItems();
            }
        },
        enter(event) {
            if (this.isMenuActive) {
                this.action.description = this.items[
                    this.activeIndex
                ].description;
                this.reset();
            }
        },
        refreshItems() {
            this.items.forEach(item => {
                item.isActive = false;
            });
            this.items[this.activeIndex].isActive = true;
        },
        reset() {
            this.activeIndex = 0;
            this.items = [];
            this.isMenuActive = false;
        },
        addAction() {
            this.$emit("add-action");
        },
        removeAction() {
            this.$emit("remove-action");
        },
        focus(event) {
            this.$emit("focus-action", this.cid);
        }
    }
};
</script>