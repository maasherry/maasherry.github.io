/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	// Get the modal
	var modal = document.getElementById("myModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var imgsweetjubilee = document.getElementById("sweetjubilee");
	var imglavender = document.getElementById("lavender");
	var imgXX = document.getElementById("XX");
	var imgdolphin = document.getElementById("dolphin");
	var imgsalmon = document.getElementById("salmon");
	var imgmint = document.getElementById("mint");
	var imgpeacock = document.getElementById("peacock");
	var imgfern = document.getElementById("fern");
	var imgtorn2 = document.getElementById("torn2");
	var imgtorn3 = document.getElementById("torn3");
	var imglemon = document.getElementById("lemon");
	var imgdandelion = document.getElementById("dandelion");
	var imgmissingme = document.getElementById("missingme");


	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");


	imgsweetjubilee.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = "<h6>SWEET JUBILEE</h6><br/> 2018 <br /> Acrylic on panel <br /> 16 x 16 in. <br /> Price: $185 (framed)"
	}

	imglavender.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = "<h6>LAVENDER</h6><br/>2018 <br /> Acrylic on panel <br /> 16 x 16 in. <br /> Price: $185 (framed)"
	}

	imgXX.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = "<h6>XX</h6><br/>2018 <br /> Acrylic on panel <br /> 16 x 16 in. <br /> Price: $165 (framed)"
	}
	imgdolphin.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = "<h6>UNTITLED No.1</h6><br/>2018 <br /> Acrylic and sumi ink on panel <br /> 16 x 16 in. <br /> Price: $185 (framed)"
	}
	imgsalmon.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = "<h6>UNTITLED No.2</h6><br/>2018 <br /> Acrylic and sumi ink on panel <br /> 16 x 16 in. <br /> Price: $185 (framed)"
	}
	imgmint.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = "<h6>UNTITLED No.3</h6><br/>2018 <br /> Acrylic and sumi ink on panel <br /> 16 x 16 in. <br /> Price: $185 (framed)"
	}
	imgpeacock.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = "<h6>PEACOCK</h6><br/>2018 <br /> Acrylic on panel <br /> 16 x 16 in. <br /> Price: $185 (framed)"
	}
	imgfern.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = "<h6>FERN</h6><br/>2018 <br /> Acrylic on panel <br /> 16 x 16 in. <br /> Price: $185 (framed)"
	}
	imgtorn2.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = "<h6>TORN II</h6><br/>2018 <br /> Acrylic on cradled panel <br /> 12 x 12 in. <br /> Price: $95 (unframed)"
	}
	imgtorn3.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = "<h6>TORN III</h6><br/>2018 <br /> Acrylic on cradled panel <br /> 12 x 12 in. <br /> Price: $95 (unframed)"
	}
	imglemon.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = "<h6>LEMON</h6><br/>2018 <br /> Acrylic on panel <br /> 18 x 18 in. <br /> Price: $200 (framed)"
	}
	imgdandelion.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = "<h6>DANDELION</h6><br/>2018<br /> Acrylic on panel <br /> 16 x 16 in. <br /> Price: $185 (framed)"
	}
	imgmissingme.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = "<h6>MISSING ME</h6><br/>2018<br /> Acrylic on panel <br /> 18 x 18 in. <br /> Price: $200 (framed)"
	}

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	modal.style.display = "none";
	}
	
	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Prevent default.
					e.preventDefault();

				// Deactivate all links.
					$nav_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
					$section.scrollex({
						mode: 'middle',
						top: '-10vh',
						bottom: '-10vh',
						initialize: function() {

							// Deactivate section.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// Otherwise, if this section's link is the one that's locked, unlock it.
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	// Scrolly.
		$('.scrolly').scrolly();

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});

})(jQuery);