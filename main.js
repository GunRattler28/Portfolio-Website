const clue = document.getElementById("clueBtn");
const clueText = document.getElementById("clueText");

let clues = 0;
const clueArr = ["Black text on a black background looks invisible therefore...", "Base Stack (A stack is __ blocks)", "Why is the punctuation at the start and the capital letters at the beginning?", "'T' is used a lot. Wonder what letter it could be (A, I, O...) ", "Everything in the first one needs to be ____. What are people allergic to thats a seed found in bread?", "Email me at aayushdeepchand@gmail.com if you really want a hint (but its been a while so I've forgotten some of it)", "No more clues to give sorry. These clues should be able to help you piece it together."];
const cluesGivenArr = []

clue.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm("Are you sure?")) {
        if (clues < clueArr.length - 1) {
            cluesGivenArr.push(clueArr[clues]);
            clueText.innerText = cluesGivenArr.join("\n");
            clues += 1;
        } else {
            clueText.innerText = clueArr.join("\n")
        }
    }
})