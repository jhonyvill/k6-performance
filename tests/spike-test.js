import http from "k6/http";
import { sleep, check } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export const options = {
	stages: [
		{ duration: "30s", target: 50 }, // ramp up
		{ duration: "30s", target: 50 }, // handle the load
		{ duration: "10s", target: 150 }, // adds the load spike
		{ duration: "5s", target: 150 }, // handle the load spike
		{ duration: "10s", target: 50 }, // removes the load spike
		{ duration: "30s", target: 0 }, // ramp down
	],
	thresholds: {
		http_req_duration: ["p(95)<100"],
		http_req_failed: ["rate<0.01"],
	},
};

export default function () {
	const response = http.get("http://localhost:3000/produtos");
	check(response, {
		"Response status is 200": (res) => res.status === 200,
	});

	sleep(1); // thinking time
}

export function handleSummary(data) {
	return {
		"../report/spike-report.html": htmlReport(data),
		stdout: textSummary(data, { indent: " ", enableColors: true }),
	};
}
