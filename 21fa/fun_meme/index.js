var db = {
        jokes: [],
        memes: [],
        vnmemes: [],
        orimemes: [],
        wiki_posts: []
    },
    current_item = {
        jokes: 0,
        memes: 0,
        vnmemes: 0,
        orimemes: 0
    }

async function load_more(current_category) {
    var categories = Object.keys(db),
        new_item = [],
        new_item_in_category = 0
    for (var i = 0; i < categories.length; i++)
        [await get_item[categories[i]]()][0].forEach(item => {
            if (!db[categories[i]].includes(item)) {
                db[categories[i]].push(item);
                if (current_category != 'jokes');
                document.getElementById('image_storage').innerHTML += '<img src="' + item[0] + '" class="image_storage_item" id="' + categories[i] + '|' + db[categories[i]].indexOf(item) + '" style="width: 0; height: 0;"/>'
                if (current_category == categories[i])
                    new_item_in_category++;
            }
        });

    document.getElementById('alert_content').innerHTML = 'Loaded ' + new_item_in_category + ' new item(s)!';
    new bootstrap.Toast(document.getElementById('alert_box')).show();
}

async function view_item(category, diff) {
    var new_item = current_item[category] + diff;
    if (new_item >= db[category].length) {
        document.getElementById('nav-' + category).innerHTML = '<button class="btn btn-primary position-absolute top-50 start-50 translate-middle" type="button" disabled> <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading content! Please don\'t close this tab! </button>';
        await load_more(category);
        view_item(category, 0);
    } else {
        current_item[category] = new_item;
        if (category == 'jokes') {
            document.getElementById('nav-' + category).innerHTML = '<div class="container text-center"> <div class="row"> <div class="col-md-auto"><button type="button" class="btn btn-primary" onclick="view_item(\'' + category + '\', -1)"><i class="bi bi-arrow-left"></i></button></div> <div class="col"><h2>' + db[category][new_item][0] + '</h2><h2>' + db[category][new_item][1] + '</h2></div> <div class="col-md-auto"><button type="button" class="btn btn-primary" onclick="view_item(\'' + category + '\', 1)"><i class="bi bi-arrow-right"></i></button></div> </div> </div>';
        } else
            document.getElementById('nav-' + category).innerHTML = '<div class="container text-center"> <div class="row"> <div class="col-md-auto"><button type="button" class="btn btn-primary" onclick="view_item(\'' + category + '\', -1)"><i class="bi bi-arrow-left"></i></button></div> <div class="col"><h2>' + db[category][new_item][1] + '</h2><img src="' + db[category][new_item][0] + '" class="rounded mx-auto d-block" alt="' + db[category][new_item][1] + '" style="width: 400px; height: 400px;"></div> <div class="col-md-auto"><button type="button" class="btn btn-primary" onclick="view_item(\'' + category + '\', 1)"><i class="bi bi-arrow-right"></i></button></div> </div> </div>';
    }
}

async function get_yourbirth_data() {
    document.getElementById('yourbirth-loading').style.display = 'block';
    document.getElementById('yourbirth-content').style.display = 'none';
    var birthday = new Date(document.getElementById('yourbirth-date').value),
        on_your_birthday = await on_this_day_wiki(birthday.getDate(), birthday.getMonth() + 1);
    document.getElementById('yourbirth-loading').style.display = 'none';
    document.getElementById('yourbirth-content').style.display = 'block';
    Object.keys(on_your_birthday).forEach(event_type_name => {
        var event_type_html = '<ul>';
        on_your_birthday[event_type_name].forEach(event => {
            event_type_html += '<li>' + (event_type_name != 'holidays' ? '<b>' + event.year + '</b>: ' : '') + event.text + ' <i>(More: ';
            event.pages.forEach((event_page, index) => {
                db.wiki_posts.push(event_page);
                event_type_html += (index == 0 ? '' : ', ') + '<a href="javascript: open_wiki_post(' + db.wiki_posts.indexOf(event_page) + ')">' + event_page.title + '</a>';
            });
            event_type_html += ')</i></li>';
        });
        event_type_html += '</ul>';
        document.getElementById('birthday-' + event_type_name + '-tab').innerHTML = event_type_html;

    });
}

function open_wiki_post(index) {
    document.getElementById('myModalLabel').innerHTML = db.wiki_posts[index].title;
    document.getElementById('myModalBody').innerHTML = db.wiki_posts[index].content;
    document.getElementById('myModalSecondBtn').innerHTML = 'Open in Wikipedia';
    document.getElementById('myModalSecondBtn').onclick = () => window.open(db.wiki_posts[index].wiki_url);
    new bootstrap.Modal(document.getElementById('myModal')).toggle();
}

function random_search() {
    var query = document.getElementById('random_search_query').value,
        results = [
            'https://duckduckgo.com/?q=!ducky+' + query,
            'https://www.google.com/search?q=' + query + '&btnI='
        ];
    window.open(results[Math.floor(Math.random() * results.length)]);
}