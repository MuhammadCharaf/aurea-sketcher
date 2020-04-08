<template>
    <div class="section">
        <div class="container">
            <table class="table is-hoverable is-fullwidth">
                <div class="field" v-for="(item, cid) in actionItems" :key="cid">
                    <scenario-row 
                    :action="item"
                    :cid="cid"
                    @add-action="onAddAction" 
                    @remove-action="onRemoveAction"
                    @focus-action="onFocus"/>
                </div>
            </table>
        </div>
    </div>
</template>

<script>
import ScenarioRow from '../components/ScenarioRow.vue'
import Action from '../data/action.js'

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
            if (this.selectedActionItem && Object.keys(this.actionItems).length > 0) {
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

            action.setId(cId);
            action.setNumber(Object.keys(action).length);

            this.actionItems[cId] = action;
            this.$forceUpdate();
        },
    }
};
</script>