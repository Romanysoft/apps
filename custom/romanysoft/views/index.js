(function($) {
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = window.UI.c$;

    function update(){
        var htmlContent = '';

        var ViewIndex = window.RTYData.ViewIndex;

        /** update menuNavs**/
        htmlContent = template('templ_menu_nav', {menuNavs: ViewIndex.menuNavs});
        $('#block-menu-menu-top-menu').html(htmlContent);

        /** update navbar**/
        htmlContent = template('templ_navbar_nav', {navBars: ViewIndex.navBars});
        $('#navbar > div > div.navbar-collapse.collapse > nav').html(htmlContent);

        /** update promo**/
        htmlContent = template('templ_slide_promo', ViewIndex.slidePromo);
        $('#block-block-5').html(htmlContent);

        /** update slides show**/
        htmlContent = template('templ_slide_show', {imageList: ViewIndex.slideShow.imageList});
        $('#block-views-slideshow-block > div > div').html(htmlContent);

        /** update about content **/
        $('#main-page-content > h1').html('About ' + window.RTYConfig.appName);
        htmlContent = template('templ_about_show', ViewIndex.aboutShow);
        $('#node-1 > div > div').html(htmlContent);


        /** update support os platforms **/
        $('#block-block-6 > div.windows-version.col-right').html(window.RTYConfig.supportPlatforms);


        /** update Lastest News **/
        htmlContent = template('templ_latestnews_show', ViewIndex.newsShow);
        $('#block-views-latest-news-block > div').html(htmlContent);

        /** update features **/
        htmlContent = template('templ_features', ViewIndex.Features);
        $('#bot-content > div > div:nth-child(2)').html(htmlContent);


        /** update footer **/
        htmlContent = template('templ_footer', {copyright: window.RTYConfig.copyright});
        $('#footer').html(htmlContent);
        $('#footer .container').css({background: "none"})



    }

    c$.MC.add(update);
})(jQuery);
