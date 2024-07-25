/*
  把搜索引擎工具栏插入到指定网站的规则

  name: 字符串，要加载的网站名称，方便查找
  enabled: 布尔，是否启用
  url: 正则表达式，用于匹配网址
  engineList: 字符串，搜索引擎类型，可选值['web','music','video','image','download','shopping','translate','knowledge','sociality']
  class: 字符串，添加一个class, 用来使用目标网站的样式
  fixedTop: 数字，可选，固定在顶部的高度，单位 px
  style: CSS样式，可选，自定义样式
  style_ACBaidu: CSS样式，可选，自定义样式，在强制居中模式下启用，兼容 AC_Baidu 脚本
  style_ZhihuChenglinzhi: CSS样式，可选，自定义样式，在强制居中模式下启用，兼容知乎排版优化脚本
  insertIntoDoc: 对象，插入文档相关
    target: 字符串，选中插入到原网页时所用的定位元素
      可以使用 xpath 匹配，如: '//*[@id="subform_ctrl"]'
      或者可以使用 css 匹配（需要加上 'css;' 的前缀），如: 'css;#subform_ctrl'
      或传入一个函数并使用返回值来选中，如: () => document.querySelector('#subform_ctrl')
    keyword: 字符串或函数，选中获取搜索框
      可以使用 xpath 选中一个 form input 元素
      或者可以使用 css 选中 input 元素（需要加上 'css;' 的前缀）
      或传入一个函数并使用返回值来选中 input 元素
    where: 字符串，插入到目标元素的位置,可选值['beforeBegin','afterBegin','beforeEnd','afterEnd']
      'beforeBegin'(插入到给定元素的前面)
      'afterBegin'(作为给定元素的第一个子元素)
      'beforeEnd' (作为给定元素的最后一个子元素)
      'afterEnd'(插入到给定元素的后面);
  stylish: CSS样式，可选，修改原网页样式以适应搜索引擎跳转工具栏
*/

