async function d3vd_api() {
    var result = [];
    await $.getJSON('https://meme-api.herokuapp.com/gimme', data => result = [data.preview[data.preview.length - 1], data.title]);
    return result;
}

async function pushshift_api(subreddit) {
    var posts = [];
    await $.getJSON('https://api.pushshift.io/reddit/search/submission/?size=500&subreddit=' + subreddit, data => data.data.forEach(post => {
        if (new URL(post.url).hostname == 'i.redd.it')
            posts.push([post.url, post.title]);
    }));
    return posts;
}

async function get_jokes() {
    var jokes = [];
    await $.getJSON('https://official-joke-api.appspot.com/random_ten', data => data.forEach(joke => jokes.push([joke.setup, joke.punchline])));
    await $.getJSON('https://v2.jokeapi.dev/joke/Any?amount=10', data => data.jokes.forEach(joke => {
        if (joke.setup != undefined)
            jokes.push([joke.setup, joke.delivery])
    }));
    return jokes;
}

async function get_memes() {
    var memes = [await d3vd_api()],
        pushshift_subreddit_funny = await pushshift_api('funny'),
        pushshift_subreddit_memes = await pushshift_api('memes'),
        pushshift_subreddit_meme = await pushshift_api('meme');
    pushshift_subreddit_funny.forEach(meme => memes.push(meme));
    pushshift_subreddit_memes.forEach(meme => memes.push(meme));
    pushshift_subreddit_meme.forEach(meme => memes.push(meme));
    return memes
}

async function get_vnmemes() {
    var memes = [];
    await $.getJSON('https://api.pushshift.io/reddit/search/submission?size=500&subreddit=VietNam', data => data.data.forEach(post => {
        if (post.link_flair_text == 'Funny' && new URL(post.url).hostname == 'i.redd.it')
            memes.push([post.url, post.title]);
    }));
    return memes;
}

async function get_orimemes() {
    var memes_list = [];
    await $.getJSON('https://api.imgflip.com/get_memes', json => json.data.memes.forEach(meme => memes_list.push([meme.url, meme.url])));
    return memes_list;
}

async function on_this_day_wiki(date, month) {
    var events = {};
    await $.getJSON('https://en.wikipedia.org/api/rest_v1/feed/onthisday/all/' + month + '/' + date, json => events = json);
    Object.keys(events).forEach(event_type_name => {
        events[event_type_name].forEach((event, event_index) => {
            event.pages.forEach((page, page_index) => {
                events[event_type_name][event_index].pages[page_index] = {
                    wiki_url: page.content_urls.desktop.page,
                    title: page.displaytitle,
                    content: page.extract_html
                }
            })
        })
    });
    return events;
}

var get_item = {
    jokes: get_jokes,
    memes: get_memes,
    vnmemes: get_vnmemes,
    orimemes: get_orimemes,
    onthisday: on_this_day_wiki
}