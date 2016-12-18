function letterHover(item) {
  $(item).hover(function() {
    $(item + ' a .letter').css("background-color", "#2677B6");
  }, function() {
    $(item + ' a .letter').css("background-color", "#469BDC");
  });
}

letterHover("#a")
letterHover("#b")
letterHover("#c")
letterHover("#d")
letterHover("#e")
letterHover("#f")
letterHover("#g")
letterHover("#h")
letterHover("#i")
letterHover("#j")
letterHover("#k")
letterHover("#l")
letterHover("#m")
letterHover("#n")
letterHover("#o")
letterHover("#p")

function isCorrect() {
  $('.question').css("background-color", "#2ecc71");
  $('.question h3').css("color", "#fff");
}

function isWrong() {
  $('.question').css("background-color", "#E23F35");
  $('.question h3').css("color", "#fff");
}

function answer(item, bool) {
  if (bool === "true") {
    $(item).click(function() {
      isCorrect();
    });

  } else if (bool === "false") {
    $(item).click(function() {
      isWrong();
    });
  }
}

answer("#a", "true")
answer("#b", "false")
answer("#c", "false")
answer("#d", "false")
answer("#e", "false")
answer("#f", "false")
answer("#g", "true")
answer("#h", "false")
answer("#i", "false")
answer("#j", "true")
answer("#k", "false")
answer("#l", "false")
answer("#m", "true")
answer("#n", "false")
answer("#o", "true")
answer("#p", "true")
