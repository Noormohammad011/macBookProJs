/*
 * Title: MacPro
 * Description: Calcultion with PromoCode in MacPro
 * Author: Noormohammad
 * Date: 21/08/2021
 *
 */

// Variable Declaration Section
const memorCost = document.getElementById('memorCost')
const storageCost = document.getElementById('storageCost')
const deliveryCost = document.getElementById('deliveryCost')
const promoCode = document.getElementById('promoCode')
const promoBtn = document.getElementById('promoBtn')
const totalCost = document.querySelectorAll('.total')
const totalWithPromo = document.getElementById('totalWithPromo')
let flag = false

//Total Calcultion
const total = () => {
  const memoryCharge = Number(memoryCost.innerText)
  const storageCharge = Number(storageCost.innerText)
  const deliveryCharge = Number(deliveryCost.innerText)
  for (const total of totalCost) {
    total.innerText = 1299 + memoryCharge + storageCharge + deliveryCharge
  }
}

//PromoBtn EvenHanlder
promoBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const lastTotal = totalWithPromo.innerText
  if (promoCode.value == 'stevekaku' && !flag) {
    flag = true
    totalWithPromo.innerText = lastTotal - Number(lastTotal * 0.2)
  }
  promoCode.value = ''
})

//Memory Function
function memory(memoryType) {
  const memoryHanlder = document.getElementById(`${memoryType}-memory`)
  if (memoryType == 'eightGb') {
    memoryHanlder.addEventListener('click', (e) => {
      e.preventDefault()
      memoryCost.innerText = 0
      total()
    })
  } else if (memoryType == 'sixteenGb') {
    memoryHanlder.addEventListener('click', (e) => {
      e.preventDefault()
      memoryCost.innerText = 180
      total()
    })
  }
}

//Storage Function
function storage(storageType) {
  const storageHandler = document.getElementById(`${storageType}-storage`)
  if (storageType == 'ssd256') {
    storageHandler.addEventListener('click', (e) => {
      e.preventDefault()
      storageCost.innerText = 0
      total()
    })
  } else if (storageType == 'ssd512') {
    storageHandler.addEventListener('click', (e) => {
      e.preventDefault()
      storageCost.innerText = 100
      total()
    })
  } else if (storageType == 'ssd720') {
    storageHandler.addEventListener('click', (e) => {
      e.preventDefault()
      storageCost.innerText = 180
      total()
    })
  }
}

//Delivary Function
function delivary(delivaryType) {
  const delivaryHanler = document.getElementById(`${delivaryType}-delivary`)
  if (delivaryType == 'free') {
    delivaryHanler.addEventListener('click', (e) => {
      e.preventDefault()
      deliveryCost.innerText = 0
      total()
    })
  } else if (delivaryType == 'withTk') {
    delivaryHanler.addEventListener('click', (e) => {
      e.preventDefault()
      deliveryCost.innerText = 20
      total()
    })
  }
}

//Function Calling
memory('sixteenGb')
memory('eightGb')
storage('ssd256')
storage('ssd512')
storage('ssd720')
delivary('free')
delivary('withTk')
