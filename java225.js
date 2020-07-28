var cari = false;
var daftar_isi = false;
var data_artikel;
var banner_data = [];
var kategori = new Array();
var aktif;
let img = [];

function awal(data) {
  data_artikel = data;
  banner(data);
  buat_kategori(data);
  artikel_samping(data);
  baca_juga(data);

}

$(document).ready(function() {

  donasi();
  iklan_manual();
  tinggi_sedebar();
  preview_header();
  daftar_isi2();
});

//init jquery function
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom >
    viewportTop &&
    elementTop <
    viewportBottom;
};






function lazy_load() {

  
  $('.baca-artikel img').each(function(i, obj) {


    let check1 = $(obj).attr('src');
    let check2 = $(obj).parent().attr('href');

    if (check1 !== undefined && check2 !== undefined) {

//       $(obj).parent().addClass('shimmer-container');
//       $(obj).parent().append("<div class='shimmer'/>");
//       $(obj).parent().find('.shimmer').click(function(e){
//   e.preventDefault();
// });
      img.push(obj);

      let image = $(obj).attr('src');
      image = image.replace('/s640/', '/s40/');
      image = image.replace('/s400/', '/s40/');
      image = image.replace('/s200/', '/s40/');
      image = image.replace('/s320/', '/s40/');

      $(obj).attr('data-src', $(obj).attr('src'));

      $(obj).attr('src', image);

    }

  });
  
  
    $(window).scroll(function(event) {
if(img.length!==0){
    img.forEach(function(item, i) {

      if ($(item).isInViewport()) {

//         $(item).on('load', function(status) {
//           $(item).parent().find('.shimmer').remove();
//         });
        $(item).attr('src', $(item).attr('data-src'));
        $(item).attr('data-src','');
        img.splice(i, 1);
      }
    
    });
}else{
$(window).off();
}

  });
}








function besarkan(gambar, ukuran) {
  return gambar.replace('s72-c', "s" + ukuran);
}


function banner(data) {
  var banyak_artikel = data.feed.entry.length;

  for (var t = 0; t < 5; ++t) {
    var e = Math.floor((Math.random() * 87) + 0);
    if (banner_data.indexOf(e) == -1) {
      banner_data.push(e);
      if (t == 0) {
        $('#gambar-besar').css('background-image', 'url(' + besarkan(data.feed.entry[e].media$thumbnail.url, 500) + ')');
        $('#banner-besar h3').text(data.feed.entry[e].title.$t);
        $('#banner-besar').parent().attr('href', data.feed.entry[e].link[4].href);
      } else {
        $('#banner' + t + ' .gambar-kecil').css('background-image', 'url(' + besarkan(data.feed.entry[e].media$thumbnail.url, 300) + ')');
        $('#banner' + t).attr('href', data.feed.entry[e].link[4].href);
        $('#banner' + t + ' h3').text(data.feed.entry[e].title.$t);
      }
    } else {
      --t;
    }
  }

}

function artikel_samping(data) {
  var banyak_artikel = data.feed.entry.length;
  var jumlah_artikel = 10;
  var daftar_index_artikel = new Array();

  for (var w = 0; w < jumlah_artikel; ++w) {
    var angka_random = Math.floor((Math.random() * banyak_artikel) + 0);

    if (daftar_index_artikel.indexOf(angka_random) === -1) {
      daftar_index_artikel.push(angka_random);
    } else if (daftar_index_artikel.indexOf(angka_random) !== -1) {
      --w;
    }
  }


  for (var x = 0; x < daftar_index_artikel.length; ++x) {
    var link = data.feed.entry[daftar_index_artikel[x]].link[4].href;
    var judul = data.feed.entry[daftar_index_artikel[x]].link[4].title;
    var gambar = data.feed.entry[daftar_index_artikel[x]].media$thumbnail.url;

    $("#daftar-artikel-samping").append('<li class="list-artikel"> <a href="' + link + '"><div class="gambar-list-artikel" style="background-image: url(' + gambar + ')"></div><h3 class="judul-list-artikel">' + judul + '</h3></a></li>')
  }


}



