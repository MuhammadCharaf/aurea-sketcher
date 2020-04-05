<template>
    <div class="container">
        <table class="table is-hoverable is-fullwidth">
            <scenario-action 
            @add-action="onAddAction" 
            @remove-action="onRemoveAction"/>
        </table>
    </div>
</template>

<script>
import ScenarioAction from '../components/ScenarioAction.vue'

export default {
    mounted() {
        this.scenarioActions.push({
            id: 1,
            action: ''
        })
    },
    components: { ScenarioAction },
    data() {
        return {
            scenarioActions: []
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