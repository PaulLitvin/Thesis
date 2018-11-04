function tabs() {

    //Balcon tabs
    let tab = document.querySelectorAll('.glazing_block'),
        glazing = document.querySelector('.glazing'),
        tabContent = document.querySelectorAll('.glazing-tab');

    function hideTabContent(a) {
        for (let i = a; i < tab.length; i++) {
            tab[i].children[1].classList.remove('active');
            tabContent[i].style.display = 'none';
        }
    }

    hideTabContent(1);

    function tabActive(i) {
        if (!tab[i].children[1].classList.contains('active')) {
            tab[i].children[1].classList.add('active');
            tabContent[i].style.display = 'block';
        }

    }

    glazing.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('glazing_block') || target.parentNode.classList.contains('glazing_block')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i] || target == tab[i].children[0] || target == tab[i].children[1]) {
                    hideTabContent(0);
                    tabActive(i);
                    break;
                }
            }
        }
    });

    //Balcon decoration tabs
    let tabDecoration = document.querySelectorAll('.decoration_item'),
        decoration = document.querySelector('.decoration'),
        decorationContentItem = document.querySelectorAll('.decoration_content_item');
    function hideTabDecorationContent(a) {
        for (let i = a; i < tabDecoration.length ; i++) {
            tabDecoration[i].children[0].classList.remove('after_click');
            decorationContentItem[i].style.display = 'none';
        }
    }
    hideTabDecorationContent(1);
    
    function tabDecorationActive(i) {
        if (!tabDecoration[i].children[0].classList.contains('after_click')) {
            tabDecoration[i].children[0].classList.add('after_click');
            decorationContentItem[i].style.display = 'block';
        }

    }
    
    decoration.addEventListener('click', function (event) {
        let target = event.target;
        if (target.parentNode.classList.contains('decoration_item') || target.parentNode.classList.contains('no_click')) {
            for (let i = 0; i < tabDecoration.length; i++) {
                if (target == tabDecoration[i].children[0] || target == tabDecoration[i].children[0].children[0]) {
                    hideTabDecorationContent(0);
                    tabDecorationActive(i);
                    break;
                }
            }
        }
    });
}

module.exports = tabs;