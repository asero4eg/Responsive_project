window.onload = function () {
    document.querySelector('#moreNews').onclick = ajaxGet;
}
var counter = 0;
const numerToDisplay = 6;

function ajaxGet() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            var mas = JSON.parse(request.response);
            for (i = 0; i < numerToDisplay; i++) {
                console.log(mas[counter].title, mas[counter].body, request.response);

                function createBlock(title, body) {

                    var block = document.createElement('div');
                    block.setAttribute('class', `news-block`);
                    block.innerHTML = `<div class="img-wrapper"><img class="block-img" src="https://loremflickr.com/320/240?random=${counter}" alt="">
                    </div>
                    <div class="block-text">
                        <p class="text-head">${title}</p>
                        <p class="text-main">${body}</p>
                        <div class="read-more icon-paragraph-left"><a href="#">Read more</a></div>
                    </div>`;
                    document.getElementById('news-block-wrapper').appendChild(block);
                    counter++;

                };
                createBlock(mas[counter].title, mas[counter].body);
            };
        };
    };


};