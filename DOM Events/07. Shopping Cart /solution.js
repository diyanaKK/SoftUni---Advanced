function solve() {
  document.getElementsByClassName('shopping-cart')[0].addEventListener('click',onClick)
  document.getElementsByClassName('checkout')[0].addEventListener('click',checkout)
  const cart = []
  const output = document.getElementsByTagName('textarea')[0]
  output.value = ''
  function onClick(ev){
     if(ev.target.tagName == 'BUTTON'&& ev.target.classList.contains('add-product')){
        const product = ev.target.parentNode.parentNode
        const name = product.querySelector('.product-title').textContent;
        const price = Number(product.querySelector('.product-line-price').textContent).toFixed(2)
        cart.push({
           name,
           price
        })
        output.value += `Added ${name} for ${price} to the cart.\n`
     }
  }
  function checkout(){
     const products = new Set()
     cart.forEach(p=> products.add(p.name))
     const total = cart.reduce((t,c) =>Number(t)+Number(c.price),0)
     
     
     output.value += `You bought ${[...products.keys()].join(', ')} for ${total.toFixed(2)}.\n`
  }
}