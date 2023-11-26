const app = document.querySelector('#app')

const articles = [
    {
        name: 'Как образовались первые расы?',
        announcement: 'Как изоляция и миграция влияли на образование рас? Какие признаки сформировала географическая изоляция, а какие - культурная?',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi quibusdam aliquid id earum, veniam, inventore amet ipsum a labore ad deserunt. Excepturi quasi numquam temporibus quam dolor? Laboriosam eum, culpa neque esse tenetur, aliquam veniam rem cumque accusamus sed voluptas blanditiis mollitia tempore ea accusantium!',
        links: `https://www.youtube.com/watch?v=7sRVhFdtUC8`,
        author: 'Станислав Дробышевский'
    },
    {
        name: 'Физические возможности древних людей',
        announcement: 'Кто сильнее: горилла или неандерталец? Почему шимпанзе сильнее современного человека? Насколько сильными были наши предки - кроманьонцы?',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, odit ea natus minima provident adipisci, accusamus omnis dolorem error sapiente corporis nostrum, sit ab velit repellendus autem veritatis architecto culpa.',
        links: `https://www.youtube.com/watch?v=L_UzLxmR1Vw"`,
        author: 'Станислав Дробышевский'
    },

    {
        name: 'Был ли у человека один предок?',
        announcement: 'Была ли Ева единственной женщиной, а Адам - единственным мужчиной? Как работает рекомбинация генов? Какие данные ученые используют для поиска наших прародителей?',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias corrupti a tempore sunt deserunt. Ipsa autem adipisci doloribus reprehenderit quo qui voluptate, aliquid, dolorem doloremque iure quas nihil sapiente odio, dicta consequuntur error illo est veritatis facere fuga necessitatibus minus cupiditate? Quo provident similique beatae at unde! Necessitatibus, omnis repellendus. ',
        links: `https://www.youtube.com/watch?v=JJ0o6lDHmek`,
        author: 'Станислав Дробышевский'
    }
]

articles.forEach(element => {
    const articleEl = document.createElement('div')
    articleEl.classList.add('article')

    const headingName = document.createElement('h2')
    headingName.classList.add('heading')
    headingName.textContent = `Статья: "${element.name}"`

    const articleAnnounce = document.createElement('h4')
    articleAnnounce.classList.add('article__announce')
    articleAnnounce.textContent = `Анонс: ${element.announcement}`

    const articleText = document.createElement('p')
    articleText.classList.add('article__text')
    articleText.textContent = `${element.text}`

    const articleLink = document.createElement('a')
    articleLink.href = element.links
    articleLink.classList.add('article__link')
    articleLink.textContent = `Ссылка на источник`

    const articleAuthor = document.createElement('h4')
    articleAuthor.classList.add('article__author')
    articleAuthor.textContent = `Автор: ${element.author}`


    articleEl.append(headingName)
    articleEl.append(articleAnnounce)
    articleEl.append(articleText)
    articleEl.append(articleLink)
    articleEl.append(articleAuthor)

    app.append(articleEl)

});




