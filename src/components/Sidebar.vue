<template>
    <aside class="sidebar">
        <div class="container">
            <h4>Categories</h4>
            <router-link class="link" to="/">Ботинки <span class="cat-nav-cnt">4749</span></router-link><br/>
            <router-link class="link" to="/">Домашняя обувь <span class="cat-nav-cnt">217</span></router-link><br/>
            <router-link class="link" to="/">Кроссовки и кеды <span class="cat-nav-cnt">7006</span></router-link><br/>
            <router-link class="link" to="/">Мокасины и топсайдеры <span class="cat-nav-cnt">167</span></router-link><br/>
            <router-link class="link" to="/"> Резиновая обувь <span class="cat-nav-cnt">420</span></router-link><br/>
            <router-link class="link" to="/">Сандалии <span class="cat-nav-cnt">224</span></router-link><br/>
            <router-link class="link" to="/">Сапоги <span class="cat-nav-cnt">152</span></router-link><br/>
            <router-link class="link" to="/">Слипоны <span class="cat-nav-cnt">163</span></router-link><br/>
            <router-link class="link" to="/">Туфли <span class="cat-nav-cnt">1641</span></router-link><br/>
            <router-link class="link" to="/">Уход за обувью <span class="cat-nav-cnt">171</span></router-link><br/>
            <router-link class="link" to="/">Эспадрильи <span class="cat-nav-cnt">22</span></router-link><br/>
            <router-link class="link" to="/">Шнурки <span class="cat-nav-cnt">9</span></router-link><br/>
            <router-link class="link" to="/">Одежда <span class="cat-nav-cnt">48285</span></router-link><br/>
            <router-link class="link" to="/">Аксессуары <span class="cat-nav-cnt">16929</span></router-link><br/>
            <router-link class="link" to="/">Premium <span class="cat-nav-cnt">5807</span></router-link><br/>
            <router-link class="link" to="/">Спорт <span class="cat-nav-cnt">16302</span></router-link><br/>
            <router-link class="link" to="/">Красота <span class="cat-nav-cnt">1584</span></router-link><br/>
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
</style>