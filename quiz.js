const questions = [
    {
        question: "Name the group in the photo",
        img: "https://channel-korea.com/wp-content/uploads/2018/03/gfriend-0.jpg",
        answers: [
            "AOA", 
            "RED VELVET", 
            "MAMAMOO",
            "GFRIEND"
        ],
        correct: 4,
    },
    {
        question: "What K-POP group is in the picture?",
        img: "https://chpic.su/_data/stickers/b/BKillThisLoveP/BKillThisLoveP_016.webp",
        answers: [
            "MAMAMOO", 
            "BLACKPINK", 
            "TWICE",
            "(G)I-DLE"
        ],
        correct: 2,
    },
    {
        question: "What K-POP group is in the picture?",
        img: "https://lh3.googleusercontent.com/VGR4nsugxwRVM22cNW-pAVrBYGgMN3ZiGFgabbmQPj848geQ0HZRID9q7CwDtConxfo6VZPG3wkmappASHLGCg_j7Ud6h2JR=w1600-rj",
        answers: [
            "TWICE", 
            "(G)I-DLE", 
            "SNSD",
            "Red Velvet"
        ],
        correct: 1,
    },
    {
        question: "What K-POP group is in the picture?",
        img: "https://0.soompi.io/wp-content/uploads/2019/02/25011223/ITZY-12.jpg",
        answers: [
            "Red Velvet", 
            "ITZY", 
            "TWICE",
            "SNSD"
        ],
        correct: 2,
    },
    {
        question: "What K-POP group is in the picture?",
        img: "https://6.viki.io/image/6d47a9fd4be94646896eef44505777eb.jpeg?s=900x600&e=t",
        answers: [
            "(G)I-DLE", 
            "SNSD", 
            "IZ*ONE",
            "BlackPink"
        ],
        correct: 1,
    },
    {
        question: "Which album never existed?",
        img: "",
        answers: [
            "GOT7 Album Vol. 4 — Breath Of Love", 
            "MOMOLAND Single Album Vol. 3 — Ready Or Not", 
            "NCT — The 2nd Album RESONANCE",
            "SEVENTEEN Album Vol. 2 — Exit"
        ],
        correct: 4,
    },
    {
        question: "What band's lightstick is in the photo?",
        img: "https://cdn.shopify.com/s/files/1/2420/2037/products/gidle_700x.jpg?v=1573936567",
        answers: [
            "BlackPink", 
            "IZ*ONE", 
            "TWICE",
            "(G)I-DLE"
        ],
        correct: 4,
    },
    {
        question: "In what year did Girls' Generation officially debut?",
        img: "https://get.wallhere.com/photo/2560x1600-px-Girls-Generation-hyoyeon-jean-shorts-Jessica-Jung-K-pop-kim-taeyon-Kwon-Yuri-Musicians-Seohyun-singer-SNSD-Sooyoung-Sunny-Tiffany-Hwang-white-clothing-Yoona-1086309.jpg",
        answers: [
            "2007", 
            "2008", 
            "2009",
            "2010"
        ],
        correct: 1,
    },
    {
        question: "What label did BLACKPINK debut under?",
        img: "",
        answers: [
            "SM Entertainment", 
            "YG Entertainment", 
            "JYP Entertainment",
            "Kakao M"
        ],
        correct: 2,
    },
    {
        question: "What was the final single of 2017 for the Wonder Girls?",
        img: "https://images6.fanpop.com/image/polls/1645000/1645993_1503153610087_full.jpg",
        answers: [
            "Baby Dont Play", 
            "Draw Me", 
            "The DJ is Mine",
            "Like This"
        ],
        correct: 2,
    }
]
const restart = () => {
    const headerContainer = document.querySelector('#header');
    const listContainer = document.querySelector('#list');
    const submitBtn = document.querySelector('.submit');
    const outer = document.querySelector('.outer')
    const qui = document.querySelector('.btn')
    let score = 0;
    let questionIndex = 0;
    const clearPage = () =>{
        headerContainer.innerHTML = ''
        listContainer.innerHTML = ''
    }
    const showQuestion = () =>{
        let quest = questions[questionIndex]['question']
        let images = questions[questionIndex]['img']
        let answer = questions[questionIndex]['answers']
        headerContainer.innerHTML = `<h2 class="title">${quest}</h2><img src="${images}"/>`
        answer.forEach((item, index) => {
            listContainer.innerHTML += `
                <li>
                    <label>
                        <input value="${index + 1}" type="radio" class="answer" name="answer">
                        <span>${item}</span>
                    </label>
                </li>
        `
        })
    }
    submitBtn.addEventListener('click', () => {
        let corect = questions[questionIndex]['correct']
        let check = listContainer.querySelector('input[type="radio"]:checked');
        if (check) {
            if (+check.value === corect) {
                score++
            }
        }
        if (!check) {
            submitBtn.blur()
            return
        }
        if (questionIndex !== questions.length -1) {
            questionIndex++ 
            clearPage()
            showQuestion()
        }else{
            submitBtn.disabled = true
            submitBtn.style.display = 'none'
            clearPage()
            outer.innerHTML =  `<h1>Correct answers: ${score} from ${questions.length}</h1>`
            qui.innerHTML = `<button class="quiz-submit submit replase-game" id="submit">Play again</button>`
            return
        }
    })
            document.addEventListener('click', (e)=>{
                if (e.target.closest('.replase-game')) {
                    score = 0;
                    questionIndex = 0;
                    outer.innerHTML = ''
                    qui.innerHTML = `<button class="quiz-submit submit" id="submit">Answer</button>`
                    clearPage()
                    showQuestion()
                    restart();
                }
        }) 
    clearPage()
    showQuestion()
    }
   restart()
   