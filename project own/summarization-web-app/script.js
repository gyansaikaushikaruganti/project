const inputText = document.getElementById("inputText");
const charCount = document.getElementById("charCount");
const summarizeBtn = document.getElementById("summarizeBtn");
const summaryText = document.getElementById("summaryText");
const summaryLength = document.getElementById("summaryLength");

inputText.addEventListener("input", () => {
    charCount.textContent = "Characters: " + inputText.value.length;
});

summarizeBtn.addEventListener("click", () => {
    let text = inputText.value.trim();

    if (text === "") {
        summaryText.textContent = "Please enter some text.";
        return;
    }

    let sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [];
    let limit = parseInt(summaryLength.value);

    let summary = sentences.slice(0, limit).join(" ");
    summaryText.textContent = summary || text;
});
