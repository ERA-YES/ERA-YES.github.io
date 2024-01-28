var posts=["2023/07/13/2023.5 路桥中学高一期末程序素养检测/","2023/07/16/AnyWebP/","2023/10/22/Collections库/","2023/07/17/Github Actions实现Hexo自动部署/","2023/07/13/KaTeX/","2023/07/18/PCB-NFC/","2023/07/13/RMQ问题与ST算法/","2023/07/13/datetime库/","2023/07/13/goto语句/","2023/07/03/hello-world/","2023/07/13/template模板/","2023/07/18/vlfii/","2023/07/13/并查集/","2023/07/13/搜索算法详解/","2023/07/13/最小生成树/","2023/07/13/树状数组/","2023/07/13/背包问题/","2023/07/13/读书笔记/","2023/07/13/重载操作符/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"EraYes","link":"https://EraYes.top/","descr":"因为伟大的戏剧正在上演，因为你可以献上一首诗","hundredSuffix":"","avatar":null,"siteshot":null},{"name":"Codeboy","link":"https://www.codeboy.site/","descr":"代码小子的博客，这位是真爹","hundredSuffix":"","avatar":null,"siteshot":null},{"name":"Florance","link":"https://florance.eu.org/","descr":"FFFFFF It's Florance","hundredSuffix":"","avatar":null,"siteshot":null},{"name":"Truthluming","link":"https://truthluming.top/","descr":"16岁，事学生","hundredSuffix":"","avatar":null,"siteshot":null},{"name":"LighTzh","link":"https://son.florance.eu.org/","descr":"NO INFO","hundredSuffix":"","avatar":null,"siteshot":null},{"name":"EraYes","recommend":true,"link":"https://EraYes.top/","descr":"因为伟大的戏剧正在上演，因为你可以献上一首诗","hundredSuffix":"","avatar":null},{"name":"Codeboy","recommend":false,"link":"https://www.codeboy.site/","descr":"代码小子的博客，这位是真爹","hundredSuffix":"","avatar":null},{"name":"Rei","recommend":false,"link":"https://rei.ac/","descr":"卖个萌，摸摸头","hundredSuffix":"","avatar":null},{"name":"Florance","recommend":false,"link":"https://florance.eu.org/","descr":"FFFFFF It's Florance","hundredSuffix":"","avatar":null},{"name":"Truthluming","recommend":false,"link":"https://truthluming.top/","descr":"16岁，事学生","hundredSuffix":"","avatar":null},{"name":"LighTzh","recommend":false,"link":"https://son.florance.eu.org/","descr":"NO INFO","hundredSuffix":"","avatar":null}];
    var refreshNum = 1;
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };