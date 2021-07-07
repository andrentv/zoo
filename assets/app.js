/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

import $ from 'jquery';
/*
Get click and show likes
*/

var $container = $('.like-dislike');
$container.find('a').on('click',function(e){
    console.log('Click detectado');
    e.preventDefault();
    var $link = $(e.currentTarget);
    console.log($link);
    console.log($link.data('like'));

    $.ajax({
        url: '/messages/12/like/'+$link.data('like'),
        method: 'POST'
    }).then(function (response) {
    console.log(response.likes);
    document.getElementById('total-likes').innerHTML = response.likes;
    
    });
});
