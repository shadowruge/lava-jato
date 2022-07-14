const service = document.getElementById('service')
const model = document.getElementById('model')
const license_plate = document.getElementById('license_plate')
const price = document.getElementById('price')
const total = parseInt(document.getElementById('total').value)

const fullDate = () => {
  
//Days of the week 
  dayName = new Array(
    "domingo",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sábado")

//Months of the year
  monName = new Array(
    "Janeiro",
    "Fevereiro",
    "Marco",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro")

//Corrent date
  now = new Date
  fulldate = {
    hora: now.getHours(),
    minutos: now.getMinutes(),
    dia: dayName[now.getDay()],
    data: now.getDate(),
    mes: now.getMonth() + 1,
    ano: now.getFullYear()
  }

}

//Cars in the yard
const noPatio = () => {
  patioIndom =
    `<li>
    Serviço: ${service.value} 
    Modelo: ${model.value}
    Placa: ${license_plate.value}
    Valor: ${price.value}
    Dia: ${dayName[now.getDay()]}
    Data: ${now.getDate()}
    Mês: ${monName[now.getMonth()]}
    Ano: ${now.getFullYear()}
    Hora: ${now.getHours()}
    Minutos: ${now.getMinutes()}
    <hr>
  </li>`

  //Elements displayed in the Dom 
  document.getElementById("view").innerHTML += patioIndom;
}

const soma=()=>{
const a = [parseInt(document.getElementById('price').value)];
const total = a.reduce((acumulator, item)=>acumulator+=item);
console.log(total);

}

const salvar=()=> {

  fullDate()
  noPatio()
  soma()  
}
