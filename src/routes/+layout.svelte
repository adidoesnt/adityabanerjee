<script>
	import '../app.css';
	import Github from '../icons/Github.svg';
	import Linkedin from '../icons/Linkedin.svg';
	import Instagram from '../icons/Instagram.svg';
	import Gmail from '../icons/Gmail.svg';
	import Facebook from '../icons/Facebook.svg';
	import DarkMode from '../icons/DarkMode.svg';
	import Hamburger from '../icons/Hamburger.svg';
</script>

<div class="grid grid-rows-[auto_1fr_auto] min-h-screen bg-[#161923] text-white">
	<header class="flex justify-around my-8 items-center">
		<h1 class="font-bold text-4xl mx-8">Aditya Banerjee</h1>
		<nav class="hidden md:flex mx-24 gap-16 text-lg">
			<a href="/about">About</a>
			<a href="/resume">Resume</a>
			<a href="/projects">Projects</a>
			<a href="/blog">Blog</a>
			<a href="/acknowledgements">Acknowledgements</a>
		</nav>
		<div><img class="mx-8" src={DarkMode} alt={'Dark mode toggle'} /></div>
		<div class="md:hidden"><img class="mx-8" src={Hamburger} alt={'Hamburger menu'} /></div>
	</header>
	<slot />
	<footer class="flex justify-around my-8">
		<div class="sm:w-[80px] md:w-[60px] w-[40px]"><img src={Github} alt="Github Logo" /></div>
		<div class="sm:w-[80px] md:w-[60px] w-[40px]"><img src={Linkedin} alt="Linkedin Logo" /></div>
		<div class="sm:w-[80px] md:w-[60px] w-[40px]"><img src={Gmail} alt="Gmail Logo" /></div>
		<div class="sm:w-[80px] md:w-[60px] w-[40px]"><img src={Facebook} alt="Facebook Logo" /></div>
		<div class="sm:w-[80px] md:w-[60px] w-[40px]"><img src={Instagram} alt="Instagram Logo" /></div>
	</footer>
</div>
