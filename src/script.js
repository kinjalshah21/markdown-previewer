document.addEventListener('DOMContentLoaded', function () {
    //preview function
    function updatePreview() {
        const markdownText = document.getElementById("markdown").value;
        const html = marked.parse(markdownText, { breaks: true, gfm: true });
        document.getElementById("preview").innerHTML = DOMPurify.sanitize(html);
    }

    //Reset button
    function clearText() {
        document.getElementById("markdown").value = "";
        document.getElementById("preview").innerHTML = "";
    }

    document.getElementById("markdown").addEventListener("input", updatePreview);
    document.getElementById("reset-btn").addEventListener("click", clearText);
});
