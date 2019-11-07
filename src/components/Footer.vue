<template>
    <div id="footer" class="">
        <div class="container justify-content-center">
            <div  class="footer-title justify-content-center" style="text-align: center">
                    <div class="m-b-20">
                        <a href="/" title="Sapato">
                            SAPATO
                        </a>
                    </div>
                </div>
            <div class="footer-menu">
                    <ul class="footer-menu-list" style="display: inline-flex">
                        <li><a class="bttn-underline" href="/page/oferta">Политика конфиденциальности и оферта</a></li>
                        <li><a class="bttn-underline" href="/page/agreement">Пользовательское соглашение</a></li>
                        <li><a class="bttn-underline" href="/page/exchange">Условия обмена и возврата</a></li>
                        <li><a class="bttn-underline" href="/page/feedback">Обратная связь</a></li>
                        <li><a class="bttn-underline" href="/collection/all">Каталог</a></li>
                        <li><a class="bttn-underline" href="/page/contacts">Контакты</a></li>
                    </ul>
                </div>
            <div class="footer-social">
                    <ul class="social no-list-style h4-like p-0 m-t-0 m-b-0">
                        <li class="inline-middle m-l-5 m-r-5">
                            <a target="_blank" href="https://www.vk.com" title="vk">
                                <div class="fab fa-vk" aria-hidden="true"></div>
                            </a>
                        </li>
                        <li class="inline-middle m-l-5 m-r-5">
                            <a target="_blank" href="https://www.twitter.com" title="twitter">
                                <div class="fab fa-twitter" aria-hidden="true"></div>
                            </a>
                        </li>
                        <li class="inline-middle m-l-5 m-r-5">
                            <a target="_blank" href="https://www.fb.com" title="facebook">
                                <div class="fab fa-facebook" aria-hidden="true"></div>
                            </a>
                        </li>
                        <li class="inline-middle m-l-5 m-r-5">
                            <a target="_blank" href="https://www.instagram.com" title="instagram">
                                <div class="fab fa-instagram" aria-hidden="true"></div>
                            </a>
                        </li>
                        <li class="inline-middle m-l-5 m-r-5">
                            <a target="_blank" href="https://www.ok.ru" title="odnoklassniki">
                                <div class="fab fa-odnoklassniki" aria-hidden="true"></div>
                            </a>
                        </li>
                    </ul>
                    <div class="cell-12 buy-vars text-center">
                    </div>
                </div>
            <div class="footer-phone">
                    <div class="m-b-10">
                        <a class="h4-like" href="callto:"></a>
                    </div>
                    <div class="m-b-30">
                        <a class="js-modal bttn-underline bold-border" href="#feedback-modal">Обратный звонок</a>
                    </div>
                </div>
        </div>
        <hr/>
        <div class="footer-app_name">
            <small><a class="bttn-underline" href="/">Интернет-магазин SAPATO</a></small>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
#footer {
    min-height: 300px;
    padding-top: 50px;
    background-color: #f8f8f8;
    color: #8d9498!important;
}
.footer-menu-list li {
    margin-right: 25px;
}
    .footer-title,.footer-menu,.footer-social,.footer-app_name,.footer-phone {
        text-align: center;
        padding: 25px 0 25px 0;
    }
</style>