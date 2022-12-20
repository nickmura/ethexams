<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown-light.min.css"/>
</svelte:head>

<script>
	//@ts-ignore
	import { goto } from '$app/navigation';
	
	
	
	function gotoBeta() {
		goto('/exams/general')
	}
	</script>
	
	<main class='markdown-body'>
		<h1>ethexams.com</h1>
		<p>
			ETHexams is a community based, open source education initative intended to develop questionnaires (exams and quizzes) 
			for anyone who wants to measure their learning progress, evaluate their understanding, or identify gaps in their knowledge of Ethereum. 
			Everyone is encouraged to review and submit knowledge, resources, information, and validate our resources provided, contributing to the 
			mission of this project. Our goals are to... 
		</p>
	
			<p>    
				<li>Provide concise and educational information for Ethereum</li>
				<li>Cover multiple aspects of knowledge for Ethereum (Transactions, consensus, cryptography, solidity, infrastructure, etc)</li>
				<li>Provide a challenging educational resource, with dedication for providing the best quality information with the review of the community</li>
				<li>Encourage others to submit knowledge and support the initative, aswell as provide suggestions!</li>
				<li>Provide video demonstrations and flash card style exercises for various topics and levels of understanding</li>
				<li>Provide security challenges for users for different topics!</li>
			</p>
			<div>
				<b>The resources, and references used for this project..</b>
				<div class='mt-2'>
					<li>Mastering Ethereum by Andreas M. Antonopoulos (<a href="https://github.com/ethereumbook/ethereumbook/blob/develop/book.asciidoc"target="_blank" rel="noreferrer">github version</a> or on <a href="https://www.amazon.com/Mastering-Ethereum-Building-Smart-Contracts/dp/1491971940">Amazon US</a>)</li>
					<li><a href="https://ethereum.org/en/developers/docs/ "target="_blank" rel="noreferrer">Ethereum.org</a> development documentation</li>
					<li><a href="https://docs.soliditylang.org/" target="_blank" rel="noreferrer">Soliditylang.org</a> (Solidity) documentation</li>
				</div>
			</div>
			
	
			<div class="beta">
				<i>Try a prototype of a basic comprehension test here!</i><button class='ml-3 px-2 py-2 border rounded-lg bg-green-500  text-white text-bold hover:bg-green-500 hover:scale-[1.07] transition transition-200' on:click={gotoBeta}>Try beta test</button>
			</div>
			<div class="contact">
				<p><i><b>For any details or more questions, regards to contributing, please email nickmuradev@gmail.com</b></i></p>
			</div>
	
	</main>
	
	
	<style>
		.contact {
			font-size: 13px;
			margin-top: 60px;
			display: flex;
			justify-content: center;
		}
		main {
			
			box-sizing: border-box;
			min-width: 200px;
			max-width: 980px;
			margin: 0 auto;
			padding: 45px;
		}
	
		@media (max-width: 767px) {
			main {
				padding: 15px;
			}
		}
	</style>