// var $parent = $('.singularity-container'),
//      $starCount = 200,
//      $parentWidth = $parent.width(),
//      $parentHeight = $parent.height();
     
  
//   for (i=0; i<$starCount; i++){
//     var $randPosX = Math.floor((Math.random()*$parentWidth)),
//         $randPosY = Math.floor((Math.random()*$parentHeight));
//     // console.log($randPosY);
//     $parent.append('<div class="star star--position-'+i+'"></div>');
    
//     $('.star--position-'+i).each(function(){
//     $(this).css({
//       left: $randPosX,
//       top: $randPosY
//     });
//       $(this).delay(i*250);
//       $(this).animate({
//         left: 50 +'%',
//         top: 50 +'%'
//       }, 500);
//   });
// }




// $(document).ready(function() {
//     var $parent = $('.singularity-container'),
//         $starCount = 200,
//         $parentWidth = $parent.width(),
//         $parentHeight = $parent.height();
     
//     for (var i = 0; i < $starCount; i++) {
//         (function(i) {
//             var $randPosX = Math.floor((Math.random() * $parentWidth)),
//                 $randPosY = Math.floor((Math.random() * $parentHeight));
                
//             $parent.append('<div class="star star--position-' + i + '"></div>');
            
//             var $star = $('.star--position-' + i);
//             $star.css({
//                 left: $randPosX,
//                 top: $randPosY
//             });
            
//             $star.delay(i * 250).animate({
//                 left: '50%',
//                 top: '50%'
//             }, 500);
//         })(i);
//     }
// });









$(document).ready(function() {
    var $parent = $('.singularity-container'),
        $starCount = 200,
        $parentWidth = $parent.width(),
        $parentHeight = $parent.height();
     
    for (var i = 0; i < $starCount; i++) {
        (function(i) {
            var $randPosX = Math.floor((Math.random() * $parentWidth)),
                $randPosY = Math.floor((Math.random() * $parentHeight));
                
            $parent.append('<div class="star star--position-' + i + '"></div>');
            
            var $star = $('.star--position-' + i);
            $star.css({
                left: $randPosX,
                top: $randPosY
            });
            
            $star.delay(i * 50).animate({
                left: '50%',
                top: '50%',
                opacity: 0
            }, 2000);
        })(i);
    }
});
