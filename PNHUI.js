$(function () {
    $("popup")
        .draggable({
            handle: "div[type='popup_head']",
            containment: "parent",
            scroll: false,
            start: e => {
                $("popup").removeAttr("focus");
                $(e.currentTarget).attr("focus", true);
            }
        })
        .resizable({
            handles: "all",
            containment: "parent"
        })
        .click(e => {
            $("popup").removeAttr("focus");
            $(e.currentTarget).attr("focus", true);
        });
});