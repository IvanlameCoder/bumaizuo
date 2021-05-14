<template>
    <div>
        <h1>navbar</h1>
        <button @click="handleClick">打开</button>
              <slot name="slotBtn"></slot>
    </div>
</template>
<script>
export default {
    methods:{
        handleClick(){
            this.$emit('myEvent');
        }
    }
}
</script>