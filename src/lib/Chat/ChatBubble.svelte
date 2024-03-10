<script lang="ts" context="module">
	/** ChatBubble に表示するデータの型。 */
	export type ChatBubbleData = {
		name: 'You' | 'Bot';
		content: string;
	};
</script>

<script lang="ts">
	/** ChatBubble に表示する情報 */
	export let bubble: ChatBubbleData;
</script>

<div class="container">
	<span class="name">{bubble.name}:</span>
	{bubble.content}
</div>

<style>
	.container {
		padding: 0.5em;
		border-bottom: solid 1px lightgray;
	}

	.name {
		font-weight: bold;
		margin-right: 0.5em;
	}
</style>
