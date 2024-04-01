/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}

// Set up - project, git repo, package.json, node_modules in gitignore
// Implement makeChains method
// Implement makeText method
// test in Node REPL
// write tests with Jest
//  write makeText script inc. handling errors
// implement machine only starts on a word that starts a sentence
// implement machine stops at period while still honoring maximum number of words passedd in
// implement bigrams
// strip html from url text using a library in npm
// let user pass multiple files and make a machine that mixes them together
// implement generator function