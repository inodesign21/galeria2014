// Iniciando galeria
blueimp.Gallery(
    document.getElementById('links'), {
        onslide: function (index, slide) {
            var text = this.list[index].getAttribute('data-description'),
                node = this.container.find('.description');
            node.empty();
            if (text) {
                node[0].appendChild(document.createTextNode(text));
            }
        }
});

document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event, onslide: function (index, slide) {
            var text = this.list[index].getAttribute('data-description'),
                node = this.container.find('.description');
            node.empty();
            if (text) {
                node[0].appendChild(document.createTextNode(text));
            }
        } },
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};

// My app

//Img responsive class of bootstrap
$('#links img').addClass('img-responsive');

//scroll to top
$(function() {
    $("#toTop").scrollToTop(10000);
});