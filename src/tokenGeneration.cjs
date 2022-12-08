function tokenGeneration() {
    let symbols = '1234567890abcdefghijklmnopqrstuvwxyz-_!@#$%&*';
    let token = '';

    for (let i = 0; i < 10; i++) {
        token += symbols[Math.round(Math.random() * (symbols.length - 1))];
    }

    console.log(token);
    return token;
}

module.exports = tokenGeneration;