// 轮播图实现
(function () {
    const slider = document.querySelector(".news .slider")
    const images = document.querySelector(".news .images")
    const points = document.querySelector(".news .points")
    let i = 0
    let timer = setInterval(function () {
        i++
        i %= 3
        images.style = `left: -${i * 600}px`
        changePoint()
    }, 3000)
    slider.addEventListener("mouseover", e => {
        clearInterval(timer)
    })
    slider.addEventListener("mouseleave", e => {
        timer = setInterval(function () {
            i++
            i %= 3
            images.style = `left: -${i * 600}px`
            changePoint()
        }, 3000)
    })
    function changePoint() {
        points.querySelector(".active").classList.remove("active")
        points.querySelector(`li:nth-child(${i + 1})`).classList.add("active")
    }
    // 手动切换
    const previous = document.querySelector(".news .previous")
    const next = document.querySelector(".news .next")
    previous.addEventListener("click", e => {
        i = (i + 3 - 1) % 3
        images.style = `left: -${i * 600}px`
        changePoint()
    })
    next.addEventListener("click", e => {
        i = (i + 1) % 3
        images.style = `left: -${i * 600}px`
        changePoint()
    })
})();
// 新闻概览
(function () {
    const news = JSON.parse(localStorage.getItem("news"))
    newsStr = ''
    for (let i = 0; i < 3; i++) {
        const { title, text, id } = news[i];
        newsStr +=
            `<li data-id=${id}>
            <h3>${title}</h3>
            <p>${text}</p>
        </li>
        `
    }
    newsStr += `<li><a href="javascript:;" class="moreNews">更多最新消息</a></li>`
    document.querySelector(".news .newsList").innerHTML = newsStr
    localStorage.removeItem("news")
})();



const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
// 学术预告/教学通知/ 媒体华园
(function () {
    function render(List, n) {
        return List.slice(0, n).map(event => {
            const { id, title, date } = event
            const day = new Date(date).getDate()
            const month = new Date(date).getMonth()
            return (`
            <li data-id="${id}">
                <div class="dateBox">
                    <div class="day">${day}</div>
                    <div class="month">${months[month]}</div>
                </div>
                <a href="javascript:;">${title}</a>
            </li>
        `)
        }).join('')
    }
    const eventsList = document.querySelector(".billboard .eventsList")
    const noticesList = document.querySelector(".billboard .noticesList")
    const mediaList = document.querySelector(".billboard .mediaList")
    const events = JSON.parse(localStorage.getItem("events"))
    const notices = JSON.parse(localStorage.getItem("notices"))
    const media = JSON.parse(localStorage.getItem("media"))
    eventsList.innerHTML = render(events, 6)
    noticesList.innerHTML = render(notices, 6)
    mediaList.innerHTML = render(media, 8)
    //
    localStorage.removeItem("events")
    localStorage.removeItem("notices")
    localStorage.removeItem("media")
})();


// 侧边栏锚点实现
(function () {
    const asideNav = document.querySelector(".aside-nav")
    asideNav.addEventListener('click', e => {
        console.log(document.querySelector(e.target.dataset.position).offsetTop);
        if (e.target.tagName === 'LI') {
            const positionY = document.querySelector(e.target.dataset.position).offsetTop
            document.documentElement.scrollTop = positionY
        }
    })
    window.addEventListener("scroll", function () {
        const liList = [...asideNav.children[0].children].filter((li, index) => index % 2 === 0)
        const activeLi = asideNav.querySelector(".active")
        const Y = document.documentElement.scrollTop
        if (activeLi) activeLi.classList.remove("active")
        if (Y <= document.querySelector(liList[1].dataset.position).offsetTop - 100) liList[0].classList.add("active")
        else if (Y <= document.querySelector(liList[2].dataset.position).offsetTop - 100) liList[1].classList.add("active")
        else if (Y <= document.querySelector(liList[3].dataset.position).offsetTop - 300) liList[2].classList.add("active")
        else if (Y <= document.querySelector(liList[4].dataset.position).offsetTop - 300) liList[3].classList.add("active")
        else liList[4].classList.add("active")
    })
})();


// #region 学习交流
(function () {
    function render(list, data) {
        list.innerHTML = data.slice(0, 10).map(item => {
            const { id, name } = item
            return `
            <li data-id="${id}">${name}</li>
            `
        }).join('')
    }
    render(document.querySelector(".majorList"), majors)
    render(document.querySelector(".courseList"), courses)

    document.querySelector(".questionList").innerHTML = topics.slice(0,4).map(item => {
        const {id, title, text, imgUrl} = item
        return `
            <li data-id=${id} title=${title}>
                <h4>${title}</h4>
                <img src=${imgUrl}>
                <p>${text}</p>
            </li>
        `
    }).join('')

})();

// #endregion



// #region 校园生活
(function () {
    document.querySelector(".life .content").innerHTML = life.slice(0, 12).map(item => {
        const { id, title, url } = item
        return `
                <li data-id = '${id}'>
                    <img src=${url}>
                    <h3>${title}</h3>
                </li>
        `
    }).join('')

})();

// #endregion