const webRules = [
  {
    name: "google网页搜索",
    enabled: true,
    url: /^https?:\/\/www\.google(?:\.[A-z]{2,3}){1,2}\/[^?]+\?(?!tbm=)(?:&?q=|(?:[^#](?!&tbm=))+?&q=)(?:.(?!&tbm=))*$|(^https?:\/\/xn--flw351e\.ml\/search\?q=)/,
    engineList: "web",
    class: "s6JM6d",
    fixedTop: 52,
    style: `
      z-index: 100;
      margin-top:15px;
      margin-bottom:5px;
      position:sticky;
      top: 57px;
    `,
    style_ACBaidu: `
      text-align: center;
      z-index: 100;
      margin-top:5px;
      margin: auto;
    `,
    insertIntoDoc: {
      target: "css;#appbar",
      keyword: "css;[name=q]",
      where: "beforeBegin",
    },
    stylish:
      "#appbar.hdtb-ab-o{height:0px !important;} #hdtbMenus{position:unset}",
  },
  {
    name: "google-hash-query", // 不刷新页面显示搜索结果的google
    enabled: true,
    url: /^https?:\/\/www\.google(?:\.[A-z]{2,3}){1,2}\/[^#]*#(?:&?q=|.+?&q=).+/,
    engineList: "web",
    style: `
      left: 142px;
      z-index: 100;
      margin-top:5px;
    `,
    style_ACBaidu: `
      text-align: center;
      z-index: 100;
      margin:5px auto 0;
    `,
    insertIntoDoc: {
      target: "css;#appbar",
      keyword: function () {
        var input = document.getElementById("lst-ib");
        if (input) return input.value;
      },
      where: "beforeBegin",
    },
    stylish: "body.vasq #hdtbMenus.hdtb-td-o{top:100px !important}",
  },
  {
    name: "百度网页搜索",
    url: /^https?:\/\/www\.baidu\.com\/(?:s|baidu)/,
    enabled: true,
    engineList: "web",
    fixedTop: 80,
    fixedTop2: 88,
    fixedTopTarget: "css;#wrapper_wrapper",
    fixedTopWhere: "beforeBegin",
    style: `
      margin-top:8px;
      z-index: 101;
      left: 145px;
    `,
    style_ACBaidu: `
      margin: 8px auto -5px;
      z-index: 99;
      text-align: center;
      padding-left:0px !important;
      background: rgba(248,248,248,0.4);
      backdrop-filter: blur(10px);
    `,
    insertIntoDoc: {
      keyword: "css;input#kw",
      target: "css;#wrapper_wrapper",
      where: "afterBegin",
    },
    stylish: `.headBlock,.se_common_hint{
        display:none !important
      }
      #wrapper>.result-molecule{
        z-index:300 !important
      }
      @media screen and (min-width: 1921px){
        #sej-container{
          left: calc(50vw - 439px) !important;
        }
      }
      `,
  },
  {
    name: "必应网页搜索",
    url: /^https?:\/\/[^.]*\.bing\.com\/search/,
    enabled: true,
    engineList: "web",
    style: `
      margin-top: 1em;
      left: 160px;
      position: sticky;
      top: 0.5em;
    `,
    style_ACBaidu: `
      text-align: center;
      margin: 0 auto -10px;
      position: sticky;
      top: 0.5em;
    `,
    insertIntoDoc: {
      keyword: "css;#sb_form_q",
      target: "css;#b_content",
      where: "beforeBegin",
    },
  },
  {
    name: "DDG",
    url: /^https?:\/\/duckduckgo\.com\/*/i,
    enabled: true,
    engineList: "web",
    style: `
    margin-top:5px;
    `,
    insertIntoDoc: {
      keyword: '//input[@name="q"]',
      target: "css;.results--main",
      where: "beforeBegin",
    },
  },
  {
    name: "360",
    url: /^https?:\/\/www\.so\.com\/s\?/,
    enabled: true,
    engineList: "web",
    fixedTop: 50,
    style: "margin: 1em 0 0 135px;position:sticky;top:55px;z-index:3001;",
    insertIntoDoc: {
      keyword: "//input[@name='q']",
      target: "css;#tabs-wrap",
      where: "afterEnd",
    },
  },
  {
    name: "雅虎网页搜索",
    url: /^https?:\/\/search\.yahoo\.com\/search/i,
    engineList: "web",
    enabled: true,
    fixedTop: 72,
    style: `z-index:11;`,
    insertIntoDoc: {
      keyword: "css;#yschsp",
      target: "css;#horizontal-bar",
      where: "afterBegin",
    },
  },
  {
    name: "雅虎日本网页搜索",
    url: /^https?:\/\/search\.yahoo\.co\.jp\/search/i,
    engineList: "web",
    enabled: true,
    style: `
      left:0px;
      width:1050px;
      display:flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      margin: auto;
    `,
    insertIntoDoc: {
      keyword: '//input[@name="p"]',
      target: "css;.Header__inner",
      where: "afterEnd",
    },
  },
  {
    name: "台湾雅虎网页搜索",
    url: /^https?:\/\/tw\.search\.yahoo\.com\/search/i,
    engineList: "web",
    enabled: true,
    fixedTop: 52,
    style: `
      left:-10px;
      margin-bottom:10px;
    `,
    insertIntoDoc: {
      keyword: "css;#yschsp",
      target: "css;#results",
      where: "afterBegin",
    },
  },
  {
    name: "searx",
    url: /^https?:\/\/searx\.me\/\?q/i,
    engineList: "web",
    enabled: true,
    style: `
      left:-10px;
      margin-bottom:10px;
    `,
    insertIntoDoc: {
      keyword: "css;#q",
      target: "css;#categories",
      where: "beforeBegin",
    },
  },
  {
    name: "搜狗",
    url: /^https?:\/\/www\.sogou\.com\/(?:web|s)/,
    enabled: true,
    engineList: "web",
    fixedTop: 60,
    style: `
      top:-46px;
      z-index:99;
      left:-5px;
    `,
    style_ACBaidu: `
      top:-46px;
      z-index:99;
      margin: auto;
      padding-left: 0px !important;
    `,
    insertIntoDoc: {
      keyword: "css;#upquery",
      target: "css;#wrapper",
      where: "afterBegin",
    },
    stylish: "#float_uphint{display:none;}",
  },
  {
    name: "yandex",
    url: /^https?:\/\/yandex\.(?:com|ru)\/search/i,
    engineList: "web",
    enabled: true,
    fixedTop: 96,
    class: "main__center",
    style: `
    margin:1em 0;
    `,
    insertIntoDoc: {
      keyword: "css;.input__control",
      target: "css;.main__center",
      where: "afterBegin",
    },
    stylish: ".main .main__center{padding-top:0px}",
  },
  {
    name: "google网页分类搜索",
    enabled: true,
    url: /^https?:\/\/www\.google(?:\.[A-z]{2,3}){1,2}\/[^?]+\?(?:tbm=)(?:&?q=|(?:[^#](?!&tbm=))+?&q=)(?:.(?!&tbm=))*$/,
    engineList: "web",
    style: `
      left: 142px;
      z-index: 100;
      margin-top:5px;
    `,
    insertIntoDoc: {
      target: "css;#appbar",
      keyword: '//input[@name="q"]',
      where: "beforeBegin",
    },
    stylish: "body.vasq #hdtbMenus.hdtb-td-o{top:100px !important}",
  },
  {
    name: "startpage",
    enabled: true,
    url: /^https?:\/\/(www\.)?startpage\.com\/[a-zA-Z]{2,3}\/search/,
    engineList: "web",
    fixedTop: 103,
    style: `
    z-index: 100;
    `,
    insertIntoDoc: {
      target: "css;.layout-web__mainline",
      keyword: '//input[@name="query"]',
      where: "afterBegin",
    },
  },
  {
    name: "infinitynewtab",
    enabled: true,
    url: /^https?:\/\/google\.infinitynewtab\.com\/\?q/i,
    engineList: "web",
    style: `
      z-index: 100;
      margin-top: 20px;
    `,
    insertIntoDoc: {
      target: "css;.search-types",
      keyword: '//input[@name="search"]',
      where: "afterBegin",
    },
  },
  {
    name: "ecosia",
    enabled: true,
    url: /^https?:\/\/www\.ecosia\.org\/search\?/i,
    engineList: "web",
    style: `
      left: -10px;
      margin-top: -20px;
      z-index:1;
      background-color:#fff;
    `,
    insertIntoDoc: {
      target: "css;.mainline",
      keyword: '//input[@name="q"]',
      where: "afterBegin",
    },
  },
  {
    name: "f搜",
    enabled: true,
    url: /^https?:\/\/fsoufsou\.com\/search/,
    engineList: "web",
    fixedTop: 111,
    style: `
      left: 50px;
      z-index: -99999;
      margin-top:5px;
    `,
    style_ACBaidu: `
      text-align: center;
      z-index: -99999;
      margin:5px auto 0;
    `,
    insertIntoDoc: {
      target: "css;.input-with-suggestion",
      keyword: function () {
        var input = document.getElementById("search-input");
        if (input) return input.value;
      },
      where: "beforeEnd",
    },
    stylish: ".tabs-bottom-border{transform: translate(0, 32px); !important}",
  },
  {
    name: "brave",
    enabled: true,
    url: /^https?:\/\/search\.brave\.com\/search\?/i,
    engineList: "web",
    style: `
      top: 8px;
      left: 178px;
    `,
    insertIntoDoc: {
      target: "css;#filters-wrapper",
      keyword: '//*[@id="searchbox"]',
      where: "beforeBegin",
    },
  },
  {
    name: "neeva",
    enabled: true,
    url: /^https?:\/\/neeva\.com\/search\?/i,
    engineList: "web",
    fixedTop: 80,
    style: `
      z-index:1;
    `,
    insertIntoDoc: {
      target: "css;#search header",
      keyword: '//input[@name="q"]',
      where: "afterEnd",
    },
  },
  {
    name: "infinitynewtab",
    enabled: true,
    url: /^https?:\/\/google\.infinitynewtab\.com\/\?q/,
    engineList: "web",
    style: `
      text-align:center;
      position:fixed;
      z-index:99999;
      top:0;
    `,
    insertIntoDoc: {
      target: "css;.searchbox-results",
      keyword: "css;input.gsc-input",
      where: "beforeBegin",
    },
  },
  {
    name: "头条搜索",
    url: /^https?:\/\/so\.toutiao\.com\/search/,
    engineList: "web",
    enabled: true,
    fixedTop: 75,
    style: `
      left:146px;
      z-index:99999;
    `,
    insertIntoDoc: {
      target: "css;.result-content",
      keyword: '//input[@type="search"]',
      where: "beforeEnd",
    },
  },
  {
    name: "抖音搜索",
    url: /^https?:\/\/www\.douyin\.com\/search/,
    engineList: "web",
    enabled: true,
    fixedTop: 192,
    fixedTopColor: "rgb(22,23,34)",
    style: `
      margin:-10px 0 0 -6px;
      z-index:99999;
      margin-top:8px;
    `,
    insertIntoDoc: {
      target: "css;.CHUUyANc",
      keyword: function () {
        var input = document.querySelector('input[type="text"]');
        if (input) return input.value;
      },
      where: "beforeEnd",
    },
    stylish: `
      .J122YuOM{
        padding-top:14px
      }
      .IFYTLgyk.FMy9BImq {
        margin-top: 170px;
      }
      body {
        --font-color-qxin: #bdc1bc;
        --background-color-qxin: #202124f0;
        --background-avtive-color-qxin: #424242;
        --background-active-enable-qxin: #274144;
        --background-active-disable-qxin: #583535;
        --background-hover-color-qxin: #424242;
        --trigger-shown-qxin: #424242 !important;
        --background-btn-qxin: #292f36;
        --background-setting-qxin: #202124;
        --box-shadow-color-sej: hsla(0, 0%, 70%, 10%);
        --border-color-sej: #3b4547;
      }
    `,
  },
];
const knowledgeRules = [
  {
    name: "百度百科词条",
    url: /^https?:\/\/baike\.baidu\.com\/item/,
    engineList: "knowledge",
    fixedTop: 65,
    enabled: true,
    style: `
      text-align: center;
      background: #fff;
      margin: auto;
      width: 100% !important;
      position: sticky;
      top: 66px;
      z-index: 1001;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    `,
    insertIntoDoc: {
      keyword: "css;#query",
      target: "css;.navbar-wrapper",
      where: "beforeBegin",
    },
  },
  {
    name: "百度百科搜索",
    url: /^https?:\/\/baike\.baidu\.com\/search/,
    engineList: "knowledge",
    enabled: true,
    fixedTop: 56,
    style: `
      padding-left: 120px;
      margin: 5px 0 -10px 0px;
    `,
    insertIntoDoc: {
      keyword: "css;#query",
      target: "css;.header-wrapper",
      where: "afterEnd",
    },
  },
  {
    name: "百度文库",
    url: /^https?:\/\/wenku\.baidu\.com\/search/i,
    engineList: "knowledge",
    enabled: true,
    fixedTop: 104,
    style: `
      top:20px;
      margin-bottom:25px;
      left:145px;
      z-index:202;
    `,
    insertIntoDoc: {
      keyword: "css;#kw",
      target: "css;#app > div.base-layout-content",
      where: "afterBegin",
    },
  },
  {
    name: "百度知道",
    url: /^https?:\/\/zhidao\.baidu\.com\/search/i,
    engineList: "knowledge",
    enabled: true,
    style: `
      border-top: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: 1px;
      left:112px;
    `,
    insertIntoDoc: {
      keyword: "css;#kw",
      target: "css;#header",
      where: "afterEnd",
    },
  },
  {
    name: "维基百科",
    url: /^https?:\/\/\D{2,5}\.wikipedia\.org\/wiki/i,
    engineList: "knowledge",
    enabled: true,
    style: `
      position: fixed;
      margin: 0.1em auto;
      left: 0;
      right: 0;
    `,
    insertIntoDoc: {
      keyword: function () {
        var url = window.location.href.substring(
          window.location.href.lastIndexOf("/") + 1
        );
        return decodeURIComponent(url);
      },
      target: "css;#mw-head",
      where: "afterBegin",
    },
  },
  {
    name: "萌娘百科",
    url: /^https?:\/\/.*\.?moegirl\.org\.cn/i,
    engineList: "knowledge",
    enabled: true,
    fixedTop: 52,
    style: `
      margin: -0.8em auto 0;
      z-index: 3;
      width: 1200px !important;
      top: 12px;
    `,
    insertIntoDoc: {
      keyword: "css;#firstHeading",
      target: "css;#moe-topbanner-container",
      where: "afterEnd",
    },
  },
  {
    name: "知乎",
    url: /^https?:\/\/www\.zhihu\.com\/search\?/i,
    engineList: "knowledge",
    enabled: true,
    fixedTop: 52,
    style: `
      margin: 10px auto 0px;
      width:1000px !important;
      z-index:19;
      background: #fff;
      box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);  
    `,
    style_ZhihuChenglinz: `
      margin: 10px auto 0px;
      width:654px;
      z-index:19;
      background: #fff;
      box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);  
    `,
    insertIntoDoc: {
      keyword: "css;.Input",
      target: "css;.Search-container",
      where: "beforeBegin",
    },
    stylish: ".TopSearch.Card{margin:30px auto;}",
  },
  {
    name: "互动百科搜索页",
    url: /^https?:\/\/so\.baike\.com\/doc/i,
    engineList: "knowledge",
    enabled: true,
    style: `
      border-top: 1px solid #e5e5e5;
      text-align: center;
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: 1px;
    `,
    insertIntoDoc: {
      keyword: "css;.ac_input",
      target: "css;.bk-head",
      where: "afterEnd",
    },
  },
  {
    name: "互动百科词条页",
    url: /^https?:\/\/www\.baike\.com\/wiki/i,
    engineList: "knowledge",
    enabled: true,
    style: `
      border-top: 1px solid #e5e5e5;
      text-align: center;
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: 1px;
    `,
    insertIntoDoc: {
      keyword: "css;.ac_input",
      target: "css;.bk-head",
      where: "afterEnd",
    },
  },
  {
    name: "豆丁文档",
    url: /^https?:\/\/www\.docin\.com\/search\.do/,
    engineList: "knowledge",
    enabled: true,
    style: `
      text-align: center;
      margin:0 auto;
      padding-top:1px;
      border-top:1px solid #00000;
      border-bottom:1px solid #D9E1F7;
    `,
    insertIntoDoc: {
      keyword: "css;#topsearch",
      target: "css;.doc_hd_mini",
      where: "afterEnd",
    },
  },
  {
    name: "Quora",
    url: /^https?:\/\/www\.quora\.com\/search\?/i,
    enabled: true,
    engineList: "knowledge",
    fixedTop: 53,
    style: `
      left:calc((100% - 1120px) / 2);
      margin-top: 30px;
    `,
    insertIntoDoc: {
      keyword:
        "css;#root > div > div.q-box > div > div.q-fixed.qu-fullX.qu-zIndex--header.qu-bg--raised.qu-borderBottom.qu-boxShadow--medium.qu-borderColor--raised > div > div:nth-child(2) > div > div.q-box.qu-flex--auto.qu-mx--small.qu-alignItems--center > div > div > form > div > div > div > div > div > input",
      target:
        "css;#root > div > div.q-box > div > div:nth-child(3) > div > div",
      where: "beforeBegin",
    },
  },
  {
    name: "StackOverflow",
    url: /^https?:\/\/stackoverflow\.com\/search\?/i,
    enabled: true,
    engineList: "knowledge",
    fixedTop: 50,
    style:
      "width: min(100%, 1264px) !important;position: sticky;top: 50px;z-index:1001;margin:auto",
    insertIntoDoc: {
      keyword: "css; #search > div > input",
      target: "css;body > div.container",
      where: "beforeBegin",
    },
  },
  {
    name: "知乎(搜狗)",
    url: /^https?:\/\/zhihu\.sogou\.com\/zhihu/,
    enabled: true,
    engineList: "knowledge",
    fixedTop: 55,
    style: `
      margin: auto;
      width: 1000px;
      z-index:99;
    `,
    insertIntoDoc: {
      keyword: "css;#upquery",
      target: "css;#header",
      where: "afterEnd",
    },
    stylish: ".header{ margin-bottom: 5px; }",
  },
];
const videoRules = [
  {
    name: "优酷",
    url: /^https?:\/\/www\.soku\.com\/search_video\//,
    engineList: "video",
    enabled: true,
    fixedTop: 54,
    style: `
      width:1190px;
      margin:0 auto;
      z-index:99999;
    `,
    insertIntoDoc: {
      keyword: "css;#headq",
      target: "css;.sk_container",
      where: "beforeBegin",
    },
  },
  {
    name: "土豆",
    url: /^https?:\/\/www\.soku\.com\/t\/nisearch\//,
    enabled: true,
    engineList: "video",
    style: `
      padding-left: 10px;
      border-top: 1px solid #FC6500;
      border-bottom: 1px solid #FC6500;
      text-align: center;
    `,
    insertIntoDoc: {
      keyword: "css;#headq",
      target: "css;body > .sk_container",
      where: "beforeBegin",
    },
  },
  {
    name: "哔哩哔哩",
    url: /^https?:\/\/search\.bilibili\.com\/*/,
    enabled: true,
    engineList: "video",
    fixedTop: 74,
    style: `
      width:980px;
      margin:10px auto 10px;
    `,
    insertIntoDoc: {
      keyword: function () {
        if (document.querySelector("#search-keyword")) {
          return document.querySelector("#search-keyword").value;
        } else {
          return document.querySelector(".search-input-el").value;
        }
      },
      target: function () {
        if (document.querySelector(".head-contain")) {
          return document.querySelector(".head-contain");
        } else {
          return document.querySelector(".search-input");
        }
      },
      where: "afterEnd",
    },
  },
  {
    name: "AcFun",
    url: /^https?:\/\/www\.acfun\.cn\/search/,
    enabled: true,
    engineList: "video",
    fixedTop: 46,
    style: `
      width:980px;
      margin: -30px 0 10px 0;
      text-align:center;
      position:sticky;
      top: 65px;
    `,
    insertIntoDoc: {
      keyword: "css;#search-text--standalone",
      target: "css;.search__main__container",
      where: "afterEnd",
    },
  },
  {
    name: "YouTube",
    url: /^https?:\/\/www\.youtube\.com\/results/,
    enabled: true,
    engineList: "video",
    fixedTop: 58,
    style: `
      z-index:9;
      margin: 60px auto -60px;
      text-align: center;
      backgroud:#fff;
      position: relative;
    `,
    insertIntoDoc: {
      keyword: "css;input#search",
      target: "css;#page-manager",
      where: "beforeBegin",
    },
  },
  {
    name: "niconico",
    url: /^https?:\/\/www\.nicovideo\.jp\/search\//,
    enabled: true,
    engineList: "video",
    style: `
      border-top: 1px solid #E8E8E8;
      border-bottom: 1px solid #E8E8E8;
      text-align: center;
    `,
    insertIntoDoc: {
      keyword: "css;#search_united",
      target: "css;.tagListBox",
      where: "beforeBegin",
    },
  },
  {
    name: "Iqiyi",
    url: /^https?:\/\/so\.iqiyi\.com\/so\/q/,
    enabled: true,
    engineList: "video",
    fixedTop: 60,
    style: `
      margin:0 auto;
      width:1180px;
    `,
    insertIntoDoc: {
      keyword: "css;#data-widget-searchword",
      target: "css;.mod_search_header",
      where: "afterEnd",
    },
  },
  {
    name: "腾讯视频",
    url: /^https?:\/\/v\.qq\.com\/x\/search/i,
    engineList: "video",
    enabled: true,
    fixedTop: 60,
    style: "width:1140px;margin:1em auto;z-index: 11;position:sticky;top:70px;",
    insertIntoDoc: {
      keyword: "css;#keywords",
      target: "css;#search_container > div.wrapper > div.wrapper_main",
      where: "afterBegin",
    },
  },
  {
    name: "樱花动漫",
    url: /^https?:\/\/www\.imomoe\.ai\/search/,
    engineList: "video",
    enabled: true,
    style: `
      width:1140px;
      margin:-10px auto 10px;,
    `,
    insertIntoDoc: {
      keyword: '//input[@name="searchword"]',
      target: "css;.head",
      where: "afterEnd",
    },
  },
];
const musicRules = [
  {
    name: "百度音乐",
    url: /^https?:\/\/music\.baidu\.com\/search/,
    enabled: true,
    engineList: "music",
    style: `
      border-top: 0px solid #0064C4;
      margin-bottom: 5px;
    `,
    insertIntoDoc: {
      keyword: "css;#ww",
      target: "css;.nav-wrapper",
      where: "beforeBegin",
    },
  },
  {
    name: "一听音乐",
    url: /^https?:\/\/so\.1ting\.com\/song/i,
    enabled: true,
    engineList: "music",
    style: `
      text-align: center;
      border-bottom: 1px solid #13B310;
      border-top: 1px solid #13B310;
      margin:auto;
    `,
    insertIntoDoc: {
      keyword: "css;#keyword",
      target: "css;.nav",
      where: "beforeBegin",
    },
  },
  {
    name: "xiami",
    url: /^https?:\/\/www\.xiami\.com\/search/,
    enabled: true,
    engineList: "music",
    style: `
      text-align: center;
    `,
    insertIntoDoc: {
      keyword: "css;#search_text",
      target: "css;.search_result",
      where: "beforeBegin",
    },
  },
  {
    name: "QQ音乐",
    url: /^https?:\/\/y\.qq\.com\/n\/ryqq\/search/i,
    enabled: true,
    engineList: "music",
    style: `
      margin: 1em auto;
      position: sticky;
      top: 68px;
    `,
    insertIntoDoc: {
      keyword: "css;#app>div>div.mod_search>div.mod_search_input>input",
      target: "css;#app > div > div.main > div > div",
      where: "afterBegin",
    },
  },
  {
    name: "网易云音乐",
    url: /^https?:\/\/music\.163\.com\/.*?#\/search/i,
    enabled: true,
    engineList: "music",
    fixedTop: 0,
    style: `
      margin:auto;
      top:3px;
    `,
    insertIntoDoc: {
      keyword: function () {
        return decodeURI(document.URL.match(/s=(.+?)(&|$)/)[1]);
      },
      target: "css;.m-subnav.m-subnav-up.f-pr.j-tflag",
      where: "afterEnd",
    },
  },
  {
    name: "音悦台",
    url: /^https?:\/\/so\.yinyuetai\.com\/\?keyword/,
    enabled: true,
    engineList: "music",
    style: `
      border-bottom: 1px solid #2B6DAE;
      border-top: 1px solid #2B6DAE;
      text-align: center;
    `,
    insertIntoDoc: {
      keyword: function () {
        var url = window.location.href.substring(
          window.location.href.lastIndexOf("=") + 1
        );
        return decodeURIComponent(url);
      },
      target: "css;.content",
      where: "afterEnd",
    },
  },
];
const imageRules = [
  {
    name: "百度图片",
    url: /^https?:\/\/image\.baidu\.com\/search/i,
    enabled: true,
    engineList: "image",
    fixedTop: 72, //关闭关联联想的情况下
    // fixedTop:135,  //
    style: `
      left:127px;
      z-index:1000;
      margin-top:10px;
    `,
    insertIntoDoc: {
      keyword: "css;input#kw",
      target: "css;.s_tab",
      where: "afterEnd",
    },
  },
  {
    name: "谷歌图片",
    url: /^https?:\/\/\w{2,10}\.google(?:\.\D{1,3}){1,2}\/[^?]+\?.*&tbm=isch/i,
    enabled: true,
    engineList: "image",
    fixedTop: 52,
    style: `
      left: 160px;
      margin: 10px 0;
    `,
    insertIntoDoc: {
      keyword: "css;input[name=q]",
      target: "css;#yDmH0d > div.T1diZc.KWE8qe > c-wiz > div.ndYZfc",
      where: "afterEnd",
    },
  },
  {
    name: "必应图片",
    url: /^https?:\/\/.*\.bing\.com\/images\/search/i,
    enabled: true,
    fixedTop: 88,
    engineList: "image",
    style: `
      left:160px;
      margin-top:15px;
    `,
    insertIntoDoc: {
      keyword: "css;#sb_form_q",
      target: "css;#b_content",
      where: "afterBegin",
    },
  },
  {
    name: "flickr",
    url: /^https?:\/\/www\.flickr\.com\/search\//,
    engineList: "image",
    enabled: true,
    style: `
      z-index:1999;
      width:100%;
      border-top:1px solid #EBF1FF;
      border-bottom:0px solid #EBF1FF;
    `,
    insertIntoDoc: {
      keyword: function () {
        var input = document.getElementById("autosuggest-input");
        if (input) {
          return input.value;
        } else {
          var m = location.search.match(/q=([^&]+)/i);
          if (m) {
            return decodeURIComponent(m[1]);
          }
        }
      },
      target: "css;.using-slender-advanced-panel",
      where: "afterBegin",
    },
  },
  {
    name: "pixiv",
    url: /^https?:\/\/www\.pixiv\.net\/search\.php/i,
    engineList: "image",
    enabled: true,
    style: `
      margin: 0 auto;
      text-align: center;
      font-family: 微软雅黑;
    `,
    insertIntoDoc: {
      keyword: "css;input[name=word]",
      target: "css;body",
      where: "beforeBegin",
    },
  },
  {
    name: "花瓣",
    url: /^https?:\/\/huaban\.com\/search\/\?/,
    engineList: "image",
    enabled: true,
    style: `
      border-top:1px solid #EBF1FF;
      text-align: center;
    `,
    insertIntoDoc: {
      keyword: "css;#query",
      target: "css;#search_switch",
      where: "afterEnd",
    },
  },
  {
    name: "Pinterest",
    url: /^https?:\/\/www\.pinterest\.com\/search\//,
    engineList: "image",
    enabled: true,
    style: `
      text-align: center;
      margin-top:-11px;
    `,
    insertIntoDoc: {
      keyword: '//input[@name="q"]',
      target: "css;.headerContainer",
      where: "afterEnd",
    },
  },
];
const downloadRules = [
  {
    name: "海盗湾thepiratebay",
    url: /^https?:\/\/thepiratebay\.org\/search/i,
    engineList: "bittorrent",
    enabled: true,
    style: `
      text-align: center;
      z-index: 9999;
    `,
    insertIntoDoc: {
      keyword: "css;.inputbox",
      target: "css;#SearchResults",
      where: "beforeBegin",
    },
  },
  {
    name: "动漫花园",
    url: /^https?:\/\/share\.dmhy\.org\/topics\/list\?keyword\=/i,
    engineList: "download",
    enabled: true,
    style: `
      text-align: center;
    `,
    insertIntoDoc: {
      keyword: "css;#keyword",
      target: "css;.table.clear",
      where: "beforeBegin",
    },
  },
  {
    name: "ED2K",
    url: /^https?:\/\/www\.ed2000\.com\/filelist\.asp/i,
    engineList: "download",
    enabled: true,
    insertIntoDoc: {
      keyword: "css;.searchtxt",
      target: "css;.topsearch",
      where: "afterEnd",
    },
  },
  {
    name: "人人影视",
    url: /^https?:\/\/www\.zimuzu\.tv\/search\//,
    engineList: "download",
    enabled: true,
    style: `
      border-bottom: 1px solid #00AFFF;
      text-align: center;
    `,
    insertIntoDoc: {
      keyword: '//input[@name="q"]',
      target: "css;.Header",
      where: "afterEnd",
    },
  },
  {
    name: "subHD字幕",
    url: /^https?:\/\/subhd\.com\/search/i,
    engineList: "download",
    enabled: true,
    style: `
      border-bottom: 0px solid #CAD9EA;
      border-top: 0px solid #CAD9EA;
      text-align: center;
      top: -20px;
    `,
    insertIntoDoc: {
      keyword: "css;#sn",
      target: "css;.navbar.navbar-inverse",
      where: "afterEnd",
    },
  },
];
const translateRules = [
  {
    name: "谷歌翻译",
    url: /^https?:\/\/translate\.google(?:\.\D{1,4}){1,2}/i,
    enabled: true,
    engineList: "translate",
    style: `
      margin:10px 0px 0px 0px;
    `,
    insertIntoDoc: {
      keyword: "css;.D5aOJc ",
      target: "css;.MOkH4e ",
      where: "afterBegin",
    },
  },
  {
    name: "百度翻译",
    url: /^https?:\/\/fanyi\.baidu\.com/i,
    enabled: true,
    engineList: "translate",
    style: `
      margin: -20px 0 10px 0;
    `,
    insertIntoDoc: {
      keyword: function () {
        return document.querySelector("#baidu_translate_input").value;
      },
      target: "css;.inner",
      where: "afterBegin",
    },
  },
  {
    name: "必应词典",
    url: /^https?:\/\/.*\.bing\.com\/dict\/search\?q\=/i,
    enabled: true,
    engineList: "translate",
    style: `
      margin-top:6px;
      left: 148px;
    `,
    insertIntoDoc: {
      keyword: "css;#sb_form_q",
      target: "css;#b_header",
      where: "beforeEnd",
    },
  },
  {
    name: "有道翻译",
    url: /^https?:\/\/dict\.youdao\.com\/search/i,
    enabled: true,
    engineList: "translate",
    fixedTop: 94,
    style: `
      margin:auto;
    `,
    insertIntoDoc: {
      keyword: "css;#query",
      target: "css;#container",
      where: "beforeBegin",
    },
  },
  {
    name: "有道翻译2",
    url: /^https?:\/\/dict\.youdao\.com\/w/i,
    enabled: true,
    engineList: "translate",
    fixedTop: 64,
    style: `
      padding-left:0px;
      text-align:center;
      margin: 2px auto 0;
    `,
    insertIntoDoc: {
      keyword: "css;#query",
      target: "css;.c-topbar-wrapper",
      where: "beforeEnd",
    },
  },
  {
    name: "海词",
    url: /^https?:\/\/dict\.cn\/./,
    enabled: true,
    engineList: "translate",
    style: `
      z-index: 99;
      text-align: center;
    `,
    insertIntoDoc: {
      keyword: "css;#q",
      target: "css;.main",
      where: "afterBegin",
    },
  },
  {
    name: "金山词霸",
    url: /^https?:\/\/www\.iciba\.com\/word/i,
    enabled: true,
    engineList: "translate",
    fixedTop: 122,
    style: `
      z-index: 0;
    `,
    insertIntoDoc: {
      keyword: '//input[@type="search"]',
      target: "css;.Search_input__1qgiU",
      where: "afterEnd",
    },
  },
];
const shoppingRules = [
  {
    name: "淘宝搜索",
    url: /^https?:\/\/s\.taobao\.com\/search/,
    enabled: true,
    engineList: "shopping",
    fixedTop: 56,
    style: `
      margin:1em auto 0;
      width: 1446px !important;
      justify-content: center;
      z-index: 99999;
    `,
    insertIntoDoc: {
      keyword: function () {
        var input = document.querySelector("#q");
        if (input) {
          return input.value;
        } else {
          var m = location.search.match(/q=([^&]+)/);
          if (m) {
            return decodeURIComponent(m[1]);
          }
        }
      },
      target: "css;div.PageContent--contentWrap--mep7AEm",
      where: "beforeBegin",
    },
  },
  {
    name: "天猫超市搜索",
    url: /^https?:\/\/list\.tmall\.com\/search_product\.htm.*from=chaoshi/i,
    enabled: true,
    engineList: "shopping",
    fixedTop: 37,
    style: `
      z-index:9999;
      margin: 2px auto -10px;
      left:0;
      right:0;
      text-align:center;
      position:absolute;
    `,
    insertIntoDoc: {
      keyword: "css;#mq",
      target: "css;.headerCon",
      where: "beforeBegin",
    },
  },
  {
    name: "天猫搜索",
    url: /^https?:\/\/list\.tmall\.com\/search_product\.htm/i,
    enabled: true,
    engineList: "shopping",
    fixedTop: 34,
    style: `
      margin: 10px auto -10px;
      text-align:center;
    `,
    insertIntoDoc: {
      keyword: "css;#mq",
      target: "css;.headerCon",
      where: "beforeBegin",
    },
  },
  {
    name: "京东",
    url: /^https?:\/\/search\.jd\.com\/Search/,
    enabled: true,
    engineList: "shopping",
    style: `
      text-align:center; 
      margin: 1em auto -0.5em auto;
    `,
    insertIntoDoc: {
      keyword: "css;#key",
      target: "css;#J_searchWrap",
      where: "beforeBegin",
    },
  },
  {
    name: "苏宁",
    url: /^https?:\/\/search\.suning\.com/i,
    enabled: true,
    engineList: "shopping",
    style: `
      border-bottom: 1px solid #E5E5E5;
      border-top: 1px solid #E5E5E5;
      margin: 1em auto;
      width: 1390px !important;
      text-align: center;
    `,
    insertIntoDoc: {
      keyword: "css;#searchKeywordsHidden",
      target: "css;.ng-header",
      where: "afterEnd",
    },
  },
  {
    name: "1号店",
    url: /^https?:\/\/search\.yhd\.com\/c0-0\/k/i,
    enabled: true,
    engineList: "shopping",
    style: `
      border-bottom: 1px solid #E5E5E5;
      border-top: 1px solid #E5E5E5;
      text-align: center;
    `,
    insertIntoDoc: {
      keyword: "css;#keyword",
      target: "css;#global_top_bar",
      where: "afterEnd",
    },
  },
  {
    name: "什么值得买",
    url: /^https?:\/\/search\.smzdm\.com\/\?/i,
    enabled: true,
    engineList: "shopping",
    fixedTop: 40,
    style: `
      width: 100% !important;
      margin: 0 auto 1em auto;
      position: sticky;
      top: 42px;
      z-index: 100;
    `,
    insertIntoDoc: {
      keyword: "css;#J_search_input",
      target: "css;#content > div.content-inner",
      where: "afterBegin",
    },
  },
  {
    name: "亚马逊",
    url: /^https?:\/\/www\.amazon\.cn\/s\?k/i,
    enabled: true,
    engineList: "shopping",
    style: `
      margin:2px 0 -10px 0;
    `,
    insertIntoDoc: {
      keyword: "css;#twotabsearchtextbox",
      target: "css;.sg-row",
      where: "afterBegin",
    },
  },
  {
    name: "1688",
    url: /^https?:\/\/s\.1688\.com\/selloffer\/offer_search/i,
    enabled: true,
    engineList: "shopping",
    fixedTop: 88,
    style: `
      margin:-10px auto 5px;
    `,
    insertIntoDoc: {
      keyword: '//input[@name="keywords"]',
      target: "css;.header-container",
      where: "afterEnd",
    },
  },
  {
    name: "慢慢买",
    url: /^https?:\/\/ss\.manmanbuy\.com\/Default\.aspx\?key/i,
    enabled: true,
    engineList: "shopping",
    style: `
      text-align:center;
    `,
    insertIntoDoc: {
      keyword: '//input[@name="key"]',
      target: "css;#resultcomment",
      where: "beforeBegin",
    },
  },
];
const socialityRules = [
  {
    name: "新浪微博",
    url: /^https?:\/\/s\.weibo\.com\/weibo\//i,
    enabled: true,
    engineList: "sociality",
    fixedTop: 48,
    style: `
      width: auto !important;
      position: sticky;
      top:70px;
      margin: 1em 0 0.6em 15em;
      z-index: 10;
    `,
    insertIntoDoc: {
      keyword: "css;.woo-input-main",
      target: "css;.m-main .woo-box-flex",
      where: "beforeBegin",
    },
  },
  {
    name: "百度贴吧全吧搜索",
    url: /^https?:\/\/tieba\.baidu\.com\/f\/search/i,
    enabled: true,
    engineList: "sociality",
    fixedTop: 60,
    style: `
      left: 121px;
    `,
    insertIntoDoc: {
      keyword: "css;#wd1",
      target: "css;#head > div.search_main_wrap",
      where: "afterEnd",
    },
    stylish: `@media screen and (min-width: 1920px){#sej-container{left:424px !important;}}`,
  },
  {
    name: "百度贴吧",
    url: /^https?:\/\/tieba\.baidu\.com\/f/i,
    enabled: true,
    engineList: "sociality",
    fixedTop: 60,
    style: `
      margin: 0 auto 1em;
      z-index: 10;
    `,
    insertIntoDoc: {
      keyword: "css;#wd1",
      target: "css;#head",
      where: "afterEnd",
    },
  },
  {
    name: "豆瓣1",
    url: /^https?:\/\/(movie|music|book)\.douban\.com\/subject_search?/,
    enabled: true,
    engineList: "sociality",
    style: `
      border-top: 1px solid #e5e5e5;
      text-align: center;
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: 1px;
    `,
    insertIntoDoc: {
      keyword: "css;#inp-query",
      target: "css;.nav-secondary",
      where: "afterEnd",
    },
  },
  {
    name: "豆瓣2",
    url: /^https?:\/\/www\.douban\.com\/search/i,
    enabled: true,
    engineList: "sociality",
    style: `
      margin: -1em 0 1em 7em;
      position: sticky;
      top: 0.1em;
    `,
    insertIntoDoc: {
      keyword:
        "css;#content > div > div.article > div.mod-search > form > fieldset > div.inp > input",
      target: "css;#content > div > div.article > div.mod-search",
      where: "afterEnd",
    },
  },
  {
    name: "微信(搜狗)",
    url: /^https?:\/\/weixin\.sogou\.com\/weixin\?/,
    enabled: true,
    engineList: "sociality",
    fixedTop: 55,
    style: "width: 1000px !important;margin: 8px auto -5px;z-index:99;",
    insertIntoDoc: {
      keyword: "//input[@name='query']",
      target: "css;#main",
      where: "afterBegin",
    },
  },
  {
    name: "小红书",
    url: /^https?:\/\/www\.xiaohongshu\.com\/search_result/,
    enabled: true,
    engineList: "sociality",
    style: `
      margin: -1em auto 1em;
      position: sticky;
      top: -1em;
    `,
    insertIntoDoc: {
      keyword:
        "css;#app > div.layout > div.header-container.showSearchBoxOrHeaderFixed > header > div.input-box > input",
      target:
        "css;#app > div.layout > div.main-container > div.feeds-page > div.middle",
      where: "beforeBegin",
    },
  },
];
const scholarRules = [
  {
    name: "百度学术",
    url: /^https?:\/\/xueshu\.baidu\.com\/(?:s|baidu)/,
    enabled: true,
    engineList: "scholar",
    style: `
      text-align: center;
      position: sticky;
      top:62px;
      z-index:99999;
    `,
    insertIntoDoc: {
      keyword: "css;input#kw",
      target: "css;#container",
      where: "afterBegin",
    },
  },
  {
    name: "谷歌学术",
    enabled: true,
    url: /^https?:\/\/scholar\.google(?:\.\D{1,3}){1,2}\/scholar\?/,
    engineList: "scholar",
    style: `
      z-index:1001;
      position:relative;
      margin: 1em 0 0.5em 11em;
      position: sticky;
      top: 0.1em;
    `,
    insertIntoDoc: {
      target: "css;#gs_ab",
      keyword: '//input[@name="q"]',
      where: "beforeBegin",
    },
  },
  {
    name: "cnki",
    url: /^https?:\/\/kns\.cnki\.net\/kns8\/defaultresult\/index/i,
    enabled: true,
    engineList: "scholar",
    style: `
      border-top:1px solid #D9E1F7;
      border-bottom:1px solid #D9E1F7;
      margin:0.6em 0 0.5em 465px;
      position: sticky;
      top: 0.1em;
    `,
    insertIntoDoc: {
      keyword: "css;#txt_search.search-input",
      target: "css;.search-box",
      where: "afterEnd",
    },
  },
  {
    name: "知网",
    enabled: true,
    url: /^https?:\/\/epub\.cnki\.net\/kns\/brief\/default_result\.aspx/i,
    engineList: "scholar",
    style: `
      border-bottom:1px solid #E5E5E5;
      border-top:1px solid #E5E5E5;
      z-index:999;
      position:relative;
    `,
    insertIntoDoc: {
      keyword: "css;#txt_1_value1",
      target: "css;#TopSearchBar",
      where: "afterEnd",
    },
  },
  {
    name: "万方",
    enabled: true,
    url: /^https?:\/\/s\.wanfangdata\.com\.cn\/Paper/i,
    engineList: "scholar",
    style: `
      z-index:999;
      width: 1200px !important;
      margin: 1em auto 1em;
      position:sticky;
      top: 0.1em;
      justify-content: center;
    `,
    insertIntoDoc: {
      keyword: "css;input.search-input",
      target: "css;.me-container.container-wrapper",
      where: "beforeBegin",
    },
  },
  {
    name: "EBSCO",
    enabled: true,
    url: /^https?:\/\/.*?ebscohost\.com\/.*?results/i,
    engineList: "scholar",
    style: `
      border-bottom:1px solid #E5E5E5;
      border-top:1px solid #E5E5E5;
      position:relative;
    `,
    insertIntoDoc: {
      keyword: "css;#SearchTerm1",
      target: "css;#findFieldOuter",
      where: "afterend",
    },
  },
  {
    name: "Springer",
    enabled: true,
    url: /^https?:\/\/link\.springer\.com\/search\?query=/i,
    engineList: "scholar",
    style: `
      border-bottom:1px solid #E5E5E5;
      border-top:1px solid #E5E5E5;
      position:relative;
    `,
    insertIntoDoc: {
      keyword: "css;#query",
      target: "css;#content",
      where: "beforeBegin",
    },
  },
  {
    name: "JSTOR",
    enabled: true,
    url: /^https?:.*?jstor.org\/action\/doAdvancedSearch/i,
    engineList: "scholar",
    style: `
      border-bottom:1px solid #E5E5E5;
      border-top:1px solid #E5E5E5;
      position:relative;
    `,
    insertIntoDoc: {
      keyword: "css;#searchBox",
      target: "css;.tabs-search-results",
      where: "beforeBegin",
    },
  },
];
const enterpriseRules = [
  //  用户补充: kidzgy
  //  https://greasyfork.org/zh-CN/scripts/27752/discussions/90497
  {
    name: "企查查",
    url: /^https?:\/\/www\.qcc\.com\/(?:web|firm|)/,
    engineList: "enterprise",
    enabled: true,
    fixedTop: 56,
    style: `
      width:1250px;
      margin: 0 auto;
      padding-left: 15px;
    `,
    insertIntoDoc: {
      keyword: "css;#searchKey",
      target: "css;.app-nheader",
      where: "AfterEnd",
    },
    stylish:
      " .bigsearch-nav.fixed > .nav-wrap { position: static !important; }",
  },
  {
    name: "天眼查",
    url: /^https?:\/\/www\.tianyancha\.com\/(?:search|company)/,
    engineList: "enterprise",
    enabled: true,
    fixedTop: 73,
    style: `
      top:80px;
      margin: 0 auto;
      width:1248px;
    `,
    insertIntoDoc: {
      keyword: "css;#header-company-search",
      target: "css;.tyc-header",
      where: "AfterEnd",
    },
    stylish:
      "#web-content.mt122{margin-top:90px !important} .search-bar{position:static !important}",
  },
];
const codingRules = [
  {
    name: "Runoob",
    enabled: true,
    url: /^https?:.*?runoob\.com\//i,
    engineList: "mine",
    style: `
      border-bottom:1px solid #E5E5E5;
      border-top:1px solid #E5E5E5;
      position:relative;
      text-align:center;
      margin: 0 auto 2em;
    `,
    insertIntoDoc: {
      keyword: function () {
        var url = window.location.href.substring(
          window.location.href.lastIndexOf("=") + 1
        );
        return decodeURIComponent(url);
      },
      target: "css;.main>.row",
      where: "afterBegin",
    },
  },
  {
    name: "GitHub",
    enabled: true,
    url: /^https?:\/\/github\.com\/search/i,
    engineList: "mine",
    fixedTop: 2,
    style: `
      margin: 1em auto;
    `,
    insertIntoDoc: {
      keyword: 'css;span[data-target="search-input.inputButtonText"]',
      target:
        "css;body > div.logged-in.env-production.page-responsive.full-width > div.application-main > main",
      where: "beforeBegin",
    },
  },
  {
    name: "MDN",
    enabled: true,
    url: /^https?:\/\/developer\.mozilla\.org\/.{2,5}\/search/,
    engineList: "mine",
    style: `
      position:relative;
      text-align:center;
    `,
    insertIntoDoc: {
      keyword: function () {
        var url = window.location.href.substring(
          window.location.href.lastIndexOf("=") + 1
        );
        return decodeURIComponent(url);
      },
      target: "css;.results-search-form",
      where: "afterEnd",
    },
  },
];

const searchEngineJumpPlusRules = [
  ...webRules,
  ...knowledgeRules,
  ...videoRules,
  ...musicRules,
  ...imageRules,
  ...downloadRules,
  ...translateRules,
  ...shoppingRules,
  ...socialityRules,
  ...scholarRules,
  ...enterpriseRules,
  ...codingRules,
];
