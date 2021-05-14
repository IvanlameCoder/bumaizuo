<template>
    <div>
        center
    </div>
</template>
<script>
export default {
    mounted(){
        //检查是否有token，如果没有，重新定向到login
        if (!localStorage.getItem("token")) {
            this.$router.push('/login');
        }
    }
}
</script>