(function () {
  "use strict";
  /* CONFIG: replace with your Formspree endpoint */
  var FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

  var S = [
    {
      label: "01 — ON FINDING SOMEWHERE",
      title: "a somewhere.",
      sub: "An exploration of moments, memories, and the spaces between them. A small interactive experiment about the things that stay with us.",
      p: [
        "Perhaps somewhere isn't always a place.",
        "It can be a passing moment, a familiar feeling, or something you never expected to find.",
        "Sometimes, you don't even notice when it happens. You simply find yourself returning to it, again and again.",
        "And before you know it, somewhere begins to feel a little less like a place, and a little more like home.",
      ],
      btn: "Begin exploring →",
      alt: "A single point inside a faint circle.",
    },
    {
      label: "02 — ON FAMILIAR THINGS",
      title: "The First of Many",
      mem: ["A MEMORY OF BEGINNINGS"],
      p: [
        "Every story has a beginning, though not every beginning leaves a clear mark.",
        "Sometimes, it starts with something as ordinary as a game, a shared space, and a few people passing the time.",
        "The details may eventually become difficult to recall. The name of the game, the little things that happened, even the moment it all began.",
        "Yet somehow, the people who were there remain.",
      ],
      alt: "Scattered points, a few loosely connected.",
    },
    {
      label: "03 — THE THINGS WE REMEMBER",
      title: "The Long Way Around",
      mem: [
        "FISCH — A SHARED ADVENTURE",
        "AN UNREASONABLY DIFFICULT CATCH",
        "VOLUMES 01–09",
        "AFTER HARRY POTTER & WHITE CHICKS",
      ],
      p: [
        "Some things take longer than expected.",
        "A simple task becomes a lengthy detour. A little progress turns into another attempt, and somehow, the original goal becomes a much bigger undertaking than anticipated.",
        "Then, eventually, it happens. The last piece falls into place, and the whole ordeal becomes a story of its own.",
        "Other journeys require a different kind of patience.",
        "Nine volumes, countless chapters, and a story that unfolded one episode at a time.",
        "Not every journey needs to be rushed. Some are better experienced at their own pace.",
      ],
      alt: "Overlapping connected paths, a small harpoon emblem, and nine points in a row.",
    },
    {
      label: "04 — BETWEEN THE LINES",
      title: "Between the Lines",
      mem: ["A MOMENT OF TRUST"],
      p: [
        "Not every exchange is made up of stories, jokes, or things meant to pass the time.",
        "Some conversations take a little more care. Some thoughts are difficult to put into words, and some things are shared only when the moment feels right.",
        "Perhaps understanding isn't always about having something to say.",
        "Sometimes, it's simply about knowing when to listen.",
      ],
      alt: "Two separate paths drawing near each other, with space between.",
    },
    {
      label: "05 — A LITTLE BELIEF",
      title: "A Little Belief",
      mem: ["BEFORE THE NEXT CHAPTER"],
      p: [
        "There are moments when the next step seems a little further away than expected.",
        "The work is there, the preparations are made, but certainty doesn't always come as easily.",
        "Sometimes, a different perspective is enough to make the road ahead seem a little less daunting.",
        "A few encouraging words can go further than they appear.",
      ],
      alt: "Two paths crossing at a clear focal point.",
    },
    {
      label: "06 — THE WORDS BETWEEN US",
      title: "Ginny,",
      p: [
        "I know we've said our 'I love yous' before, and I really do mean them. I want you to know that those words were never fake.",
        "But I want to be honest about something. My feelings aren't something I want to keep limited to the little world we've made together.",
        "So, as Knox...",
        { c: "pause", t: "No. As Nors." },
        { c: "q", t: "Would you like to be my girlfriend?" },
      ],
      alt: "A completed composition of crossing paths and rings, growing quieter.",
    },
    {
      label: "07 — WHATEVER COMES AFTER",
      title: "An Unwritten Answer",
      p: [
        "Some questions don't need an immediate answer.",
        "Whatever you're thinking, whatever you're feeling, there's room for it here.",
        "Take your time. I'd rather hear what you genuinely think than receive an answer you feel you have to give.",
      ],
      alt: "An open circle and a single point beside it.",
      form: 1,
    },
  ];

  /* artwork: points=moments, lines=connections, circles=continuity */
  function P(x, y, r, k, i) {
    return (
      '<circle class="d f' + k + '" style="--i:' + i + '" cx="' + x + '" cy="' + y + '" r="' + r + '"/>'
    );
  }

  function L(d, k, i) {
    return (
      '<path class="ln s' + k + '" pathLength="1" style="--i:' + i + '" d="' + d + '"/>'
    );
  }

  function C(x, y, r, k, x2) {
    return (
      '<circle class="ci s' + k + '" cx="' + x + '" cy="' + y + '" r="' + r + '" ' + (x2 || "") + "/>"
    );
  }

  var A = [
    function () {
      return C(150, 85, 42, "s") + P(150, 85, 4, "i", 2);
    },
    function () {
      return (
        L("M60 110L110 60L160 100L215 55", "i", 1) +
        P(60, 110, 3.5, "i", 0) +
        P(110, 60, 3.5, "i", 1) +
        P(160, 100, 3.5, "i", 2) +
        P(215, 55, 3.5, "i", 3) +
        P(240, 115, 3, "s", 4) +
        P(150, 142, 3, "s", 5)
      );
    },
    function () {
      return (
        L("M40 125L100 70L160 108L225 60L265 95", "i", 0) +
        L("M55 140L130 95L200 125L255 78", "k", 2) +
        [
          [40, 125],
          [100, 70],
          [160, 108],
          [225, 60],
          [265, 95],
        ].map(function (p, i) {
            return P(p[0], p[1], 3, "i", i + 1);
        }).join("") +
        '<path class="ln si" pathLength="1" style="--i:5" d="M138 26H164M164 26l-6-5M164 26l-6 5"/>' +
        [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (i) {
            return P(70 + i * 20, 155, 2.5, "s", 6 + i * 0.4);
        }).join("")
      );
    },
    function () {
      return (
        L("M30 120C90 120 100 60 135 60", "i", 0) +
        L("M270 50C210 50 200 110 165 110", "k", 1) +
        P(30, 120, 3.5, "i", 0) +
        P(135, 60, 3.5, "i", 2) +
        P(270, 50, 3.5, "k", 1) +
        P(165, 110, 3.5, "k", 3)
      );
    },
    function () {
      return (
        C(150, 85, 40, "s") +
        L("M30 130C110 130 130 40 270 40", "i", 0) +
        L("M30 40C110 40 130 130 270 130", "k", 1) +
        C(150, 85, 12, "i") +
        P(150, 85, 4, "i", 3)
      );
    },
    function () {
      return (
        '<g class="hush">' +
        C(150, 85, 62, "d") +
        C(150, 85, 40, "s") +
        "</g>" +
        L("M30 130C110 130 130 40 270 40", "i", 0) +
        L("M30 40C110 40 130 130 270 130", "k", 1) +
        C(150, 85, 12, "i") +
        P(150, 85, 5, "i", 3) +
        '<g class="hush">' +
        P(40, 40, 3, "s", 4) +
        P(260, 130, 3, "s", 5) +
        "</g>"
      );
    },
    function () {
        return (
            C(150, 85, 40, "s", 'stroke-dasharray="190 62" transform="rotate(-40 150 85)"', ) + P(212, 85, 4, "i", 2)
        );
    },
];

  var $ = function (i) {return document.getElementById(i);};
  var stage = $("stage"), text = $("text"), art = $("art"), cur = 0;
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  }

  function draw(n, focus) {
    var s = S[n];
    cur = n;
    var h = '<p class="label">' + esc(s.label) + '</p><h1 tabindex="-1" id="h">' + esc(s.title) + "</h1>";

    if (s.sub) h += '<p class="sub">' + esc(s.sub) + "</p>";
    if (s.mem) h += '<ul class="mem">' + s.mem.map(function (m) {return "<li>" + esc(m) + "</li>";}).join("") + "</ul>";
    
    s.p.forEach(function (p) {
        h += typeof p === "string" ? "<p>" + esc(p) + "</p>" : '<p class="' + p.c + '">' + esc(p.t) + "</p>";
    });

    text.innerHTML = h;
    art.innerHTML = A[n]();

    art.setAttribute("aria-label", s.alt);
    art.setAttribute("role", "img");
    art.removeAttribute("aria-hidden");

    $("progress").textContent = "0" + (n + 1) + " / 07";
    $("progress").setAttribute("aria-label", "Screen " + (n + 1) + " of 7");
    $("back").hidden = n === 0;
    $("next").hidden = n === 6;
    $("next").textContent = s.btn || "Continue →";
    $("reply").hidden = !s.form;

    document.title = (n ? s.title.replace(/,$/, "") + " · " : "") + "a somewhere.";
    
    window.scrollTo(0, 0);
    
    if (focus) $("h").focus({ preventScroll: true });
}
  
function show(n, focus) {
    if (reduce) {
        draw(n, focus);
        return;
    }
    
    stage.classList.add("out");
    
    setTimeout(function () {
        draw(n, focus);
        stage.classList.remove("out");
    }, 300);  
}
  
function go(n) {
    if (n < 0 || n > 6 || n === cur) return;
    history.pushState({ n: n }, "", "#" + (n + 1));
    show(n, true);
}


$("next").addEventListener("click", function () { go(cur + 1); });
$("back").addEventListener("click", function () { go(cur - 1); });
window.addEventListener("popstate", function (e) { show(e.state && typeof e.state.n === "number" ? e.state.n : 0, true); });

var start = parseInt((location.hash || "").slice(1), 10);
start = start >= 1 && start <= 7 ? start - 1 : 0;

history.replaceState({ n: start }, "", "#" + (start + 1));

draw(start, false);

/* response form (Formspree) */
var msg = $("msg"), btn = $("send"), st = $("status"), busy = false;
  
$("form").addEventListener("submit", function (e) {
    e.preventDefault();

    if (busy) return;

    var v = msg.value.trim();

    if (!v) {
        st.textContent = "Write a few words first, or simply leave whenever you like.";
        msg.focus();
        return;
    }
    
    if (FORM_ENDPOINT.indexOf("YOUR_FORM_ID") > -1) {
        st.textContent = "Setup needed: the Formspree endpoint is not configured, so nothing was sent. Your text is still here.";
        return;
    }
    
    busy = true;

    btn.disabled = true;
    btn.textContent = "Sending…";

    st.textContent = "";

    fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: v }),
    }).then(function (r) {
        if (!r.ok) throw new Error(r.status);
        st.textContent = "Your words have reached me. Thank you for sharing them.";
        msg.value = "";
        msg.disabled = true;
        btn.hidden = true;
      }).catch(function () {
        st.textContent = "That didn't send. Check your connection and try again. Your message is still here.";
        busy = false;
        btn.disabled = false;
        btn.textContent = "Send response";
      });
  });
})();
