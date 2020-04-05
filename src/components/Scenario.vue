<template>
    <div class="container">
        <table class="table is-hoverable is-fullwidth">
            <scenario-action 
            :actions="actions" 
            @add-action="onAddAction" 
            @remove-action="onRemoveAction"/>
        </table>
    </div>
</template>

<script>
import ScenarioAction from './ScenarioAction.vue'

export default {
    components: { ScenarioAction },
    data() {
        return {
            actions: [
                'I switch to main window [in "<ui driver instance id>"]',
                'I <action> "<value>" to "<selector>" value [in "<ui driver instance id>"]',
                'I set "<selector>" value to "<value>" [in "<ui driver instance id>"]'
            ],
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