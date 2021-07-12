if (document.documentElement.clientWidth > 1024) {
	const scenes = document.querySelectorAll('.paralax-scene');
	scenes.forEach((el) => {
		const scene = new Parallax(el);
	});
}