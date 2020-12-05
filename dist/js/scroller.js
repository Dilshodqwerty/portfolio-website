// Initializing Vars
const postsContainer = document.getElementById("post-container")
const filter = document.getElementById("filter")
const loader = document.querySelector(".loader")

let limit = 5
let page = 1

// Fetch posts from API
async function getPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
  const data = await res.json()
  return data
}

// Show posts in DOM
async function showPosts() {
  const posts = await getPosts()

  posts.forEach(post => {
    const postEl = document.createElement('div')
    postEl.classList.add('post')

    const number = document.createElement('div')
    number.classList.add('number')
    number.textContent = post.id

    const info = document.createElement('div')
    info.classList.add('post-info')

    const title = document.createElement('h2')
    title.classList.add('post-title')
    title.textContent = post.title

    const body = document.createElement('p')
    body.classList.add('post-body')
    body.textContent = post.body

    info.appendChild(title)
    info.appendChild(body)

    postEl.appendChild(number)
    postEl.appendChild(info)

    postsContainer.appendChild(postEl)
  })
}

// Show loader and fetch more posts
function showLoading() {
  loader.classList.add('show')

  setTimeout(() => {
    loader.classList.remove('show')

    setTimeout(() => {
      page++
      showPosts()
    }, 300)

  }, 1000)
}

// Filter posts by input
function filterPosts(e) {
  const term = e.target.value.toUpperCase()
  const posts = document.querySelectorAll('.post')

  posts.forEach(post => {
    const title = post.querySelector('.post-title').innerText.toUpperCase()
    const body = post.querySelector('.post-body').innerText.toUpperCase()

    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = 'flex'  // original value
    } else {
      post.style.display = 'none'
    }
  })
}

// Show initial posts
showPosts()

window.addEventListener('scroll', () => {
  const {scrollTop, scrollHeight, clientHeight} = document.documentElement

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading()
  }
})

filter.addEventListener('input', filterPosts)
