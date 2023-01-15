import {questions} from "./answers.js"
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
                    <label class="checkbox">
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
   