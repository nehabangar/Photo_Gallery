document.addEventListener("DOMContentLoaded", function () {
	// Get the featured image and thumbnail list elements
	const featuredImage = document.getElementById("featured-image");
	const thumbnailList = document.getElementById("thumbnail-list");

	// Add click event listener to the thumbnail list
	thumbnailList.addEventListener("click", function (event) {
		if (event.target.tagName === "IMG") {
			const thumbnailImages = thumbnailList.querySelectorAll("img");

			// Remove the 'selected' class from all thumbnail images
			thumbnailImages.forEach((img) => img.parentElement.classList.remove("selected"));

			// Add the 'selected' class to the clicked thumbnail image's parent <li>
			event.target.parentElement.classList.add("selected");

			// Update the featured image and caption with the clicked thumbnail's data
			featuredImage.src = event.target.dataset.largeSrc;
			featuredImage.alt = event.target.alt;
			const caption = featuredImage.nextElementSibling;
			caption.textContent = event.target.dataset.title;
		}
	});
});