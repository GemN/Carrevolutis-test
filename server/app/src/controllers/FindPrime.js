/**
 * Created by gem on 30/07/2017.
 */

class FindPrime {

    static getName() {
        return "findPrime";
    }

    static isPrime(n) {
        if (n < 1) return false;
        for (let i = 2; i < n; ++i) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    static getNextPrime(n) {
        n++;
        for (; !FindPrime.isPrime(n); n++);
        return n;
    }

    static get(req, res) {
        res.setHeader('Content-Type', 'text/plain');
        let val = req.query.val == undefined ? 0 : req.query.val;
        res.end(FindPrime.getNextPrime(val).toString());
    }
}


module.exports = FindPrime;