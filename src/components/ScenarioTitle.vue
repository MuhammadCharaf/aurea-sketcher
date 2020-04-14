<template>
    <div class="field is-horizontal menu-label">
        <div class="field-label is-normal">
            <label class="label">Scenario:</label>
        </div>
        <div class="field-body">
            <div class="field">
                <p class="control">
                    <input
                        class="input is-small is-rounded"
                        type="text"
                        placeholder="Scenario Title"
                        v-model="scenario.title"
                    />
                </p>
            </div>
        </div>
    </div>
</template>


<script>
import Scenario from '../data/scenario'

export default {
    props: { scenario : Scenario }
}
</script>
