(function(){

    function FireAction(a) {
        
        if(a) {
            for (let i = 0; i < FireWorks.length; i++) {
                FireWorks[i].style.opacity = '1';
                FireWorks[i].style.transition = `0.75s cubic-bezier(0,.75,.5,1) ${i/2}s`;
            }
        }else {
            for (let i = 0; i < FireWorks.length; i++) {
                FireWorks[i].style.transition = `0s 0s`;
                FireWorks[i].style.opacity = '0';
            }
        }
    }

    const textElems = document.querySelectorAll('.text-item');
    const graphicElems = document.querySelectorAll('.graphic-item');
    const FireWorks = document.querySelectorAll('.fire-scene');
    let currentItem = graphicElems[0];
    let ioIndex;

    const io = new IntersectionObserver(function(entries, observer){
        ioIndex = entries[0].target.dataset.index * 1;
        // 관찰대상이 눈에 보일 때 실행
    })

        
    // }

    for (let i = 0; i < textElems.length; i++) {
        io.observe(textElems[i]);
        // 관찰대상으로 등록
        textElems[i].dataset.index = i;
        graphicElems[i].dataset.index = i;
    }

    function activated(action) {
        currentItem.classList.add('visible');
        if (action) {
            FireAction(true);
        }
    }

    function inactivated(action) {
        currentItem.classList.remove('visible');
        if (action) {
            FireAction(false);
        }
    }

    window.addEventListener('scroll', function(){
        let textitem;
        let boundingRect;

        for (let i = ioIndex - 1; i < ioIndex + 2; i++){
            textitem = textElems[i];
            if (!textitem) continue;
            boundingRect = textitem.getBoundingClientRect();
            
            if (boundingRect.top > window.innerHeight * 0.1 && 
                boundingRect.top < window.innerHeight * 0.85) {
                    inactivated(currentItem.dataset.action);
                    currentItem = graphicElems[textitem.dataset.index];
                    activated(currentItem.dataset.action);
                }

        }
    })

    window.addEventListener('load', function(){
        setTimeout(function(){
            scrollTo(0,0)
        },50)
    })

    activated();

    window.onload = function(){
        const loadingSection = document.querySelector(".loading-section");
        const bodyLoading = document.querySelector(".on-loading");
        loadingSection.style.display = "none";
        bodyLoading.classList.remove("on-loading");
    }


})();