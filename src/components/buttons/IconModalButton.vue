<template>
    <v-btn
        outlined
        rounded
        text
        @click="toggleOpen"
    >
        <v-icon dark>
            mdi-{{ icon }}
        </v-icon>
    </v-btn>
</template>

<script>
  export default {
    data() {
        return {
            isOpen: this.open
        }
    },
    props: {
        open: Boolean,
        icon: String
    },
    methods: {
        toggleOpen() {
            this.isOpen = !this.isOpen;
            this.$emit('update:open', this.isOpen);
        }
    }
  }
</script>