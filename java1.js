var data_artikel,aktif,cari=!1,daftar_isi=!1,banner_data=[],kategori=new Array;function awal(a){data_artikel=a,banner(a),buat_kategori(a),artikel_samping(a),baca_juga(a)}function besarkan(a,e){return a.replace("s72-c","s"+e)}function banner(a){a.feed.entry.length;for(var e=0;e<5;++e){var t=Math.floor(87*Math.random()+0);-1==banner_data.indexOf(t)?(banner_data.push(t),0==e?($("#gambar-besar").css("background-image","url("+besarkan(a.feed.entry[t].media$thumbnail.url,500)+")"),$("#banner-besar h3").text(a.feed.entry[t].title.$t),$("#banner-besar").parent().attr("href",a.feed.entry[t].link[4].href)):($("#banner"+e+" .gambar-kecil").css("background-image","url("+besarkan(a.feed.entry[t].media$thumbnail.url,300)+")"),$("#banner"+e).attr("href",a.feed.entry[t].link[4].href),$("#banner"+e+" h3").text(a.feed.entry[t].title.$t))):--e}}function artikel_samping(a){for(var e=a.feed.entry.length,t=new Array,r=0;r<10;++r){var n=Math.floor(Math.random()*e+0);-1===t.indexOf(n)?t.push(n):-1!==t.indexOf(n)&&--r}for(var i=0;i<t.length;++i){var s=a.feed.entry[t[i]].link[4].href,o=a.feed.entry[t[i]].link[4].title,l=a.feed.entry[t[i]].media$thumbnail.url;$("#daftar-artikel-samping").append('<li class="list-artikel"> <a href="'+s+'"><div class="gambar-list-artikel" style="background-image: url('+l+')"></div><h3 class="judul-list-artikel">'+o+"</h3></a></li>")}}function buat_kategori(a){for(var e=a.feed.entry.length,t=a.feed.category.length,r=0;r<t;++r){for(var n=[],i=0;i<e;++i)try{a.feed.entry[i].category[0].term===a.feed.category[r].term&&n.push(i)}catch(a){}kategori[a.feed.category[r].term]=n}}function tutupcari(){cari=!1,$(window).width()<=1030?$("#cari").hide():($("#cari").show(),$("#penutup").hide(),$("#cari").css({transform:"translateY(-130px)"}))}function bukacari(){cari=!0,$(window).width()<=1030?($("#cari").show(),$("#cari input").focus()):($("#cari").show(),$("#penutup").show(),$("#cari input").focus(),$("#cari").css({transform:"translateY(56px)"}))}function tampilkan_preview(a){$("#preview-konten").empty();for(var e=0;e<5;++e){var t=data_artikel.feed.entry[kategori[a.toLowerCase()][e]].link[4].href,r=besarkan(data_artikel.feed.entry[kategori[a.toLowerCase()][e]].media$thumbnail.url,300),n=data_artikel.feed.entry[kategori[a.toLowerCase()][e]].title.$t;$("#preview-konten").append('<a href="'+t+'"> <div style="background-image: url('+r+');" class="preview-artikel"><div class="preview-gambar"></div><h2>'+n+"</h2></div></a>")}}function index_donasi(a){var e=["plastik","sampah","lingkungan","apd","medis","corona","musholla","air","kebakaran","asap","guru","gaza","muhammad","bencana","banjir","gempa","tsunami","zakat","masjid","pesantren","palestina","mualaf","muslim","islam","dhuafa","suriah","syam","pasien","rumah sakit","qur'an","al-qur'an","al qur'an","quran","sumur"],t=0;a:for(var r=0;r<30;++r)for(var n=Math.floor(Math.random()*a.length),i=a[n].judul.toLowerCase(),s=0;s<e.length;++s)if(-1!=i.search(e[s])){t=n;break a}return t}function baca_juga(a){for(var e=$(".label-name").first().text().toLowerCase(),t=kategori[e].length,r=new Array,n=0;n<5;++n){var i=Math.floor(Math.random()*t+0);-1===r.indexOf(i)?r.push(i):-1!==r.indexOf(i)&&--n}$("#read-more").append("<ul></ul>");for(var s=0;s<r.length;++s){var o=a.feed.entry[kategori[e][r[s]]].link[4].href,l=a.feed.entry[kategori[e][r[s]]].link[4].title;if($("#read-more ul").append('<li><a  href="'+o+'">'+l+"</a></li>"),4==s)break}$("#read-more").css("display","block")}function formatRupiah(a,e){var t=a.replace(/[^,\d]/g,"").toString().split(","),r=t[0].length%3,n=t[0].substr(0,r),i=t[0].substr(r).match(/\d{3}/gi);return i&&(separator=r?".":"",n+=separator+i.join(".")),n=null!=t[1]?n+","+t[1]:n,null==e?n:n?"Rp."+n:""}$(document).on("click",".icon-search, .icon-close",function(){cari?tutupcari():bukacari()}),$(document).on("click","#penutup",function(){tutupcari()}),$(document).ready(function(){$(window).width()>=1250?$("#pulsa").append('<div style="height:100px;"></div>'):$("#pulsa").append('<a href="https://api.whatsapp.com/send?phone=6281334555130&text=Haloo,%20saya%20mau%20beli%20voucher%20smartfren%2060GB%20?" target="_blank"><img  src="https://cdn.jsdelivr.net/gh/prayogo17/hosting/smart.png"/></a>'),$("#daftar-isi").prepend("<div class='daftar-judul'><span>ISI TULISAN</span><button>Tampilkan</button></div>"),$("#daftar-isi").css("display","table"),$(document).on("click","#daftar-isi button",function(){daftar_isi?(daftar_isi=!1,$("#daftar-isi ul").hide(),$("#daftar-isi button").text("Tampilkan")):(daftar_isi=!0,$("#daftar-isi ul").show(),$("#daftar-isi button").text("Tutup"))}),$(".navbar-nav li").hover(function(){aktif=$(this),$(".navlist-active").removeClass("navlist-active"),tampilkan_preview($(this).text()),aktif.addClass("navlist-active"),$("#preview-konten").css({top:"400px"})},function(){$(".navlist-active").removeClass("navlist-active"),$("#preview-konten").css({top:"0px"})}),$("#preview-konten").hover(function(){aktif.addClass("navlist-active"),$("#preview-konten").css({top:"400px"})},function(){$(".navlist-active").removeClass("navlist-active"),$("#preview-konten").css({top:"0px"})})}),$(document).ready(function(){setInterval(function(){$("#daftar-artikel").height()>$("#sidebar").height()&&$("#sidebar").css("height",$("#daftar-artikel").height()+"px")},4e3)}),$(document).ready(function(){$.ajax({method:"GET",url:"https://api1.nugrohoprayogo.com",dataType:"json"}).done(function(a){var e=index_donasi(a);$(".donasi a").attr("href",a[e].url),$(".gambar-donasi").css("background-image","url("+a[e].gambar+")"),$(".judul-donasi").text(a[e].judul),$(".penyelenggara").text(a[e].penyelenggara),$(".penyelenggara-icon").css("background-image","url("+a[e].label_gambar+")"),"0"==a[e].sisa_hari?$(".hari").text("Tidak di tentukan"):$(".hari").text(a[e].sisa_hari+" hari lagi"),"2500000000000"===a[e].target_donasi?$(".terkumpul").html("<b>"+formatRupiah(a[e].donasi_sekarang)+"</b>"):$(".terkumpul").html("<b>"+formatRupiah(a[e].donasi_sekarang,!0)+"</b> dari target "+formatRupiah(a[e].target_donasi,!0)),$(".wrap-donasi").show()})});
