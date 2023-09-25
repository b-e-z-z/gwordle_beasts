let gwordle = {
  correct: "YES",
  close: "SIMILAR",
  wrong: "NO",
  higher: "HIGHER",
  lower: "LOWER",
  getColorClass: function (comparison) {
    if (comparison == this.correct) {
      return 'green'
    } else if (comparison == this.close) {
      return 'orange'
    } else if (comparison == this.wrong) {
      return 'red'
    } else if (comparison == this.higher) {
      return 'orange'
    } else if (comparison == this.lower) {
      return 'orange'
    }
  },
  getHint:function (comparison) {
    if (comparison == this.higher) {
      return 'mdi-arrow-up'
    } else if (comparison == this.lower) {
      return 'mdi-arrow-down'
    }
    return '';
  },
  compareArtist: function (guess, answer) {
    if (guess.Artist == answer.Artist) {
      return this.correct;
    }
    else if (answer.Artist.includes(guess.Artist)){
      return this.close;
    }
    return this.wrong;
  },
  compareType: function (guess, answer) {
    if (guess.Type == answer.Type) {
      return this.correct;
    }
    return this.wrong;
  },
  compareRarity: function (guess, answer) {
    if (guess.Rarity == answer.Rarity) {
      return this.correct;
    }
    return this.wrong;
  },
  compareCost: function (guess, answer) {
    if (guess.Cost == answer.Cost) {
      return this.correct;
    }
    else if (!isNaN(guess.Cost) && !isNaN(answer.Cost)) {
      if (Math.abs(answer.Cost - guess.Cost) == 1) {
        return this.close;
      }
    }
    return this.wrong;
  },
  comparePower: function (guess, answer) {
    if (guess.Power == answer.Power) {
      return this.correct;
    }
    else if (!isNaN(guess.Power) && !isNaN(answer.Power)) {
      if (Math.abs(answer.Power - guess.Power) == 1) {
        return this.close;
      }
    }
    return this.wrong;
  },
  compareNumber: function (guess, answer) {
    if (guess.Number == answer.Number) {
      return this.correct;
    } else if (guess.Number < answer.Number) {
      return this.higher
    } else if (guess.Number > answer.Number) {
      return this.lower
    }
  },
  getCardImage: function (card) {
    var name = card.Name;
    var encodedName = encodeURIComponent(name);
    var link = "https://grotto-beast-cards-images.s3.us-east-2.amazonaws.com/" + encodedName + ".webp"

    return link;
  },
  getEmoji: function (comparison) {
    if (comparison == this.correct) {
      return '🟩'
    } else if (comparison == this.close) {
      return '🟨'
    } else if (comparison == this.wrong) {
      return '⬛'
    } else if (comparison == this.lower) {
      return '⬇️'
    } else if (comparison == this.higher) {
      return '⬆️'
    }
  },
  generateEmojis: function(answer, guesses) {
    var copy = "";

    for(var i = 0; i < guesses.length; i++) {
      var guess = guesses[i];
      copy += this.getEmoji(this.compareArtist(guess, answer))
      copy += this.getEmoji(this.compareType(guess, answer))
      copy += this.getEmoji(this.compareRarity(guess, answer))
      copy += this.getEmoji(this.compareCost(guess, answer))
      copy += this.getEmoji(this.comparePower(guess, answer))
      copy += this.getEmoji(this.compareNumber(guess, answer))
      copy += '\n'
    }

    return copy;
  },
  elapsedTime: function () {
    var dayZero = new Date(Date.UTC(2023, 8, 20, 0, 0, 1, 0));
    var now = new Date(Date.now());

    var timeDiff = now.getTime() - dayZero.getTime();
    
    return timeDiff;
  },
  dailyTimer: function () {
    var elapsed = this.elapsedTime();
    var days = elapsed / (1000 * 3600 * 24);
    var percent = days % 1.0;
    var remaining = 1.0 - percent;
    var hours = Math.floor(remaining * 24);

    var minuteRemainder = (remaining - (hours / 24.0));
    var minutes = Math.floor(minuteRemainder * 24 * 60);

    var secondsRemainder = minuteRemainder - (minutes / (24.0 * 60.0))
    var seconds = Math.floor(secondsRemainder * 24 * 60 * 60)
    var message = "";

    if (hours > 1) {
      message += hours + " Hours";
    } else {
      message += minutes + "M "
      message += seconds +"S";
    }

    return message;
  },
  getDayNumber: function () {
    var elapsed = this.elapsedTime();
    var days = elapsed / (1000 * 3600 * 24);

    return Math.floor(days);
  },
}


export const Gwordle = gwordle;