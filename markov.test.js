const markovMachine = require('./markov')

let mm;

beforeEach(() => {
    mm = new markovMachine.MarkovMachine('the cat in the hat is in the hat.');
})


test('this.words should be an array containing the words', function(){
    expect(mm.words).toBeDefined();
    expect(mm.words).toBeInstanceOf(Array);
    expect(mm.words.length).toEqual(9);
})

test('this.chains should be an object containing one null', function(){
    expect(mm.chains).toBeDefined();
    expect(mm.chains).toBeInstanceOf(Object);
    expect(mm.chains['hat.']).toEqual([null]);
    expect(mm.chains['cat']).toEqual(['in']);
})

test('makeText should output a string with the correct number of words', function(){
    const text = mm.makeText(15);
    expect(typeof text).toBe('string');
    words = text.split(' ');
    expect(words.length).toEqual(15);

})