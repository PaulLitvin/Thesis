function gallery() {
    let worksImg = document.querySelectorAll('.works-img'),
        img = document.createElement('img');
        gallaryBlock = document.createElement('div');
        gallaryBlock.classList.add('gallery');
        document.body.appendChild(gallaryBlock);

    worksImg.forEach((element) => {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            imgSetAttributes(event);
            showImg();
        });
    });

    function imgSetAttributes(event) {
        img.classList.add('gallery-img');
        img.setAttribute('src', event.target.parentNode.attributes[0].value);

    }

    function showImg() {
        gallaryBlock.appendChild(img);
        gallaryBlock.style.display = 'block';
    }

    gallaryBlock.addEventListener('click', function (event) {
        if (!event.target.classList.contains('gallery-img')) {
            gallaryBlock.style.display = 'none';
        }
    });
}

module.exports = gallery;