<script>
import {store} from '../store';
// importazione singlecard
import singleCard from './singleCard.vue';
export default {
    data() {
        return {
            store,
        };
    },
    methods: {

    },
    components: {
        singleCard,
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col">
                    <form class="py-3">
                        <div class="btn-group">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Alien
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Alien</a></li>
                                <li><a class="dropdown-item" href="#">Human</a></li>
                                <li><a class="dropdown-item" href="#">Cyborg</a></li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row px-2">
                <div class="col">
                    <div class="row">
                        <div class="col bg-black fs-4 text-white fw-bold">
                            FOUND 39 CARDS
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2 text-center mx-3 " v-for=" (elem,i) in this.store.cardLists" :key="i">
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
