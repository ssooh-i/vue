<template>
  <div>
  <!-- Header -->
  <header id="header">
						<div class="inner">

							<!-- Logo -->
								<a href="#" class="logo">
									<span class="symbol"><img src="#" alt="" /></span><span class="title">where is my house</span>
								</a>

							<!-- Nav -->
								<nav>
									<ul>
										<li><a href="#menu">Menu</a></li>
									</ul>
								</nav>

						</div>
					</header>

				<!-- Menu -->
					<nav id="menu">
						<h2>Menu</h2>
						<ul>
							<li><a href="file:///C:/Users/82107/Desktop/21.1%ED%95%99%EA%B8%B0/%EC%A2%85%ED%95%A9%EC%84%A4%EA%B3%84/%EC%A2%85%EC%84%A4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/main.html">HOME</a></li>
							<li><a href="file:///C:/Users/82107/Desktop/21.1%ED%95%99%EA%B8%B0/%EC%A2%85%ED%95%A9%EC%84%A4%EA%B3%84/%EC%A2%85%EC%84%A4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/main.html">CHART</a></li>
						</ul>
					</nav>
          </div>
</template>

<script>

export default {
  
  name: 
  
};
</script>

<style scoped lang="scss">
	#main {
		@include padding(5em, 0, (-5em, 0, 3em, 0));

		@include breakpoint('<=small') {
			@include padding(3em, 0, (-3em, 0, 3em, 0));
		}
	}

/* Menu */

#wrapper {
		@include vendor('transition', 'opacity #{_duration(menu)} ease');
		opacity: 1;
	}

	#menu {
		@include vendor('transform', 'translateX(#{_size(menu)})');
		@include vendor('transition', ('transform #{_duration(menu)} ease', 'visibility #{_duration(menu)}'));
		position: fixed;
		top: 0;
		right: 0;
		width: _size(menu);
		max-width: 80%;
		height: 100%;
		-webkit-overflow-scrolling: touch;
		background: _palette(fg);
		color: _palette(bg);
		cursor: default;
		visibility: hidden;
		z-index: _misc(z-index-base) + 2;

		> .inner {
			@include vendor('transition', 'opacity #{_duration(menu)} ease');
			-webkit-overflow-scrolling: touch;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			padding: 2.75em;
			opacity: 0;
			overflow-y: auto;

			> ul {
				list-style: none;
				margin: 0 0 (_size(element-margin) * 0.5) 0;
				padding: 0;

				> li {
					padding: 0;
					border-top: solid 1px transparentize(_palette(bg), 0.85);

					a {
						display: block;
						padding: 1em 0;
						line-height: 1.5;
						border: 0;
						color: inherit;
					}

					&:first-child {
						border-top: 0;
						margin-top: -1em;
					}
				}
			}
		}

		> .close {
			@include vendor('transition', (
				'opacity #{_duration(menu)} ease',
				'transform #{_duration(menu)} ease'
			));
			@include vendor('transform', 'scale(0.25) rotate(180deg)');
			-webkit-tap-highlight-color: transparent;
			display: block;
			position: absolute;
			top: 2em;
			left: -6em;
			width: 6em;
			text-indent: 6em;
			height: 3em;
			border: 0;
			font-size: 1em;
			opacity: 0;
			overflow: hidden;
			padding: 0;
			white-space: nowrap;

			&:before, &:after {
				@include vendor('transition', 'opacity #{_duration(transition)} ease');
				content: '';
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-position: center;
				background-repeat: no-repeat;
				background-size: 2em 2em;
			}

			&:before {
				background-image: svg-url('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none"><style>line { stroke-width: 8px; stroke: #{_palette(accent1)}; }</style><line x1="15" y1="15" x2="85" y2="85" /><line x1="85" y1="15" x2="15" y2="85" /></svg>');
				opacity: 0;
			}

			&:after {
				background-image: svg-url('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none"><style>line { stroke-width: 8px; stroke: #{_palette(fg)}; }</style><line x1="15" y1="15" x2="85" y2="85" /><line x1="85" y1="15" x2="15" y2="85" /></svg>');
				opacity: 1;
			}

			&:hover {
				&:before {
					opacity: 1;
				}

				&:after {
					opacity: 0;
				}
			}
		}

		@include breakpoint('<=small') {
			@include vendor('transform', 'translateX(#{_size(menu) * 0.75})');
			width: (_size(menu) * 0.75);

			> .inner {
				padding: 2.75em 1.5em;
			}

			> .close {
				top: 0.5em;
				left: -4.25em;
				width: 4.25em;
				text-indent: 4.25em;

				&:before, &:after {
					background-size: 1.5em 1.5em;
				}
			}
		}
	}

	body.is-menu-visible {
		#wrapper {
			@include vendor('pointer-events', 'none');
			cursor: default;
			opacity: 0.25;
		}

		#menu {
			@include vendor('transform', 'translateX(0)');
			visibility: visible;

			> * {
				opacity: 1;
			}

			.close {
				@include vendor('transform', 'scale(1.0) rotate(0deg)');
				opacity: 1;
			}
		}
	}

