function salvar() {
    document.getElementById("service").value
    document.getElementById("modelo").value
    document.getElementById("placa").value
    document.getElementById("valor").value
  
    dayName = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
    monName = new Array("Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
    now = new Date
    fuldate = {
      hora: now.getHours(),
      minutos: now.getMinutes(),
      dia: dayName[now.getDay()],
      data: now.getDate(),
      mes: now.getMonth() + 1,
      ano: now.getFullYear()
    }
  
    patio =
      `<div>
    <table border=",1">
    <tr>
      <td>Serviço</td>
      <td>Modelo</td>
      <td>Placa</td>
      <td>Valor</td>
      <td>Dia</td>
      <td>Data</td>
      <td>Mês</td>
      <td>Ano</td>
    </tr>
    
    <tr>
      <td> ${service.value}</td>
      <td> ${modelo.value}</td>
      <td> ${placa.value}</td>
      <td> ${valor.value}</td>
      <td>${dayName[now.getDay()]}</td>
      <td>${now.getDate()}</td>
      <td> ${monName[now.getMonth()]}</td>
      <td>${now.getFullYear()}</td>
    </tr>
    </table>

    </div>`
    document.getElementById("view").innerHTML += patio
  }