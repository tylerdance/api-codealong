
function appendBookToDom(title, author, cover) {
    const titleH1 = document.createElement('h3')
    titleH1.textContent = title
    document.querySelector('#display-book').append(titleH1)

    const coverImg = document.createElement('img')
    coverImg.src = covercoverImg.alt = title
    document.querySelector('#display-book').append(coverImg)
}




function fetchBook(genre) {
    fetch(`http://openlibrary.org/subjects/${genre}.json`)
    .then(res => res.json())
    .then((json) => {
        const randomBook = getRandomBook(json.works)
    
        console.log(randomBook.title);
        const author = getAuthor(randomBook)
        const cover = `http://covers.openlibrary.org/b/ID/${randomBook.cover_id}-$size.jpg`

        // return {
        //     title: randomBook.title,
        //     author: author,
        //     cover: cover,
        // }

    appendBookToDom(title, author, cover)
    })
}


function getRandomBook(books) {
    const randomIndex = Math.floor(Math.random() * books.length)
    return books[randomIndex]
}

function getAuthor(book) {
    return book.authors[0].name
}



let genre = 'mystery'

// problem: appendBookToDom will start working before fetchBook is done
//const book = fetchBook(genre)

fetchBook(genre)