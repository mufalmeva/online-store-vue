<template>
    <aside class="sidebar">
        <div class="container">
            <div class="sidebar-menu">
                <h4 class="sidebar-menu-title">Categories</h4>
                <router-link class="link" to="/">Boots <span class="cat-nav-cnt">4749</span></router-link><br/>
                <router-link class="link" to="/">Domestics shoes <span class="cat-nav-cnt">217</span></router-link><br/>
                <router-link class="link" to="/">Sneakers <span class="cat-nav-cnt">7006</span></router-link><br/>
                <router-link class="link" to="/">Moccasins and boatsiders <span class="cat-nav-cnt">167</span></router-link><br/>
                <router-link class="link" to="/">Rubber shoes <span class="cat-nav-cnt">420</span></router-link><br/>
                <router-link class="link" to="/">Sandals <span class="cat-nav-cnt">224</span></router-link><br/>
                <router-link class="link" to="/">Slips-ons <span class="cat-nav-cnt">163</span></router-link><br/>
                <router-link class="link" to="/">Shoes <span class="cat-nav-cnt">1641</span></router-link><br/>
                <router-link class="link" to="/">Shoe care <span class="cat-nav-cnt">171</span></router-link><br/>
                <router-link class="link" to="/">Espadrilles <span class="cat-nav-cnt">22</span></router-link><br/>
                <router-link class="link" to="/">Shoelaces <span class="cat-nav-cnt">9</span></router-link><br/>
                <router-link class="link" to="/">Аксессуары <span class="cat-nav-cnt">16929</span></router-link><br/>
                <router-link class="link" to="/">Premium <span class="cat-nav-cnt">5807</span></router-link><br/>
                <router-link class="link" to="/">Sport <span class="cat-nav-cnt">16302</span></router-link><br/>
            </div>
        </div>
    </aside>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>
    .sidebar {
        width: 224px;
        padding: 5px;
        position: absolute;
        display: table-cell;
        height: 100%;
        letter-spacing: 0;
        margin: 0;
        font-size: 12px;
        line-height: 18px;
        font-family: 'Open Sans',sans-serif;
        color: #222;
    }
    .link {
        margin-bottom: 25px;
    }
    .cat-nav-cnt {
        color: #bbb;
        margin-left: 0;
        font-size: 9px;
    }
    .sidebar-menu {
        margin: 0px 10px;
    }
    .sidebar-menu-title {
        margin-bottom: 50px;
    }
    .sidebar-menu.link {
        padding-left: 15px;
    }
</style>