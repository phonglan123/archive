class Editor {
    get_sel() {
        return window.getSelection();
    }

    get_sel_range() {
        if (window.getSelection) {
            let sel = this.get_sel();
            if (sel.getRangeAt && sel.rangeCount)
                return sel.getRangeAt(0);
        } else if (document.selection && document.selection.createRange)
            return document.selection.createRange();
        return null;
    }

    temp_sel_range(sel_range = null) {
        if (sel_range != null)
            temp_sel_range = sel_range;
        else {
            let range = temp_sel_range;
            if (range) {
                if (window.getSelection) {
                    let sel = new Editor().get_sel();
                    sel.removeAllRanges();
                    sel.addRange(range);
                } else if (document.selection && range.select)
                    range.select();
            }
            temp_sel_range = null;
        }
    }

    get_sel_nodes(range) {
        const nextNode = node => {
            if (node.hasChildNodes())
                return node.firstChild;
            else {
                while (node && !node.nextSibling)
                    node = node.parentNode;
                if (!node)
                    return null;
                return node.nextSibling;
            }
        },
            getRangeSelectedNodes = range => {
                var node = range.startContainer;
                var endNode = range.endContainer;
                if (node == endNode)
                    return [node];
                var rangeNodes = [];
                while (node && node != endNode)
                    rangeNodes.push(node = nextNode(node));
                node = range.startContainer;
                while (node && node != range.commonAncestorContainer) {
                    rangeNodes.unshift(node);
                    node = node.parentNode;
                }
                return rangeNodes;
            };

        if (window.getSelection)
            if (!window.getSelection().isCollapsed)
                return getRangeSelectedNodes(range);
        return [];
    }

    /*
    remove_all_span_for_css_name(css_name) {
        const check_validity = node => node.nodeName == "SPAN" && node.style[css_name] != "";
        $("span").toArray().forEach(span => {
            let delete_this = (check_validity(span) && span.children.length != 0);
            if (check_validity(span) && span.children.length != 0)
                for (let children = span.children, i = 0; i < children.length; i++)
                    if (!check_validity(children[i]))
                        delete_this = false;
            if (delete_this)
                span.style[css_name] = "";
        });
    }
    */

    clean_editor() {
        const ignore_html = ["<script>", "<script", "</script>", /<[^/>][^>]*>\s*?<\/[^>]+>/];
        ignore_html.forEach(ignore => {
            while ($(".editor").html().match(ignore))
            $(".editor").html($(".editor").html().replace(new RegExp(ignore, "g"), ""));
        });
        $("font[style='']").toArray().forEach(empty_elm => $(empty_elm).replaceWith($(empty_elm).contents()));
        $("div[style='']").toArray().forEach(empty_elm => $(empty_elm).replaceWith($(empty_elm).contents()));
        $("span").toArray().forEach(span => {
            if (span.style.textDecoration != "")
                $(span).replaceWith($(span).contents());
        });
        $("u.need-to-remove-this-u-elm").toArray().forEach(empty_elm => $(empty_elm).replaceWith($(empty_elm).contents()));
    }

    resize_editor() {
        let scroll_height = document.documentElement.clientHeight,
            menu_height = parseInt(window.getComputedStyle($(".menu")[0]).height.replace("px", ""));
        $(".editor-outer").css("height", (scroll_height - menu_height - 24) + "px");
        $("#fontFamilySelect").css("max-height", 0.8 * document.body.offsetHeight + "px");
        document.documentElement.style.setProperty("--menu-height", menu_height + "px");
    }

    write_editor(html) {
        $(".editor").html("<div style=\"font-size: inherit;\">&#x200b;" + html + "</div>");
        this.clean_editor();
    }

    popup_clicked(popup) {
        $(".popup").css("z-index", "2");
        if ($(popup).hasClass("popup"))
            $(popup).css("z-index", "3");
        else
            $(popup).parent(".popup").css("z-index", "3");
    }

    check_untranslated() {
        return $("body").html().match(/(?<=\[# ).*(?= #\])/g);
    }
}