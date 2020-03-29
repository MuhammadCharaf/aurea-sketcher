<template>
    <div class="container">
        <div class="box">
            <div class="menu">
                <div v-for="template in templates" :key="template.label">
                    <p class="menu-label">{{ template.label }}</p>
                    <ul class="menu-list">
                        <li v-for="action in template.actions" :key="action">
                            <a>{{ action }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            templates: {
                browser: {
                    label: "Browser/GUI",
                    actions: [
                        'I switch to main window [in "<ui driver instance id>"]',
                        'I switch to window "<window name>" [in "<ui driver instance id>"]',
                        'I <action> on "<selector>" [in "<ui driver instance id>"]'
                    ]
                }
            }
        };
    }
};
</script>