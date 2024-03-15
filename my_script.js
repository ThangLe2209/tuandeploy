$(document).ready(function() {
   setTimeout(function(){
     $("#loader-wrapper").fadeOut(500);
   },400);
});
//fixmenu 
$(document).ready(function() {
    $(window).scroll(function() {
        if($(window).scrollTop() > 160) {
            $('#menu').addClass('fixmenu');
            //$('#header').css({"animation":"slide-down 0.5s"});
        } else {
            $('#menu').removeClass('fixmenu');
            //$('#header').css({"animation":"slide-up 0.5s"});
        }
    });  
});
$(document).ready(function() {
    $('body').append('<div id="gotop"><i class="fa fa-chevron-up"></i></div>');
    $(window).scroll(function() {
        if($(window).scrollTop() > 100) {
            $('#gotop').css({right:'15px'});
        } else {
            $('#gotop').css({right:'-55px'});
        }
    });
    $('#gotop').click(function() {
        $('html, body').animate({scrollTop:0},500);
    });
});
// hover-menu
$(document).ready(function() { 
	$("#menu ul li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(300); 
		},function(){ 
		$(this).find('ul:first').css({visibility: "hidden"});
		}); 
	$("#menu ul li").hover(function(){
			$(this).find('>a').addClass('active2'); 
		},function(){ 
			$(this).find('>a').removeClass('active2'); 
		}); 
});  
///menudanhmuc
$(document).ready(function() { 
	$("#danhmuc ul li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(300); 
		},function(){ 
		$(this).find('ul:first').css({visibility: "hidden"});
		}); 
	
});

////mobi
function doEnter2(evt){
  var key;
  if(evt.keyCode == 13 || evt.which == 13){
    onSearch2(evt);
  }
}
function onSearch2(evt) {     
  var keyword2 = document.getElementById("keyword2").value;
  if(keyword2=='' || keyword2==nhaptukhoatimkiem)
  {
    alert(nhaptukhoatimkiem);
  }
  else{
    location.href = "tim-kiem&keywords="+keyword2;
    loadPage(document.location);      
  }
} 
///dektop
function doEnter1(evt){
  var key;
  if(evt.keyCode == 13 || evt.which == 13){
    onSearch1(evt);
  }
}
function onSearch1(evt) {     
  var keyword1 = document.getElementById("keyword1").value;
  if(keyword1=='' || keyword1==nhaptukhoatimkiem)
  {
    alert(nhaptukhoatimkiem);
  }
  else{
    location.href = "tim-kiem&keywords="+keyword1;
    loadPage(document.location);      
  }
} 

$(document).ready(function($) {
  $('.nut_tim').click(function(){
    onSearch1();
  });
});
//masory-hinhanh
if(source=='album'){
    $(document).ready(function($) {
       !(function(){
            $('#grid').photobox('a', { thumbs:true, loop:false });
        })();
    }); 
}

////////menu

$(function() {
    $('.hien_menu').click(function(){
      $('nav#menu_mobi').css({height: "auto"});
    });
    $('nav#menu_mobi').mmenu({
      extensions  : [ 'effect-slide-menu', 'pageshadow' ],
      searchfield : true,
      counters  : true,
      navbar    : {
        title   : 'Menu'
      },
      navbars   : [
        {
          position  : 'top',
          content   : [ 'searchfield' ]
        }, {
          position  : 'top',
          content   : [
            'prev',
            'title',
            'close'
          ]
        }, {
          position  : 'bottom',
          content   : [
            '<a>Online :'+tongxem+'</a>',
            '<a>Tổng : '+tong+'</a>'
          ]
        }
      ]
    });
  });
