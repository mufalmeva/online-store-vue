<template>
    <div class="col-lg-9 col-md-9">
        <h4 style="display: inline-block">My Orders</h4>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#menu1">Текущие заказы</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#menu2">История заказов</a>
            </li>
        </ul>
        <div class="tab-content">
            <div id="menu1" class="container tab-pane active"><br>
                <ul v-if="currentOrdersCount">
                    <li v-for="item in currentOrders"
                        :key="item.id"
                        class="flex-col cart-list__item">
                        <img :src="makeImagePath(item)" class="thumbnail" alt="">
                        <div class="flex-col cart-list__item__details">
                            <div>
                                <p>{{ item.name }}</p>
                                <p>Size: {{ item.size }}</p>
                                <p>Color: {{ item.color }}</p>
                            </div>
                            <p>${{ item.price }}</p>
                        </div>
                    </li>
                </ul>
                <ul v-else>
                    <li>
                        Currently you do not have any order <br/>
                        <button class="btn btn--grey"> Go back to catalogue</button>
                    </li>
                </ul>
            </div>
            <div id="menu2" class="container tab-pane fade"><br>
                <ul v-if="allOrdersCount">
                    <li v-for="item in allOrders"
                        :key="item.id"
                        class="flex-col cart-list__item">
                        <img :src="makeImagePath(item)" class="thumbnail" alt="">
                        <div class="flex-col cart-list__item__details">
                            <div>
                                <p>{{ item.name }}</p>
                                <p>Size: {{ item.size }}</p>
                                <p>Color: {{ item.color }}</p>
                            </div>
                            <p>${{ item.price }}</p>
                        </div>
                    </li>
                </ul>
                <ul v-else>
                    <li>
                        Currently you do not have any order <br/>
                        <button class="btn btn--grey"> Go back to catalogue</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {imagePath} from "@/mixins/imagePath";

    export default {
        name: "Profile",
        mixins: [imagePath],
        computed: {
            currentOrders() {
                return this.$store.getters.currentOrders;
            },
            currentOrdersCount() {
                return this.currentOrders.length;
            },
            allOrders() {
                return this.$store.getters.allOrders;
            },
            allOrdersCount() {
                return this.allOrders.length;
            },
        }
    }
</script>

<style scoped>

</style>