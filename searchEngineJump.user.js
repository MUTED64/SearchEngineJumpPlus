// ==UserScript==
// @name           SearchEngineJumpPlus 搜索引擎快捷跳转+
// @author         NLF & 锐经(修改) & iqxin(修改) & MUTED64(修改)
// @contributor    MUTED64
// @description    Fork版本搜索引擎跳转脚本，优化一些使用体验
// @version        5.32.0
// @created        2011-07-02
// @lastUpdated    2023-06-13

// @namespace      https://greasyfork.org/en/scripts/454280-searchenginejumpplus
// @homepage       https://github.com/MUTED64/SearchEngineJumpPlus
// @require        https://greasyfork.org/scripts/408009-togbk/code/toGBK.js?version=832799
// @require        https://update.greasyfork.org/scripts/456710/1586958/SearchEngineJumpPlusEngineList.js
// @require        https://update.greasyfork.org/scripts/456711/1734362/SearchEngineJumpPlusRules.js
// @resource       GLOBAL_STYLE https://greasyfork.org/scripts/455977-searchenginejumpplusglobalstyle/code/SearchEngineJumpPlusGlobalStyle.user.css
// @icon           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFSElEQVR4nMWXX4hdVxXGf2vfe89kJg61ia0DYzMTMWnoQ0FJtKmtJsFixT8DBSmYtGMLgq0PCqMEKwmxYzSGyUPBB7XRNi0FC6JtwYovgcS0klJD8SHakoExYhLQFkwn9/aeOfv7fDi3SStJ5o4muN4O7L32b33rz94H/s8WS10cvR3yVQaY++wnkESkwDK2sMy1EwXDtzRRziBhu+dGDG48smSA5kUP//wmAFIkrNwiGMOsBzYAQwTzEEeBY8BJO1fYtF+4laGPv/i/Afz1C1sAYwngZiKmsDcDI0DrHUtL4DRwMGAmUnVcCtpHPsrQbS/1DZDe+VFHblKziIjYBjwD3Iu5ARBwBjgJnAkwMAa+z+ZZqXEX8VZg0T784aUDzH3uk0DtVQvlVsMjwGpMB3gauAu8ieB2YDPwxR5gF/gQ+MeoNUFzACI4d+imvgDOp0BVRWo2AW62eRi8wvY/wNtrgGhDL+7a/gIcBLYBu4HrsPdSzr8K/JlcLk2BaCQstSxN2VptuYO93an7WES0UyORGg1Wfu0QKivyQhfb56yhn4B3Ynew1kD1oDTfJF20vi8NYBvjMVubbWHrOdtPhwaAYPVvfs8Hf1u32bJbDtXVbgFvAj4AOgTGzhPhGMdV/wCvbtmAJSyttzRiuWv7CdttAlY/f/iimwdvfQGiAfmtczg/jnOJ8/txtRbnvgAu6FSPtg1AC3wGPAvgWGRYqiSowLwC1Ru4GoFyFPc3ZM8DfGPLB1jZXlhe74sS6AAc+O6vL+tg6LaX2LP/SSA6tkpcYeee36/0D/C7Ve9BwZs97iLMEMDAE5N07z1wSQebvl/y3KkAGDIUsrHpRp8ACeDGw38kZdPMPtrILhvZ1yZ5TZJxvnwuW40GzSSaDa1vJq1oJXVbKZ9qpv5qoO6Cqr5ULB+zfNrygOX7LS+PlCgeu+eimz/1w0yWaTTScIqYTEERcDoiXovFauddAAA22CeRDyKD/Bnkbd32PNgUj09S/GwrUMt+x14hiWVFI1LEVyPidggi4hfOnuv3nr8AEGC5sj1j+4TtAcu7i4HlDwLLqRawMmtmnidn6JYLGIa7C/mbwHeAgYATQexPjVCVxcZd7SUACDCEfRyznXoMr8Sawf4lcDdwI7AKWAdss/0r2dOyr6kFpCn7hiyPRlDY5mM7z10W4F1KFT+/p6ZwDkgT2HuN19Tz3yXWG+NnJ8uR9h0FSStSRAFBwAmbpu3xbP/T9rzkp2zvtt2RzcvfG15EAaC8/8m6FkgmpWdsTyD/COtv9esnj1haZXvEtiXP2d5jc6es+3qHv8/2uO1v2d4hedA2H/n2vxZX4LwS+78E1PcDqprAOPZao9Gxs5PNkc6dXUKnIuI1Z8+lRijLo8AR2+OWqeeBS8n7bE8bd2x4Zc97FwcAaP307vqyiXi7QzBi7OyXGel8GkJEBAFUWUREIXlnL/LCvgBheZ9h2lLHyvxp5rrFAZZiG3e16zliBm3vsD0lu6i5ja0awppWrjrKmeOPjAL/UQP/rf1h11BPJHckT/dkL+vDjeXC0pRy3qGcB22x9oHZKwcAcPTh5UimzrWnexGXlrCFlAvlakq5eiiX3eLtSXnFAABe3j1c/0PgTp1z77NUKmesjHMulKuttq9X/eq+sgAAx35wTZ0OqWNrWqr2KVelqoqcF3DOL1r5dStfHQCoW03K9ApuWrnam/PCnHN+StZDRHSK1jLgCnXBpeymr/8dS+SFbmH7eiu/TkQnNRrkqmL20XVXFwBg7QOzRASSsDJFaxndssPso+uu9tH92b8BowSyPc/iZtEAAAAASUVORK5CYII=
// @license        MIT

// @noframes
// @match          *://**/*
// @exclude        *://mega.nz/*
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_addStyle
// @grant          GM_deleteValue
// @grant          GM_setClipboard
// @grant          GM_registerMenuCommand
// @grant          GM_openInTab
// @grant          GM_getResourceText
// @grant          GM_info
// @grant          window.onurlchange
// @run-at         document-idle

// @downloadURL https://update.greasyfork.org/scripts/454280/SearchEngineJumpPlus%20%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%BF%AB%E6%8D%B7%E8%B7%B3%E8%BD%AC%2B.user.js
// @updateURL https://update.greasyfork.org/scripts/454280/SearchEngineJumpPlus%20%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%BF%AB%E6%8D%B7%E8%B7%B3%E8%BD%AC%2B.meta.js
// ==/UserScript==

