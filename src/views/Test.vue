<template>
    <div class="section">
        <div class="container">
            <div class="menu">
                <div class="field is-horizontal menu-label">
                    <div class="field-label is-small">
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
                <ul class="menu-list" v-for="(item, cid) in actionItems" :key="cid">
                    <li>
                        <scenario-row
                            :action="item"
                            :cid="cid"
                            @add-action="onAddAction"
                            @remove-action="onRemoveAction"
                            @focus-action="onFocus"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import ScenarioRow from "../components/ScenarioRow.vue";
import Action from "../data/action.js";

export default {
    created() {
        this.addActionItem();
    },
    components: { ScenarioRow },
    data() {
        return {
            actionItems: {},
            selectedActionItem: null,
            renderingKey: 0
        };
    },
    methods: {
        onAddAction() {
            this.addActionItem();
            this.$forceUpdate();
        },
        onRemoveAction() {
            if (
                this.selectedActionItem &&
                Object.keys(this.actionItems).length > 0
            ) {
                let cId = this.selectedActionItem.getId();

                delete this.actionItems[cId];
                this.selectedActionItem = null;

                this.$forceUpdate();
            }
        },
        onFocus(cid) {
            if (this.actionItems.hasOwnProperty(cid)) {
                this.selectedActionItem = this.actionItems[cid];
            }
        },
        addActionItem() {
            let cId = Date.now().toString();

            let action = new Action();
            action.id = cId;
            action.number = Object.keys(this.actionItems).length + 1;
            action.pronoun = action.number > 1 ? "And" : "When";

            this.actionItems[cId] = action;
            this.$forceUpdate();
        }
    }
};
</script>