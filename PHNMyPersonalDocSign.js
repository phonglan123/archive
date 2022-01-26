function PHNMyPersonalDocSign(doc_title) {
    const
        PHNTimestamp = {
            get: (date_obj = new Date()) => {
                let timestamp = new Date(date_obj.toISOString().replace("Z", "")).getTime();
                return timestamp.toString(35).replace("-", "z");
            },
            parse: encoded_string => {
                const miliseconds_offset = new Date().getTimezoneOffset() * 60000;
                return new Date(parseInt(encoded_string.replace("z", "-"), 35) - miliseconds_offset);
            }
        },
        base64_encode = str => {
            return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
                return String.fromCharCode('0x' + p1);
            }));
        };
    return base64_encode(`
            ■
            PHNMyPersonalDocSign (version 1)
            Nguyễn Hải Phong (https://phonghng.github.io/)
            ${PHNTimestamp.get()} (phntimestamp v3.1)
            ${doc_title}
        `);
}