//
///chon video
$(document).ready(function(){
    $('.slick_video a').click(function(){
        var $id = $(this).attr('href');
        if($id!=''){
          $(".content_video iframe").attr("src",$id);
      }
        return false;
    });
}); 
if(source=='product'){
  $(document).ready(function(e) {
      $('#tabs a').click(function(e) {
          var id = $(this).attr('href');
          $('#tabs li').removeClass('active');
          $(this).parent().addClass('active');
          $('#tab-2').css('position','relative');
          $('#tab-2').css('opacity','1');
          $('#tab-1,#tab-2,#tab-3,#tab-4,#tab-5,#tab-6,#tab-7').stop().slideUp(500);
          $('#'+id).stop().slideDown(500);
          return false;
      });
  });
}
function isEmpty(el,text){
    //var el = document.getElementById(id);
    var str = el.value;
    
    if (str != "")
        while (str.charAt(0) == " ")
            str = str.substr(1, str.length);
    
    //return str == "" ? true : false;
    if(str != "") return false;
    if(typeof(text) != 'undefined') alert(text);
    el.value = '';
    el.focus();
    return true;
}

function isNumber(el, text){
    //var el = document.getElementById(id);
    var str = "0123456789";
    for(var j=0; j < el.val().length; j++){
        if(str.indexOf(el.val().charAt(j))==-1){
            if( typeof(text) != 'undefined' )
                alert(text);
            el.val() = '';
            el.focus(); 
            return false;
        }
    }
    return true;
}
function isPhone(str,text){
  if((str.length==10 && (str.substr(0,2)==08)) || (str.length==10 && (str.substr(0,2)==09)) || (str.length==10 && (str.substr(0,2)==07)) || (str.length==10 && (str.substr(0,2)==05)) || (str.length==10 && (str.substr(0,2)==03)))
    return true;
  if(typeof(text)!='undefined') alert(text);
}

function check_email(email)
{
    emailRegExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.([a-z]){2,4})$/;
    return emailRegExp.test(email);
}

function isEmail(el, text){
    //var el = document.getElementById(id);
    emailRegExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.([a-z]){2,4})$/;
    if(!emailRegExp.test(el.value)){
        if(typeof(text)!='undefined')   alert(text);
        el.focus();
        return false;
    }
    return true;
}

function compare(value_1, value_2){
    if(value_1 < value_2)
        return -1;
    if(value_1 > value_2)
        return 1;
    return 0; 
}
///kiemtra lienhe

if(com=='lien-he'){
	function js_submit12(){
		if(isEmpty(document.getElementById('ten'),xinnhaphoten)){
			document.getElementById('ten').focus();
			return false;
		}
		if(isEmpty(document.getElementById('diachi'), xinnhapdiachi)){
			document.getElementById('diachi').focus();
			return false;
		}
		
		if(isEmpty(document.getElementById('dienthoai'), xinnhapdienthoai)){
			document.getElementById('dienthoai').focus();
			return false;
		}
		
		if(!isPhone(($('#dienthoai').val()), checkdienthoai)){
			document.getElementById('dienthoai').focus();
			return false;
		}
		
		if(!check_email(document.frm.email.value)){
			alert(checkemail);
			document.frm.email.focus();
			return false;
		}
		
		if(isEmpty(document.getElementById('noidung'), xinnhapnoidung)){
			document.getElementById('noidung').focus();
			return false;
		}
		
		document.frm.submit();
	}
}

$(document).ready(function(){
    $('#chon_video').change(function(){
        $id = $(this).val();
        if($id!=''){
        $(".box_video_list").load("ajax/ajax_video.php?id=" + $id);
       
    }
        return false;
    });
});

$(document).ready(function(){
  if ($('.a_active').length > 0) {
    var id = $('.a_active').attr('data-id');

      $.ajax
      ({
        type: "POST",
        url: "ajax/load_nb.php",
        data: {id:id},
        success: function(msg)
        {
            $('#load_sp1').html(msg);         
        }
      });
    }

    $(".title_dp").click(function(){

      $('.title_dp').removeClass('a_active');
      $(this).addClass('a_active');
      var id= $(this).data('id');
      $.ajax
      ({
        type: "POST",
        url: "ajax/load_nb.php",
        data: {id:id},
        success: function(msg)
        {
            $('#load_sp1').html(msg);         
        }
      });
    })

});


$(document).ready(function(){
    $('#chon_video').change(function(){
        $id = $(this).val();
        if($id!=''){
        $(".box_video_list").load("ajax/ajax_video.php?id=" + $id);
       
    }
        return false;
    });
});