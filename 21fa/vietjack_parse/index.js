// vj = vietjack / Vietjack / Viet Jack

async function get_vj_html(vj_url) {
    let fetch_res = await fetch("https://api.allorigins.win/get?url=" + vj_url).then(res => res.json()),
        html_elm = document.createElement("html"),
        imgs = [];

    html_elm.innerHTML = fetch_res.contents;

    imgs = html_elm.querySelectorAll("img");
    imgs.forEach(img => img.src = img.src.replace(location.href.replace("vietjack_parse/index.html", ""), "https://vietjack.com/"));

    return html_elm;
}

async function get_vj_inner_exercise(vj_url, is_chapter_request = false) {
    let vj_html = await get_vj_html(vj_url),
        lists = (is_chapter_request ? vj_html.querySelectorAll(".list") : [vj_html.querySelector(".pre-btn ~ .list")]),
        inner_exercises = [];

    lists.forEach(list => {
        list.querySelectorAll("*").forEach(li_item => {
            if ((!is_chapter_request && li_item.nodeName == "LI") || li_item.querySelectorAll("p").length >= 2)
                inner_exercises.push(li_item.querySelector("a").href.replace(location.href.replace("vietjack_parse/index.html", ""), "https://vietjack.com/"));
        });
    });

    return inner_exercises;
}

async function get_vj_answer(vj_url) {
    let vj_html = await get_vj_html(vj_url),
        current_elm = vj_html.querySelector(".pre-btn ~ hr"),
        vj_answer_html = document.createElement("div");

    if (current_elm == null)
        return vj_answer_html;

    while (!current_elm.classList.value.includes("list")) {
        current_elm = current_elm.nextElementSibling;
        vj_answer_html.innerHTML += current_elm.outerHTML;
    }

    [".ads_txt", ".ads_ads", "script", "span", "li", "ins", "iframe", ".sub-title", "p[style=\"text-align:center;\""].forEach(selector => {
        vj_answer_html.querySelectorAll(selector).forEach(elm => elm.remove());
    });

    vj_answer_html.innerHTML = vj_answer_html.innerHTML.replace(location.href.replace("vietjack_parse/index.html", ""), "https://vietjack.com/");

    ["Các bài giải bài tập", "Xem thêm các"]

    return vj_answer_html;
}

async function get_vj(vj_url, progress_cb) {
    if (vj_url.includes("soan-van") || vj_url.includes("soan-bai") || vj_url.includes("ngu-van"))
        return (await get_vj_answer(vj_url)).innerHTML;
    else {
        let inner_exercises = await get_vj_inner_exercise(vj_url),
            answer = "";
        for (let i = 0; i < inner_exercises.length; i++) {
            progress_cb(i, inner_exercises.length);
            answer += (await get_vj_answer(inner_exercises[i])).innerHTML;
        }
        return answer;
    }
}

async function get_vj_chapter(vj_url, progress_cb) {
    let units = await get_vj_inner_exercise(vj_url),
        inner_exercises = [],
        answer = "";

    for (let i = 0; i < units.length; i++)
        inner_exercises.push(await get_vj_inner_exercise(units[i], true));

    for (let j = 0; j < inner_exercises.length; j++)
        for (let i = 0; i < inner_exercises[j].length; i++) {
            progress_cb(i, inner_exercises[j].length);
            answer += (await get_vj_answer(inner_exercises[j][i])).innerHTML;
        }

    return answer;
}

async function run(is_chapter = false) {
    let vj_url = document.querySelector("#vj_url").value,
        progress_bar = document.querySelector("#progress"),
        progress_cb = (current_ex, ex_amount) => {
            progress_bar.attributes.max.value = ex_amount;
            progress_bar.value = current_ex + 1;
            progress_bar.title = (current_ex + 1) + "/" + ex_amount;
        };

    if (is_chapter)
        document.body.innerHTML = await get_vj_chapter(vj_url, progress_cb);
    else
        document.body.innerHTML = await get_vj(vj_url, progress_cb);
}