function buat_kategori(data) {
  var banyak_artikel = data.feed.entry.length;
  var banyak_kategori = data.feed.category.length;
  for (var t = 0; t < banyak_kategori; ++t) {
    var temp = [];
    for (var u = 0; u < banyak_artikel; ++u) {
      try {
        if (data.feed.entry[u].category[0].term === data.feed.category[t].term) {
          temp.push(u);
          //         if(temp.length==5){
          //             break;
          //         }
        }
      } catch (error) {

      }



    }
    kategori[data.feed.category[t].term] = temp;
  }
}



function tutupcari() {
  cari = false;
  if ($(window).width() <= 1030) {
    $('#cari').hide();
  } else {
    $('#cari').show();
    $('#penutup').hide();

    $('#cari').css({
      "transform": "translateY(-130px)"
    });
  }
}


function bukacari() {
  cari = true;
  if ($(window).width() <= 1030) {
    $('#cari').show();
    $('#cari input').focus();
  } else {

    $('#cari').show();
    $('#penutup').show();
    $('#cari input').focus();
    $('#cari').css({
      "transform": "translateY(56px)"
    });
  }
}

$(document).on('click', '.icon-search, .icon-close', function() {

  if (cari) {
    tutupcari();
  } else {
    bukacari();
  }

});

$(document).on('click', '#penutup', function() {
  tutupcari();
});


function iklan_manual() {
  if ($(window).width() >= 1250) {
    $('#pulsa').append('<a href="http://bit.ly/2Qpc9Q3" target="_blank"><img  src="https://cdn.jsdelivr.net/gh/prayogo17/hosting/pulsa2-min.png"/></a>');
  } else {
    $('#pulsa').append('<a href="http://bit.ly/2Qpc9Q3" target="_blank"><img  src="https://cdn.jsdelivr.net/gh/prayogo17/hosting/pulsa3-min.png"/></a>');
  }
}




function daftar_isi2() {
  $("#daftar-isi").prepend("<div class='daftar-judul'><span>ISI TULISAN</span><button>Tampilkan</button></div>");
  $("#daftar-isi").css('display', 'table');
  $(document).on('click', '#daftar-isi button', function() {
    if (daftar_isi) {
      daftar_isi = false;
      $("#daftar-isi ul").hide();
      $("#daftar-isi button").text('Tampilkan');
    } else {
      daftar_isi = true;
      $("#daftar-isi ul").show();
      $("#daftar-isi button").text('Tutup');
    }

  });
}

function preview_header() {

  $('.navbar-nav li').hover(function() {
    aktif = $(this);
    $('.navlist-active').removeClass('navlist-active');
    tampilkan_preview($(this).text());
    aktif.addClass('navlist-active');
    $('#preview-konten').css({
      "top": '400px'
    });
  }, function() {

    $('.navlist-active').removeClass('navlist-active');
    $('#preview-konten').css({
      "top": '0px'
    });


  });

  $('#preview-konten').hover(function() {
    aktif.addClass('navlist-active');
    $('#preview-konten').css({
      "top": '400px'
    });

  }, function() {
    $('.navlist-active').removeClass('navlist-active');
    $('#preview-konten').css({
      "top": '0px'
    });


  });

}

function tampilkan_preview(kategori_text) {

  $('#preview-konten').empty();
  //  var counter=kategori[kategori_text.toLowerCase()].length;
  for (var g = 0; g < 5; ++g) {
    var url = data_artikel.feed.entry[kategori[kategori_text.toLowerCase()][g]].link[4].href;
    var gambar = besarkan(data_artikel.feed.entry[kategori[kategori_text.toLowerCase()][g]].media$thumbnail.url, 300);
    var judul = data_artikel.feed.entry[kategori[kategori_text.toLowerCase()][g]].title.$t;
    $('#preview-konten').append('<a href="' + url + '"> <div style="background-image: url(' + gambar + ');" class="preview-artikel"><div class="preview-gambar"></div><h2>' + judul + '</h2></div></a>');

  }


}


