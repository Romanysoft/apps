(function($) {
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = window.UI.c$;

    function update(){
        var htmlContent = '';

        var ViewDownloads = window.RTYData.ViewDownloads;

        /** update menuNavs**/
        htmlContent = template('templ_menu_nav', {menuNavs: ViewDownloads.menuNavs});
        $('#block-menu-menu-top-menu').html(htmlContent);

        /** update navbar**/
        htmlContent = template('templ_navbar_nav', {navBars: ViewDownloads.navBars});
        $('#navbar > div > div.navbar-collapse.collapse > nav').html(htmlContent);

        /** update promo**/
        htmlContent = template('templ_slide_promo', ViewDownloads.slidePromo);
        $('#block-block-5').html(htmlContent);

        /** update slides show**/
        htmlContent = template('templ_slide_show', {imageList: ViewDownloads.slideShow.imageList});
        $('#block-views-slideshow-block > div > div').html(htmlContent);

        /** update about content **/
        $('#main-page-content > h1').html('About ' + window.RTYConfig.appName);
        htmlContent = template('templ_about_show', ViewDownloads.aboutShow);
        $('#node-1 > div > div').html(htmlContent);


        /** update support os platforms **/
        $('#block-block-6 > div.windows-version.col-right').html(window.RTYConfig.supportPlatforms);


        /** update Lastest News **/
        htmlContent = template('templ_latestnews_show', ViewDownloads.newsShow);
        $('#block-views-latest-news-block > div').html(htmlContent);

        /** update features **/
        htmlContent = template('templ_features', ViewDownloads.Features);
        $('#bot-content > div > div:nth-child(2)').html(htmlContent);


        /** update footer **/
        htmlContent = template('templ_footer', {copyright: window.RTYConfig.copyright});
        $('#footer').html(htmlContent);
        $('#footer .container').css({background: "none"})



    }

    c$.MC.add(update);
})(jQuery);
