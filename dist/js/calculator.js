// Initializing Vars
const main = document.getElementById("main")
const photographyBtn = document.getElementById("photography")
const uiDesignBtn = document.getElementById("ui-design")
const uxDesignBtn = document.getElementById("ux-design")
const webDesignBtn = document.getElementById("web-design")
const proAdviceBtn = document.getElementById("pro-advice")
const calculateBtn = document.getElementById("calculate")
const clearBtn = document.getElementById("clear")

const priceList = {
  photography: 200,
  ui: 300,
  ux: 300,
  web: 500,
  advice: 100,
}

let data = []

// Constructing object
class HtmlElement {
  constructor(service, price, type= 'div') {
    this.service = service
    this.price = price
    this.type = type
  }

  create() {
    const element = document.createElement('div')
    element.classList.add('service')
    element.innerHTML = `<strong>${this.service}</strong> ${formatMoney(this.price)}`
    return element
  }
}

// Adding Event Listeners to the Buttons
photographyBtn.addEventListener('click', addPrice)
uiDesignBtn.addEventListener('click', addPrice)
uxDesignBtn.addEventListener('click', addPrice)
webDesignBtn.addEventListener('click', addPrice)
proAdviceBtn.addEventListener('click', addPrice)
calculateBtn.addEventListener('click', calculate)
clearBtn.addEventListener('click', clear)

// Functions
function addPrice(e) {
  if (e.target === photographyBtn) {
    const element = new HtmlElement('Photography', priceList.photography)
    main.appendChild(element.create())
    data.push(priceList.photography)
  } else if (e.target === uiDesignBtn) {
    const element = new HtmlElement('UI Design', priceList.ui)
    main.appendChild(element.create())
    data.push(priceList.ui)
  } else if (e.target === uxDesignBtn) {
    const element = new HtmlElement('UX Design', priceList.ux)
    main.appendChild(element.create())
    data.push(priceList.ux)
  } else if (e.target === webDesignBtn) {
    const element = new HtmlElement('Web Design', priceList.web)
    main.appendChild(element.create())
    data.push(priceList.web)
  } else if (e.target === proAdviceBtn) {
    const element = new HtmlElement('Professional Advice', priceList.advice)
    main.appendChild(element.create())
    data.push(priceList.advice)
  }
}

function calculate() {
  const total = data.reduce((acc, num) => (acc += num), 0)

  const totalEl = document.createElement('div')
  totalEl.innerHTML = `<h3>Total Price: <strong>${formatMoney(total)}</strong></h3>`
  main.appendChild(totalEl)
}

function clear() {
  main.innerHTML = '<h2><strong>Service</strong> Price</h2>'
  data = []
}

// Format number as money
function formatMoney(money) {
  return '$' + money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

