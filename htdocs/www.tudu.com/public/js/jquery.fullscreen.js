(function(d){var b="";var c={selector:"img",fillOnResize:true,defaultCss:true};d.fn.fullscreenBackground=function(e){if(e){d.extend(c,e)}this.each(function(){b=this;if(c.defaultCss==true){d("html,body").css({width:"100%",height:"100%"});d(b).css({height:"100%",width:"100%",overflow:"hidden",position:"fixed",top:"0px",left:"0px",zIndex:1})}if(c.fillOnResize==true){d(window).resize(function(){a(c.selector,b)})}a(c.selector,b)})};function a(f,e){var h=d(window).height();var g=d(window).width();d(f,e).each(function(){var i=d(this).attr("height");var l=d(this).attr("width");var n=g;var j=(g/l)*i;var k=((j-h)/2)*-1;var m=0;if(j<h){var n=(h/i)*l;var j=h;var k=0;var m=((n-g)/2)*-1}d(this).css({height:j+"px",width:n+"px",marginLeft:m+"px",marginTop:k+"px",display:"block"})})}})(jQuery);