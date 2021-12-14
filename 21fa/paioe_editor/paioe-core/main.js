function alphabet_to_number(characters) {
    const lower_alphabet = "abcdefghijklmnopqrstuvwxyz";
    characters = characters.toLowerCase().split("");
    let number = 0;
    for (let i = 0; i < characters.length; i++) {
        let char_index = characters.length - (i + 1),
            char_number = 26 ** char_index * (lower_alphabet.indexOf(characters[i]) + 1);
        number += char_number;
    }
    return number;
}

function set_dropdown_value(dropdown_query, new_value) {
    let dropdown_input = $(dropdown_query);
    dropdown_input.parent().find(".title").html(new_value);
    dropdown_input.val(new_value);
}

function is_valid_url(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return (!!pattern.test(str) || str.startsWith("mailto:") || str.startsWith("tel:"));
}

function init_event() {
    $(window).resize(new Editor().resize_editor);

    $("body").click(event => {
        new Format_text().active_format_menu();
    });

    $(".editor").keydown(event => {
        if (event.code.includes("Key")) {
            let keyboard_shortcut_name = (event.ctrlKey ? "Ctrl + " : "") + (event.shiftKey ? "Shift + " : "") + (event.altKey ? "Alt + " : "") + event.code.replace("Key", "");
            if (keyboard_shortcut_name == "Ctrl + Alt + T")
                document.execCommand('strikethrough', false, null);
            else if (keyboard_shortcut_name == "Ctrl + Alt + L")
                document.execCommand('justifyLeft', false, null);
            else if (keyboard_shortcut_name == "Ctrl + Alt + C")
                document.execCommand('justifyCenter', false, null);
            else if (keyboard_shortcut_name == "Ctrl + Alt + R")
                document.execCommand('justifyRight', false, null);
            else if (keyboard_shortcut_name == "Ctrl + Alt + J")
                document.execCommand('justifyFull', false, null);
        } else if (event.key == "Tab") {
            // Only press Tab: https://stackoverflow.com/questions/24930621/count-how-many-keys-are-pressed-at-the-same-time-in-javascript
            console.log("Tab");
            event.preventDefault();
        } else if (event.ctrlKey && event.shiftKey && event.key == "<")
            new Format_text().change_size_from_keyboard(-1);
        else if (event.ctrlKey && event.shiftKey && event.key == ">")
            new Format_text().change_size_from_keyboard(1);
        new Format_text().active_format_menu();
    });

    $('.menu').mousedown(event => {
        let current_sel_range = new Editor().get_sel_range();
        if ($(event.target).parents('.dropdown').length == 0)
            new Editor().temp_sel_range(current_sel_range);
    });

    $('.menu button').mouseup(event => {
        new Editor().temp_sel_range();
    });

    $('.dropdown-title').click(() => {
        $(this).parent().attr('tabindex', 1).focus();
        $(this).parent().toggleClass('active');
        $(this).parent().find('.dropdown-menu').slideToggle(300);
    });

    $('.dropdown').focusout(() => {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });

    $('.dropdown .dropdown-menu li').click(() => {
        $(this).parents('.dropdown').find('.title').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
        $(this).parents('.dropdown').find('input').trigger("change");
    });

    $(".popup").toArray().forEach(popup => $(popup).html('<div class="popup-header"><i class="fas fa-' + $(popup).attr("popup-icon") + ' popup-header-icon"></i><b class="popup-header-title">' + $(popup).attr("popup-title") + '</b><i class="fas fa-times popup-header-close-button" title="' + multilang_words.close + '" onclick="$(this).parent().parent().fadeOut();"></i></div> <div class="popup-content"> ' + $(popup).html() + ' </div>'));

    $(".popup").click(event => new Editor().popup_clicked(event.target));

    $(".popup").draggable({
        cancel: ".popup-header-close-button",
        handle: ".popup-header"
    });

    $(".editor").bind("paste", event => {
        let paste_content = event.originalEvent.clipboardData.getData("Text"),
            sel_string = new Editor().get_sel().toString();
        if (sel_string != "" && is_valid_url(paste_content)) {
            event.preventDefault();
            document.execCommand("createLink", null, paste_content);
            new Editor().get_sel().removeRange(new Editor().get_sel_range());
            new Format_text().all_link();
        }
    });

    $("h1").toArray().forEach(heading => $(heading).replaceWith("<span style=\"font-size: 32px\">" + $(heading).html() + "</span>"));
    $("h2").toArray().forEach(heading => $(heading).replaceWith("<span style=\"font-size: 24px\">" + $(heading).html() + "</span>"));
    $("h3").toArray().forEach(heading => $(heading).replaceWith("<span style=\"font-size: 18.72px\">" + $(heading).html() + "</span>"));
    $("h4").toArray().forEach(heading => $(heading).replaceWith("<span style=\"font-size: 16px\">" + $(heading).html() + "</span>"));
    $("h5").toArray().forEach(heading => $(heading).replaceWith("<span style=\"font-size: 13.28px\">" + $(heading).html() + "</span>"));
    $("h6").toArray().forEach(heading => $(heading).replaceWith("<span style=\"font-size: 10.72px\">" + $(heading).html() + "</span>"));

    $("#text_line_popup form").bind("change", event => new Format_text().text_line());
}

window.addEventListener('DOMContentLoaded', e => {
    window.paioe_version = "0.0.2";
    window.temp_sel_range = null;

    new Editor().write_editor('<a href="https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=color">https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=color</a>');

    if (new Editor().check_untranslated().length > 0) {
        $(".editor").html("<span style=\"font-size: 32px\"><font color=\"#ff0000\">Still untranslated text!</font></span><br/><br/><br/><br/>" + $(".editor").html());
        console.log(new Editor().check_untranslated());
    }

    new Editor().clean_editor();
    new Format_text().load_font();
    init_event();
    new Format_text().all_link()
    new Editor().resize_editor();
    setTimeout(new Editor().resize_editor, 100);
});