<script>
	let peso = 0;
	let altura = 0;
	let imc = 0;

	function calcularIMC(){
	if(peso > 0 && altura > 0){
		imc = peso/Math.pow(altura,2).toFixed(2);
	}
	else{
		imc = 0;
	}
	}

</script>
<body>
<main>
	<h1>Calculadora de IMC</h1>
	<label>
	  <strong> Peso </strong> (kg): <input type="number" bind:value={peso} on:input={calcularIMC} />
	</label>
	<label>
	  <strong> Altura </strong> (m): <input type="number" bind:value={altura} on:input={calcularIMC} />
	</label>
	{#if imc > 0}
	  <p>Seu IMC é {imc}</p>
	{#if imc > 39}
	  <p style="color: red;">obeseidade grau 3(mórbida)</p>
	{/if}
	{#if imc >= 35 && imc < 40}
	  <p style="color: orange;">obeseidade grau 2(severa)</p>
	{/if}
	{#if imc >= 30 && imc < 35}
	  <p style="color: yellow;">Obesidade grau 1</p>
	{/if}
	{#if imc >= 25 && imc < 30}
	  <p style="color: yellow;">Levemene acima do peso</p>
	{/if}
	{#if imc >= 18.5 && imc < 25}
	  <p style="color: green;">Peso ideal, parabens!</p>
	{/if}
	{#if imc < 18.5}
	  <p style="color: yellow;">Abaixo do peso</p>
	{/if}
	{/if}
</main>
</body>
<style>
	main {
	  font-family: sans-serif;
	  text-align: center;
	  padding: 2rem;
	}
  
	h1 {
	  font-size: 1.5rem;
	  margin-bottom: 1rem;
	  background-color: rgb(0, 213, 255);
	}

	body{
		background-color: lightblue;
	}
  
	label {
	  display: block;
	  margin-bottom: 0.5rem;
	  
	}
  
	input {
	  padding: 0.25rem;
	}
</style>