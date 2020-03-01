<template>
    <aside class="col-lg-3 col-md-3">
        <div class="sidebar">
            <div class="sidebar-menu">
                <h4 class="sidebar-menu-title">Categories</h4>
                <ul>
                    <li v-for="category in categories" >
                        <router-link class="link" :to="{name:gender+'ProductsByCategories', params:{category:category}}">{{category}} <span class="cat-nav-cnt">167</span></router-link>
                    </li>
                    <li><router-link class="link" :to="{name:gender+'ProductsByCategories', params:{category:'Accessories'}}">Аксессуары
                        <span class="cat-nav-cnt">16929</span></router-link></li>
                    <li><router-link class="link" :to="{name:gender+'ProductsByCategories', params:{category:'Premium'}}">Premium
                        <span class="cat-nav-cnt">5807</span></router-link></li>
                    <li><router-link class="link" :to="{name:gender+'ProductsByCategories', params:{category:'Sport'}}">Sport
                        <span class="cat-nav-cnt">16302</span></router-link></li>
                </ul>
            </div>
        </div>
    </aside>
</template>

<script>
    export default {
        name: "Sidebar",
        computed: {
            gender() {
                return this.$store.state.filters['gender'];
            },
            categories(){
                return this.$store.state.categories;
            }
        },
    }
</script>

<style scoped>
    .link {
        margin-bottom: 25px;
    }
    .cat-nav-cnt {
        color: #bbb;
        margin-left: 0;
        font-size: 9px;
    }
    .sidebar-menu {
        margin: 0 10px;
    }
    .sidebar-menu-title {
        margin-bottom: 50px;
    }
    .sidebar-menu.link {
        padding-left: 15px;
    }
</style>