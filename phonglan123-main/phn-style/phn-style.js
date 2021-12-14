/* Collapse control */
(function() {
    var collapse_button = document.querySelectorAll(".collapse-button");

    for (var i = 0; i < collapse_button.length; i++) {
        if (collapse_button[i].parentNode.classList.contains("active")) {
            var collapse_content = collapse_button[i].nextElementSibling;
            collapse_content.style.height = (collapse_content.style.height ? null : "fit-content");
            collapse_content.style.borderTop = (["", "none", null, "null", "undefined", undefined].includes(collapse_content.style.borderTop) ? "var(--general-border)" : "none");
        }

        collapse_button[i].addEventListener("click", function() {
            var collapse_content = this.nextElementSibling;
            collapse_content.style.height = (collapse_content.style.height ? null : "fit-content");
            collapse_content.style.borderTop = (["", "none", null, "null", "undefined", undefined].includes(collapse_content.style.borderTop) ? "var(--general-border)" : null);
        });
    }
})();

(function() {
    var collapse_content = document.querySelectorAll(".collapse-content");
    for (var i = 0; i < collapse_content.length; i++)
        collapse_content[i].innerHTML = "<div class='collapse-content-frame'>" + collapse_content[i].innerHTML + "</div>";
})();

/* Close event */
(function() {
    var parent_node_selector = (child_node, condition) => {
            var current_node = child_node.parentNode;
            while (!condition(current_node))
                current_node = current_node.parentNode;
            return current_node;
        },
        set_close_event = (close_elm_classname, top_elm_classname) => {
            var close_elm = document.querySelectorAll("." + close_elm_classname);
            for (var i = 0; i < close_elm.length; i++)
                close_elm[i].addEventListener("click", function() {
                    var parent_elm = parent_node_selector(this, node => node.classList.contains(top_elm_classname));
                    parent_elm.style.opacity = "0";
                    setTimeout(() => parent_elm.style.display = "none", 1000);
                });
        };
    set_close_event("toast-close-button", "toast");
    set_close_event("popup-close-button", "popup");
    set_close_event("popup-outer", "popup");
})();

/* Hide class */
(function() {
    var hide_elms = document.querySelectorAll(".hide");
    for (var i = 0; i < hide_elms.length; i++) {
        hide_elms[i].classList.remove("hide");
        hide_elms[i].style.display = "none";
        hide_elms[i].style.opacity = "0";
    }
})();

/* Code copy */
(function() {
    var copy_buttons = document.querySelectorAll(".code-copy-button");
    for (var i = 0; i < copy_buttons.length; i++)
        copy_buttons[i].addEventListener("click", function() {
            var copy_button = this,
                copied_text = this.getAttribute("copied-text");
            var copy_to_clipboard = string => {
                const elm = document.createElement('textarea');
                elm.value = string;
                document.body.appendChild(elm);
                elm.select();
                document.execCommand('copy');
                document.body.removeChild(elm);
            };
            var copy_button_original_text = copy_button.innerHTML,
                code = copy_button.parentNode.querySelector(".code-content").innerText;
            copy_to_clipboard(code);
            copy_button.innerHTML = copied_text;
            setTimeout(() => copy_button.innerHTML = copy_button_original_text, 1000);
        });
})();

/* Show element */
function phn_show(elm, auto_close) {
    elm.style.display = null;
    setTimeout(() => elm.style.opacity = "1", 100);
    if (auto_close != undefined)
        setTimeout(() => {
            elm.style.opacity = "0";
            setTimeout(() => elm.style.display = "none", 1000);
        }, auto_close * 1000);
}