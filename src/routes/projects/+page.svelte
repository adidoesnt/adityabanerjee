<script lang="ts">
	import { useQuery } from '@sveltestack/svelte-query';
	import Link from '../../icons/Link.svg';
	import axios from 'axios';
	const REPOS = import.meta.env.VITE_GITHUB_API_URL;
	const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
	const NO_DESC = '<i>-- No Description Provided --</i>';

	const projectsQuery = useQuery<any, Error>('getRepos', () =>
		axios
			.get(REPOS, {
				headers: {
					Authorization: `Bearer ${TOKEN}`
				}
			})
			.then((res) => res.data)
	);
</script>

{#if $projectsQuery.isLoading}
	<div class="flex justify-center items-center">
		<h1>Loading...</h1>
	</div>
{:else if $projectsQuery.isError}
	<p>{$projectsQuery.error.message}</p>
{:else}
	<div class="flex flex-col max-w-[90%] m-auto gap-6 items-center">
		<h1 class="text-2xl md:text-3xl lg:text-4xl font-bold">Projects</h1>
		<hr class="border border-white w-48" />
		<ul
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row max-h-[57.5vh] md:max-h-[55vh] lg:max-h-[50vh] overflow-y-auto"
		>
			{#each $projectsQuery.data as repository}
				<li class="flex justify-center items-center">
					<div
						class="grid grid-rows-[50px_auto_75px_auto] w-[300px] bg-[#2D3748] m-4 p-4 gap-4 rounded-lg"
					>
						<h1 class="text-center font-bold text-lg">{repository.name}</h1>
						<hr />
						<p class="text-base">{@html repository.description || NO_DESC}</p>
						<a target="_blank" class="" href={repository.html_url}>
							<img src={Link} alt="Repository Link" />
						</a>
					</div>
				</li>
			{/each}
		</ul>
	</div>
{/if}
