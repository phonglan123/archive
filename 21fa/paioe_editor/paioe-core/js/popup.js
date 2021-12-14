class Popup {
    open_link_popup() {
        if (this.value_link_popup()) {
            new Editor().temp_sel_range(new Editor().get_sel_range());
            document.querySelector("#link_popup #link_popup_url").focus();
            $("#link_popup").fadeIn();
        }
    }

    value_link_popup() {
        let selection = new Editor().get_sel();
        if ($(selection.anchorNode).parents(".editor").length == 0)
            return false;
        let link_elm = (selection.anchorNode.parentNode.nodeName == "A" ? selection.anchorNode.parentNode : $(selection.anchorNode.parentNode).parents("a")[0]);
        if (link_elm != undefined) {
            $("#link_popup #link_popup_display").val(link_elm.innerText);
            $("#link_popup #link_popup_url").val(link_elm.href);
            $("#link_popup #link_popup_openlink").fadeIn();
            $("#link_popup #link_popup_unlink").fadeIn();
        } else {
            $("#link_popup #link_popup_display").val(selection.toString());
            $("#link_popup #link_popup_url").val("");
            $("#link_popup #link_popup_openlink").fadeOut();
            $("#link_popup #link_popup_unlink").fadeOut();
        }
        return true;
    }

    open_text_line_popup() {
        this.value_text_line_popup();
        $("#text_line_popup").fadeIn();
    }

    value_text_line_popup() {
        let text_line_css = new Format_text().get_format(new Editor().get_sel().anchorNode.parentElement)["Text line CSS"];

        setTimeout(() => {
            let temp_text_line_css = text_line_css == null ? "null" : text_line_css
            $("#text_line_popup form #underline").prop("checked", temp_text_line_css.includes("underline"));
            $("#text_line_popup form #line-through").prop("checked", temp_text_line_css.includes("line-through"));
            $("#text_line_popup form #overline").prop("checked", temp_text_line_css.includes("overline"));
        }, 0);

        if (text_line_css == null) {
            $("#text_line_popup form select").val("");
            $("#text_line_popup form input[type='color']").val("#000000");
        } else {
            $("#text_line_popup form select").val(text_line_css.match(/solid|double|dotted|dashed|wavy/g)[0]);
            const rgb2hex = c => "#" + c.match(/\d+/g).map(x => (+x).toString(16).padStart(2, 0)).join``;
            let line_color = text_line_css.slice(text_line_css.indexOf("rgb"));
            $("#text_line_popup form input[type='color']").val(rgb2hex(line_color));
        }
    }
}