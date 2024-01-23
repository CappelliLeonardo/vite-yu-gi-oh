<script>


export default {
    data() {
        return {

        };
    },
    methods: {
        
    },
    props: {
        card : Object,
    },
}

</script>

<template>
    <div class="card my-3" style="width: 15rem;">
        <img :src=" card.card_images[0].image_url" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ card.name }}</h5>
            <p class="card-text"> {{ card.archetype }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.card-body{
    height: 100px;
}
</style>
