<template>
    <div class="container">
        <input
            class="input"
            type="text"
            v-model="text"
            placeholder="Placeholder..."
            @input="filter"
            @keydown.down="down"
            @keydown.up="up"
            @keydown.enter="enter"
            @keydown.esc="reset"
        />
        <div class="box" v-if="isMenuActive">
            <div class="menu">
                <ul class="menu-list">
                    <li v-for="item in items" :key="item.description">
                        <a
                            :class="{ 'dropdown-item': true, 'is-active': item.isActive }"
                            @click="select"
                        >{{ item.description }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.isMenuActive = false;
    },
    data() {
        return {
            actions: [
                'I switch to main window [in "<ui driver instance id>"]',
                'I <action> "<value>" to "<selector>" value [in "<ui driver instance id>"]',
                'I set "<selector>" value to "<value>" [in "<ui driver instance id>"]'
            ],
            items: [
                {
                    description:
                        'I switch to main window [in "<ui driver instance id>"]',
                    isActive: false
                },
                {
                    description:
                        'I <action> "<value>" to "<selector>" value [in "<ui driver instance id>"]',
                    isActive: false
                },
                {
                    description:
                        'I set "<selector>" value to "<value>" [in "<ui driver instance id>"]',
                    isActive: false
                }
            ],
            isMenuActive: true,
            text: "",
            activeIndex: 0
        };
    },
    methods: {
        filter(event) {
            if (this.text.length !== 0) {
                let result = [...this.actions].filter(x =>
                    x.toUpperCase().includes(this.text.toUpperCase())
                );

                if (result.length !== 0) {
                    this.isMenuActive = true;
                    this.activeIndex = 0;
                    this.items = result.map(x => {
                        return { description: x, isActive: false };
                    });
                    this.refreshItems();
                } else {
                    this.reset();
                }
            } else {
                this.reset();
            }
        },
        select(event) {
            if (this.isMenuActive) {
                this.text = event.srcElement.innerText;
                this.reset();
            }
        },
        down(event) {
            if (this.isMenuActive && this.activeIndex < this.items.length - 1) {
                this.activeIndex++;
                this.refreshItems();
            }
        },
        up(event) {
            if (this.isMenuActive && this.activeIndex > 0) {
                this.activeIndex--;
                this.refreshItems();
            }
        },
        enter(event) {
            if (this.isMenuActive) {
                this.text = this.items[this.activeIndex].description;
                this.reset();
            }
        },
        refreshItems() {
            this.items.forEach(item => {
                item.isActive = false;
            });
            this.items[this.activeIndex].isActive = true;
        },
        reset() {
            this.activeIndex = 0;
            this.items = [];
            this.isMenuActive = false;
        }
    }
};
</script>