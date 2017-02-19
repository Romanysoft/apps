(function (window) {

    var appName = "9GridHelper",
        githome =  "https://github.com/Romanysoft/9GridHelper";

    var cg = window.RTYConfig = {
        appName: appName,
        appVersion: '1.0 (build 170217)',
        appID:"com.romanysoft.app.macos.DataStorm",
        documentTitle:appName,
        supportPlatforms: appName + " works on MacOSX 10.7, MacOSX 10.8",
        googleUA:"UA-76676167-1",
        gitHome:githome,
        reportIssueUrl: githome + "/issues",
        changeLogUrl: githome + "/wiki/Changelog",
        wikiUrl: githome + "/wiki",
        romanysoftHome:"//www.romanysoft.com",
        mailto:"mailto:app.romanysoft@gmail.com",
        copyright:"Copyright © " + (new Date()).getFullYear() + " Romanysoft LAB."
    };

   var u = {};

   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   /// index.html
   var ViewIndex = u.ViewIndex = {};
   ViewIndex.menuNavs = [
       //{class:'first leaf', href:'donate.htm', title:'Donate'},
       {class:'leaf', href:cg.gitHome, title:'Developer'},
       {class:'leaf', href:cg.mailto, title:'Contact'},
       //{class:'last leaf', href:'about.htm', title:'About'}
   ];
   ViewIndex.navBars = [
       {class:'first leaf active', href:'index.htm', aClass:'active', title:'Home'},
       {class:'leaf', href:'downloads.htm', aClass:'', title:'Downloads'},
       {class:'leaf', href:'features/features-overview.htm', aClass:'', title:'Features'},
       {class:'last leaf', href:cg.reportIssueUrl, aClass:'', title:'Support'}
   ];
   ViewIndex.slidePromo = {
       caption: '9GridHelper for Professionals',
       version: cg.appVersion,
       releaseInfoHref: '',
       screenshotsHref: ''
   };
   ViewIndex.slideShow = {
       imageList:[
           {src: 'images/res/c1.jpg'},
           {src: 'images/res/c2.jpg'},

       ]
   }
   ViewIndex.aboutShow = {
       p1Content:"9GridHelper is a commonly used for managing user squares, tool locking and unlocking pattern of mobile phone.",
       p2Content:"Most of the time, the surrounding friends often forget to unlock the phone or unlock a pattern of App pattern, resulting in unnecessary economic losses.",
       p3Content:"We initially developed this software, is to help users record their common unlock pattern."
   }
   ViewIndex.newsShow = {
       newsList:[
           {date: "2017-02-19", caption: appName + ' 1.0', href:""}
       ]
   }
   ViewIndex.Features = {
      left:[
        {caption:"Base", img:"images/res/base_64px.png", features:[
          "Support hand-painted patterns",
          "Support random pattern",
          "Support pattern cloning"
        ]}
      ],
      right:[
        {caption:"Advanced", img:"images/res/advance_64px.png", features:[
          "Support pattern storage",
          "Support basic pattern classification, My and Library",
          "Supports custom painted patterns"
        ]}
      ]
   }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// downloads.html
    var ViewDownloads = u.ViewDownloads = {};
    ViewDownloads.menuNavs = [
        //{class:'first leaf', href:'donate.htm', title:'Donate'},
        {class:'leaf', href:cg.gitHome, title:'Developer'},
        {class:'leaf', href:cg.mailto, title:'Contact'},
        //{class:'last leaf', href:'about.htm', title:'About'}
    ];
    ViewDownloads.navBars = [
        {class:'first leaf active', href:'index.htm', aClass:'active', title:'Home'},
        {class:'leaf', href:'downloads.htm', aClass:'', title:'Downloads'},
        {class:'leaf', href:'features/features-overview.htm', aClass:'', title:'Features'},
        {class:'last leaf', href:cg.reportIssueUrl, aClass:'', title:'Support'}
    ];














  window.RTYData = u;

})(window);
