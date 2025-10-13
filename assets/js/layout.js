// script for faq.html -- follows the same template as index but extensible if I want to add more things
import { createHeaderLeft, createHeaderRight, resizeObserver } from "./components.js";


createHeaderLeft();
// I don't like this but I need one resize on page load
// check which media query is being used in resizeObserver
let contentNode = document.querySelector("article.post.h-entry");
resizeObserver(contentNode);
addEventListener("resize", (event) => {
    
        if(!contentNode == null){
            resizeObserver(document.querySelector("div.content-faq"));
            return;
        }
        resizeObserver(contentNode);    
    
}); 
addEventListener("load", (event) => {
    
        if(!contentNode == null){
            resizeObserver(document.querySelector("div.content-faq"));
            return;
        }
        resizeObserver(contentNode);    
    
});
createHeaderRight();