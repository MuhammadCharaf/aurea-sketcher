<template>
    <div class="container">
        <table class="table is-hoverable is-fullwidth">
            <div class="field" v-for="action in actions" :key="action.id">
                <scenario-action 
                @add-action="onAddAction" 
                @remove-action="onRemoveAction"/>
            </div>
        </table>
    </div>
</template>

<script>
import ScenarioAction from '../components/ScenarioAction.vue'
import ScenarioActionData from '../data/scenarioActionData.js'

export default {
    mounted() {
        this.actions.push(new ScenarioActionData());
        this.actions.push(new ScenarioActionData());
    },
    components: { ScenarioAction },
    data() {
        return {
            actions: []
        };
    },
    methods: {
        onAddAction() {
            console.log('Handling action adding');
        },
        onRemoveAction() {
            console.log('Handling action removing');
        }
    }
};
</script>