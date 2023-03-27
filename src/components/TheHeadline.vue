<template>
  <section>
    <h1>Build for Everyone</h1>
    <h2>Find your next job at Google</h2>
  </section>
</template>

<script>
export default {
  name: "TheHeadline",
	data() {
		return {
			sample: "Hello!"m
		};
	},
	created() {
		console.log("Hey, I've been created. My data exists. Look: ", this.sample)
	}
};
</script>
