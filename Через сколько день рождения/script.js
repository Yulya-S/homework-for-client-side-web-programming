const INPUT_ID='myInput'
const SELECT_ID='mySelect'
const P_ID = 'P_ID'

function process(){
    const input=document.getElementById(INPUT_ID)
    const select=document.getElementById(SELECT_ID)
    const day=+input.value
    const month=select.value
    const max=new Date(new Date().getFullYear(), month+1, 0).getDate()
    if (isNaN(day)||day>max){
      input.classList.add('error')
      input.classList.remove('success')
      return
    }
    input.classList.add('success')
    input.classList.remove('error')
    const now=new Date()
    let isSameYear=false

    if (month == now.getMonth()) {
        isSameYear = day > now.getDate()
    } else {
        isSameYear = month > now.getMonth()
    }
    const year=isSameYear ? now.getFullYear() : now.getFullYear()+1
    const birthdate= new Date(year, month, day)
    const seconds=parseInt((birthdate-now)/1000)
    const minutes=parseInt(seconds/60)
    const hours=parseInt(minutes/60)
    const days=parseInt(hours/24)
    console.log(days, hours%24, minutes%60, seconds%60)
    formatir(day, days, month, hours, minutes, seconds, max)
    document.getElementById(P_ID).onmouseover = () => {if (document.getElementById(P_ID).innerHTML != `С днём рождения!!!`) createParagraphsText(days, hours, minutes, seconds, max)}
    document.getElementById(P_ID).onmouseout = () => {if (document.getElementById(P_ID).innerHTML != `С днём рождения!!!`) document.getElementsByTagName('p')[1].remove()}
}

function creatInput(){
  const input=document.createElement('input')
  input.id=INPUT_ID
  input.onblur = process
  document.body.appendChild(input)
};

function creatSelect(){
  const select=document.createElement('select')
  select.id=SELECT_ID
  select.onchange = process
  document.body.appendChild(select)

  for (let i=0; i<12;i++){
    const option=document.createElement('option')
    const date=new Date()
    date.setMonth(i)
    option.value=i
    option.text=date.toLocaleString('ru-RU',{
      month: 'long'
    })
    select.appendChild(option)
  }
  select.value=new Date().getMonth()
};

function createParagraph() {
    const p = document.createElement('p')
    p.id = P_ID
    document.body.appendChild(p)
}

function createParagraphsText(days, hours, minutes, seconds, max) {
    const p = document.createElement('p')
    let i=0
    let numberMonth= new Date().getMonth()
    for (i; days>max; i++){
      let kolvoDays=new Date(new Date().getFullYear(), numberMonth+1, 0).getDate()
      days-=kolvoDays
      numberMonth++
      if (numberMonth==12) numberMonth=0
    }
    let text=`Осталось до ДР:`
    if (i!=0){
      if (i==1 || i==2 || i==3 || i==4) text+=` ${i}месяца`
      else text+=` ${i}месяцев`
    }
    if (i!=0 || days!=0){
      if (days%10 == 1 && days!=11) text+=` ${days}день`
      else{
        if ((days%10==2 || days%10==3 || days%10==4) && days/10!=1) text+=` ${days}дня`
        else text+=` ${days}дней`
      }
    }
    if (i!=0 || days!=0 || hours!=0) text+=` ${hours % 24} ч.`
    if (i!=0 || days!=0 || hours!=0 || minutes!=0) text+=` ${minutes % 60} м.`
    text+= ` ${seconds % 60}сек.`
    p.innerHTML = text
    document.body.appendChild(p)
}

function formatir(day, days, month, hours, minutes, seconds, max){
  const now=new Date()
  if ((day==now.getDate()) && (month==now.getMonth())){
    document.getElementById(P_ID).innerHTML = `С днём рождения!!!`
    return
  }
  if (days==0){
    document.getElementById(P_ID).innerHTML = `Завтра`
    return
  }
  if (days==1){
    document.getElementById(P_ID).innerHTML = `Послезавтра`
    return
  }
  if (days<5){
    document.getElementById(P_ID).innerHTML = `Через ${days} дня`
    return
  }
  if (days==5){
    document.getElementById(P_ID).innerHTML = `Через ${days} дней`
    return
  }
  if (days>5 && days<14){
    document.getElementById(P_ID).innerHTML = `На следующей неделе`
    return
  }
  let i=0
  let numberMonth=now.getMonth()
  for (i; month!=numberMonth; i++){
    numberMonth++
    if (numberMonth==12) numberMonth=0
  }
  if (i==0){
    document.getElementById(P_ID).innerHTML = `В следующем году`
    return
  }
  if (i==1){
    document.getElementById(P_ID).innerHTML = `В следующем месяце`
    return
  }
  if (i==6){
    document.getElementById(P_ID).innerHTML = `Через пол года`
    return
  }
  if (i==2 || i==3 || i==4){
    document.getElementById(P_ID).innerHTML = `Через ${i} месецa`
    return
  }
  document.getElementById(P_ID).innerHTML = `Через ${i} месецев`
}

creatInput()
creatSelect()
createParagraph()
