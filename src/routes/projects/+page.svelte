<script>
	import Link from '../../icons/Link.svg';
	import axios from 'axios';
	const REPOS = import.meta.env.VITE_GITHUB_API_URL;
	const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
	const projectsPromise = axios.get(REPOS, {
		headers: {
			Authorization: `Bearer ${TOKEN}`
		}
	});
</script>

{#await projectsPromise}
	<div class="flex justify-center items-center">
        <h1>Loading...</h1>
    </div>
{:then response}
	<div class="flex flex-col max-w-[90%] m-auto gap-6 items-center">
		<h1 class="text-2xl md:text-3xl lg:text-4xl font-bold">Projects</h1>
		<hr class="border border-white w-48" />
		<ul
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row max-h-[57.5vh] lg:max-h-[50vh] overflow-y-auto"
		>
			{#each response.data as repository}
				<li class="flex justify-center items-center">
					<div class="flex flex-col w-[300px] h-[200px] bg-[#2D3748] m-4 p-4 gap-4 rounded-lg">
						<h1 class="text-center font-bold text-lg">{repository.name}</h1>
						<hr />
						<p class="text-base">{repository.description}</p>
					</div>
					<a target="_blank" class="-translate-x-12 translate-y-20" href={repository.html_url}>
						<img src={Link} alt="Repository Link" />
					</a>
				</li>
			{/each}
		</ul>
	</div>
{:catch error}
	<p>{error.message}</p>
{/await}