function tinggi_sedebar() {
    if ($('#daftar-artikel').height() > $('#sidebar').height()) {
      $('#sidebar').css('height', $('#daftar-artikel').height() + 'px');
    }
  
  setInterval(function(){
  if ($('#daftar-artikel').height() > $('#sidebar').height()) {
      $('#sidebar').css('height', $('#daftar-artikel').height() + 'px');
    }
  },5000);
}


function index_donasi(a) {
  var r = ["covid", "plastik", "sampah", "lingkungan", "apd", "medis", "corona", "musholla", "air", "kebakaran", "asap", "guru", "gaza", "muhammad", "bencana", "banjir", "gempa", "tsunami", "zakat", "masjid", "pesantren", "palestina", "mualaf", "muslim", "islam", "dhuafa", "suriah", "syam", "pasien", "rumah sakit", "qur'an", "al-qur'an", "al qur'an", "quran", "sumur"],
    e = 0;
  a: for (var n = 0; n < 30; ++n)
    for (var t = Math.floor(Math.random() * a.length), i = a[t].judul.toLowerCase(), s = 0; s < r.length; ++s)
      if (-1 != i.search(r[s])) {
        e = t;
        break a
      }
  return e
}

function baca_juga(data) {
  var kat = $(".label-name").first().text().toLowerCase();
  var banyak_artikel = kategori[kat].length;
  var max = 5;
  var data_index = new Array();

  for (var w = 0; w < max; ++w) {
    var angka_random = Math.floor((Math.random() * banyak_artikel) + 0);

    if (data_index.indexOf(angka_random) === -1) {
      data_index.push(angka_random);
    } else if (data_index.indexOf(angka_random) !== -1) {
      --w;
    }
  }

  $("#read-more").append('<ul></ul>');

  for (var x = 0; x < data_index.length; ++x) {
    var link = data.feed.entry[kategori[kat][data_index[x]]].link[4].href;
    var judul = data.feed.entry[kategori[kat][data_index[x]]].link[4].title;


    $("#read-more ul").append('<li><a  href="' + link + '">' + judul + '</a></li>');
    if (x == max - 1) {
      break;
    }
  }
  $("#read-more").css('display', 'block');
}

function formatRupiah(angka, prefix) {
  var number_string = angka.replace(/[^,\d]/g, '').toString(),
    split = number_string.split(','),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if (ribuan) {
    separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return prefix == undefined ? rupiah : (rupiah ? 'Rp.' + rupiah : '');
}



function donasi() {

  $.ajax({
    method: "GET",
    url: "https://api1.nugrohoprayogo.com",
    dataType: "json"
  }).done(function(a) {
    var r = index_donasi(a);
    $(".donasi a").attr("href", a[r].url);
    $(".gambar-donasi").css("background-image", "url(" + a[r].gambar + ")");
    $(".judul-donasi").text(a[r].judul);
    $(".penyelenggara").text(a[r].penyelenggara);
    $(".penyelenggara-icon").css("background-image", "url(" + a[r].label_gambar + ")");
    if (a[r].sisa_hari == "0") {
      $(".hari").text("Tidak di tentukan");
    } else {
      $(".hari").text(a[r].sisa_hari + " hari lagi")
    }
    if (a[r].target_donasi === "2500000000000") {
      $(".terkumpul").html("<b>" + formatRupiah(a[r].donasi_sekarang) + "</b>");
    } else {
      $(".terkumpul").html("<b>" + formatRupiah(a[r].donasi_sekarang, true) + "</b> dari target " + formatRupiah(a[r].target_donasi, true));
    }
    $(".wrap-donasi").show();
  })

}