(function () {
  "use strict";

  // Shadow DOM 容器和样式管理
  class ShadowDOMManager {
    static shadowHost = null;
    static shadowRoot = null;
    
    static initialize() {
      if (this.shadowHost) return this.shadowRoot;
      
      // 创建 Shadow DOM 宿主元素
      this.shadowHost = document.createElement('div');
      this.shadowHost.id = 'sej-shadow-host';
      // Shadow host 作为布局元素，不设置 display:contents
      // 它将接收原本应用到 containerWrapper 的样式和 class
      
      // 附加 Shadow DOM
      this.shadowRoot = this.shadowHost.attachShadow({ mode: 'open' });
      
      // 默认不插入到 body，而是在需要时插入到指定位置
      
      return this.shadowRoot;
    }
    
    static insertHost(target, position = 'beforeend') {
      if (!this.shadowHost) this.initialize();
      
      // 如果已经在文档中，先移除
      if (this.shadowHost.parentNode) {
        this.shadowHost.parentNode.removeChild(this.shadowHost);
      }
      
      // 插入到指定位置
      if (position === 'beforebegin') {
        target.parentNode.insertBefore(this.shadowHost, target);
      } else if (position === 'afterbegin') {
        if (target.firstChild) {
          target.insertBefore(this.shadowHost, target.firstChild);
        } else {
          target.appendChild(this.shadowHost);
        }
      } else if (position === 'beforeend') {
        target.appendChild(this.shadowHost);
      } else if (position === 'afterend') {
        if (target.nextSibling) {
          target.parentNode.insertBefore(this.shadowHost, target.nextSibling);
        } else {
          target.parentNode.appendChild(this.shadowHost);
        }
      } else {
        // 默认插入到 body
        document.body.appendChild(this.shadowHost);
      }
    }
    
    static addStyle(cssText) {
      if (!this.shadowRoot) this.initialize();
      
      const style = document.createElement('style');
      style.textContent = cssText;
      this.shadowRoot.appendChild(style);
    }
    
    static applyHostStyle(cssText) {
      // 将样式应用到 Shadow host（主文档元素）
      if (!this.shadowHost) this.initialize();
      this.shadowHost.style.cssText += cssText;
    }
    
    static getRoot() {
      if (!this.shadowRoot) this.initialize();
      return this.shadowRoot;
    }
  }

  startScript();
  listenUrlChange();

  // For some websites with iframe and some websites need delay to load
  function startScript() {
    if (window.self != window.top) return;

    console.info(
      `\n%c ${GM_info.script.name} v${GM_info.script.version} \n%c 问题反馈(GitHub):\t\thttps://github.com/MUTED64/SearchEngineJumpPlus/issues/new\t\t\t\t\t\t\t\n%c 问题反馈(GreasyFork):\thttps://greasyfork.org/scripts/454280-searchenginejumpplus-搜索引擎快捷跳转/feedback\t\n`,
      "color:#eee;background:#444;padding:6px 0;border-radius:6px 6px 0 0;",
      "color:#444;background:#eee;padding:6px 0;border-radius:0 6px 0 0",
      "color:#444;background:#eee;padding:6px 0;border-radius:0 0 6px 6px;"
    );

    const delayList = [
      /^https?:\/\/google\.infinitynewtab\.com\/\?q/,
      /^https?:\/\/www\.zhihu\.com\/search\?/,
      /^https?:\/\/www\.iciba\.com\/word\?/,
      /^https?:\/\/neeva\.com\/search\?/i,
      /^https?:\/\/s\.taobao\.com\/search/,
      /^https?:\/\/y\.qq\.com\/n\/ryqq\/search/i,
      /^https?:\/\/www\.quora\.com\/search\?/i,
      /^https?:\/\/search\.bilibili\.com\/*/,
      /^https?:\/\/github\.com/i,
      /^https?:\/\/(www\.)?baidu\.com/i,
    ];
    const needDelay = delayList.some(
      (delaySite) => location.href.search(delaySite) !== -1
    );

    if (needDelay) {
      setTimeout(function () {
        // 检查 Shadow host 而不是 sejspan
        const isRunning = document.querySelector("#sej-shadow-host");
        if (isRunning) {
          return;
        } else {
          mainLogic();
        }
      }, 1000);
    } else {
      mainLogic();
    }
  }

  // For SPA websites with javascript router
  function listenUrlChange() {
    if (window.onurlchange === null) {
      let lastURL = decodeURI(location.href).replaceAll(" ", "+");
      window.addEventListener("urlchange", (e) => {
        const newURL = decodeURI(e.url).replaceAll(" ", "+");
        if (lastURL === newURL) return;
        lastURL = newURL;
        // 清理 Shadow DOM 内容
        const shadowHost = document.querySelector('#sej-shadow-host');
        if (shadowHost) {
          shadowHost.remove();
        }
        // 重置 Shadow DOM 管理器
        ShadowDOMManager.shadowHost = null;
        ShadowDOMManager.shadowRoot = null;
        startScript();
      });
    }
  }

  function mainLogic() {
    const rules = searchEngineJumpPlusRules;
    let engineList = searchEngineJumpPlusEngines;

    // 有些图标需要重复使用
    const icon = {
      edit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAACDklEQVR4nJXVzUtUURjH8Y/mSNKkki2iwiApxHQ1q/6C+gusoCB6oxbRRqFNL4sWtRKqhVSLIDe1CqpNiwjKIilKLKKFEr2Z2qI0xxHN0+LOm+PMOPOc1T2H7/f5ncO991BdNer30zmxKrl0xV2zKJjRoy6aqkkvbbdVLPuUq+8+5uGXnVILki7qsxgtNDtrTNLcijHvrdYsft0/wQ8DZgSzeqMUDW4IJceYHcvwCd1ies0KZvWI1TnhIH6574Olgg0E74zmhZ902j304by4Cxp5LPjtQNmjy3XPVK2rgmCBCcGgdVXhdBgUBCMEwVMNVeIvBMFLifKC8vgrndFBlRJUhJcWFMd3ZfGuzFRxwWrdu3KTxQQVhi8lqApfKVhf0d4bc2/OckG9Pkur7r3TEw+1FRO0GxdM2Vc2/HHBgr1If935UTfigbt5+C27MeSo9+m5GJYitlCwWR2G8oQZ/FgWX1aFgnZMG852v5nFR4rhMn+2dDVJYFpKqy0SDksUhF9FsE0bWgyIa9bIanihoEUcDTrSz4ueOVMOLxQkzVkrZcaoNz755rmpcnihYNghm3w26Ys/5cGcIKgRBJDyqCIquj8C1PqKZvHK+qVrJ5bMRwmGterU64pkkZupWO3RjXkzUZj9+jVZMGK6IsEaHTbgjpOSUYZL/pa5m4qPIbtyznpHvJaqGB53O33h4T/3VzLuzDhE6AAAAABJRU5ErkJggg==",
      del: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEUAAADsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVH///9VVVVWVlZXV1dYWFhZWVlaWlpbW1tcXFxdXV1eXl5fX19gYGBhYWFiYmJjY2NkZGRlZWVmZmZnZ2doaGhpaWlqampra2tsbGxtbW1ubm5vb29wcHBxcXFycnJzc3N0dHR1dXV2dnZ3d3d4eHh5eXl6enp7e3t8fHx9fX1+fn5/f3+AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0tLS1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnKysrLy8vMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8dej9TAAAAU3RSTlMAAABm7P/sZgAAABPO////zhQAAB/i/////////+IfAAAe4fvk4AAAAAAd/+Q3GxwAFR85FQBjz+LPY+v////r6//////rZM/h4c9jABUdHRUAAP0EcPoAAAEuSURBVHic7ZRnc8IwDIbdEUZHGB0kDsMOMcOMttBBB93Qvcj//y9VjB0Czh13/dz3ixT5OVmSYyMktLK6tm74oYxEMpVGUW1sbm2bM8DMZHP5OWBnd2+/YNnYAWHbKhRL5cocQKjrWFWPuSDmVS3HpUQu1eoNQkiTM9xqd7oHoG6n3cKMNyHcqNfQ4VGPUsr7nh0FbK/PIdw7PkGnZwOZNrqF9AfnF+jyaigLixYp/eH1Dbq9u4eAHyOAHh5HaPz0DCnjANjm5fUNvX98QoGCxyo5Fjmh0K/vH2hzAi0KnqnymMgJrU6gzemQBM+DZpX1/XBYUyAYTTAuZTUg+Aw8Zf+BvwJLR730sPTjXgD0H2YB0BUClXKpGAeE1y+fy2ZMfX12gdOpZMLQAfkE/AL7e5vGZF+dOQAAAABJRU5ErkJggg==",
      setting: `<svg style="width: 16px;" class="icon" id="sej-setting-button" viewBox="0 0 512 512"><path d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z" fill="none" stroke="var(--font-color-qxin)" stroke-linecap="round" stroke-linejoin="round" stroke-width="42"/></svg>`,
    };

    const scriptSettingData = {
      status: 1,
      message:
        "$相关说明$(status: 这个在将来或许很重要)..." +
        "(version: 若有新功能加入,靠这个版本号识别)..." +
        "(addSearchItems: 允许更新时,添加新的搜索网站到你的搜索列表)..." +
        "(modifySearchItems: 允许更新时,修改你的搜索列表中的项目)..." +
        "(closeBtn: 设置页面右上角的“关闭”按钮是否显示。true显示,false隐藏)..." +
        "(newtab: 新标签页打开。0为默认设置,1为新标签页打开)..." +
        "(foldlist: 折叠当前搜索分类列表。true为折叠,false为展开。)..." +
        "(setBtnOpacity: 设置按钮的透明度,值为0-1之间的数,0为透明,1为完全显示,中间值半透明。注：-1为直接关闭按钮,关闭之前请确定自己知道如何再次打开它)..." +
        "(debug: debug模式,开启后,控制台会输出一些信息,“关闭并保存”按钮将不会在刷新页面)..." +
        "(fixedTop: 将搜索栏固定到顶端。 true开启,false关闭)..." +
        "(fixedTopUpward: 固定顶端后，搜索栏下拉不会出现，只有上拉时才出现。 true开启,false关闭)..." +
        "(baiduOffset: 在百度页面鼠标划过的菜单会出现位移,若有使用其他的style样式,可以修改这个来修复二级菜单的偏移)..." +
        "(getIcon: 自己添加搜索后获取图标的方式。0为自动，能连接谷歌的情况下用谷歌获取，无法连接的情况下，域名加favicon.ico获取；1为域名加favicon获取，2为使用谷歌获取，3为使用dnspot的服务获取(不建议使用)。或者添加网址，关键字使用%s代替，未测试)..." +
        "(allOpen:一键搜索，点击相关分类后，打开该分类下的所有搜索)..." +
        "(HideTheSameLink:隐藏同站链接。默认开启,百度页面会隐藏百度搜索。如果想在同一个搜索网站,但是想通过不同语言来搜索, 可以选择false来实现)..." +
        "(center:是否居中显示，主要是为了兼容脚本 ac 百度  ： 0 不居中，强制在左。 1, 强制居中 。 2,自动判断)..." +
        "(icon: 图标的显示方式, 0 关闭文字, 只保留图标, 1 显示网站图标,2 显示抽象图标。当脚本中不存在抽象图标时,显示网站图标)..." +
        "(transtion: 是否有动画效果, true为开启所有动画效果,false关闭所有动画(包括模糊效果)。)" +
        "(selectSearch: 划词搜索功能, true为开启划词搜索,false关闭)" +
        "(engineDetails: 第一个值为分类列表标题名称,第二个值与enginelist相关联,必须匹配,第三个值true为显示列表,false为禁用列表。排列顺序与跳转栏上的显示顺序相同，可以用它将分类列表按自己喜欢排序)..." +
        "(engineList: 各个搜索的相关信息)" +
        "(rules: 已弃用--将搜索样式插入到目标网页,同脚本中的rules设置相同,优先级高于脚本中自带的规则。自带了360搜索,可仿写)...",
      version: GM_info.script.version,
      addSearchItems: true,
      modifySearchItems: true,
      closeBtn: true,
      newtab: 0,
      foldlist: true,
      setBtnOpacity: 0.7,
      debug: false,
      fixedTop: true,
      fixedTopUpward: false,
      baiduOffset: -120,
      getIcon: 0,
      allOpen: false,
      HideTheSameLink: true,
      center: 2,
      icon: 1,
      transtion: true,
      selectSearch: true,
      engineDetails: [
        ["网页", "web", true],
        ["翻译", "translate", true],
        ["知识", "knowledge", true],
        ["图片", "image", true],
        ["视频", "video", true],
        ["音乐", "music", true],
        ["学术", "scholar", false],
        ["社交", "sociality", true],
        ["购物", "shopping", true],
        ["下载", "download", false],
        ["新闻", "news", false],
        ["常用", "mine", false],
      ],
      engineList: engineList,
    };
    // --------------------可设置项结束------------------------
    class Settings {
      #storedSettingData = GM_getValue("searchEngineJumpData");
      #scriptSettingData = scriptSettingData;
      settingData;

      constructor() {
        this.initSettings();
      }

      #isVersionOutdated(storedSettingVersion, currentVersion) {
        storedSettingVersion = storedSettingVersion.toString();
        currentVersion = currentVersion.toString();
        const arr1 = storedSettingVersion.split(".");
        const arr2 = currentVersion.split(".");
        const length1 = arr1.length;
        const length2 = arr2.length;
        const minlength = Math.min(length1, length2);
        let i = 0;
        for (i; i < minlength; i++) {
          let a = parseInt(arr1[i]);
          let b = parseInt(arr2[i]);
          if (a > b) {
            return false; // 版本超前
          } else if (a < b) {
            return true; // 版本过时
          }
        }
        if (length1 > length2) {
          for (let j = i; j < length1; j++) {
            if (parseInt(arr1[j]) != 0) {
              return false; // 版本超前
            }
          }
          return false; // 版本相同
        } else if (length1 < length2) {
          for (let j = i; j < length2; j++) {
            if (parseInt(arr2[j]) != 0) {
              return true; // 版本过时
            }
          }
          return false; // 版本相同
        }
        return false; // 版本相同
      }

      #checkSettingDataIntegrity() {
        for (const value in this.#scriptSettingData) {
          if (!this.settingData.hasOwnProperty(value)) {
            console.warn(`属性不存在：${value}`);
            this.settingData[value] = this.#scriptSettingData[value];
            GM_setValue("searchEngineJumpData", this.settingData);
          }
        }
      }

      #checkUpdate() {
        if (
          this.#isVersionOutdated(
            this.#storedSettingData.version,
            this.#scriptSettingData.version
          )
        ) {
          this.settingData.version = this.#scriptSettingData.version;
          this.settingData.message = this.#scriptSettingData.message;

          // 5.29.9 更新
          if (
            this.settingData.setBtnOpacity === "0.2" &&
            this.#isVersionOutdated(this.#storedSettingData.version, "5.29.9")
          ) {
            this.settingData.setBtnOpacity = "0.7";
          }

          // 5.30.2 更新
          if (
            this.#isVersionOutdated(this.#storedSettingData.version, "5.30.2")
          ) {
            this.deleteOutdatedSearchItems(["https://so.letv.com/s?wd=%s"]);
            this.modifyOutdatedSearchItems(
              "https://s.weibo.com/weibo/%s",
              "https://s.weibo.com/weibo/?q=%s"
            );
          }

          // 5.30.4 更新
          if (
            this.#isVersionOutdated(this.#storedSettingData.version, "5.30.4")
          ) {
            this.modifyOutdatedSearchItems(
              "https://www.startpage.com/do/asearch$post$query",
              "https://www.startpage.com/sp/search$post$query"
            );
          }

          // 5.31.1 更新
          if (
            this.#isVersionOutdated(this.#storedSettingData.version, "5.31.1")
          ) {
            this.modifyOutdatedSearchItemsTarget("https://zh.moegirl.org/%s");
            this.modifyOutdatedSearchItemsTarget(
              "https://tieba.baidu.com/f?kw=%s&ie=utf-8"
            );
            this.modifyOutdatedSearchItemsTarget(
              "https://github.com/search?utf8=✓&q=%s"
            );
          }

          // 5.31.8 更新
          if (
            this.#isVersionOutdated(this.#storedSettingData.version, "5.31.8")
          ) {
            this.modifyOutdatedSearchItems(
              "https://cn.bing.com/search?q=%s",
              "https://www.bing.com/search?q=%s"
            );
          }

          // 5.31.11 更新
          if (
            this.#isVersionOutdated(this.#storedSettingData.version, "5.31.11")
          ) {
            this.addSearchItem(
              {
                name: "小红书",
                url: "https://www.xiaohongshu.com/search_result/?keyword=%s",
                favicon:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAXSSURBVGhD7ZprbBRVFMf/O1ta+qDQUh5CKS+hVQMVFBAiNjUBixJRUT4YE8UPPj5VjSlEjaIJiFWgpUaBgOURsFIVtNFQo5IoUouNBYq2gKVvoZXtA0rpdndbz+m5Q6ez27JEozvJ/pLp3HvuzOw99zzumUltMJAUGpH0YuyEl+6LHJkWHxIWbwf6jf/feICeerezvvCK49Cm5rqNFV0dFWqob6LpMfHp60dOyRxqt4cqUUDT6fF0rXacy8huqc/mPi26KJE1elpWiKb19q0AzzWNPKe1291a3Hmp2MbuVJpw5wmrWMIMW2ZWbUmyfe2oKevmhQ+fq+SWgy0TqmlhtuqpC2onhoRNUHJLUuN21tnciandgZadbhTOZhzdllaCYR001bY8QUUCjaAigUZQkUAjqEigYetJTO1R7YEJo8L4ptGkNuntaAHaLqsBH4wdBdx+q7QrKoHqemlfDzs9O3W+tBsdQNm1dya/8E+RGUlA/gfSztoBbNkrbV+sywAeSaPqhx679GmgsobuTwRiR9BCUDGhUUXkdsu1tX8CVXXA3GQZz3pD5CfKgW37gNZLwKnTgLNL5DwPpxM4UyV9A/4pMus24OMcaQ+mSFwM8H0eEDoEOHwUeP41kW99G0iZJ20jW+k5m+h5hbuBifFKaKK5FXjhTaCbprkni87dwMPPkDLn1AWCfzFi87OufPwhUYLZ/bmc/ylsqcxXgMQpNA/qs3uzq5uwr4mbvEa1+3jqMeDBRcD82cCREomP5Utk7OdSoKSMJr2MVoZcKOUu4Mdj9PAw4L1XgfChch27z4I7gI5Oca+T5C4L1ftb40UgJxcoPg5c+Au40kExQS7Ev8ecptVm14oeJjEXFQns+wIoPQXszAd+pbMJ3xZhH+eJLklVAh/MniHX8ME/+MC9QMxwNUg8ej+wYqkE+3c/Abs+UwNEC7kL90t/k/6BQrKgYZzjhvtHflECouGCKMML6QPfiugTaqNgG4jWNtUgRtD1Xa6+INYp+Ba42Kw6A5AwHrjlZjl0oqOkPyZOCYjJ9BIbEa463vhWZES0nJsNkzXTYhiLoet50jPJkrxqDGetnZ9KezDWvkwW2Ub3bVYCgl2SZWxVnRwK+KIDwMoVStAfb0WiIoAhIdI2rroZTo06bBGG7122WNrsAme906QXHLz+wkGe8SxZcZwS9OH9FH1STMsgrsVpUYctwiynFYxU5ucf27a+z7oDwZbc8QmlVkOWq6G4+mi/yPnIpQBvaJQxzqDTKYOZ8FZkkiGf19GGNRD151WD0PeARXfLmRk/lv6Qexkt54u8AuDdrcDG7UpAlFNFkLlF5Hy88yEpRgrp+NgOvBVpotSob5HHf5ezr22EU+RVSq0Mp1MmZ6fExd6DknU2U//fwkXJRIfjz4S3Irz9H6W943xTnyL63mCEsxSnVa67Dh4Cpk0C5syUsuMP2jc47fLum0x1l56mddh9ddn0yUo4AByvfMRS1aBj9/6yq6LaRC755zhyDdb8a1pVTn06RlfhEqOmQTa9556QvUSHN7u8L4H1q/rfz/Am93q6tN/K9lk79cKFZOEemssYJVCw15jwtgjDu3n+V6II+7Duk7wLF/4gbeZsNfD+LomHtBQlVHCQpi7wVuJG8FBdxW5q5Bv6fd1TDFy/aIwgt7qHCr5OqkBLTgLtV9SAAd7AuLAcRmf2ZRdtjIeLgKSppKRpNc1UkPtx4mB30ZMFL5g+2UhK6QvnyKLy7n7qjMhN+Ff9WgDfrmVBgooEGkFFAo2gIoFGUJFAQ3P3fiiyNqyDVuPqoprb2rAOGv+DiupbFtbBlhgakXgiYW5ZmN2mPhFaC6enx5Vce2yG3eFxOa7C07E4MlZ9/rAWqx2VqwraHQW974xFVy8Vtfd42lOGxqSGaDbv98gAhC3BSmxortvA/WuTZmXy25v2azabPdYeGhdt14Zrfn+9/m/g7FTlclbnXW7MW9lY/iRbQkaAvwEWveocTKmI8QAAAABJRU5ErkJggg==",
              },
              "sociality"
            );
          }

          // 5.31.16 更新 twitter 更新为X
          if (
            this.#isVersionOutdated(this.#storedSettingData.version, "5.31.16")
          ) {
            this.deleteOutdatedSearchItems([
              "https://twitter.com/search/%s",
            ]);
            this.addSearchItem(
              {
                name: "X",
                url: "https://x.com/search?q=%s",
                favicon:
                  "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB7ElEQVR4Ae1XMZLCMAwUdw0ldJQ8ATpKnkBJByUd8ALyA/gBdJTQUtHS8QT4AaRM5ctmThmfogQ75CYNmhGTbGJr45Vk0yAiQzXaF9VsHwIZAofDgYwxqo9GI/K16/X6cqyxvdVqmdvtZh6PhwmCIHXcw7vdrpFj8ny9XhsYxhe8lwWHw2EycLFYpNh0Ok2w8/nsFHy1WrkE1wnAN5tNMkGv10ux3W6XIab5fD5P3ovldCGrP2Ap4LiW8uRJAcIwe1wpArYU0FJimhQgxaQ9cqX4BZYCgSVmS8HBfRP1JQEsY1xKGSmAcTC+l0QrIWDraicVMBBA4O1265ScpQnAMbkMwphjub1HAI7EkxoDK7n0/gQQGATsCmDMo+z++Hf8E5CjPZ9PiqKIZrMZhWFIl8slxcbjMTWbTTqdTuRrXoz5i2WXRIL+WxWw2+Uml13rnJUT4K9E9nMFaF3SxiojoO1u2rJzl4z3/+oIcHBMLiUp2rDe3ozg+BIYtNee87KjGzLGndPx7JD/0K7xog2Gl30ymaSY1jm9CPhsrXnnBK1zOhHgCWWtF7l2TtA6p3S1E+73exoMBrRcLul4PJKL3e93arfbSUeMA1O/36eYPHU6nWQu7pyaqRlfZnezV05anhSN34va7PPXrHYCP+VaTG3LBV1KAAAAAElFTkSuQmCC",
              },
              "sociality"
            );
          }

          // 5.31.17 更新贴吧图标
          if (
            this.#isVersionOutdated(this.#storedSettingData.version, "5.31.17")
          ) {
            this.modifyOutdatedSearchItemsIcon(
              "https://tieba.baidu.com/f?kw=%s&ie=utf-8",
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpY29uIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTc1MC4zNTEgNTQxLjA1Nkg2MDAuODI3djIxNC40NjdoMTE1LjUyMmMzNS40NTYgMCAzNC4wMDItNDEuMTI0IDM0LjAwMi00MS4xMjRWNTQxLjA1NnoiIGZpbGw9IiMyNDgyRkQiLz48cGF0aCBkPSJNODQ5LjkyIDUxLjJIMTc0LjA4Yy02Ny44NjYgMC0xMjIuODggNTUuMDE0LTEyMi44OCAxMjIuODh2Njc1Ljg0YzAgNjcuODY2IDU1LjAxNCAxMjIuODggMTIyLjg4IDEyMi44OGg2NzUuODRjNjcuODY2IDAgMTIyLjg4LTU1LjAxNCAxMjIuODgtMTIyLjg4VjE3NC4wOGMwLTY3Ljg2Ni01NS4wMTQtMTIyLjg4LTEyMi44OC0xMjIuODh6bS0zNTguNzA3IDc2OGMtOTcuNTk4IDAtMTQxLjU5OS03My4yNTItMTQxLjU5OS03My4yNTItNTEuODUgODAuNDQtMTQxLjU5NCA3My4wNzMtMTQxLjU5NCA3My4wNzN2LTYzLjUwNGMxMDguNzI5IDAgMTA4Ljc4LTEwNy4yMjggMTA4Ljc4LTEwNy4yMjhWMzE3LjQ2Nmg2NS42MjN2MzMwLjgyM2MwIDEwMi45MDcgMTA4Ljc4NSAxMDcuMjI4IDEwOC43ODUgMTA3LjIyOFY4MTkuMnptMC02MDguNTg0VjY1OC4zNUg0MjUuNTlWMjczLjM4OEgzMTQuNDM1Yy00MS41MjkgMC00MC43ODEgMzMuMTM2LTQwLjc4MSAzMy4xMzZWNjU4LjM0aC02NS42MjhWMzA2LjUzYzAtOTguMDg1IDEwNi40MDMtOTYuNjQgMTA2LjQwMy05Ni42NGgxNzYuNzg0di43MjZ6bTMyNC43NjEgNTAzLjc3OGMwIDEwMy45MTUtOTkuNjI1IDEwNC42MzItOTkuNjI1IDEwNC42MzJINTM1LjIwNFY0NzcuNTU4aDYwLjUxOFYyMDQuOGg2NS42MjN2NjcuODU1aDE1NC41MzJ2NjcuNzM4SDY2MS4zNDV2MTM3LjE2aDE1NC42M3YyMzYuODR6IiBmaWxsPSIjMjQ4MkZEIi8+PC9zdmc+"
            );
            console.log("更新贴吧图标");
          }

          console.info(
            `\n%c ${GM_info.script.name} 设置已更新 \n%c 本地设置版本号:\t\t${
              this.#storedSettingData.version
            }\t\t\t\t\t\t\t\n%c 当前版本号:\t\t\t${
              this.settingData.version
            }\t\t\t\t\t\t\t\n`,
            "color:#eee;background:#444;padding:6px 0;border-radius:6px 6px 0 0;",
            "color:#444;background:#eee;padding:6px 0;border-radius:0 6px 0 0",
            "color:#444;background:#eee;padding:6px 0;border-radius:0 0 6px 6px;"
          );
          GM_setValue("searchEngineJumpData", this.settingData);
        }
      }

      initSettings() {
        if (this.#storedSettingData) {
          this.settingData = Object.assign({}, this.#storedSettingData);
          this.#checkSettingDataIntegrity();
          this.#checkUpdate();
        } else {
          this.settingData = this.#scriptSettingData;
          GM_setValue("searchEngineJumpData", this.settingData);
        }

        this.initEngineCategories();
      }

      initEngineCategories() {
        this.settingData.engineList.engineCategories = [];
        for (
          let engineCategoryIndex = 0;
          engineCategoryIndex < this.settingData.engineDetails.length;
          engineCategoryIndex++
        ) {
          if (this.settingData.engineDetails[engineCategoryIndex][2]) {
            this.settingData.engineList.engineCategories[engineCategoryIndex] =
              this.settingData.engineDetails[engineCategoryIndex];
          } else {
            this.settingData.engineList.engineCategories[-engineCategoryIndex] =
              this.settingData.engineDetails[engineCategoryIndex];
          }
        }
      }

      getMatchedRule() {
        for (const rule of [...rules]) {
          if (rule.url.test(location.href)) {
            return rule;
          }
        }
        return null;
      }

      addSearchItem(newItem, category) {
        this.settingData.engineList[category].push(newItem);
      }
      // 更新已过期的搜索链接
      modifyOutdatedSearchItems(oldURL, newURL) {
        for (const value in this.settingData.engineList) {
          var item = this.settingData.engineList[value];
          for (let i = 0; i < item.length; i++) {
            if (item[i].url === oldURL) {
              item[i].url = newURL;
            }
          }
        }
      }
      // 更新搜索target 不为 _blank
      modifyOutdatedSearchItemsTarget(url) {
        for (const value in this.settingData.engineList) {
          var item = this.settingData.engineList[value];
          for (let i = 0; i < item.length; i++) {
            if (item[i].url === url) {
              delete item[i].blank;
            }
          }
        }
      }
      deleteOutdatedSearchItems(urlList) {
        for (const value in this.settingData.engineList) {
          var item = this.settingData.engineList[value];
          for (let i = 0; i < item.length; i++) {
            if (urlList.includes(item[i].url)) {
              console.warn("删除搜索引擎：" + item[i].name);
              item.splice(i, 1);
            }
          }
        }
      }
      // 更新图标
      modifyOutdatedSearchItemsIcon(url, newIcon) {
        for (const value in this.settingData.engineList) {
          var item = this.settingData.engineList[value];
          for (let i = 0; i < item.length; i++) {
            if (item[i].url === url) {
              console.log("匹配成功, 更新图标 : ", url);
              item[i].favicon = newIcon;
            }
          }
        }
      }
      // 更新本地 rule
      modifyOutdatedSearchItemsRule(name, value) {
        var oldRule = this.settingData.rules;
        for (let item in oldRule) {
          if (oldRule[item].name == name) {
            console.log("匹配成功, 更新 rule : ", name);
            oldRule[item] = value;
          }
        }
      }
    }

    class DropDownList {
      zIndex = 100000001;
      hidden = true;
      showDelay = 233;
      hideDelay = 233;
      aShownClass = "sej-drop-list-trigger-shown";

      constructor(a, list) {
        this.a = a;
        this.list = list;
        this.init();
      }

      init() {
        var a = this.a;
        var list = this.list;

        var self = this;

        // 关闭动画
        if (!settingData.transtion) {
          this.showDelay = 0;
          this.hideDelay = 0;
        }

        // 进入显示
        a.addEventListener("mouseenter", function () {
          clearTimeout(self.hideTimerId);

          if (self.hidden) {
            self.showTimerId = setTimeout(function () {
              self.show();
            }, self.showDelay);
          } else {
            var style = list.style;
            style.top = parseFloat(list.style.top) - 6 + "px";
            style.zIndex = this.zIndex + 1;
            style.opacity = 1;
          }
        });

        // 离开隐藏
        a.addEventListener("mouseleave", function () {
          clearTimeout(self.showTimerId);

          if (!self.hidden) {
            list.style.top = parseFloat(list.style.top) + 6 + "px";
            list.style.opacity = 0.04;
            self.hideTimerId = setTimeout(function () {
              self.hide();
            }, self.hideDelay);
          }
        });

        list.addEventListener("mouseenter", function () {
          clearTimeout(self.hideTimerId);

          var style = list.style;
          style.zIndex = this.zIndex + 1;
          style.opacity = 1;
          style.top = parseFloat(list.style.top) - 6 + "px";
        });

        list.addEventListener("mouseleave", function () {
          list.style.opacity = 0.04;
          list.style.top = parseFloat(list.style.top) + 6 + "px";
          self.hideTimerId = setTimeout(function () {
            self.hide();
          }, self.hideDelay);
        });
      }
      show() {
        if (!this.hidden) return;
        this.hidden = false;

        var scrolled = this.#getScrolled();
        var aBCRect = this.a.getBoundingClientRect();

        var style = this.list.style;

        // 使用 fixed 定位，直接使用视口坐标，不需要加 scrolled
        var top = aBCRect.bottom;
        var left = aBCRect.left;

        style.top = top + 6 + "px";
        style.left = left + "px";

        style.zIndex = this.zIndex - 1;
        style.display = "block";
        // 二级搜索居中显示
        style.left =
          left -
          (this.list.getBoundingClientRect().width - aBCRect.width) / 2 +
          "px";

        setTimeout(function () {
          style.opacity = 1;
          style.top = top + "px";
        }, 30);
        this.a.classList.add(this.aShownClass);
      }
      hide() {
        if (this.hidden) return;
        this.hidden = true;

        var style = this.list.style;
        style.display = "none";
        style.opacity = 0.2;

        this.a.classList.remove(this.aShownClass);
      }
      // 获取已滚动的距离
      #getScrolled(container) {
        if (container) {
          return {
            x: container.scrollLeft,
            y: container.scrollTop,
          };
        }
        return {
          x:
            "scrollX" in window
              ? window.scrollX
              : "pageXOffset" in window
              ? window.pageXOffset
              : document.documentElement.scrollLeft || document.body.scrollLeft,
          y:
            "scrollY" in window
              ? window.scrollY
              : "pageYOffset" in window
              ? window.pageYOffset
              : document.documentElement.scrollTop || document.body.scrollTop,
        };
      }
    }

    class SettingButton {
      settingButtonElement;

      constructor(jumpBarContainer, settingData) {
        this.parentJumpBarContainer = jumpBarContainer;
        this.settingData = settingData;
        this.#addButtonToJumpBar();
        this.settingButtonElement?.addEventListener("click", () =>
          this.#activateSettingButton()
        );
        GM_registerMenuCommand("设置菜单", () => this.#activateSettingButton());
      }
      #addButtonToJumpBar() {
        if (this.settingData.setBtnOpacity >= 0) {
          this.settingButtonElement = document.createElement("span");
          this.settingButtonElement.id = "setBtn";
          this.settingButtonElement.title = "设置菜单";
          ShadowDOMManager.addStyle(`#setBtn{opacity: ${this.settingData.setBtnOpacity};}`);
          this.settingButtonElement.innerHTML = icon.setting;
          this.parentJumpBarContainer.appendChild(this.settingButtonElement);
        }
      }
      #activateSettingButton() {
        if (!this.settingPanel) {
          const shadowRoot = ShadowDOMManager.getRoot();
          shadowRoot.querySelector("#settingLayerMask")?.remove();
          this.settingPanel = new SettingPanel();
        }
        this.settingPanel.show();
      }
    }

    class JumpBar {
      engineButtonTemplate =
        '<a class="sej-engine" target="$blank$" data-iqxincategory="$category$" encoding="$encoding$" gbk="$gbk$" url="$url$"><div class="sej-engine-icon" style="background-image: url(&quot;$favicon$&quot;); background-size: cover; width: 16px; height: 16px; display: inline-block;"></div>$name$</a>';
      dropDownLists = [];
      container;
      inputTarget;
      insertTarget;
      insertPositionLabel;
      matchedRule;
      engineList;
      settingData;

      constructor(engineList, settingData, matchedRule) {
        this.engineList = engineList;
        this.settingData = settingData;
        this.matchedRule = matchedRule;
        const inited = this.#initContainer();
        if (inited === false) return;
        this.#initEngines();
        this.#addEnginesToDOM();
        this.#addStyle();
        if (this.settingData.fixedTop && this.matchedRule) {
          const originalContainerDistanceTop =
            this.container.getBoundingClientRect().top + window.scrollY;
          // 判断是否需要只在向上滚动时显示
          if (this.settingData.fixedTopUpward) {
            window.onwheel = document.onwheel = (e) => {
              e.wheelDelta > 0
                ? this.#fixedToTop(
                    this.matchedRule.fixedTop,
                    this.matchedRule.fixedTopColor,
                    originalContainerDistanceTop
                  )
                : {};
            };
          } else {
            window.onscroll = () => {
              this.#fixedToTop(
                this.matchedRule.fixedTop,
                this.matchedRule.fixedTopColor,
                originalContainerDistanceTop
              );
            };
          }
        }
        // 在 Shadow root 中查询并绑定事件
        const shadowRoot = ShadowDOMManager.getRoot();
        shadowRoot.querySelectorAll("sejspan a.sej-engine").forEach((engine) => {
          engine.addEventListener("mousedown", (e) => {
            this.#jumpToSelectedEngine(e);
          });
        });
      }
      #initContainer() {
        if (this.matchedRule?.enabled) {
          this.inputTarget = this.#getInputTarget();
          this.insertTarget = this.#getInsertTarget();
          this.insertPositionLabel = this.#getInsertPositionLabel();
          if (this.inputTarget && this.insertTarget) {
            this.#createContainerDOM();
          } else {
            console.warn(
              `未找到输入框或插入位置，跳过初始化：\n输入框：${this.inputTarget}\n插入位置：${this.insertTarget}`
            );
          }
        } else if (this.#isOnSelectSearchMode()) {
          this.inputTarget = {};
          this.insertTarget = document.body;
          this.insertPositionLabel = "beforeend";
          this.#createContainerDOM();
          this.container.classList.add("selectSearch");
          // selectionchange 事件在主文档上监听，但操作 Shadow DOM 中的元素
          document.addEventListener("selectionchange", () =>
            this.#toggleSelectSearchJumpBar()
          );
        } else {
          console.info("未启用搜索跳转，跳过初始化");
          return false;
        }

        // 由于与要插入网页的样式无法很好的兼容,更改源网页的样式
        // 这里需要保留 GM_addStyle，因为要修改主文档的样式
        if (this.matchedRule?.stylish) {
          GM_addStyle(this.matchedRule.stylish);
          
          // 同时将 stylish 中针对脚本元素的规则注入到 Shadow DOM
          // 提取 #sej-container 和 #sej-container-wrapper 的规则
          const scriptElementStyles = this.matchedRule.stylish.match(/#sej-container(-wrapper)?\s*\{[^}]+\}/g);
          if (scriptElementStyles) {
            scriptElementStyles.forEach(rule => {
              ShadowDOMManager.addStyle(rule);
            });
          }
        }
        return true;
      }
      #createContainerDOM() {
        this.container = document.createElement("sejspan");
        this.container.id = "sej-container";
        this.container.className = "rwl-exempt";
        
        // 应用 rule.class 到 container
        if (this.matchedRule?.class) {
          this.container.className += ` ${this.matchedRule.class}`;
        }
        
        // 判断是否需要独立的 wrapper
        // 有 sticky/fixed：不需要 wrapper，Shadow host 直接接收 container
        // 没有 sticky/fixed：需要 wrapper 行为，但不创建 containerWrapper 元素，
        //                    让 Shadow host 充当 wrapper 角色
        this.needsWrapper = !(
          this.matchedRule?.style.includes("sticky") ||
          this.matchedRule?.style.includes("fixed")
        );
      }
      #toggleSelectSearchJumpBar() {
        const selection = getSelection();
        if (selection.isCollapsed) {
          this.container.style.top = "-50px";
        } else {
          this.inputTarget.textContent = selection.toString();
          this.container.style.top = "2px";
        }
      }
      #isOnSelectSearchMode() {
        if (
          (!this.matchedRule || !this.matchedRule.enabled) &&
          this.settingData.selectSearch
        ) {
          return true;
        }
      }
      #getInputTarget() {
        return typeof this.matchedRule?.insertIntoDoc.keyword == "function"
          ? this.matchedRule.insertIntoDoc.keyword
          : this.#getElementBySelector(this.matchedRule?.insertIntoDoc.keyword);
      }
      #getInsertTarget() {
        return typeof this.matchedRule?.insertIntoDoc.target == "function"
          ? this.matchedRule.insertIntoDoc.target()
          : this.#getElementBySelector(this.matchedRule?.insertIntoDoc.target);
      }
      #getInsertPositionLabel() {
        return this.matchedRule?.insertIntoDoc.where.toLowerCase();
      }
      #initEngines() {
        const self = this;
        this.engineList.engineCategories.forEach(function (item) {
          // console.log(item);  // 搜索菜单   ["网页", "web", true]
          const category = item[1]; // "web"
          const cName = item[0]; // "网页"
          let engines = [];

          self.engineList[category].forEach(function (engine) {
            const engineUrl = engine.url;
            if (engine.disable) return;
            if (
              self.settingData.HideTheSameLink &&
              self.matchedRule?.url.test(engineUrl)
            )
              return; // 去掉跳转到当前引擎的引擎

            let engineListButton = self.engineButtonTemplate
              .replace("$encoding$", (engine.encoding || "utf-8").toLowerCase())
              .replace("$url$", engineUrl)
              .replace("$name$", engine.name)
              .replace("$category$", category);

            // 图标
            if (engine.favicon) {
              engineListButton = engineListButton.replace(
                "$favicon$",
                engine.favicon
              );
            } else {
              engineListButton = engineListButton.replace(
                'src="$favicon$"',
                ""
              );
            }
            // gbk编码
            if (engine.gbk) {
              engineListButton = engineListButton.replace("$gbk$", engine.gbk);
            } else {
              engineListButton = engineListButton.replace('gbk="$gbk$"', "");
            }
            // 新标签页
            if (settingData.newtab || engine.blank) {
              engineListButton = engineListButton.replace("$blank$", "_blank");
            } else {
              engineListButton = engineListButton.replace(
                'target="$blank$"',
                ""
              );
            }

            engines.push(engineListButton);
          });
          // 非空列表
          if (!engines.length) return;

          engines = engines.join("");

          // 展开当前搜索分类列表
          if (
            !self.settingData.foldlist &&
            category == self.matchedRule?.engineList
          ) {
            self.container.innerHTML = engines;
          } else {
            const dropDownList = document.createElement("sejspan");
            dropDownList.className = "sej-drop-list rwl-exempt";
            dropDownList.innerHTML = engines;

            //  a:主搜索菜单
            // dropList: 搜索子菜单
            const jumpBarButton =
              dropDownList.firstElementChild.cloneNode(true);
            jumpBarButton.className =
              jumpBarButton.className + " sej-drop-list-trigger";

            // 隐藏主搜索菜单的图标
            if (!self.settingData.icon) {
              cName = "";
            }

            jumpBarButton.lastChild.nodeValue = cName;
            self.dropDownLists.push([jumpBarButton, dropDownList]);
          }
        });
      }
      #addEnginesToDOM() {
        const shadowRoot = ShadowDOMManager.getRoot();
        
        this.dropDownLists.forEach((item) => {
          this.container.appendChild(item[0]); //将搜索列表放入主搜索
          shadowRoot.appendChild(item[1]); // 插入搜索子菜单到 Shadow DOM
          new DropDownList(item[0], item[1]);
        });

        // 将 Shadow host 插入到目标位置
        if (this.#isOnSelectSearchMode()) {
          // 划词搜索模式：插入到 body（fixed 定位）
          ShadowDOMManager.insertHost(document.body, 'beforeend');
        } else {
          // 正常搜索引擎页面模式：插入到指定位置
          ShadowDOMManager.insertHost(this.insertTarget, this.insertPositionLabel);
          
          // 如果需要 wrapper 行为，应用 wrapperClass 到 Shadow host
          if (this.needsWrapper && this.matchedRule?.wrapperClass) {
            ShadowDOMManager.shadowHost.className += ` ${this.matchedRule.wrapperClass}`;
          }
        }
        
        // 将容器添加到 Shadow root
        shadowRoot.appendChild(this.container);
      }
      #addStyle() {
        if (this.matchedRule?.style) {
          // 判断是否存在脚本 “AC-baidu:重定向优化百度搜狗谷歌搜索_去广告_favicon_双列”
          if (this.settingData.center == 2) {
            // 自动判断是否添加
            if (
              document.querySelector(".AC-style-logo") &&
              this.matchedRule.style_ACBaidu
            ) {
              this.matchedRule.style = this.matchedRule.style_ACBaidu;
            }
          } else if (this.settingData.center == 1) {
            //  强制添加
            this.matchedRule.style = this.matchedRule.style_ACBaidu
              ? this.matchedRule.style_ACBaidu
              : this.matchedRule.style;
          } //
          // 判断是否存在脚本“知乎排版优化”
          if (document.getElementById("SearchMain")) {
            if (
              document.getElementById("SearchMain").style.marginLeft == "150px"
            ) {
              this.matchedRule.style = this.matchedRule.style_ZhihuChenglinz;
              this.matchedRule.fixedTop = null;
            }
          }
          
          // 应用规则样式，始终应用到 container
          // 原始代码：this.container.style.cssText = this.matchedRule.style;
          // 
          // Shadow DOM 架构：
          // - 有 wrapper 行为：Shadow host 充当 wrapper（接收 wrapperClass），
          //                   container 接收样式（grid-column 等在 wrapper 这个 grid 中生效）
          // - 无 wrapper（sticky/fixed）：Shadow host 透明，container 接收所有样式
          const styleContent = `#sej-container { ${this.matchedRule.style} }`;
          ShadowDOMManager.addStyle(styleContent);
        }

        //兼容ac百度中lite选项, fixedtop和正常的不一样
        setTimeout(function () {
          if (
            document.querySelector(".AC-baiduLiteStyle") &&
            matchedRule.fixedTop2
          ) {
            matchedRule.fixedTop = matchedRule.fixedTop2;
          }
        }, 2500);

        // 吸附顶部时的占位
        // 当需要 wrapper 行为时，给 Shadow host 设置占位样式
        if (
          getComputedStyle(this.container).position !== "sticky" &&
          this.needsWrapper &&
          !this.#isOnSelectSearchMode()
        ) {
          // 给 Shadow host 设置占位高度
          const height =
            this.container.offsetHeight +
            parseFloat(getComputedStyle(this.container).marginTop) +
            parseFloat(getComputedStyle(this.container).marginBottom) +
            "px";
          ShadowDOMManager.shadowHost.style.height = height;
        }
      }
      #fixedToTop(fixedTop, color, originalContainerDistanceTop) {
        if (!this.container) {
          return;
        }

        fixedTop = fixedTop ? fixedTop : 0;

        // 如果规则样式本身包含 sticky 或 fixed，不需要动态 fixedToTop
        if (this.matchedRule?.style && 
            (this.matchedRule.style.includes("sticky") || 
             this.matchedRule.style.includes("fixed"))) {
          return;
        }

        const shadowHost = ShadowDOMManager.shadowHost;
        
        if (originalContainerDistanceTop - window.scrollY <= fixedTop) {
          // 需要吸附到顶部
          if (shadowHost.style.position !== "fixed") {
            // 第一次变成 fixed：保存 container 相对视口的位置
            const rect = this.container.getBoundingClientRect();
            // 保存相对视口的 left，并考虑页面的横向滚动
            shadowHost.dataset.originalLeft = rect.left;
          }
          
          // 吸附到顶部：将 Shadow host 设置为 fixed
          // fixed 的 left 就是相对于视口的，直接使用保存的值
          shadowHost.style.position = "fixed";
          shadowHost.style.top = fixedTop + "px";
          shadowHost.style.left = shadowHost.dataset.originalLeft + "px";
          shadowHost.style.zIndex = "9999";
          
          // container 的样式调整
          // 清除 container 的所有定位和布局样式，让它相对于 fixed 的 Shadow host 正常显示
          this.container.style.position = "static";
          this.container.style.left = "0";
          this.container.style.top = "0";
          this.container.style.gridColumn = "auto"; // 清除 grid-column，避免在 fixed 后错位
          this.container.style.padding = "0";
          this.container.style.margin = "0";
          this.container.style.backgroundColor = color;
        } else {
          // 恢复原始状态：清除 Shadow host 的 fixed 定位
          shadowHost.style.position = "";
          shadowHost.style.top = "";
          shadowHost.style.left = "";
          shadowHost.style.zIndex = "";
          delete shadowHost.dataset.originalLeft;
          
          // 重置 container 样式，让 Shadow DOM 样式表生效
          this.container.style.position = "";
          this.container.style.left = "";
          this.container.style.top = "";
          this.container.style.gridColumn = ""; // 恢复 grid-column
          this.container.style.padding = "";
          this.container.style.margin = "";
          this.container.style.backgroundColor = "";
        }
      }
      #jumpToSelectedEngine(e) {
        const target = e.target;

        if (!target) return;
        if (!target.classList.contains("sej-engine")) return;

        let searchKeyword;
        if (typeof this.inputTarget == "function") {
          searchKeyword = this.inputTarget();
        } else {
          if (this.inputTarget.nodeName == "INPUT") {
            searchKeyword = this.inputTarget.value;
          } else {
            searchKeyword = this.inputTarget.textContent;
          }
        }

        // 如果搜索内容是通过某一网站搜索, 就去掉。 例: 0 site:zhihu.com  只保留0, 后面的网站会去掉
        if (!this.settingData.HideTheSameLink) {
          searchKeyword = searchKeyword.replace(/site:[^\s]+/, "");
        }

        // 编码 解码
        // 对搜索词编码 (未做解码处理，浏览器自动处理) 网站1688采用gbk编码
        const ogbk = target.getAttribute("gbk");
        if (ogbk) {
          searchKeyword = toGBK(searchKeyword);
        } else {
          searchKeyword = encodeURIComponent(searchKeyword);
        }

        let targetURL = target.getAttribute("url");

        // 一键搜索
        if (
          this.settingData.allOpen &&
          target.classList.contains("sej-drop-list-trigger")
        ) {
          var list = this.engineList[target.dataset.iqxincategory];

          for (var i = 0; i < list.length; i++) {
            if (
              list[i].url.indexOf("site:") < 0 &&
              matchedRule?.url.test(list[i].url)
            )
              continue;
            if (list[i].disable) continue;
            var href = list[i].url.replaceAll("%s", searchKeyword);
            GM_openInTab(href);
          }
          target.setAttribute("onclick", "return false;");
          return;
        }

        // 如果有post请求
        var postSign = targetURL?.indexOf("$post$");
        if (postSign && postSign !== -1) {
          target.addEventListener("click", function (e) {
            e.preventDefault();
          });
          var f = this.#getEngineJumpPostForm(
            targetURL.substring(0, postSign),
            [
              targetURL.substring(postSign + 6),
              decodeURIComponent(searchKeyword),
            ],
            target.getAttribute("target")
          );
          document.body.appendChild(f);
          f.submit();
        } else {
          target.href = target
            .getAttribute("url")
            .replaceAll("%s", searchKeyword);
        }

        if (this.#isOnSelectSearchMode()) {
          target.target = "_blank";
        }
        if (target?.target !== "_blank") {
          target.target = "_top";
        }
      }
      #getElementBySelector(selector) {
        if (selector?.startsWith("css;")) {
          return document.querySelector(selector.slice(4));
        } else {
          return document.evaluate(selector, document, null, 9, null)
            .singleNodeValue;
        }
      }
      #getEngineJumpPostForm(url, value, newTab) {
        const postForm = document.createElement("form");
        postForm.method = "post";
        postForm.action = url;
        postForm.style.cssText = "display:none;";
        postForm.innerHTML = `<input type="hidden" name="${value[0]}" value="${value[1]}"/>`;
        newTab ? (postForm.target = "_blank") : {};
        return postForm;
      }
    }

    class SettingPanel {
      static dragEl = null;
      aPatternParent = "<div></div>";
      ele = document.createElement("div");
      mask = document.createElement("div");
      parentTemp = null;
      editTemp = null;
      online = null;
      shadowRoot = null; // 存储 Shadow root 引用

      constructor() {
        this.shadowRoot = ShadowDOMManager.getRoot();
        this.init();
      }
      init() {
        // console.log("init...");
        var that = this;

        this.ele.id = "settingLayer";
        this.mask.id = "settingLayerMask";

        this.addGlobalStyle();

        this.addContent();

        this.mask.addEventListener("click", function () {
          that.hide();
        });
        this.ele.addEventListener("click", function (e) {
          e.stopPropagation();
        });

        this.mask.appendChild(this.ele);
        ShadowDOMManager.getRoot().appendChild(this.mask);

        // 绑定事件
        this.ele.addEventListener("click", that.domClick.bind(this), false);
        this.dragEvent();
        this.setDragNode(this.ele); //设置拖动
        // input[range]
        that.rangeChange(true);
        this.shadowRoot
          .querySelector("#setBtnOpacityRange")
          .addEventListener("input", that.rangeChange.bind(that));

        this.shadowRoot
          .querySelector("#xin-save")
          .addEventListener("click", function () {
            that.saveData();
            that.hide();
            that.reloadSet();
          });
        this.shadowRoot
          .querySelector("#xin-addDel")
          .addEventListener("click", function (e) {
            that.addDel(e);
          });
        this.shadowRoot
          .querySelector("#xin-modification")
          .addEventListener("click", function () {
            that.editCodeBox();
          });
        window.addEventListener("resize", this.windowResize.bind(this));
      }
      // 添加辅助方法用于在 Shadow root 中查询元素
      $(selector) {
        return this.shadowRoot.querySelector(selector);
      }
      $$(selector) {
        return this.shadowRoot.querySelectorAll(selector);
      }
      dragEvent() {
        var that = this;
        var odivsdrag = this.$$(".drag");
        [].forEach.call(odivsdrag, function (odiv) {
          odiv.addEventListener("dragstart", that.domdragstart, false);
          odiv.addEventListener("dragenter", that.domdragenter, false);
          odiv.addEventListener("dragover", that.domdragover, false);
          odiv.addEventListener("dragleave", that.domdragleave, false);
          odiv.addEventListener("drop", that.domdrop, false);
          odiv.addEventListener("dragend", that.domdropend, false);
        });
      }
      addContent() {
        var aPattern =
          '<span draggable="true" class="drag">' +
          '<span class="sej-engine"' +
          ' data-xin="$xin$" ' +
          ' data-iqxinimg="$img$" ' +
          ' data-iqxintitle="$title$" ' +
          ' data-iqxinlink="$link$" ' +
          ' data-iqxintarget="$blank$" ' +
          ' data-iqxindisabled="$disabled$" ' +
          ' data-iqxingbk="$gbk$" ' +
          '><div class="sej-engine-icon" style="background-image: url(&quot;$favicon$&quot;); background-size: cover; width: 16px; height: 16px; display: inline-block;"></div><span>$name$</span></span>' +
          ' <span class="iqxin-set-edit" title="编辑 Edit"><img class="sej-engine-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAACDklEQVR4nJXVzUtUURjH8Y/mSNKkki2iwiApxHQ1q/6C+gusoCB6oxbRRqFNL4sWtRKqhVSLIDe1CqpNiwjKIilKLKKFEr2Z2qI0xxHN0+LOm+PMOPOc1T2H7/f5ncO991BdNer30zmxKrl0xV2zKJjRoy6aqkkvbbdVLPuUq+8+5uGXnVILki7qsxgtNDtrTNLcijHvrdYsft0/wQ8DZgSzeqMUDW4IJceYHcvwCd1ies0KZvWI1TnhIH6574Olgg0E74zmhZ902j304by4Cxp5LPjtQNmjy3XPVK2rgmCBCcGgdVXhdBgUBCMEwVMNVeIvBMFLifKC8vgrndFBlRJUhJcWFMd3ZfGuzFRxwWrdu3KTxQQVhi8lqApfKVhf0d4bc2/OckG9Pkur7r3TEw+1FRO0GxdM2Vc2/HHBgr1If935UTfigbt5+C27MeSo9+m5GJYitlCwWR2G8oQZ/FgWX1aFgnZMG852v5nFR4rhMn+2dDVJYFpKqy0SDksUhF9FsE0bWgyIa9bIanihoEUcDTrSz4ueOVMOLxQkzVkrZcaoNz755rmpcnihYNghm3w26Ys/5cGcIKgRBJDyqCIquj8C1PqKZvHK+qVrJ5bMRwmGterU64pkkZupWO3RjXkzUZj9+jVZMGK6IsEaHTbgjpOSUYZL/pa5m4qPIbtyznpHvJaqGB53O33h4T/3VzLuzDhE6AAAAABJRU5ErkJggg=="/></span>' +
          ' <span class="iqxin-set-del" title="删除 Delete"><img class="sej-engine-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEUAAADsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVHsbVH///9VVVVWVlZXV1dYWFhZWVlaWlpbW1tcXFxdXV1eXl5fX19gYGBhYWFiYmJjY2NkZGRlZWVmZmZnZ2doaGhpaWlqampra2tsbGxtbW1ubm5vb29wcHBxcXFycnJzc3N0dHR1dXV2dnZ3d3d4eHh5eXl6enp7e3t8fHx9fX1+fn5/f3+AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0tLS1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnKysrLy8vMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///8dej9TAAAAU3RSTlMAAABm7P/sZgAAABPO////zhQAAB/i/////////+IfAAAe4fvk4AAAAAAd/+Q3GxwAFR85FQBjz+LPY+v////r6//////rZM/h4c9jABUdHRUAAP0EcPoAAAEuSURBVHic7ZRnc8IwDIbdEUZHGB0kDsMOMcOMttBBB93Qvcj//y9VjB0Czh13/dz3ixT5OVmSYyMktLK6tm74oYxEMpVGUW1sbm2bM8DMZHP5OWBnd2+/YNnYAWHbKhRL5cocQKjrWFWPuSDmVS3HpUQu1eoNQkiTM9xqd7oHoG6n3cKMNyHcqNfQ4VGPUsr7nh0FbK/PIdw7PkGnZwOZNrqF9AfnF+jyaigLixYp/eH1Dbq9u4eAHyOAHh5HaPz0DCnjANjm5fUNvX98QoGCxyo5Fjmh0K/vH2hzAi0KnqnymMgJrU6gzemQBM+DZpX1/XBYUyAYTTAuZTUg+Aw8Zf+BvwJLR730sPTjXgD0H2YB0BUClXKpGAeE1y+fy2ZMfX12gdOpZMLQAfkE/AL7e5vGZF+dOQAAAABJRU5ErkJggg=="></span>' +
          "</span>";
        var details = engineList.engineCategories;
        // 若根据数组长度获取,负数引导的为属性,不再length长度之内,所以来个大体的数字,当都为空时,结束循环
        // var detailsLength = details.length;
        var detailsLength = 99;
        for (let i = 0; i < detailsLength; i++) {
          var j = i;
          j = details[j] ? j : -j;
          if (!details[j]) {
            break;
          }

          var odiv = document.createElement("div");
          odiv.id = details[j][1]; // "web"
          odiv.classList.add("iqxin-items");

          var oDivTitle = document.createElement("div");
          oDivTitle.classList.add("sejtitle", "drag");
          oDivTitle.setAttribute("draggable", "true");
          oDivTitle.dataset.iqxintitle = details[j][1];
          oDivTitle.dataset.xin = j;
          oDivTitle.innerHTML =
            '<span class="iqxin-pointer-events">' +
            details[j][0] +
            "</span>" +
            '<span class="iqxin-title-edit" title="编辑 Edit"><img class="sej-engine-icon" src="' +
            icon.edit +
            '"/></span>' +
            ' <span class="iqxin-set-title-del" title="删除 Delete"><img class="sej-engine-icon" src="' +
            icon.del +
            '"></span>';
          odiv.appendChild(oDivTitle);

          var oDivCon = document.createElement("div");
          oDivCon.classList.add("sejcon");
          var oDivConStr = "";
          var engineListItem = engineList[details[j][1]];
          var itemLength = engineListItem.length;
          for (let ii = 0; ii < itemLength; ii++) {
            var jj = ii;
            if (!engineListItem[jj]) {
              break;
            }
            var a = aPattern
              .replace("$name$", engineListItem[jj].name)
              .replace("$favicon$", engineListItem[jj].favicon)
              .replace("$xin$", jj);
            // 添加属性
            a = a
              .replace("$img$", engineListItem[jj].favicon)
              .replace("$title$", engineListItem[jj].name)
              .replace("$link$", engineListItem[jj].url);
            if (engineListItem[jj].blank) {
              a = a.replace("$blank$", "_blank");
            } else {
              a = a.replace('data-iqxintarget="$blank$"', "");
            }
            if (engineListItem[jj].disable) {
              a = a.replace("$disabled$", "true");
            } else {
              a = a.replace('data-iqxindisabled="$disabled$"', "");
            }
            if (engineListItem[jj].gbk) {
              a = a.replace("$gbk$", "true");
            } else {
              a = a.replace('data-iqxingbk="$gbk$"', "");
            }

            oDivConStr += a;
          }

          oDivConStr += "<span class='iqxin-additem'>+</span>";

          oDivCon.innerHTML = oDivConStr;
          odiv.appendChild(oDivCon);

          this.ele.appendChild(odiv);
        }

        // 更多设置 菜单
        var btnEle2 = document.createElement("div");
        btnEle2.id = "btnEle2";
        var fixedTop_checked = settingData.fixedTop ? "checked" : "";
        var fixedTopUpward_checked = settingData.fixedTopUpward
          ? "checked"
          : "";
        var transition_checked = settingData.transtion ? "checked" : "";
        var selectSearch_checked = settingData.selectSearch ? "checked" : "";
        var foldlist_checked = settingData.foldlist ? "checked" : "";
        var allOpen_checked = settingData.allOpen ? "checked" : "";
        var HideTheSameLink_checked = settingData.HideTheSameLink
          ? "checked"
          : "";

        var btnStr2 =
          "<div>" +
          "<span id='xin-reset' title='慎点,出厂重置'>清空设置</span>" +
          "<span id='xin-modification' title='edit 分享自己的配置或清空配置'>配置文件</span>" +
          // "<span id='xin-importing' title='importing 导入更为专业的搜索引擎'>导入</span>" +
          "<span id='xin-selectSearch' title='划词搜索, 只有非搜索页面才会生效, 开关功能需要刷新页面'>" +
          "<label>划词搜索<input id='iqxin-selectSearch' type='checkbox' name='' " +
          selectSearch_checked +
          " style='vertical-align:middle;'></label>" +
          "</span>" +
          "<span id='xin-transtion' title='动画,该设置需要刷新页面生效'>" +
          "<label>动画<input id='iqxin-transtion' type='checkbox' name='' " +
          transition_checked +
          " style='vertical-align:middle;'></label>" +
          "</span>" +
          "<span id='xin-foldlists' title='将当前所在搜索分类折叠'>" +
          "<label>折叠当前搜索分类<input id='iqxin-foldlist' type='checkbox' name='' " +
          foldlist_checked +
          " style='vertical-align:middle;'></label>" +
          "</span>" +
          "<span id='iqxin-fixedTopS' title='fixedTop 当滚动页面时,固定到页面顶端。某些页面的样式存在问题'>" +
          "<label>固定到顶端<input id='iqxin-fixedTop' type='checkbox' name='' " +
          fixedTop_checked +
          " style='vertical-align:middle;'></label>" +
          "</span>" +
          "<span id='iqxin-fixedTopUpward' title='固定到顶端后,仅向上滚动才显示,需要刷新网页生效'>" +
          "<label>仅上拉显示<input id='iqxin-fixedTopUpward-item' type='checkbox' name='' " +
          fixedTopUpward_checked +
          " style='vertical-align:middle;'></label>" +
          "</span>" +
          "<span id='xin-HideTheSameLink' title='隐藏同站链接,如果想在同一个搜索网站,但是想通过不同语言来搜索, 可以取消该选项'>" +
          "<label>隐藏同站链接<input id='iqxin-HideTheSameLink' type='checkbox' name='' " +
          HideTheSameLink_checked +
          " style='vertical-align:middle;'></label>" +
          "</span>" +
          "<span id='xin-setBtnOpacity' title='设置按钮透明度,需要刷新页面'>设置按钮透明度 <input type='range' step='0.05'  min='0' max='1' value='" +
          (settingData.setBtnOpacity < 0
            ? -settingData.setBtnOpacity
            : settingData.setBtnOpacity) +
          "' id='setBtnOpacityRange'><i style='display:inline-block;width:3em;text-align:center;' class='iqxin-setBtnOpacityRangeValue' title='按钮 显示/隐藏(非透明)),请确定知道自己如何再次打开; 火狐非高级玩家建议别禁用'></i></span>" +
          "</div>";
        // "<div><span>test</span></div>";
        btnEle2.innerHTML = btnStr2;
        this.ele.appendChild(btnEle2);

        // 添加按钮
        var btnEle = document.createElement("div");
        btnEle.id = "btnEle";

        var btnStr =
          "<div class='btnEleLayer'>" +
          "<span class='feedback' title='在 GreasyFork 进行反馈'><a target='_blank' href='https://greasyfork.org/en/scripts/454280-searchenginejumpplus'>Greasy Fork</a></span>" +
          "<span class='feedback' title='在 Github 进行反馈'><a target='_blank' href='https://github.com/MUTED64/SearchEngineJumpPlus'>GitHub</a></span>" +
          "<span id='xin-allOpen' title='后台打开该搜索分类的所有网站'>" +
          "<label>一键搜索<input id='iqxin-allOpen-item' type='checkbox' name='' " +
          allOpen_checked +
          " style='vertical-align:middle;'></label>" +
          "</span>" +
          "<span id='xin-centerDisplay' title='center 居中显示。主要是兼容AC-baidu:重定向优化百度搜狗谷歌搜索_去广告_favicon_双列'>居中：" +
          "<select id='iqxin-center'>" +
          "<option value='original'" +
          (settingData.center == 0 ? "selected" : "") +
          ">默认</option>" +
          "<option value='force'" +
          (settingData.center == 1 ? "selected" : "") +
          ">强制</option>" +
          "<option value='auto'" +
          (settingData.center == 2 ? "selected" : "") +
          ">自动</option>" +
          "</select>" +
          "</span> " +
          "<span id='xin-newtab' title='open newtab 是否采用新标签页打开的方式'>打开方式：" +
          "<select id='iqxin-globalNewtab'>" +
          "<option value='globalDef'>默认页面</option>" +
          "<option value='globalNewtab'" +
          (settingData.newtab ? "selected" : "") +
          ">新标签页</option>" +
          "</select>" +
          "</span> " +
          "<span id='xin-addDel' title='add & del 增加新的或者删除现有的搜索'>增加 / 删除</span> " +
          "<span id='moreSet' title='more set'>更多设置</span>" +
          "<span id='xin-save' title='save & close'>保存并关闭</span>" +
          "</div>";
        btnEle.innerHTML = btnStr;
        this.ele.appendChild(btnEle);

        // 可以拖动的顶栏
        var dragDom = document.createElement("div");
        dragDom.id = "dragDom";
        dragDom.style.cssText =
          "height:16px;width:97%;position:absolute;top:0;cursor:move;";
        this.ele.appendChild(dragDom);

        // 增加搜索列表
        var nSearchList = document.createElement("div");
        nSearchList.id = "nSearchList";
        nSearchList.style.cssText =
          "visibility:hidden;opacity:0;transition:0.3s;position:absolute;bottom:10%;right:5%;padding:5px 10px;border-radius:4px;border:1px solid #EC6D51;color:#ec6d51;cursor:pointer;background:#fff;";
        nSearchList.innerHTML = "增加新的搜索列表";
        this.ele.appendChild(nSearchList);

        // 关闭按钮
        if (settingData.closeBtn) {
          var closebtnELe = document.createElement("span");
          closebtnELe.id = "xin-close";
          closebtnELe.setAttribute("title", "close 关闭");
          this.ele.appendChild(closebtnELe);
        }
      }
      show() {
        var style = this.mask.style;
        var eleStyle = this.ele.style;
        style.display = "flex";
        eleStyle.transform = "translateY(-20%)";
        document.body.style.overflow = "hidden";

        this.windowResize();

        setTimeout(function () {
          style.opacity = 1;
          eleStyle.transform = "none";
        }, 30);
      }
      hide() {
        this.allBoxClose(); // 关闭所有次级窗口、菜单

        var style = this.mask.style;
        this.ele.style.transform = "translateY(20%)";
        style.opacity = 0;
        setTimeout(function () {
          style.display = "none";
          document.body.style.overflow = "auto";
        }, 500);
      }
      reset() {
        if (confirm("将会删除用户设置！")) {
          GM_deleteValue("searchEngineJumpData");
          location.reload();
        }
      }
      // 增加 “添加删除框”
      addDel(e) {
        if (e.target.classList.contains("iqxin-btn-active")) {
          this.addDelremove();
        } else {
          // console.log("不存在,增加增加");
          var obtn = this.$("#xin-addDel");
          obtn.classList.add("iqxin-btn-active");

          var odom = this.$$(".iqxin-set-del");
          [].forEach.call(odom, function (div) {
            div.classList.add("iqxin-set-active");
          });

          // 标题添加删除框
          var odom = this.$$(" .iqxin-set-title-del");
          [].forEach.call(odom, function (div) {
            // console.log(div);
            div.classList.add("iqxin-set-active");
          });

          // 增加单个搜索
          var oitemAdd = this.$$(" .iqxin-additem");
          [].forEach.call(oitemAdd, function (div) {
            // console.log(div);
            div.classList.add("iqxin-set-active");
          });

          // 添加搜索列表
          var olistAdd = this.$("#nSearchList");
          olistAdd.classList.add("iqxin-set-active");
        }
      }
      // 关闭 “添加删除框”
      addDelremove(bool) {
        var obtn = document.querySelector(".iqxin-btn-active");
        if (obtn) {
          obtn.classList.remove("iqxin-btn-active");

          var odom = document.querySelectorAll(".iqxin-set-active");
          [].forEach.call(odom, function (div) {
            div.classList.remove("iqxin-set-active");
          });

          var oitemAdd = document.querySelectorAll(".iqxin-additem");
          [].forEach.call(oitemAdd, function (div) {
            div.classList.remove("iqxin-set-active");
          });
        }
        this.addItemBoxRemove();
      }

      // 界面,框：添加新的搜索
      addItemBox() {
        this.isOnline();
        this.addItemBoxRemove();

        var newDiv = document.createElement("div");
        newDiv.id = "newSearchBox";
        newDiv.style.cssText = "top:43%;opacity:0.1;";
        newDiv.innerHTML = `<span>标&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp题 : </span><input id='iqxin-newTitle' placeholder='必填' onfocus='this.select()' /> <br/><br/>
             <span>链&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp接 : </span><input id='iqxin-newLink' placeholder='必填' onfocus='this.select()' /> <br/><br/>
             <span>图&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp标 : </span><input id='iqxin-newIcon' placeholder='选填,留空则自动获取' onfocus='this.select()' /> <br/><br/>
             <span>打开方式 :
             <select id="iqxin-newTarget" style="border-radius: 4px;border: none;padding: 2px 0 2px 2px">
             <option value="default">新标签页打开</option>
             <option value="newtab">当前页打开</option>
             <select>
             </span>
             <br/><br/>
             <span><a target='_blank' style='color:#999;' href='https://greasyfork.org/en/scripts/454280-searchenginejumpplus'>相关使用说明</a></span>
             &nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp;
             <button id='addItemBoxEnter' class='addItemBoxEnter addItemBoxBtn iqxin-enterBtn'>确定</button>&nbsp;&nbsp;&nbsp&nbsp&nbsp;&nbsp
             <button id='addItemBoxCancel' class='addItemBoxCancel addItemBoxBtn iqxin-closeBtn'>取消</button>`;

        this.ele.appendChild(newDiv);
        setTimeout(function () {
          newDiv.style.cssText = "";
        }, 10);
        this.$("#iqxin-newTitle").focus();
      }
      // 内部逻辑,：添加新的搜索
      addItemEnger() {
        var otitle, olink, oimg, oblank;
        otitle = this.$("#iqxin-newTitle").value;
        olink = this.$("#iqxin-newLink").value;
        oimg = this.$("#iqxin-newIcon").value;
        oblank = this.$("#iqxin-newTarget").selectedIndex;

        if (!oimg) {
          oimg = this.getICON(olink);
        }

        var a =
          '<span class="sej-engine"' +
          ' data-iqxinimg="$img$" ' +
          ' data-iqxintitle="$title$" ' +
          ' data-iqxinlink="$link$" ' +
          ' data-iqxintarget="$blank$" ' +
          '><div class="sej-engine-icon" style="background-image: url(&quot;$favicon$&quot;); background-size: cover; width: 16px; height: 16px; display: inline-block;"></div>$name$</span>' +
          '<span class="iqxin-set-edit" title="编辑 Edit">' +
          '<img class="sej-engine-icon" src="' +
          icon.edit +
          '">' +
          "</span> " +
          '<span class="iqxin-set-del iqxin-set-active" title="删除 Delete">' +
          '<img class="sej-engine-icon" src="' +
          icon.del +
          '">' +
          "</span>";

        a = a
          .replace("$img$", oimg)
          .replace("$title$", otitle)
          .replace(
            "$link$",
            olink.indexOf("://") === -1 ? "https://" + olink : olink
          );

        if (oblank) {
          a = a.replace('data-iqxintarget="$blank$"', "");
        } else {
          a = a.replace("$blank$", "_blank");
        }

        a = a.replace("$name$", otitle).replace("$favicon$", oimg);

        var ospan = document.createElement("span");
        ospan.className = "drag";
        ospan.innerHTML = a;

        this.parentNode.insertBefore(ospan, this.parentNode.lastChild);

        // 添加完成,移除添加框
        this.addItemBoxRemove();
      }
      addItemBoxRemove(ele) {
        ele = ele ? ele : "#newSearchBox";
        var newBox = this.$(ele);
        if (newBox) {
          // newBox.style.transform = "translateY(30%)";
          newBox.style.top = "60%";
          newBox.style.opacity = "0";
          setTimeout(function () {
            newBox.parentNode.removeChild(newBox);
          }, 550);
        }
      }
      // 获取图标
      getICON(olink) {
        let ourl;
        let mark;
        let protocol;
        let host;

        if (olink.indexOf("://") !== -1) {
          protocol = olink.split("://")[0] ? olink.split("://")[0] : "https";
          host = olink.split("://")[1].split("/")[0];
        } else {
          protocol = "https";
          host = olink.split("/")[0];
        }

        const siteURL = protocol + "://" + host;

        if (isNaN(settingData.getIcon)) {
          ourl = settingData.getIcon;
        } else {
          mark = parseInt(settingData.getIcon);
          switch (mark) {
            case 1:
              ourl = siteURL + "/favicon.ico";
              break;
            case 2:
              ourl = "https://www.google.com/s2/favicons?domain=" + siteURL;
              break;
            case 3:
              ourl =
                "https://statics.dnspod.cn/proxy_favicon/_/favicon?domain=" +
                host;
              break;
          }
        }

        if (ourl) {
          ourl = ourl.replace("%s", siteURL);
          return ourl;
        }
        if (this.online) {
          ourl = "https://www.google.com/s2/favicons?domain=" + host;
          return ourl;
        } else {
          ourl = protocol + "://" + host + "/favicon.ico";
          return ourl;
        }
      }

      // 界面, 框: 添加新的搜索列表
      addSearchListBox() {
        var odiv = this.$("#newSearchListBox");
        if (odiv) {
          this.boxClose("#newSearchListBox");
          return;
        }
        var newDiv = document.createElement("div");
        newDiv.id = "newSearchListBox";

        var myDate = new Date();
        // var hash = "user" + myDate.getFullYear() + myDate.getMonth() + myDate.getDate() + myDate.getHours() +myDate.getMinutes()+myDate.getSeconds();
        var hash = "user" + myDate.getTime();

        newDiv.innerHTML =
          "" +
          "<span>列表名称: </span><input id='iqxin-newSearchListName' onfocus='this.select()'>" +
          "<br><br>" +
          "<span>内部名称: </span><input id='iqxin-newSearchListInnerName' onfocus='this.select()' value='" +
          hash +
          "'>" +
          "<br><br>" +
          "<button id='addSearchListBoxEnter' class='addSearchListBoxEnter addItemBoxBtn'>确定</button>&nbsp;&nbsp;&nbsp&nbsp&nbsp;&nbsp" +
          "<button id='addSearchListBoxCancel' class='addSearchListBoxCancel addItemBoxBtn'>取消</button>" +
          "";
        this.ele.appendChild(newDiv);

        this.$("#iqxin-newSearchListName").focus();
      }
      addSearchListEnger() {
        var name = this.$("#iqxin-newSearchListName").value;
        var innerName = this.$(
          "#iqxin-newSearchListInnerName"
        ).value;

        if (innerName.length === 0) {
          alert("内部名称不能为空");
          return;
        }
        if (name.length === 0) {
          name = innerName;
        }

        var odiv = document.createElement("div");
        odiv.id = innerName;
        odiv.className = "iqxin-items";
        odiv.innerHTML =
          "" +
          '<div class="sejtitle" data-iqxintitle="' +
          innerName +
          '" data-xin="99">' +
          '<span class="iqxin-pointer-events">' +
          name +
          "</span>" +
          '<span class="iqxin-title-edit" title="编辑 Edit">' +
          '<img class="sej-engine-icon" src="' +
          icon.edit +
          '">' +
          "</span> " +
          '<span class="iqxin-set-title-del iqxin-set-active" title="删除 Delete">' +
          '<img class="sej-engine-icon" src="' +
          icon.del +
          '">' +
          "</span>" +
          "</div>" +
          '<div class="sejcon">' +
          '<span class="iqxin-additem iqxin-set-active">+</span>' +
          "</div>" +
          "";

        // this.boxClose("#newSearchListBox");
        this.addItemBoxRemove("#newSearchListBox");

        var btnEle = this.$("#btnEle");
        btnEle.parentNode.insertBefore(odiv, btnEle);
      }

      boxClose(ele) {
        var odiv = this.$(ele);
        if (odiv) {
          odiv.parentNode.removeChild(odiv);
        }
      }

      // 界面 框：修改框
      addEditBox(e) {
        this.addItemBoxRemove();

        var target = e.target.parentNode.firstChild;

        var otitle = target.dataset.iqxintitle;
        var olink = target.dataset.iqxinlink;
        var oicon = target.dataset.iqxinimg;
        var otarget = target.dataset.iqxintarget;
        var odisabled = target.dataset.iqxindisabled;
        let oGBK = target.dataset.iqxingbk;

        this.editTemp = target;

        var strblank;
        if (otarget) {
          strblank =
            '<option value="default">新标签页打开</option><option value="newtab">当前页打开</option> ';
        } else {
          strblank =
            '<option value="default">新标签页打开</option><option value="newtab" selected="selected">当前页打开</option>';
        }

        var strGBK = "";
        if (oGBK) {
          strGBK = "checked='checked'";
        }

        var newDiv = document.createElement("div");
        newDiv.id = "newSearchBox";
        // 从鼠标点击所在的项目展开菜单(2021-03-16,从上线至今,动画一直有卡顿现象)
        // newDiv.style.cssText = "top:"+(e.screenY-120) +"px;left:"+(e.screenX-140) +"px;";
        newDiv.style.cssText = "top:43%;opacity:0.1;";
        var innerHTML = `
          <span>标&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp题 : </span><input id="iqxin-newTitle" placeholder="必填" onfocus="this.select()" value="${otitle}" /> <br/><br/>
          <span>链&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp接 : </span><input id="iqxin-newLink" placeholder="必填" onfocus="this.select()" value="${olink}" /> <br/><br/>
          <span>图&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp标 : </span><input id="iqxin-newIcon" placeholder="选填,留空则自动获取" onfocus="this.select()" value="${oicon}" /> <br/><br/>
          <span>打开方式 :
              <select id="iqxin-newTarget" style="border-radius: 4px;border: none;padding: 2px 0 2px 2px">
                  ${strblank}
              <select>
          </span>
          <br/><br/>
          <span style=""><label>GBK编码：<input type="checkbox" name="" id="iqxin-newGBK" ${strGBK} style="vertical-align:middle;"></label></span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button id="editItemBoxEnter" class="editItemBoxEnter addItemBoxBtn iqxin-enterBtn">确定</button>&nbsp;&nbsp;&nbsp&nbsp&nbsp;&nbsp
          <button id="addItemBoxCancel" class="addItemBoxCancel addItemBoxBtn iqxin-closeBtn">取消</button>
          `;

        newDiv.innerHTML = innerHTML;

        this.ele.appendChild(newDiv);
        setTimeout(function () {
          newDiv.style.cssText = "";
        }, 10);
        this.$("#iqxin-newTitle").select();
      }
      addEditBoxEnger() {
        var otitle, olink, oimg, oblank, ogbk;
        otitle = this.$("#iqxin-newTitle").value;
        olink = this.$("#iqxin-newLink").value;
        oimg = this.$("#iqxin-newIcon").value;
        oblank = this.$("#iqxin-newTarget").selectedIndex;
        ogbk = this.$("#iqxin-newGBK").checked;

        this.editTemp.dataset.iqxintitle = otitle;
        this.editTemp.lastChild.innerText = otitle; //文本节点

        this.editTemp.dataset.iqxinlink = olink;
        this.editTemp.dataset.iqxinimg = oimg;
        this.editTemp.firstChild.src = oimg;

        // 是否新标签页打开
        if (oblank) {
          this.editTemp.removeAttribute("data-iqxintarget");
        } else {
          this.editTemp.dataset.iqxintarget = "_blank";
        }
        // 是否禁用
        if (ogbk) {
          this.editTemp.dataset.iqxingbk = "true";
        } else {
          this.editTemp.removeAttribute("data-iqxingbk");
        }

        // 修改完成,移除添加框
        this.addItemBoxRemove();
      }

      // 标题编辑
      addTitleEditBox(e) {
        this.addItemBoxRemove();

        var element = e.target.parentNode.firstChild;
        element.classList.remove("iqxin-pointer-events");

        var flag = this.$("#titleEdit");
        // 存在编辑的标题 && 之前的编辑的节点与点击的节点是同一个节点
        if (flag && flag.parentNode == element) {
          element.innerHTML = element.firstChild.value
            ? element.firstChild.value
            : "空";
          element.classList.add("iqxin-pointer-events");
        } else {
          //  存在编辑的标题,但与点击的不是同一个节点
          if (flag) {
            flag.parentNode.innerHTML = flag.parentNode.firstChild.value;
          }
          var oldhtml = element.innerHTML;
          var newobj = document.createElement("input");
          newobj.id = "titleEdit";
          newobj.type = "text";
          newobj.value = oldhtml;
          // newobj.onblur = function(){
          //     element.innerHTML = this.value?this.value:oldhtml;
          // }
          newobj.onkeydown = function (e) {
            if ((e.keyCode || e.which) == 13) {
              element.innerHTML = this.value ? this.value : oldhtml;
            } else if ((e.keyCode || e.which) == 27) {
              element.innerHTML = oldhtml;
            }

            element.classList.add("iqxin-pointer-events");
          };
          element.innerHTML = "";
          element.appendChild(newobj);
          newobj.select();
        }
      }
      addTitleEditBoxRemove() {
        var odiv = this.$("#titleEdit");
        if (odiv) {
          odiv.parentNode.innerHTML = odiv.value ? odiv.value : "空";
        }
      }

      // 高级菜单,配置文件编辑界面
      editCodeBox() {
        console.log("原始数据： ", settingData);
        var userSetting = GM_getValue("searchEngineJumpData");
        var editbox = document.createElement("div");
        // var sData =
        editbox.id = "iqxin-editCodeBox";
        editbox.style.cssText =
          "position:fixed;" +
          "top:50%;left:50%;" +
          "transform:translate(-50%,-50%);" +
          "background:#ccc;" +
          "border-radius:4px;" +
          "padding:10px 20px;";
        var innerH =
          " " +
          "<p><span style='color:red;font-size:1.2em;'>! ! !</span></br>" +
          "此处有更多的设置选项,自由度更高,</br>" +
          "但设置错误会导致脚本无法运行" +
          "</p>" +
          "<textarea wrap='off' cols='45' rows='20' style='overflow:auto;border-radius:4px;'>" +
          JSON.stringify(userSetting, false, 4) +
          "</textarea>" +
          "<br>" +
          "<button id='xin-reset'>清空设置</button> &nbsp;&nbsp;&nbsp;" +
          "<button id='xin-copyCode'>复制</button> &nbsp;&nbsp;&nbsp;" +
          "<button id='codeboxclose' class='iqxin-closeBtn'>关闭</button> &nbsp;&nbsp;&nbsp;" +
          "<button id='xin-codeboxsave' class='iqxin-enterBtn'>保存</button>" +
          "";
        editbox.innerHTML = innerH;
        this.ele.appendChild(editbox);
      }
      editCodeBoxSave() {
        var codevalue = this.$(
          "#iqxin-editCodeBox textarea"
        ).value;
        if (codevalue) {
          GM_setValue("searchEngineJumpData", JSON.parse(codevalue));
          // 刷新页面
          setTimeout(function () {
            location.reload();
          }, 300);
        } else {
          // alert("输入为空");
          this.reset();
        }
      }
      editCodeBoxClose() {
        var box = this.$("#iqxin-editCodeBox");
        if (box) {
          box.parentNode.removeChild(box);
        }
      }
      // “设置按钮” 透明度
      setBtnOpacityFun() {
        if (~window.navigator.userAgent.indexOf("Chrome")) {
          var odom = document.querySelector("#setBtnOpacityRange");
          var odomV = odom.value;
          // odom.style.backgroundSize = odom.value*100 +"% 100%";
          console.log(odomV, settingData.setBtnOpacity);
          if (settingData.setBtnOpacity < 0) {
            document.querySelector(".iqxin-setBtnOpacityRangeValue").innerHTML =
              odomV.toString().padEnd(4, "0");
            odom.style.background =
              "-webkit-linear-gradient(left,#3ABDC1,#83e7ea) no-repeat, #fff";
          } else {
            document.querySelector(".iqxin-setBtnOpacityRangeValue").innerHTML =
              "禁用";
            odom.style.background =
              "-webkit-linear-gradient(left,#bdbdbd,#c6c7c7) no-repeat, #fff";
          }
          odom.style.backgroundSize = odom.value * 100 + "% 100%";

          settingData.setBtnOpacity = -settingData.setBtnOpacity;
        } else {
          this.showPopUp("抱歉,目前只支持chrome类浏览器", 2500);
        }
      }

      // 标题点击 （开关搜索列表）（可以并入到下面的点击事件）
      titleClick(e) {
        var target = e.target;
        target.dataset.xin = -parseInt(target.dataset.xin);
        target.dataset.xin > 0
          ? this.showPopUp("启用")
          : this.showPopUp("禁用");
      }
      // 点击事件   此处的 if 需要根据实际情况替换成 elseif (switch)
      domClick(e) {
        var targetClass = e.target.className;
        var targetid = e.target.id;

        // 删除搜索
        if (~e.target.className.indexOf("iqxin-set-del")) {
          // console.log(e.target);
          e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        }
        // 删除搜索列表
        if (~e.target.className.indexOf("iqxin-set-title-del")) {
          // console.log(e.target, e.target.parentNode.parentNode);
          e.target.parentNode.parentNode.parentNode.removeChild(
            e.target.parentNode.parentNode
          );
        }

        if (~e.target.className.indexOf("iqxin-additem")) {
          this.parentNode = e.target.parentNode;
          this.addItemBox();
        }
        if (e.target.className === "sej-engine") {
          e.target.dataset.iqxindisabled = e.target.dataset.iqxindisabled
            ? ""
            : "true";
          e.target.dataset.iqxindisabled
            ? this.showPopUp("禁用")
            : this.showPopUp("启用");
        }
        if (~targetClass.indexOf("addItemBoxCancel")) {
          this.addItemBoxRemove();
        }
        // 添加新的搜索 确定
        if (~targetClass.indexOf("addItemBoxEnter")) {
          this.addItemEnger();
        }
        // 添加新的搜索列表 确定
        if (targetid === "nSearchList") {
          this.addSearchListBox();
        }
        if (targetid === "addSearchListBoxEnter") {
          this.addSearchListEnger();
        }
        if (targetid === "addSearchListBoxCancel") {
          this.addItemBoxRemove("#newSearchListBox");
        }

        // 修改搜索 确定
        if (~targetClass.indexOf("editItemBoxEnter")) {
          this.addEditBoxEnger();
        }

        // 编辑框
        if (~e.target.className.indexOf("iqxin-set-edit")) {
          this.addEditBox(e);
        }
        // 标题编辑框
        if (~targetClass.indexOf("iqxin-title-edit")) {
          e.stopPropagation();
          this.addTitleEditBox(e);
        }
        if (~targetClass.indexOf("sejtitle")) {
          this.titleClick(e);
        }
        // codebox  源代码编辑框
        if (targetid === "codeboxclose") {
          this.editCodeBoxClose();
        } else if (targetid === "xin-reset") {
          this.reset();
        } else if (targetid === "xin-codeboxsave") {
          this.editCodeBoxSave();
        } else if (targetid === "xin-copyCode") {
          GM_setClipboard(JSON.stringify(settingData, false, 4));
          this.showPopUp("复制成功");
        }

        //  点击更多菜单
        if (targetid === "moreSet") {
          this.$("#btnEle2").classList.toggle("btnEle2active");
          // iqxin-btn-active
          e.target.classList.toggle("iqxin-btn-active");
        }

        // 关闭"设置菜单按钮"
        if (targetClass === "iqxin-setBtnOpacityRangeValue") {
          this.setBtnOpacityFun();
        }

        // 关闭设置菜单
        if (targetid === "xin-close") {
          this.hide();
        }

        // 空白地方点击
        if (
          ~targetClass.indexOf("iqxin-items") ||
          targetid === "settingLayer" ||
          targetClass === "btnEleLayer"
        ) {
          this.allBoxClose();
        }
      }

      // 关闭所有次级窗口、菜单
      allBoxClose() {
        this.addItemBoxRemove(); // 新的搜索添加框
        this.addDelremove(); //  增加/删除界面
        this.editCodeBoxClose(); // code编辑框
        this.addTitleEditBoxRemove(); //标题编辑框
        this.addItemBoxRemove("#newSearchListBox"); // 添加新的搜索列表
        this.boxClose("#iqxin-sortBox"); // 搜索列表排序
        this.addItemBoxRemove("#importingBox"); //导入框
        this.$("#btnEle2").classList.remove("btnEle2active"); // 更多设置
      }

      // 窗口位置拖动
      setDragNode(ele) {
        var node = this.$("#dragDom");

        node.addEventListener("mousedown", function (event) {
          ele.style.transition = "null";
          // offsetLeft 距离 body 的位置, 得到的 dis 即鼠标到窗口左上角的位置
          var disX = event.clientX - ele.offsetLeft;
          var disY = event.clientY - ele.offsetTop;

          var move = function (event) {
            //鼠标的位置减去到左上角的位置 即窗口的位置
            // console.log(event.clientX - disX,event.clientY - disY)
            ele.style.left = event.clientX - disX + "px";
            ele.style.top = event.clientY - disY + "px";
          };

          document.addEventListener("mousemove", move);
          document.addEventListener("mouseup", function () {
            ele.style.transition = "0.5s";
            document.removeEventListener("mousemove", move);
          });
        });
      }

      // 拖动
      domdragstart(e) {
        if (~this.className.indexOf("sejtitle")) {
          SettingPanel.dragEl = this.parentNode;
        } else {
          SettingPanel.dragEl = this;
        }
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", SettingPanel.dragEl.innerHTML);
      }
      domdragenter(e) {
        var target = e.target;
        var targetClass = target.className;
        if (~targetClass.indexOf("sejtitle")) {
          target = target.parentNode;
        }
        target.classList.add("drop-over");
      }
      domdragover(e) {
        if (e.preventDefault) {
          e.preventDefault();
        }
        e.dataTransfer.dropEffect = "move";
        return false;
      }
      domdragleave(e) {
        var target = e.target;
        var targetClass = target.className;
        if (~targetClass.indexOf("sejtitle")) {
          target = target.parentNode;
        }
        target.classList.remove("drop-over");
      }
      domdrop(e) {
        var _this = e.target;
        var that = _this.parentNode;
        var pparentNode = that.parentNode;

        // 防止跨区域移动
        SettingPanel.prototype.domdropend();
        if (SettingPanel.dragEl.className != that.className) {
          console.log("移动对象 之前,现在: ", SettingPanel.dragEl.className);
          console.log(that.className);
          return;
        }

        // Sortable.js https://github.com/RubaXa/Sortable
        var targetRect = _this.getBoundingClientRect(); //
        var width = targetRect.right - targetRect.left; //目标节点的宽
        var height = targetRect.bottom - targetRect.top; //目标节点的高
        var domPosition = null;
        if (~_this.className.indexOf("sejtitle")) {
          if ((e.clientX - targetRect.left) / width > 0.5) {
            domPosition = true;
          } else {
            domPosition = false;
          }
        } else {
          if ((e.clientY - targetRect.top) / height > 0.5) {
            domPosition = true;
          } else {
            domPosition = false;
          }
        }

        SettingPanel.dragEl.style.transformOrigin = "top center";
        SettingPanel.dragEl.style.animation = "sejopen 0.3s";

        if (domPosition) {
          if (pparentNode.lastChild == that) {
            pparentNode.insertBefore(SettingPanel.dragEl, that);
          } else {
            pparentNode.insertBefore(
              SettingPanel.dragEl,
              that.nextElementSibling
            );
          }
        } else {
          that.parentNode.insertBefore(SettingPanel.dragEl, that);
        }

        // 重新绑定拖拽事件
        SettingPanel.prototype.dragEvent();
        return false;
      }
      domdropend() {
        var dom = this.$(".drop-over");
        if (dom) {
          dom.classList.remove("drop-over");
        }
      }

      // 判断是否能连接至google
      isOnline() {
        console.log("this.online", this.online);
        if (this.online) return;

        var that = this;
        var myImage = new Image();
        myImage.src =
          "https://www.google.com/s2/favicons?domain=www.baidu.com&" +
          Math.random();
        setTimeout(function () {
          // console.log("取消加载");
          console.log(myImage.width);
          if (myImage.width) {
            that.online = true;
          } else {
            myImage.src = undefined;
          }
        }, 2000);
      }

      // 重新加载工具
      reloadSet() {
        const shadowRoot = ShadowDOMManager.getRoot();
        var elems = shadowRoot.querySelectorAll(
          "#sej-container, #settingLayerMask, sejspan.sej-drop-list"
        );
        if (!elems) return;
        console.log("elems: " + elems);
        // return;

        [].forEach.call(elems, function (elem) {
          elem.parentNode.removeChild(elem);
        });

        mainLogic();
        this.showPopUp("保存成功");
      }

      // 设置按钮透明度设置
      rangeChange(bool) {
        var odom = this.$("#setBtnOpacityRange");
        if (settingData.setBtnOpacity < 0) {
          odom.style.background =
            "-webkit-linear-gradient(left,#bdbdbd,#c6c7c7) no-repeat, #fff";
          odom.style.backgroundSize = odom.value * 100 + "% 100%";
          this.$(".iqxin-setBtnOpacityRangeValue").innerHTML =
            "禁用";
          settingData.setBtnOpacity = -odom.value;
        } else {
          odom.style.background =
            "-webkit-linear-gradient(left,#3ABDC1,#83e7ea) no-repeat, #fff";
          odom.style.backgroundSize = odom.value * 100 + "% 100%";
          let value = odom.value;
          let valueStr = "";
          if (value == 0) {
            valueStr = "0.00";
          } else if (value == 1) {
            valueStr = "1.00";
          } else {
            valueStr = odom.value.toString().padEnd(4, "0");
          }
          this.$(".iqxin-setBtnOpacityRangeValue").innerHTML =
            valueStr;
          settingData.setBtnOpacity = odom.value;
        }
      }

      // 窗口大小改变
      windowResize() {
        var eleStyle = window.getComputedStyle(this.ele, null);
        var w = parseInt(eleStyle.width);
        var h = parseInt(eleStyle.height) + 54;
        var ww = document.documentElement.clientWidth;
        var wh = document.documentElement.clientHeight;
        var maskStyle = this.mask.style;

        if (w >= ww) {
          maskStyle.justifyContent = "stretch";
        } else {
          maskStyle.justifyContent = "center";
        }
        if (h >= wh) {
          maskStyle.alignItems = "stretch";
        } else {
          maskStyle.alignItems = "center";
        }
      }
      saveData() {
        this.addTitleEditBoxRemove(); //标题栏处于编辑状态

        var obj = {};
        var parentdiv = this.$$("#settingLayer .iqxin-items");
        for (let i = 0; i < parentdiv.length; i++) {
          var data = parentdiv[i].querySelectorAll(".sej-engine");
          var id = parentdiv[i].id;
          obj[id] = [];
          for (let ii = 0; ii < data.length; ii++) {
            if (data[ii].dataset.xin < 0) {
              var ij = -ii;
            } else {
              ij = ii;
            }
            obj[id][ij] = {};
            obj[id][ij].favicon = data[ii].dataset.iqxinimg;
            obj[id][ij].name = data[ii].dataset.iqxintitle;
            obj[id][ij].url = data[ii].dataset.iqxinlink;
            if (data[ii].dataset.iqxintarget) {
              obj[id][ij].blank = data[ii].dataset.iqxintarget;
            }
            if (data[ii].dataset.iqxindisabled) {
              obj[id][ij].disable = data[ii].dataset.iqxindisabled;
            }
            if (data[ii].dataset.iqxingbk) {
              obj[id][ij].gbk = data[ii].dataset.iqxingbk;
            }
          }
        }

        // 分类名称
        var engineDetails = [];

        // 分类排序
        var odetails = this.$$(".sejtitle");
        var odetailsLength = odetails.length;
        for (let i = 0; i < odetailsLength; i++) {
          engineDetails[i] = [];
          engineDetails[i][0] = odetails[i].firstChild.innerHTML;
          engineDetails[i][1] = odetails[i].dataset.iqxintitle;
          engineDetails[i][2] = odetails[i].dataset.xin >= 0 ? true : false;
        }

        // 新标签页全局设置
        var onewtab = this.$(
          "#iqxin-globalNewtab"
        ).selectedIndex;
        var foldlist = this.$("#iqxin-foldlist").checked;

        // 以防不测,重新获取本地配置文件
        var getData = GM_getValue("searchEngineJumpData");
        getData.newtab = onewtab;
        getData.foldlist = foldlist;
        getData.setBtnOpacity = settingData.setBtnOpacity;
        getData.center = this.$("#iqxin-center").selectedIndex;
        getData.fixedTop = this.$("#iqxin-fixedTop").checked;
        getData.allOpen = this.$("#iqxin-allOpen-item").checked;
        getData.fixedTopUpward = this.$(
          "#iqxin-fixedTopUpward-item"
        ).checked;
        getData.transtion = this.$("#iqxin-transtion").checked;
        getData.HideTheSameLink = this.$(
          "#iqxin-HideTheSameLink"
        ).checked;
        getData.selectSearch = this.$(
          "#iqxin-selectSearch"
        ).checked;
        getData.engineDetails = engineDetails;
        getData.engineList = obj;

        GM_setValue("searchEngineJumpData", getData);
      }
      // 此处的样式主要是设置界面
      addGlobalStyle() {
        // 关闭设置菜单中的所有动画效果
        if (!settingData.transtion) {
          ShadowDOMManager.addStyle(
            "#settingLayer," +
              "#btnEle span," +
              "#btnEle2," +
              ".iqxin-set-del," +
              "span.iqxin-additem," +
              "#newSearchBox," +
              ".addItemBoxBtn," +
              "#xin-close," +
              "#settingLayerMask{" +
              "transition:none;" +
              "}" +
              "#settingLayerMask{" +
              "backdrop-filter:none;" +
              // "background-color: rgba(0,0,0,.7);" +
              "}" +
              ""
          );
        }
      }
      showPopUp(text, duration) {
        new PopUp(text, duration);
      }
    }

    class PopUp {
      constructor(text, duration = 1500) {
        this.popUp = document.createElement("iqxinDiv");
        this.popUp.id = "iqixn-global-tip";
        this.show(text);
        setTimeout(() => {
          this.destroy();
        }, duration);
      }
      show(text) {
        this.popUp.innerText = text;
        ShadowDOMManager.getRoot().appendChild(this.popUp);
        this.popUp.style.opacity = 1;
      }
      destroy() {
        this.popUp.style.opacity = 0;
        const transitionTime =
          parseFloat(getComputedStyle(this.popUp).transitionDuration) * 1000;
        setTimeout(() => {
          this.popUp.remove();
        }, transitionTime);
      }
    }

    class Style {
      constructor() {
        this.globalStyle = GM_getResourceText("GLOBAL_STYLE");
        this.nonTransitionStyle = `.sej-engine,.sej-drop-list-trigger,.sej-drop-list{transition:none!important;}#sej-container{animation:none!important;}.sej-drop-list {backdrop-filter:none!important;}`;
        
        // 将全局样式注入到 Shadow DOM
        this.addStyle(this.globalStyle);
        
        if (!settingData.transtion) {
          this.addStyle(this.nonTransitionStyle);
        }
        
        // 暗黑模式检测需要在主文档上
        if (this.isDarkMode()) {
          // 在 Shadow DOM 中设置暗黑模式样式
          this.addStyle(`
            :host {
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
          `);
        }
      }
      addStyle(style) {
        ShadowDOMManager.addStyle(style);
      }
      isDarkMode() {
        function getContrastYIQ(rgbColor) {
          let r, g, b, a;
          rgbColor = rgbColor.match(/rgba?\(([^)]+)\)/)[1];
          rgbColor = rgbColor.split(/ *, */).map(Number);
          [r, g, b, a] = rgbColor;
          if (a < 0.5) {
            return false;
          }
          const yiq = (r * 299 + g * 587 + b * 114) / 1000;
          return yiq < 128;
        }

        return (
          document.getElementsByTagName("meta")?.["color-scheme"]?.content ===
            "dark" ||
          getContrastYIQ(getComputedStyle(document.body).backgroundColor)
        );
      }
    }

    const settings = new Settings();
    const settingData = settings.settingData;
    engineList = settingData.engineList;
    const matchedRule = settings.getMatchedRule();
    const style = new Style();

    const jumpBar = new JumpBar(engineList, settingData, matchedRule);
    if (jumpBar.container) {
      new SettingButton(jumpBar.container, settingData);
    } else {
      return;
    }
  }
})();
