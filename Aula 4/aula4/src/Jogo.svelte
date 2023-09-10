<script>
	import Jogador from "./Jogador.svelte";
	let num = 0;

	function marcaGol(){
		console.log("Marcou GOL");
		console.log(num);
		num = num + 1;
	}
</script>

<main>
	<h1> Marcando Gols </h1>
	<Jogador acao = {marcaGol} />
	<p>{num}</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: black;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>