function extra_add_event_listener(dom) {
    Object.entries(events).forEach(event => {
        let event_function = e => {
            let flag = false;

            event[1].forEach(elm => {
                if (!temp_data_for_previous_data[elm[0]])
                    temp_data_for_previous_data[elm[0]] = "";

                if (temp_data_for_previous_data[elm[0]] != dom.querySelector(elm[0])[elm[1]]) {
                    flag = true;
                    temp_data_for_previous_data[elm[0]] = dom.querySelector(elm[0])[elm[1]];
                }
            });

            if (flag)
            window[event[0]](e);
        }

        window[event[0]]();
        
        event[1].forEach(elm_selector => {
            ["onchange", "onkeydown", "onkeyup", "onclick", "oncopy", "oncut", "ondrag", "ondrop", "onfocus", "oninput", "onkeypress", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onmousemove", "onmouseenter", "onmouseleave"].forEach(event_name => {
                dom.querySelectorAll(elm_selector[0]).forEach(elm => {
                    if (elm[event_name]) {
                        let default_event_function = elm[event_name];
                        elm[event_name] = e => {
                            default_event_function(e);
                            event_function(e)
                        }
                    } else
                        elm[event_name] = event_function;
                });
            });
        });
    });
}
