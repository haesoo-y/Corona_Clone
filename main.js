(function(){
    const textElems = document.querySelectorAll('.text-item');
    const graphicElems = document.querySelectorAll('.graphic-item');
    let currentItem = graphicElems[0];

    for (let i = 0; i < textElems.length; i++) {
        textElems[i].dataset.index = i;
        graphicElems[i].dataset.index = i;
    }

    function activated() {
        currentItem.classList.add('visible');

    }

    function inactivated() {
        currentItem.classList.remove('visible');
    }

    window.addEventListener('scroll', function(){
        let textitem;
        let boundingRect;

        for (let i = 0; i < textElems.length; i++){
            textitem = textElems[i];
            boundingRect = textitem.getBoundingClientRect();
            
            if (boundingRect.top > window.innerHeight * 0.1 && 
                boundingRect.top < window.innerHeight * 0.8) {
                    inactivated();
                    currentItem = graphicElems[textitem.dataset.index];
                    activated();
                }

        }
    })

    window.addEventListener('load', function(){
        setTimeout(function(){
            scrollTo(0,0)
        },100)
    })

    activated();


})();