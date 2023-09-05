(function(){
    const events = [
        {
            id: 100,
            date: "2023-4-6",
            title: "关于举行北京大学张文雄教授学术报告会的通知"
        },
        {
            id: 101,
            date: "2023-5-31",
            title: "关于举行北京大学王海天博士后学术报告会的通知"
        },
        {
            id: 102,
            date: "2023-8-17",
            title: "关于举行长春光机所孟博研究员学术报告会的通知"
        },
        {
            id: 103,
            date: "2023-9-10",
            title: "关于举行西安电子科技大学王从思教授学术报告会的通知"
        },
        {
            id: 104,
            date: "2023-11-6",
            title: "关于举行中国科学院大连化学物理研究所低碳战略中心期刊编辑部尹红梅主任的学术报告会"
        },
        {
            id: 105,
            date: "2023-12-31",
            title: "关于举行西安交通大学薛伟江教授学术报告会的通知"
        }
    ]
    events.reverse()
    localStorage.setItem("events", JSON.stringify(events))
}());