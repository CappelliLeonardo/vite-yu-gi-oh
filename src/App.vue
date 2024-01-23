<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
// importo store 
import {store} from './store';

export default {
    data() {
        return {
            store,
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter

    },  
    methods: {
        
    },

    mounted(){
        
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0').then((response)=>{
            console.log(response)
            this.store.cardLists = response.data.data
        }),
        
        // effetuo la chiamata ad axios
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then((response)=>{
            console.log(response.data)
            this.store.archetypes = response.data
        })
        
    }
}
</script>

<template>
    
    <AppHeader />

    <AppMain @activeCard = "showCard()"/>

    <AppFooter />

</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
</style>
