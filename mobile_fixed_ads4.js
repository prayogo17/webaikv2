
var f = Math.floor(Math.random() * 100) + 1;

if(f>50){
$('body').append(`
<div class='sticky-ad' id='sticky-ad'>
<ins class="adsbygoogle"
     style="display:inline-block;width:200px;height:90px"
     data-ad-client="ca-pub-5983837792067765"
     data-ad-slot="8347907507"></ins>
<button aria-label='Close this ad' class='sticky-ad-close-button' onclick='document.getElementById(&apos;sticky-ad&apos;).style.display=&apos;none&apos;;'/>
</div>

`);

}else{
$('body').append(`
<div class='sticky-ad' id='sticky-ad'>
<ins class="adsbygoogle"
     style="display:inline-block;width:320px;height:100px"
     data-ad-client="ca-pub-5983837792067765"
     data-ad-slot="8471738503"></ins>
<button aria-label='Close this ad' class='sticky-ad-close-button' onclick='document.getElementById(&apos;sticky-ad&apos;).style.display=&apos;none&apos;;'/>
</div>
`);
}

$('body').append(`
<style>
.sticky-ad {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: visible;
  position: fixed;
  text-align: center;
  bottom: -150px;
  left: 0;
  width: 100%;
  z-index: 999;
  max-height: 104px;
  background-image: none;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 0;
  padding-top: 4px;
  transition: all .4s ease-in-out;
}
.sticky-ad-close-button {
  position: absolute;
  width: 28px;
  height: 28px;
  top: -28px;
  right: 0;
  background-image: url("data:image/svg+xml;charset=utf8,%3csvg width='13' height='13' viewBox='341 8 13 13' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%3e%3cpath style='fill:%234F4F4F' d='M354 9.31L352.69 8l-5.19 5.19L342.31 8 341 9.31l5.19 5.19-5.19 5.19 1.31 1.31 5.19-5.19 5.19 5.19 1.31-1.31-5.19-5.19z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e");
  background-size: 13px 13px;
  background-position: 9px;
  background-color: #fff;
  background-repeat: no-repeat;
  box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 12px 0 0 0;
  cursor: pointer;
}
.sticky-ad-close-button:before {
  position: absolute;
  content: "";
  top: -20px;
  right: 0;
  left: -20px;
  bottom: 0;
}
.sticky-ad-close-button, #sticky-ad {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:active,
:focus {
  outline: 0
}
</style>
`);

 (adsbygoogle = window.adsbygoogle || []).push({});
 var target = document.getElementById('sticky-ad');
window.addEventListener("scroll",function(){
 
  if(window.pageYOffset > 300){
   target.style.bottom = "0";

   
  }
},false);
