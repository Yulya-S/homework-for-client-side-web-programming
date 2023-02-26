const daysWeek = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресение']
const today = new Date().getDate()

function createP(values) {
  const p = document.createElement('p')
  p.innerHTML = values
  if (values===today){
    p.style.backgroundColor = '#d28187'
    p.style.color = 'white'
  }
  if (values==="")
    p.style.backgroundColor = '#e0dfde'
  document.body.querySelector('.grid').appendChild(p)
}

function calendar(){
  let date = new Date()
  let ravno = 0;
  const maxDays = new Date(new Date().getFullYear(), date.getMonth()+1, 0).getDate()
  document.getElementById('text').innerHTML=date.toLocaleString('ru-RU',{month: 'long'})
  for (let i=0; i<7; i++)
    createP(daysWeek[i])
  date.setDate(1)
  for (let i=0; i<date.getDay()-1; i++){
    ravno++
    createP("")
  }
  for (let i=1; i<maxDays+1; i++){
    ravno++
    createP(i)
  }
  for (ravno; ravno%7!=0; ravno++)
    createP("")
}

calendar()
