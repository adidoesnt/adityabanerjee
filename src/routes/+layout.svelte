<script defer>
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import '../app.css';
	import Github from '../icons/Github.svg';
	import Linkedin from '../icons/Linkedin.svg';
	import Instagram from '../icons/Instagram.svg';
	import Gmail from '../icons/Gmail.svg';
	import Facebook from '../icons/Facebook.svg';
	import DarkMode from '../icons/DarkMode.svg';
	import Hamburger from '../icons/Hamburger.svg';
	const github_url = import.meta.env.VITE_GITHUB_URL;
	const gmail_url = import.meta.env.VITE_GMAIL_URL;
	const instagram_url = import.meta.env.VITE_INSTAGRAM_URL;
	const facebook_url = import.meta.env.VITE_FACEBOOK_URL;
	const linkedin_url = import.meta.env.VITE_LINKEDIN_URL;
	const queryClient = new QueryClient();

	const toggleDarkMode = () => {};
	const toggleHamburger = () => {
		const mobileNav = document.getElementById('mobileNav');
		mobileNav?.classList.toggle('hidden');
		mobileNav?.classList.toggle('flex');
	};
</script>

<div id="main" class="grid grid-rows-[auto_1fr_auto] min-h-screen bg-[#161923] text-white">
	<header class="flex justify-around my-8 items-center">
		<a href="/">
			<h1 class="font-bold text-xl xs:text-2xl sm:text-3xl md:text-4xl mx-4 xs:mx-8">
				Aditya Banerjee
			</h1>
		</a>
		<nav class="hidden lg:flex mx-24 gap-16 text-lg">
			<a href="/about">About</a>
			<a href="/resume">Resume</a>
			<a href="/projects">Projects</a>
			<a href="/blog">Blog</a>
			<a href="/acknowledgements">Acknowledgements</a>
		</nav>
		<button on:click={toggleDarkMode} class="hidden">
			<img
				class="mx-8 dark:drop-shadow-[10_0_30_#F4FFB0]"
				src={DarkMode}
				alt={'Dark mode toggle'}
			/>
		</button>
		<button class="lg:hidden" on:click={toggleHamburger}
			><img class="mx-8" src={Hamburger} alt={'Hamburger menu'} /></button
		>
		<div
			id="mobileNav"
			class="hidden fixed flex-col inset-0 items-center justify-center z-10 bg-[#161923] bg-opacity-75 backdrop-blur-md text-center"
		>
			<button class="absolute right-0 top-0 m-10" on:click={toggleHamburger}>Close</button>
			<button on:click={toggleHamburger}>
				<nav class="flex flex-col gap-2">
					<a class="text-2xl font-semibold" href="/">Home</a>
					<a class="text-2xl font-semibold" href="/about">About</a>
					<a class="text-2xl font-semibold" href="/resume">Resume</a>
					<a class="text-2xl font-semibold" href="/projects">Projects</a>
					<a class="text-2xl font-semibold" href="/blog">Blog</a>
					<a class="text-2xl font-semibold" href="/acknowledgements">Acknowledgements</a>
				</nav></button
			>
		</div>
	</header>
	<QueryClientProvider client={queryClient}>
		<slot />
	</QueryClientProvider>
	<footer class="flex justify-around my-8">
		<div class="sm:w-[50px] md:w-[60px] w-[40px]">
			<a href={github_url} target="_blank"><img src={Github} alt="Github Logo" /></a>
		</div>
		<div class="sm:w-[50px] md:w-[60px] w-[40px]">
			<a href={linkedin_url} target="_blank"><img src={Linkedin} alt="Linkedin Logo" /></a>
		</div>
		<div class="sm:w-[50px] md:w-[60px] w-[40px]">
			<a href={gmail_url} target="_blank"><img src={Gmail} alt="Gmail Logo" /></a>
		</div>
		<div class="sm:w-[50px] md:w-[60px] w-[40px]">
			<a href={facebook_url} target="_blank"><img src={Facebook} alt="Facebook Logo" /></a>
		</div>
		<div class="sm:w-[50px] md:w-[60px] w-[40px]">
			<a href={instagram_url} target="_blank"><img src={Instagram} alt="Instagram Logo" /></a>
		</div>
	</footer>
</div>
