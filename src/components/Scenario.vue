<template>
    <div class="section">
        <div class="container">
            <div class="menu">
                <div class="field is-horizontal menu-label">
                    <div class="field-label is-normal">
                        <label class="label">Scenario</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <p class="control">
                                <input
                                    class="input is-small is-rounded"
                                    type="text"
                                    placeholder="Scenario Title"
                                />
                            </p>
                        </div>
                    </div>
                </div>
                <div class="menu-list" v-for="(item, id) in scenario.actions()" :key="id">
                    <scenario-row
                        :action="item"
                        :cid="id"
                        @add-action="onAddAction"
                        @remove-action="onRemoveAction"
                        @focus-action="onFocus"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ScenarioRow from "../components/ScenarioRow.vue";
import Action from "../data/action.js";
import Scenario from "../data/scenario.js";

export default {
    created() {
        this.addActionItem();
    },
    components: { ScenarioRow },
    data() {
        return {
            actionItems: {},
            selectedActionItem: null,
            scenario: new Scenario()
        };
    },
    methods: {
        onAddAction() {
            this.addActionItem();
            this.$forceUpdate();
        },
        onRemoveAction() {
            if (
                !this.selectedActionItem ||
                !this.scenario.anyAction() ||
                this.selectedActionItem === this.scenario.firstAction()
            )
                return;

            let id = this.selectedActionItem.getId();
            this.scenario.removeAction(id);
            this.selectedActionItem = null;

            if (this.scenario.anyAction()) {
                this.scenario.firstAction().setPronoun("When");
            }

            console.log(this.scenario.actions());
            this.$forceUpdate();
        },
        onFocus(id) {
            if (!this.scenario.hasAction(id)) return;

            this.selectedActionItem = this.scenario.action(id);
        },
        addActionItem() {
            let id = Date.now().toString();
            let number = this.scenario.countActions() + 1;

            let action = new Action();
            action.setId(id);
            action.setNumber(number);
            action.setPronoun(action.number > 1 ? "And" : "When");

            this.scenario.addAction(id, action);
            this.$forceUpdate();
        }
    }
};
</script>