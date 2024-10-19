function listen() {
    let outputArea = document.getElementById('outputArea');
    let soundEffect12 = document.getElementById('soundEffect12');
    let soundEffect13 = document.getElementById('soundEffect13');
    let soundEffect5 = document.getElementById('soundEffect5');
    let soundEffect14 = document.getElementById('soundEffect14');
    let soundEffect6 = document.getElementById('soundEffect6');
    let soundEffect7 = document.getElementById('soundEffect7');
    let soundEffect8 = document.getElementById('soundEffect8');
    let soundEffect9 = document.getElementById('soundEffect9');
    let soundEffect11 = document.getElementById('soundEffect11');
    let soundEffect16 = document.getElementById('soundEffect16');
    let soundEffect15 = document.getElementById('soundEffect15');
    let soundEffect10 = document.getElementById('soundEffect10');
    let soundEffect17 = document.getElementById('soundEffect17');
    let soundEffect18 = document.getElementById('soundEffect18');

    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-BG";
    recognition.start();

    recognition.onresult = function(event) {
        let transcript = event.results[0][0].transcript.toLowerCase();
        outputArea.innerHTML = transcript;

        if (transcript === "hello") {
            outputArea.innerHTML = "Greetings! owner";
            soundEffect12.play();
        } else if (transcript === "goodbye") {
            outputArea.innerHTML = "Goodbye!";
            soundEffect13.play();
            setTimeout(() => {
                window.close();
            }, 1000);
        } else if (transcript.startsWith("youtube")) {
            let query = transcript.replace("youtube", "").trim();
            if (query) {
                let youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
                window.open(youtubeSearchUrl, '_blank');
                soundEffect5.play();
                outputArea.innerHTML = "Searching YouTube for: " + query;
            } else {
                window.open("https://www.youtube.com", '_blank');
                outputArea.innerHTML = "Opening YouTube.";
                soundEffect5.play();
            }
        } else if (transcript.startsWith("twitch")) {
            let query = transcript.replace("twitch", "").trim();
            if (query) {
                let twitchSearchUrl = `https://www.twitch.tv/search?term=${encodeURIComponent(query)}`;
                window.open(twitchSearchUrl, '_blank');
                soundEffect14.play();
                outputArea.innerHTML = "Searching Twitch for: " + query;
            } else {
                window.open("https://www.twitch.tv", '_blank');
                outputArea.innerHTML = "Opening Twitch.";
                soundEffect14.play();
            }
        } else if (transcript.includes("discord")) {
            setTimeout(() => window.open("https://discord.com/"), 1000);
            soundEffect6.play();
        } else if (transcript.includes("telegram")) {
            setTimeout(() => window.open("https://web.telegram.org/a/"), 1000);
            soundEffect7.play();
        } else if (transcript.includes("steam")) {
            setTimeout(() => window.open("https://store.steampowered.com/"), 1000);
            soundEffect.play();
        } else if (transcript.includes("music")) {
            setTimeout(() => window.open("https://music.yandex.ru/?from=tableau_yabro"), 1000);
            soundEffect8.play();
        } else if (transcript.includes("translate")) {
            setTimeout(() => window.open("https://translate.yandex.ru/"), 1000);
            soundEffect9.play();
        } else if (transcript.includes("weather")) {
            setTimeout(() => window.open("https://www.gismeteo.ru/"), 1000);
            soundEffect2.play();
        } else if (transcript === "time") {
            let currentTime = new Date().toLocaleTimeString();
            outputArea.innerHTML = "Current time is: " + currentTime;
            soundEffect16.play();
        } else if (transcript === "date") {
            let currentDate = new Date().toLocaleDateString();
            outputArea.innerHTML = "Current date is: " + currentDate;
            soundEffect15.play();
        } else if (transcript.startsWith("google")) {
            let query = transcript.replace("google", "").trim();
            if (query) {
                let googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                window.open(googleSearchUrl, '_blank');
                soundEffect10.play();
                outputArea.innerHTML = "Searching Google for: " + query;
            } else {
                outputArea.innerHTML = "Please provide a search term after 'google'.";
            }
        } else if (transcript.startsWith("yandex")) {
            let query = transcript.replace("yandex", "").trim();
            if (query) {
                let yandexSearchUrl = `https://yandex.ru/search/?text=${encodeURIComponent(query)}`;
                window.open(yandexSearchUrl, '_blank');
                soundEffect11.play();
                outputArea.innerHTML = "Searching Yandex for: " + query;
            } else {
                outputArea.innerHTML = "Please provide a search term after 'yandex'.";
            }
        } else {
            outputArea.innerHTML = "I don't know what you mean.";
        }
    };

    recognition.onerror = function(event) {
        outputArea.innerHTML = "Error occurred in recognition: " + event.error;
    };
}
