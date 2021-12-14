const RequestLog = {
	default_log: {
		total: 0,
		dates: {},
		methods: {},
		types: {},
		from_websites: {},
		to_websites: {},
		recently_requested: {},
		saved_memory: 0
	},
	get_log: async () => {
		let storage_function = keys => {
			return new Promise(resolve => {
				chrome.storage.local.get(keys, resolve);
			});
		},
			request_log = (await storage_function(["request_log"])).request_log;

		if (request_log == undefined)
			return RequestLog.default_log;
		else {
			if (typeof request_log.saved_memory != "number" || request_log.saved_memory == NaN)
				request_log.saved_memory = 0;

			return request_log;
		}
	},
	set_log: value => chrome.storage.local.set({ request_log: value }),
	get_and_set_log: async callback => {
		let request_log = await RequestLog.get_log();
		RequestLog.set_log(callback(request_log));
	},
	reset_log: () => chrome.storage.local.set({ request_log: RequestLog.default_log }),
	clean_log: async () => {
		let request_log = await RequestLog.get_log(),
			old_length = JSON.stringify(request_log).length,
			new_length = JSON.stringify(request_log).length;

		let fromwebsites_values = Object.values(request_log.from_websites),
			fromwebsites_max_value = Math.max(...fromwebsites_values),
			fromwebsites_min_value = fromwebsites_max_value / 20;
		Object.entries(request_log.from_websites).forEach(entry => {
			if (entry[1] < fromwebsites_min_value) {
				delete request_log.from_websites[entry[0]];
				if (request_log.from_websites["Others"] == undefined)
					request_log.from_websites["Others"] = 0;
				request_log.from_websites["Others"] += entry[1];
			}
		});

		let towebsites_values = Object.values(request_log.to_websites),
			towebsites_max_value = Math.max(...towebsites_values),
			towebsites_min_value = towebsites_max_value / 20;
		Object.entries(request_log.to_websites).forEach(entry => {
			if (entry[1] < towebsites_min_value) {
				delete request_log.to_websites[entry[0]];
				if (request_log.to_websites["Others"] == undefined)
					request_log.to_websites["Others"] = 0;
				request_log.to_websites["Others"] += entry[1];
			}
		});

		new_length = JSON.stringify(request_log).length;
		request_log.saved_memory += old_length - new_length;
		RequestLog.set_log(request_log);
	},
	timestamp_parse: timestamp => {
		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		let date = new Date(timestamp);
		return date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear();
	},
	new_request: async request_details => {
		let request_log = await RequestLog.get_log(),
			request_details_parsed = {
				dates: RequestLog.timestamp_parse(request_details.timeStamp),
				methods: request_details.method,
				types: request_details.type,
				from_websites: (new URL(request_details.initiator)).hostname,
				to_websites: (new URL(request_details.url)).hostname
			};

		request_log.total++;
		Object.entries(request_details_parsed).forEach(entry => {
			if (request_log[entry[0]][entry[1]] == undefined || request_log[entry[0]][entry[1]] == NaN)
				request_log[entry[0]][entry[1]] = 0;
			request_log[entry[0]][entry[1]]++;
		});
		request_log.recently_requested = request_details_parsed;
		request_log.recently_requested.dates = request_details.timeStamp;

		RequestLog.set_log(request_log);
		chrome.browserAction.setBadgeText({ text: RequestLog.friendly_number_parse(request_log.total) });
	},
	friendly_number_parse: number => {
		if (number < 10000)
			return number.toString();
		else if (number >= 10000 && number < 1000000)
			return Math.round(number / 1000) + "K";
		else if (number >= 1000000)
			return "1M+";
	}
}

chrome.webRequest.onBeforeRequest.addListener(async details => {
	await RequestLog.new_request(details);

	if (new URL(details.initiator).protocol.includes("extension") && details.initiator.includes(chrome.runtime.id) && new URL(details.url).hash == "#cleanlog")
		await RequestLog.clean_log();
}, { urls: ["<all_urls>"] });