<script>
import {store} from '../store';
import axios from 'axios';


// importazione singlecard
import singleCard from './singleCard.vue';
export default {
    data() {
        return {
            store,
        };
    },
    methods: {
        showCard(){
            let myUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0';

            if(this.store.selectedCard != 0){
                myUrl += '?archetype='+store.selectedCard;
            }


            axios.get(myUrl).then((response)=>{
            console.log(response)
            this.store.cardLists = response.data.data
        })
        }
    },
    components: {
        singleCard,
    },

    mounted(){
        
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <form class="py-3">
                        <select  class="form-select"
                        v-model="store.selectedCard"
                        @change= "showCard()" aria-label="Default select example">
                            <option value="0">
                                Scegli il tuo archetipo
                            </option>
                            <option
                                :value="elem.archetype_name"
                                v-for="(elem ,i) in store.archetypes" :key="i">
                                {{elem.archetype_name}}
                            </option>
                        </select>
                    </form>
                </div>
            </div>
            <div class="row px-2">
                <div class="col">
                    <div class="row">
                        <div class="col bg-black fs-4 text-white fw-bold">
                            FOUND {{this.store.cardLists.length }} CARDS 
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2 text-center mx-3 " v-for=" (elem,i) in this.store.cardLists" :key="elem.name+i">
                            <singleCard :card = "elem"/>
                        </div>                        
                    </div>
                </div>
            </div>
            
        </div>
    </main>
</template>

<style lang="scss" scoped>

main{
    background-color: orange;
}

</style>
