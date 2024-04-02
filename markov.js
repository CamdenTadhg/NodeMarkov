/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.chains = this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chains = {};
    for (let i = 0; i < this.words.length; i++){
      if (this.words[i] in chains){
        if (chains[this.words[i]].includes(this.words[i+1])){
        }
        else if (this.words[i + 1] === undefined) {
          chains[this.words[i]].push(null);
        }
        else {
          chains[this.words[i]].push(this.words[i + 1]);
        }
      }
      else {
        if (this.words[i + 1] === undefined) {
          chains[this.words[i]] = [null];
        }
        else {
          chains[this.words[i]] = [this.words[i + 1]];
        }
      }
    }
    return chains;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // pick a starting word at random
    let randomIndex = Math.floor(Math.random() * this.words.length);
    let array = [this.words[randomIndex]];
    // loop through number of words required
    for (let i = 1; i < numWords; i++){
      // pick a following word at random
      const currentWord = array[i-1];
      let randomIndex = Math.floor(Math.random() * this.chains[currentWord].length);
      const nextWord = this.chains[currentWord][randomIndex];
      if (nextWord === null){
        let randomIndex = Math.floor(Math.random() * this.words.length);
        array.push(this.words[randomIndex]);
      }
      else {
        array.push(nextWord);
      }
    }
    return array.join(' ');
  }
}

module.exports = {
  MarkovMachine: MarkovMachine
}

// write makeText script inc. handling errors
// EXTRA CREDIT
// implement machine only starts on a word that starts a sentence
// implement machine stops at period while still honoring maximum number of words passedd in
// implement bigrams
// strip html from url text using a library in npm
// let user pass multiple files and make a machine that mixes them together
// implement generator function