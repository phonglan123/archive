class Format_text {
    get_format(elm) {
        const check_text_line = () => {
            let is_text_line = $(elm)[0].nodeName == "U" || $(elm).parents("u").length > 0;
            if (is_text_line) {
                if ($(elm)[0].nodeName == "U")
                    return [true, $(elm).css("text-decoration")];
                else
                    return [true, $(elm).parents("u").css("text-decoration")];
            } else
                return [false, null];
        };

        return {
            "Bold": document.queryCommandState("bold"),
            "Italic": document.queryCommandState("italic"),
            "Text line": check_text_line()[0],
            "Text line CSS": check_text_line()[1],
            "Subscript": document.queryCommandState("subscript"),
            "Superscript": document.queryCommandState("superscript"),
            "Align left": document.queryCommandState("justifyLeft"),
            "Align center": document.queryCommandState("justifyCenter"),
            "Align right": document.queryCommandState("justifyRight"),
            "Align justify": document.queryCommandState("justifyFull"),
            "Font size": Math.floor($(elm).css("font-size").replace("px", "")),
            "Font family": $(elm).css("font-family"),
            "Text color": $(elm).css("color"),
            "Text background": $(elm).css("background-color"),
            "Link": elm.nodeName == "A"
        };
    }

    active_format_menu() {
        if ($(window.getSelection().anchorNode).parents(".editor").length == 0)
            return;
        let text_format = this.get_format(new Editor().get_sel().anchorNode.parentElement);
        Object.keys(text_format).forEach(format => {
            if (format == "Font size")
                $(".menu input[title='[# Font size #]']").val(text_format[format]);
            else if (format == "Font family")
                set_dropdown_value("#fontFamily", text_format[format].replace(/"/g, ""));
            else if (format == "Text color" || format == "Text background") {
                $(".menu button[title='[# " + format + " #]'] .inputcolor_preview").css("background-color", text_format[format]);
                if (text_format[format] != "rgb(255, 255, 255)")
                    $(".menu button[title='[# " + format + " #]'] .inputcolor_preview").css("border-color", text_format[format]);
                else
                $(".menu button[title='[# " + format + " #]'] .inputcolor_preview").css("border-color", "#ccc");
            } else if (format == "Text line CSS")
                new Popup().value_text_line_popup();
            else
                $(".menu button[title='[# " + format + " #]']").toggleClass("active", text_format[format]);
        });
        new Popup().value_link_popup();
        new Popup().value_text_line_popup();
        this.all_link();
    }

    change_size_func(size, range = null) {
        document.execCommand("fontSize", false, "7");
        range = range == null ? new Editor().get_sel_range() : range;
        let font_elm = range.commonAncestorContainer;
        if (font_elm.classList.contains("editor"))
            new Editor().get_sel_nodes(range).forEach(node => {
                if (node.nodeName == "FONT")
                    $(node).removeAttr("size").css("font-size", size + "px");
            });
        else {
            font_elm.removeAttribute("size");
            font_elm.style.fontSize = size + "px";
            new Editor().clean_editor();
        }
    }

    change_size(size) {
        new Editor().temp_sel_range();
        this.change_size_func(size);
    }

    change_size_from_keyboard(adding_value) {
        new Editor().get_sel_nodes(new Editor().get_sel_range()).forEach(node => {
            if (node.nodeName == "#text") {
                let range = new Range();
                range.selectNode(node);
                let current_size = this.get_format(range.commonAncestorContainer)["Font size"];
                console.log(range, current_size);
                this.change_size_func(current_size + adding_value, range);
            }
        });
        new Editor().temp_sel_range();
    }

    change_font(font) {
        font = font.replace("fontFamilySelect_", "");
        document.execCommand("fontName", false, font);
        set_dropdown_value("#fontFamily", font.replace(/"/g, ""));
        new Editor().temp_sel_range();
        new Editor().clean_editor();
    }

    load_font() {
        const fontCheck = new Set(["Arial", "Arial Black", "Bahnschrift", "Calibri", "Cambria", "Cambria Math", "Candara", "Comic Sans MS", "Consolas", "Constantia", "Corbel", "Courier New", "Ebrima", "Franklin Gothic Medium", "Gabriola", "Gadugi", "Georgia", "HoloLens MDL2 Assets", "Impact", "Ink Free", "Javanese Text", "Leelawadee UI", "Lucida Console", "Lucida Sans Unicode", "Malgun Gothic", "Marlett", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU-ExtB", "Mongolian Baiti", "MS Gothic", "MV Boli", "Myanmar Text", "Nirmala UI", "Palatino Linotype", "Segoe MDL2 Assets", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Historic", "Segoe UI Emoji", "Segoe UI Symbol", "SimSun", "Sitka", "Sylfaen", "Symbol", "Tahoma", "Times New Roman", "Trebuchet MS", "Verdana", "Webdings", "Wingdings", "Yu Gothic", "American Typewriter", "Andale Mono", "Arial", "Arial Black", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Avenir", "Avenir Next", "Avenir Next Condensed", "Baskerville", "Big Caslon", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bradley Hand", "Brush Script MT", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charter", "Cochin", "Comic Sans MS", "Copperplate", "Courier", "Courier New", "Didot", "DIN Alternate", "DIN Condensed", "Futura", "Geneva", "Georgia", "Gill Sans", "Helvetica", "Helvetica Neue", "Herculanum", "Hoefler Text", "Impact", "Lucida Grande", "Luminari", "Marker Felt", "Menlo", "Microsoft Sans Serif", "Monaco", "Noteworthy", "Optima", "Palatino", "Papyrus", "Phosphate", "Rockwell", "Savoye LET", "SignPainter", "Skia", "Snell Roundhand", "Tahoma", "Times", "Times New Roman", "Trattatello", "Trebuchet MS", "Verdana", "Zapfino"].sort());

        (async () => {
            await document.fonts.ready;

            const fontAvailable = new Set();

            for (const font of fontCheck.values())
                if (document.fonts.check(`12px "${font}"`))
                    fontAvailable.add(font);

            [...fontAvailable.values()].forEach(font => {
                $("#fontFamilySelect").html($("#fontFamilySelect").html() + "<li id=\"fontFamilySelect_" + font + "\" title=\"" + font + "\" style=\"font-family: '" + font + "';\">" + font + "</li>");
            });

            $('.dropdown .dropdown-menu li').click(function () {
                $(this).parents('.dropdown').find('.title').text($(this).text());
                $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
                $(this).parents('.dropdown').find('input').trigger("change");
            });
        })();
    }

    save_link() {
        let original_display_text = temp_sel_range.toString(),
            new_display_text = $("#link_popup #link_popup_display").val(),
            url = $("#link_popup #link_popup_url").val(),
            target_node = null;
        url = url == "" ? "https://hey.youjust/entered/an-empty?link=%5E%5E#justcheckagain" : url;
        new_display_text = new_display_text == "" ? url : new_display_text;

        new Editor().temp_sel_range();
        target_node = new Editor().get_sel().anchorNode.parentElement;
        if (target_node.nodeName == "A") {
            if (original_display_text != new_display_text) {
                target_node.innerHTML = new_display_text;
                target_node.href = url;
            } else if (original_display_text == new_display_text)
                target_node.href = url;
        } else {
            if (original_display_text != new_display_text)
                document.execCommand("insertHTML", null, "<a href=\"" + url + "\">" + new_display_text + "<a>");
            else if (original_display_text == new_display_text)
                document.execCommand("createLink", null, url);
        }

        this.all_link();
        $("#link_popup #link_popup_display").val("");
        $("#link_popup #link_popup_url").val("");
        $("#link_popup").fadeOut();
    }

    unlink() {
        let link_elm = temp_sel_range.commonAncestorContainer.parentElement;
        $(link_elm).replaceWith($(link_elm).contents());
        new Editor().temp_sel_range();
        this.active_format_menu();
        new Popup().value_link_popup();
        new Editor().clean_editor();
    }

    all_link() {
        $(".editor a").toArray().forEach(link => {
            $(link).prop("title", $(link).prop("href"));
            $(link).bind("click", event => new Popup().open_link_popup());
            if ($(link).parents("font").length == 0 || $(link).parents("font").attr("color") == undefined)
                $(link).wrap("<font color=\"blue\"></font>");
        });
    }

    text_line() {
        if (!this.get_format(new Editor().get_sel().anchorNode.parentElement)["Text line"])
            document.execCommand("underline", false, null);
        let added_elm = new Editor().get_sel_nodes(new Editor().get_sel_range()).map(elm => {
            if (elm.nodeName == "U")
                return elm;
            else if (elm.parentNode.nodeName == "U")
                return elm.parentNode;
        }).filter(elm => elm != undefined);
        let line = $("#text_line_popup form input:checkbox:checked").toArray().map(checkbox => checkbox.id).join(" "),
            style = $("#text_line_popup form select")[0].value,
            color = $("#text_line_popup form input[type='color']")[0].value,
            decoration_option = line + " " + style + " " + color;
        added_elm.forEach(elm => {
            elm.style.textDecoration = decoration_option;
            $(elm).toggleClass("need-to-remove-this-u-elm", decoration_option.match(/underline|line-through|overline/g) == null)
        });
        this.active_format_menu();
    }
}