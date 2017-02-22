(function (window) {

    var appName = "AiTictactoe",
        githome =  "https://github.com/Romanysoft/AiTictactoe";

    var cg = window.RTYConfig = {
        appName: appName,
        appVersion: '1.0 (build 170222)',
        appID:"com.romanysoft.app.macos.pAiTictactoe",
        documentTitle:appName,
        supportPlatforms: appName + " works on MacOSX 10.7, MacOSX 10.8, MacOSX10.9, MacOSX10.10, MacOSX10.11," +
        " MacOSX10.12",
        googleUA:"UA-76676167-1",
        gitHome:githome,
        reportIssueUrl: githome + "/issues",
        changeLogUrl: githome + "/wiki/Changelog",
        wikiUrl: githome + "/wiki",
        macAppStoreUrl: "https://itunes.apple.com/us/app/9gridhelper/id1207289111?l=zh&ls=1&mt=12",
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
       {class:'leaf', href:'features.htm', aClass:'', title:'Features'},
       {class:'last leaf', href:cg.reportIssueUrl, aClass:'', title:'Support'}
   ];
   ViewIndex.slidePromo = {
       caption: 'AiTictactoe',
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
       p1Content:"The game of playing sth: horizontal, vertical, oblique 3 grids on their own pieces can win.",
       p2Content:"Introduction: An early variation of tic-tac-toe was played in the Roman Empire, around the first century BC. It was called Terni Lapilli and instead of having any number of pieces, each player only had three, thus they had to move them around to empty spaces to keep playing.The game's grid markings have been found chalked all over Rome. However, according to Claudia Zaslavsky's book Tic Tac Toe: And Other Three-In-A Row Games from Ancient Egypt to the Modern Computer, Tic-tac-toe could be traced back to ancient Egypt.Another closely related ancient game is Three Men's Morris which is also played on a simple grid and requires three pieces in a row to finish.",
       p3Content:"The different names of the game are more recent . The first print reference to \"noughts and crosses\", the British name, appeared in 1864. In his novel \"Can You Forgive Her\", 1864, Anthony Trollope refers to a clerk playing \"tit-tat-toe\". The first print reference to a game called \"tick-tack-toe\" occurred in 1884, but referred to \"a children's game played on a slate, consisting in trying with the eyes shut to bring the pencil down on one of the numbers of a set, the number hit being scored\". \"Tic-tac-toe\" may also derive from \"tick-tack\", the name of an old version of backgammon first described in 1558. The U.S. renaming of Noughts and crosses as tic-tac-toe occurred in the 20th century."
   }
   ViewIndex.newsShow = {
       newsList:[
           {date: "2017-02-22", caption: appName + ' 1.0', href:""}
       ]
   }
   ViewIndex.Features = {
      left:[
        {caption:"Base", img:"images/res/base_64px.png", features:[
          "Support classical detection algorithm",
          "Support fast basic AI calculation",
          "Support visual interaction"
        ]}
      ],
      right:[
        {caption:"Advanced", img:"images/res/advance_64px.png", features:[
          "Support advanced AI interface reserved for later upgrade maintenance"
        ]}
      ]
   }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// downloads.html
    var ViewDownloads = u.ViewDownloads = {};
    ViewDownloads.menuNavs = ViewIndex.menuNavs;
    ViewDownloads.navBars = [
        {class:'first leaf', href:'index.htm', aClass:'', title:'Home'},
        {class:'leaf active', href:'downloads.htm', aClass:'active', title:'Downloads'},
        {class:'leaf', href:'features.htm', aClass:'', title:'Features'},
        {class:'last leaf', href:cg.reportIssueUrl, aClass:'', title:'Support'}
    ];
    ViewDownloads.slidePromo = {
        caption: ViewIndex.slidePromo.caption
    };
    ViewDownloads.download = {
        description:"",
        list:[
            {
                caption:"Download from <b>Mac App Store</b>", files:[
                     {class:"download-box-32", title:"9GridHelper (mac app store)", href: cg.macAppStoreUrl, img:"../../common/img/download.png"}
                ],
                date: "2017-02-17",
                releaseNoteUrl: cg.changeLogUrl
            }
        ]
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// features.html
    var ViewFeatures = u.ViewFeatures = {};
    ViewFeatures.menuNavs = ViewIndex.menuNavs;
    ViewFeatures.navBars = [
        {class:'first leaf', href:'index.htm', aClass:'', title:'Home'},
        {class:'leaf', href:'downloads.htm', aClass:'', title:'Downloads'},
        {class:'leaf active', href:'features.htm', aClass:'active', title:'Features'},
        {class:'last leaf', href:cg.reportIssueUrl, aClass:'', title:'Support'}
    ];
    ViewFeatures.slidePromo = {
        caption: ViewIndex.slidePromo.caption
    };
    ViewFeatures.features = {
        description:"",
        list:[
            {caption:"Base", list:[
                "Support hand-painted patterns",
                "Support random pattern",
                "Support pattern cloning"
            ]},
            {caption:"Advanced", list:[
                "Support pattern storage",
                "Support basic pattern classification, My and Library",
                "Supports custom painted patterns"
            ]},

        ]
    };














  window.RTYData = u;

})(window);
