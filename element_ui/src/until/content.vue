<template>
    <div>
        <h2>{{title}}</h2>
        <div v-for="(item,index) in subtitle"
        :key="index"
        >
            <h4>{{item}}</h4>
            <p>
                
            </p>
        </div>
        <slot/>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            value:''
        },
        subtitle:{
            type:Array,
            value:[]
        },
        data:{
            type:Object,
            value:{}
        }

    }
}
</script>

<style lang="scss" >
    
</style>

