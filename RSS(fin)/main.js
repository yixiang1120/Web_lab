$(function () {
    $("button").on("click", loadServerData);
});
function loadServerData() {
    let rss2json = "https://api.rss2json.com/v1/api.json?rss_url=";
    $.getJSON(rss2json + "https://www.reddit.com/.rss").done(function (data) {
        //  debugger;
        for (let x = 0; x < data.items.length; x++) {
            console.log(data.items[x]['content']);
            let str = data.items[x]['content'].split("<img src=");
            console.log(str);
            if (str.length > 1) {
                let temp = str[1].split("\"")[1];
                let temp2 =temp.split(".redd.it");
                let temp3 = "https://i.redd.it"+temp2[1];
                $("#dataTable").append(
                    `<tr><td><img src = "${temp3}" width=200px></td><td><a target='_blank'
                    href='${data.items[x].link}'>${data.items[x].title}</a></td><td>${data.items[x].pubDate.split(" ")[0]}</td></tr>`
                );
            }
            else
            {
                $("#dataTable").append(
                    `<tr><td><img src = "img4.jpg" width=200px></td><td><a target='_blank'
                    href='${data.items[x].link}'>${data.items[x].title}</a></td><td>${data.items[x].pubDate.split(" ")[0]}</td></tr>`
                );

            }
        } console.log("Success");
    })
        .fail(function () { console.log("Error"); })
        .always(function () { console.log("Always"); });
}