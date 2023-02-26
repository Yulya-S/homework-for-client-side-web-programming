const SIZE = 10
const GRIDSIZE = (SIZE * 50 + 15 * SIZE +30 )+ 'px'

function createP(values, color) {
  const p = document.createElement('p')
  if (values==0)
    p.innerHTML = ""
  else
    p.innerHTML = values
  if (color==1)
    p.style.backgroundColor = '#eadfcb'
  if (color==2)
    p.style.backgroundColor = '#cbead7'
  document.body.querySelector('.grid').appendChild(p)
}

function calendar(){
  let number=1
  document.body.querySelector('.grid').style.width=GRIDSIZE
  for (let i=0; i<=SIZE; i++){
    for (let j=0; j<=SIZE; j++){
      if (i==0)
        createP(j, 1)
      if (i!=0){
        if (j==0){
          createP(i, 1)
          number++
        }
        else{
          if (j==i)
            createP(j*i, 2)
          else
            createP(j*i)
        }
      }
    }
  }

  //for (let i=0; i<7; i++)
    //createP(daysWeek[i])
  //date.setDate(1)
  //for (let i=0; i<date.getDay()-1; i++){
    //ravno++
    //createP("")
  //}
  //for (let i=1; i<maxDays+1; i++){
    //ravno++
    //createP(i)
  //}
  //for (ravno; ravno%7!=0; ravno++)
    //createP("")
}

calendar()
