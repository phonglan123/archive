function open_json_link() {
    let link = document.querySelector("#board_link").value,
        board_id = link.replace("https://trello.com/b/", "").replace("http://trello.com/b/", "").split("/")[0];
    window.open("https://trello.com/b/" + board_id + ".json");
}

function parse() {
    let json = JSON.parse(document.querySelector("#trello_json").value),
        parsed = parse_all_lists(json);
    document.querySelector("#trello_json").value = "";
    Object.keys(parsed).forEach(list => {
        document.querySelector("#trello_json").value += "==== " + list + " ====\n";
        parsed[list].forEach((card, index) => {
            document.querySelector("#trello_json").value += (index + 1) + ". " + card.name_and_desc + "\n";
            card.checklists.forEach(checklist => {
                document.querySelector("#trello_json").value += "\n-- " + checklist.name + " --\n";
                document.querySelector("#trello_json").value += checklist.items.join("\n") + "\n";
            });
            document.querySelector("#trello_json").value += "\n";
        });
        document.querySelector("#trello_json").value += "\n\n\n\n";
    });
}

function parse_card(json, card_index) {
    let card_info = json.cards[card_index],
        return_card_info = {
            name_and_desc: card_info.name.toUpperCase() + (card_info.desc ? (" #### " + card_info.desc.replace(/\n/g, " ")) : ""),
            //desc: card_info.desc,
            //labels: card_info.labels,
            //due: card_info.due,
            checklists: [],
            list_id: card_info.idList
        };

    card_info.idChecklists.forEach(checklist_id => {
        json.checklists.forEach(checking_checklist => {
            if (checking_checklist.id == checklist_id) {
                let items = [];
                checking_checklist.checkItems.forEach(item => {
                    items.push(item.name + " [" + item.state + "]");
                });
                return_card_info.checklists.push({
                    name: checking_checklist.name,
                    items: items
                });
            }
        })
    });

    return return_card_info;
}

function parse_all_cards(json) {
    let all_cards = [];
    for (let i = 0; i < json.cards.length; i++)
        all_cards.push(parse_card(json, i));
    return all_cards;
}

function parse_all_lists(json) {
    let all_cards = parse_all_cards(json),
        lists = {};
    json.lists.forEach(list => {
        lists[list.name] = all_cards.filter(card => card.list_id == list.id);
        lists[list.name].forEach((card, index) => {
            delete lists[list.name][index].list_id;
        });
    });
    return lists;
}