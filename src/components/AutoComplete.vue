<template>
    <div class="container">
        <input
            class="input"
            type="text"
            v-model="text"
            placeholder="Placeholder..."
            @input="filter"
        />
        <div class="box" v-if="isMenuActive">
            <div class="menu">
                <ul class="menu-list">
                    <li v-for="item in items" :key="item">
                        <a class="dropdown-item">{{ item }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataItems: [
                'I switch to main window [in "<ui driver instance id>"]',
                'I <action> "<value>" to "<selector>" value [in "<ui driver instance id>"]',
                'I set "<selector>" value to "<value>" [in "<ui driver instance id>"]'
            ],
            items: [
                'I switch to main window [in "<ui driver instance id>"]',
                'I <action> "<value>" to "<selector>" value [in "<ui driver instance id>"]',
                'I set "<selector>" value to "<value>" [in "<ui driver instance id>"]'
            ],
            isMenuActive: true,
            text: ""
        };
    },
    methods: {
        filter(event) {
            if (this.text.length !== 0) {
                let result = [...this.dataItems].filter(x =>
                    x.toUpperCase().includes(this.text.toUpperCase())
                );

                if (result.length !== 0) {
                    this.isMenuActive = true;
                    this.items = result;
                } else {
                    this.isMenuActive = false;
                }
            } else {
                this.isMenuActive = false;
            }
        }
    }
};
</script>