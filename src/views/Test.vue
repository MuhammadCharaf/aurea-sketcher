<template>
    <div class="container">
        <table class="table is-hoverable is-fullwidth">
            <scenario-action :actions="actions"/>
        </table>
    </div>
</template>

<script>
import ScenarioAction from '../components/ScenarioAction.vue'

export default {
    components: {
        ScenarioAction
    },
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

    }
};
</script>