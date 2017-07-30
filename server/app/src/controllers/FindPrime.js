/**
 * Created by gem on 30/07/2017.
 */

let createError = require('http-errors')

class FindPrime {

    static getName() {
        return "findPrime";
    }

    isPrime(n) {
        if (n < 1) return false;
        for (let i = 2; i < n; ++i) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    getNextPrime(n) {
        n++;
        for (; !this.isPrime(n); n++);
        return n;
    }

    parse(val) {
        if (isNaN(val)) {
            return "Error: " + val + " is not number";
        }
        if (val < 0) {
            return "Error: " + val + " is negative";
        }
        if (!(val % 1 === 0)) {
            return "Error: " + val + " must be a whole number";
        }

        return false;
    }

    static get(req, res, next) {
        let findPrime = new FindPrime();
        let val = req.query.val == undefined ? 0 : req.query.val;
        let errorMsg = findPrime.parse(val);
        if (errorMsg)
            return next(createError(400, errorMsg));
        res.end(findPrime.getNextPrime(val).toString());
    }
}


module.exports = FindPrime;