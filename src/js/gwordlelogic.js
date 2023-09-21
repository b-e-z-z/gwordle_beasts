let gwordle = {
  correct: "YES",
  close: "SIMILAR",
  wrong: "NO",
  getColorClass: function (comparison) {
    if (comparison == this.correct) {
      return 'green'
    } else if (comparison == this.close) {
      return 'orange'
    } else if (comparison == this.wrong) {
      return 'red'
    }
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
      copy += '\n'
    }

    return copy;
  }
}


export const Gwordle = gwordle;