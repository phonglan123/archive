function parse_data(data) {
    const parse_request_time = timestamp => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let date = new Date(timestamp);
        return date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    },
        friendly_number_parse = number => {
            if (typeof number != "number")
                return number;

            if (number < 10000)
                return number.toString();
            else if (number >= 10000 && number < 1000000)
                return Math.round(number / 1000) + "K";
            else if (number >= 1000000)
                return "1M+";
        },
        make_container = (title, value) => "<div class=\"container sort\"><b title=\"" + title + "\">" + title + "</b><span class=\"counter\" title=\"" + value + "\">" + friendly_number_parse(value) + "</span></div>";

    document.querySelector("#total").innerHTML = data.total;

    document.querySelector("#recent-time").innerHTML = parse_request_time(data.recently_requested.dates);
    document.querySelector("#recent-method").innerHTML = data.recently_requested.methods;
    document.querySelector("#recent-type").innerHTML = data.recently_requested.types;
    document.querySelector("#recent-fromweb").innerHTML = data.recently_requested.from_websites;
    document.querySelector("#recent-toweb").innerHTML = data.recently_requested.to_websites;

    ["dates", "methods", "types", "from_websites", "to_websites"].forEach(sort_type => {
        let container_html = "";

        Object.entries(data[sort_type]).forEach(data => {
            container_html += make_container(data[0], data[1]);
        });

        document.querySelector("#" + sort_type).innerHTML = container_html;
    });
}

function update_event(request_log) {
    document.querySelector("#cleanlog").onclick = () => { fetch("/#cleanlog"); location.reload(); };
    document.querySelector("#log-memory-size").innerHTML = JSON.stringify(request_log).length;
    document.querySelector("#log-saved-memory-size").innerHTML = (request_log.saved_memory ? request_log.saved_memory : 0);
}

function update_data() {
    const sort_obj = obj => {
        let sorted = Object.entries(obj).sort(([, a], [, b]) => b - a).reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
        if (sorted["Others"] != undefined) {
            let temp = sorted["Others"];
            delete sorted["Others"];
            sorted["Others"] = temp;
        }
        return sorted;
    };

    chrome.storage.local.get(["request_log"], result => {
        let request_log = result.request_log;

        Object.keys(request_log).forEach(log_entry_name => {
            if (!["recently_request", "total", "saved_memory", "dates"].includes(log_entry_name))
                request_log[log_entry_name] = sort_obj(request_log[log_entry_name]);
        });

        parse_data(request_log);

        update_event(request_log);
    });
}

chrome.storage.onChanged.addListener(() => update_data());
update_data();
update_event();