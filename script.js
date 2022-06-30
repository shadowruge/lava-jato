<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lava-Jato</title>
  <link rel="shortcut icon" href="#" type="image/x-icon">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="style.css">
  <title>Lava-Jato</title>
</head>
<style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

body{
    background-color: aqua;
}

nav{
    text-align: center;
    background-color: blue;
    color: white;
    padding: 40px;
    font-size: 50px;
}

#view {
    padding: 10px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
}

table {
    border-collapse: collapse;
    width: 100%;
}
</style>

<body>
        <nav>
            <span>Lava-Jato do Galpão</span>
        </nav>
<main>
    <label for="">Tipo de serviço</label>
    <input id="service" type="text"><br>
    <label for="">Modelo do veículo</label>
    <input id="modelo" type="text"><br>
    <label for="">Placa</label>
    <input id="placa" type="text"><br>
    <label for="">Valor</label>
    <input id="valor" type="text">
    <button onclick="salvar()">Cadastro</button>
    
    <script src="script.js"></script>
</main>
<br><hr>
<div id="view"></div>
</body>
</html>