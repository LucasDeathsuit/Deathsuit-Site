
export default function formatText(text) {
    text = text.replaceAll("<p>", "")
    text = text.replaceAll("</p>", "");
    return text;
}
