function solve() {
    const task = document.querySelector('#task');
    const description = document.querySelector('#description');
    const date = document.querySelector('#date');
    let addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', onClickAdd);

    let sectionOpen = document.querySelectorAll('section')[1];
    let divForArticleOpen = sectionOpen.querySelectorAll('div')[1];
    let sectionInProgress = document.querySelectorAll('section')[2];
    let divForArticleInProgress = sectionInProgress.querySelectorAll('div')[1];
    let finishSection = document.querySelectorAll('section')[3];
    let finishDiv = finishSection.querySelectorAll('div')[1];

    function onClickAdd(ev) {
        ev.preventDefault()
        if (task.value && description.value && date.value) {
            let articleOpen = document.createElement('article');
            let h3 = document.createElement('h3');
            h3.textContent = task.value;
            articleOpen.appendChild(h3);

            let p1 = document.createElement('p');
            p1.textContent = `Description: ${description.value}`;
            articleOpen.appendChild(p1);
            

            let p2 = document.createElement('p');
            p2.textContent = `Due Date: ${date.value}`;
            articleOpen.appendChild(p2);


            let divOpen = document.createElement('div');
            divOpen.className = 'flex';

            let startBtn = document.createElement('button');
            startBtn.className = "green";
            startBtn.textContent = "Start";
            startBtn.addEventListener('click', start)
            divOpen.appendChild(startBtn);

            let deleteBtn = document.createElement('button');
            deleteBtn.className = "red";
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener('click', onDelete)
            divOpen.appendChild(deleteBtn);
            articleOpen.appendChild(divOpen)
            divForArticleOpen.appendChild(articleOpen);

        

        function start(ev) {
            let currentArticle = ev.target.parentElement.parentElement
            let articleInProgress = document.createElement('article');
            articleInProgress.appendChild(h3);
            articleInProgress.appendChild(p1);
            articleInProgress.appendChild(p2);
            let divProgress = document.createElement('div');
            divProgress.className = 'flex';
            deleteBtn.className = 'red';
            divProgress.appendChild(deleteBtn);
            currentArticle.remove()
            let buttonFinish = document.createElement('button');
            buttonFinish.className = 'orange';
            buttonFinish.textContent = "Finish";
            buttonFinish.addEventListener('click', finish);
            divProgress.appendChild(buttonFinish);
            articleInProgress.appendChild(divProgress);


            divForArticleInProgress.appendChild(articleInProgress);
        }

        function onDelete(ev) {
            let currentTarget = ev.target.parentElement.parentElement;
            currentTarget.remove()
        }
        function finish(ev) {
            let curArt = ev.target.parentElement.parentElement;
            let finishArticle = document.createElement('article');
            finishArticle.appendChild(h3);
            finishArticle.appendChild(p1);
            finishArticle.appendChild(p2);
            curArt.remove()
            finishDiv.appendChild(finishArticle);
        }
    }
    }


}