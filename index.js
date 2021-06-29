document.addEventListener("DOMContentLoaded", function() {
	let audio = document.getElementById("song");
	audio.loop = true;
	audio.volume = 1;
	let volume = document.getElementById("volume");
	volume.addEventListener("click", function() {
			if (audio.paused) {
					audio.play()
					this.children[0].classList.remove("fa-play");
					this.children[0].classList.add("fa-pause");
			}
			else {
					audio.pause();
					this.children[0].classList.remove("fa-pause");
					this.children[0].classList.add("fa-play");			
				}
	});
});