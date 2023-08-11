//seeded random number generator
// input: date object
// output of seededRandom: random number between 0 and 1
// example: seededRandom(new Date(2021, 1, 1)) => 0.123456789
const seededRandom = (seed) => { // https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
    };

    // why do we need seededRandom?
    // because we want the same result for the same date 
    // but we want different results for different dates
    // for example, we want the same result for 2021-01-01 and 2021-01-01
    // but we want different results for 2021-01-01 and 2021-01-02
    // the 2021-01-01 has result [17:00, 17:30, 18:00, 18:30, 19:00, 19:30]
    // the 2021-01-02 has result [17:00, 17:30, 18:00, 18:30, 19:00, 19:30, 20:00, 20:30]
    // i think this is stupid, we should just have a list of available times



//fetchAPI
//input: date object
//output: array of strings
//example: fetchAPI(new Date(2021, 1, 1)) => ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30"]
const fetchAPI = (date) => {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i < 23; i++) {
        if (random < 0.5) result.push( i + ":00");
        if (random < 0.5) result.push( i + ":30");
    }

    return result;
}

const submitAPI = (formData) => true;

export { fetchAPI, submitAPI };

/*
const seededRandom = function (seed) {
  var m = 2 ** 35 - 31; // 2^35-31 is a Mersenne prime
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m; // in [0,1)
  };
};
*/