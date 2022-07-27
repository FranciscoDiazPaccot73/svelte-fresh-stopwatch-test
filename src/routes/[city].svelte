<script context="module">
	export const prerender = true;
</script>

<script>
	import logo from './svelte-logo.svg';
	import Stopwatch from '../lib/Stopwatch.svelte';
  export let data;
</script>

<svelte:head>
	<title>Stopwatch</title>
	<meta name="description" content="Svelte stopwatch app" />
</svelte:head>

<section>
	<div class="wrapper">
		<div class="wrapper_content">
			<img
				src={logo}
				class='logo'
				alt="the fresh logo: a sliced lemon dripping with juice"
			/>
			<div class="content">
				<div content="weather-wrapper">
					<div class="temperature">{`${Math.floor(data?.temp || 0)}° C`}</div>
					<img class='weather_image' src={`http://openweathermap.org/img/w/${data?.icon}.png`} alt={data?.description} />
					<div class='weather_info'>
						<div>
							<span class="weather_text">{data?.name}</span>
								&bull;
							<span class="weather_text">{data?.main}</span>
						</div>
						<span class='weather_description'>{data?.description}</span>
					</div>
				</div>
			</div>
		</div>
		<p style={{
			fontSize: '20px'
		}}> Stopwatch using Fresh</p>
		<Stopwatch />
	</div>
</section>

<style>
	.wrapper {
		display: flex;
		max-width: 1200px;
		margin: 16px auto;
		padding: 0 16px;
		flex-direction: column;
		align-items: center;
	}
	.logo {
		height: 100px;
		width: 100px;
	}
	.content {
		position: absolute;
		right: 16px;
	}
	.weather-wrapper {
		position: relative;
	}
	.temperature {
		position: absolute;
		right: -4px;
		font-size: 20px;
		top: 10px;
		font-weight: 600;
	}
	.wrapper_content {
		position: relative;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.weather_image {
		height: 50px;
		width: 50px;
	}
	.weather_info {
		margin-top: -18px;
	}
	.weather_text {
		font-size: 14px;
		margin-right: 4px;
	}
	.weather_description {
		font-size: 12px;
	}
</style>
