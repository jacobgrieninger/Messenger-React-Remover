function DeleteEmotes(){
    let emotes = document.getElementsByClassName("_aou");
    [].forEach.call(emotes, (element) => {element.remove()});
}
setInterval(DeleteEmotes,50);
function FixGaps(){
    let allElements = document.getElementsByTagName('div');
    [].forEach.call(allElements, (div) =>{
        if (div.classList.contains('_5z-5')){
            div.classList.remove('_5z-5');
        }
    } )
}
setInterval(FixGaps,50);