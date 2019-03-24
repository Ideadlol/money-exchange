// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var m_exch = {};

    if (currency > 10000) {
        m_exch.error = "You are rich, my friend! We don't have so much coins for exchange";
        return m_exch;
    } else if (currency <= 0) {
        return m_exch;
    } else {
        m_exch.H = Math.floor(currency / 50);
        currency = currency % 50;

        m_exch.Q = Math.floor(currency / 25);
        currency = currency % 25;

        m_exch.D = Math.floor(currency / 10);
        currency = currency % 10;

        m_exch.N = Math.floor(currency / 5);
        currency = currency % 5;

        m_exch.P = Math.floor(currency / 1);
        currency = currency % 1;

        for(var key in m_exch) {
            if(m_exch[key] ==0) {
                delete m_exch[key];
            }
        }
    }
    
    return m_exch;
}
