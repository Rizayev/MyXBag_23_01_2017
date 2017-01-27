/**
 * Created by elsevar on 27.01.17.
 */

$(document).ready(function () {
//    POPOVER
    $('a[rel=popover]').popover({
        html: true,
        trigger: 'hover',
        placement: 'top',
        content: function () {
            return '<img class="img-responsive" width="250" src="' + $(this).data('img') + '" />';
        }
    });
//    POPOVER

//    YOUTUBE MODAL
    autoPlayYouTubeModal();

    //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
    function autoPlayYouTubeModal() {
        var trigger = $("body").find('[data-toggle="modal"]');
        trigger.click(function () {
            var theModal = $(this).data("target"),
                videoSRC = $(this).attr("data-theVideo"),
                videoSRCauto = videoSRC + "?autoplay=1";
            $(theModal + ' iframe').attr('src', videoSRCauto);
            $(theModal + ' button.close, .modal').click(function () {
                $(theModal + ' iframe').attr('src', videoSRC);
            });
        });
    }

//    YOUTUBE MODAL

//    gallery
    $('.gal').lightGallery({
        thumbnail: true,
        preload: 1,
        download: false
    });
//    gallery

//change size
    $('.block-2 .radio-button input').change(function () {
        var size = $(this).val();
        var thisparent = $(this).parents('.block-2');
        var removeActvie = thisparent.find('.size-place__item').removeClass('active');

        function addActive(number) {
            removeActvie;
            thisparent.find('.size-place__item').eq(number).addClass('active');
        }

        function changePrice(price) {
            thisparent.find('.price-item strong').text(price);
        }

        function changeWeight(weight) {
            thisparent.find('.weight span').text(weight);
        }

        function changeVolume(volume) {
            thisparent.find('.volume span').text(volume);
        }

        function changeSizes(length, depth, height) {
            thisparent.find('.dimensions span').text(length + 'x' + depth + 'x' + height);
        }

        function changeImgPathSize(size) {
            $('.col-1 .img img').each(function(){
                var imgsize = $(this).attr('src');
                var str   = imgsize;
                var regex = /\/\w{1,2}\//g;
                str = str.replace(regex, size);
                $(this).attr('src', str);

            });
        }

        // var colors = {
        //     vinous: { bigImg : ['1.jpg','2.jpg','3.jpg','4.jpg'], smallImg: ['1.jpg','2.jpg','3.jpg','4.jpg'] },
            //     yellow: { bigImg : ['1.jpg','2.jpg','3.jpg','4.jpg'], smallImg: ['1.jpg','2.jpg','3.jpg','4.jpg'] },
            //     green: { bigImg : ['1.jpg','2.jpg','3.jpg','4.jpg'], smallImg: ['1.jpg','2.jpg','3.jpg','4.jpg'] },
            //     gold: { bigImg : ['1.jpg','2.jpg','3.jpg','4.jpg'], smallImg: ['1.jpg','2.jpg','3.jpg','4.jpg'] },
            //     brown: { bigImg : ['1.jpg','2.jpg','3.jpg','4.jpg'], smallImg: ['1.jpg','2.jpg','3.jpg','4.jpg'] },
            //     coffee: { bigImg : ['1.jpg','2.jpg','3.jpg','4.jpg'], smallImg: ['1.jpg','2.jpg','3.jpg','4.jpg'] },
            //     red: { bigImg : ['1.jpg','2.jpg','3.jpg','4.jpg'], smallImg: ['1.jpg','2.jpg','3.jpg','4.jpg'] },
            //     orange: { bigImg : ['1.jpg','2.jpg','3.jpg','4.jpg'], smallImg: ['1.jpg','2.jpg','3.jpg','4.jpg'] },
            //     pink: { bigImg : ['1.jpg','2.jpg','3.jpg','4.jpg'], smallImg: ['1.jpg','2.jpg','3.jpg','4.jpg'] },
            //     silver: { bigImg : ['1.jpg','2.jpg','3.jpg','4.jpg'], smallImg: ['1.jpg','2.jpg','3.jpg','4.jpg'] },
            //     blue: { bigImg : ['1.jpg','2.jpg','3.jpg','4.jpg'], smallImg: ['1.jpg','2.jpg','3.jpg','4.jpg'] },
            //     darkBlue: { bigImg : ['1.jpg','2.jpg','3.jpg','4.jpg'], smallImg: ['1.jpg','2.jpg','3.jpg','4.jpg'] },
            //     purple: { bigImg : ['1.jpg','2.jpg','3.jpg','4.jpg'], smallImg: ['1.jpg','2.jpg','3.jpg','4.jpg'] },
            //     black: { bigImg : ['1.jpg','2.jpg','3.jpg','4.jpg'], smallImg: ['1.jpg','2.jpg','3.jpg','4.jpg'] },
            // }

            var budget = {
            sModel: {
                length: 38,
                depth: 22,
                height: 55,
                weight: 2.5,
                price: 2350,
                volume: 0.04,
            },
            sPlusModel: {
                length: 42,
                depth: 25,
                height: 61,
                weight: 2.6,
                price: 2650,
                volume: 0.06
            },
            mModel: {
                length: 44,
                depth: 25,
                height: 64,
                weight: 3.5,
                price: 2950,
                volume: 0.07
            },
            mPlusModel: {
                length: 49,
                depth: 28,
                height: 69,
                weight: 3.7,
                price: 3050,
                volume: 0.09
            },
            lModel: {
                length: 52,
                depth: 29,
                height: 73,
                weight: 3.8,
                price: 3150,
                volume: 0.11
            }
        };

        if (size == 'S') {
            addActive(0);
            changePrice(budget.sModel.price);
            changeWeight(budget.sModel.weight);
            changeVolume(budget.sModel.volume);
            changeSizes(budget.sModel.length, budget.sModel.depth, budget.sModel.height);
            changeImgPathSize("/s/");

        }
        if (size == 'SP') {
            addActive(1);
            changePrice(budget.sPlusModel.price);
            changeWeight(budget.sPlusModel.weight);
            changeVolume(budget.sPlusModel.volume);
            changeSizes(budget.sPlusModel.length, budget.sModel.depth, budget.sModel.height);
            changeImgPathSize("/sp/");
        }
        if (size == 'M') {
            addActive(2);
            changePrice(budget.mModel.price);
            changeWeight(budget.mModel.weight);
            changeVolume(budget.mModel.volume);
            changeSizes(budget.mModel.length, budget.sModel.depth, budget.sModel.height);
            changeImgPathSize("/m/");
        }
        if (size == 'MP') {
            addActive(3);
            changePrice(budget.mPlusModel.price);
            changeWeight(budget.mPlusModel.weight);
            changeVolume(budget.mPlusModel.volume);
            changeSizes(budget.mPlusModel.length, budget.sModel.depth, budget.sModel.height);
            changeImgPathSize("/mp/");
        }
        if (size == 'L') {
            addActive(4);
            changePrice(budget.lModel.price);
            changeWeight(budget.lModel.weight);
            changeVolume(budget.lModel.volume);
            changeSizes(budget.lModel.length, budget.sModel.depth, budget.sModel.height);
            changeImgPathSize("/l/");
        }
    });

    $('.block-2 .col-3 .color li').click(function () {
        var color = '';

        if( $(this).hasClass('color-yellow') ) { color = 'yellow'; }
        if( $(this).hasClass('color-green') ) { color = 'green'; }
        if( $(this).hasClass('color-gold') ) { color = 'gold'; }
        if( $(this).hasClass('color-brown') ) { color = 'brown'; }
        if( $(this).hasClass('color-coffee') ) { color = 'coffee'; }
        if( $(this).hasClass('color-red') ) { color = 'red'; }
        if( $(this).hasClass('color-orange') ) { color = 'orange'; }
        if( $(this).hasClass('color-pink') ) { color = 'pink'; }
        if( $(this).hasClass('color-silver') ) { color = 'silver'; }
        if( $(this).hasClass('color-blue') ) { color = 'blue'; }
        if( $(this).hasClass('color-darkBlue') ) { color = 'darkBlue'; }
        if( $(this).hasClass('color-purple') ) { color = 'purple'; }
        if( $(this).hasClass('color-black') ) { color = 'black'; }
        if( $(this).hasClass('color-vinous') ) { color = 'vinous'; }

        function changeSimg() {
            var imgsize = $('.block-2 .col-1 .item .img img').attr('src');
            var regex = /\/\w{1,2}\//g;
            var pathSize = regex.exec(imgsize);
            console.log( pathSize['0'] );
            for (var i = 0; i < 4; i++){
                $('.block-2').find('.col-1 .img img').eq(i).attr('src','img/bags/budget/' + color + pathSize[0]+'small/' + i +'.jpg');
            }

        }
        changeSimg();


    });
//change size

});