/* Header */

#header {
		@include padding(5em, 0, (3em, 0, -5em, 0));

		.logo {
			display: block;
			border-bottom: 0;
			color: inherit;
			font-weight: _font(weight-bold);
			letter-spacing: _font(letter-spacing);
			margin: 0 0 (_size(element-margin) * 1.25) 0;
			text-decoration: none;
			text-transform: uppercase;
			display: inline-block;

			> * {
				display: inline-block;
				vertical-align: middle;
			}

			.symbol {
				margin-right: 0.65em;

				img {
					display: block;
					width: 2em;
					height: 2em;
				}
			}
		}

		nav {
			position: fixed;
			right: 2em;
			top: 2em;
			z-index: _misc(z-index-base);

			ul {
				@include vendor('display', 'flex');
				@include vendor('align-items', 'center');
				list-style: none;
				margin: 0;
				padding: 0;

				li {
					display: block;
					padding: 0;

					a {
						display: block;
						position: relative;
						height: 3em;
						line-height: 3em;
						padding: 0 1.5em;
						background-color: transparentize(_palette(bg), 0.5);
						border-radius: _size(border-radius);
						border: 0;
						font-size: 0.8em;
						font-weight: _font(weight-bold);
						letter-spacing: _font(letter-spacing);
						text-transform: uppercase;
					}

					a[href="#menu"] {
						-webkit-tap-highlight-color: transparent;
						width: 4em;
						text-indent: 4em;
						font-size: 1em;
						overflow: hidden;
						padding: 0;
						white-space: nowrap;

						&:before, &:after {
							@include vendor('transition', 'opacity #{_duration(transition)} ease');
							content: '';
							display: block;
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							background-position: center;
							background-repeat: no-repeat;
							background-size: 2em 2em;
						}

						&:before {
							background-image: svg-url('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none"><style>line { stroke-width: 8px; stroke: #{_palette(accent1)}; }</style><line x1="0" y1="25" x2="100" y2="25" /><line x1="0" y1="50" x2="100" y2="50" /><line x1="0" y1="75" x2="100" y2="75" /></svg>');
							opacity: 0;
						}

						&:after {
							background-image: svg-url('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none"><style>line { stroke-width: 8px; stroke: #{_palette(fg)}; }</style><line x1="0" y1="25" x2="100" y2="25" /><line x1="0" y1="50" x2="100" y2="50" /><line x1="0" y1="75" x2="100" y2="75" /></svg>');
							opacity: 1;
						}

						&:hover {
							&:before {
								opacity: 1;
							}

							&:after {
								opacity: 0;
							}
						}
					}
				}
			}
		}

		@include breakpoint('<=small') {
			@include padding(3em, 0, (1em, 0, -3em, 0));

			nav {
				right: 0.5em;
				top: 0.5em;

				ul {
					li {
						a[href="#menu"] {
							&:before, &:after {
								background-size: 1.5em 1.5em;
							}
						}
					}
				}
			}
		}
	}
</style>
