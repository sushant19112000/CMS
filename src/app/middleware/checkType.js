
export const checkType=(url)=>{
    const parts = url.split("-");
    const lastWord = parts[parts.length - 1];
    const secondLastWord = parts[parts.length - 2];
    if (lastWord === "lp" || secondLastWord === "landing") {
        return "landing-page";
    } else if (lastWord === "dp" || lastWord=="download" ||  secondLastWord=="download") {
        return "download-page"
    } else if (lastWord == "mailer") {
        return "mailer";
    } else {
        return "unknown";
    }   
}