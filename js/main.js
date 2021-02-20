'user strict'

{
    function setWord() {
        word = words[Math.floor(Math.random() * words.length)];
        const target = document.getElementById('target');
        target.textContent = word;
        loc = 0;
    }
    const words = [
        'red',
        'bleu',
        'white',
        'black'
    ];
    let word;
    let loc;


    setWord();

    document.addEventListener('keydown', e => {
        if (e.key != word[loc]) {
            return;
        }

        loc++;
        target.textContent = '_'.repeat(loc) + word.substring(loc);


        if (loc === word.length) {
            setWord();
        }



    })
}