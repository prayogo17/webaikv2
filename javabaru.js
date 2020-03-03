  var jml_artikel = 4;

  function baca_juga(e, a) {

      $("#read-more").append("<ul></ul>"), $("#read-more").css("display", "block");
      for (var r = 0; r < a.length; ++r) {
          var n = e.feed.entry[a[r]].link[4].href,
              l = e.feed.entry[a[r]].link[4].title;
          if ($("#read-more ul").append('<li><a href="' + n + '">' + l + "</a></li>"), jml_artikel-1 == r) break
      }
  }

  function buat_index(e) {
      for (var a = e.feed.entry.length, r = new Array, n = 0; n < jml_artikel; ++n) {
          var l = Math.floor(Math.random() * a + 0); - 1 === r.indexOf(l) ? r.push(l) : -1 !== r.indexOf(l) && --n
      }
      baca_juga(e, r)
  }
