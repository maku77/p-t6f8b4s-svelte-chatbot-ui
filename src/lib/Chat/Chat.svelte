<script lang="ts" context="module">
	export { type ChatBubbleData } from './ChatBubble.svelte';
</script>

<script lang="ts">
	import { tick } from 'svelte';

	import ChatBubble, { type ChatBubbleData } from './ChatBubble.svelte';
	import ChatInput from './ChatInput.svelte';

	/** 表示するユーザメッセージと Bot メッセージのリスト */
	export let bubbles: ChatBubbleData[] = [];

	/** ユーザー入力が完了したときに呼び出されるコールバック関数 */
	export let onSend: (userMessage: string) => void;

	// 自動スクロール用に HTML 要素の参照を保持する。
	let bubbleAreaElem: HTMLElement;

	$: {
		bubbles; // メッセージが更新されたら反応するように
		tick().then(() => {
			// 要素の高さを取得するため DOM の更新を待ってから自動スクロール
			bubbleAreaElem?.scrollTo({ top: bubbleAreaElem.scrollHeight, behavior: 'smooth' });
		});
	}
</script>

<div class="container">
	<div class="bubbleArea" bind:this={bubbleAreaElem}>
		{#each bubbles as bubble}
			<ChatBubble {bubble} />
		{/each}
	</div>
	<div class="inputArea">
		<ChatInput {onSend} />
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column; /* 縦方向に並べる */
		height: 100%;
		padding: 0.5rem;
	}

	.bubbleArea {
		flex: 1; /* 残りの高さを全て使う */
		overflow: hidden; /* はみ出たテキストは隠す */
		overflow-y: auto; /* はみ出たらスクロールバーを自動表示 */
	}

	.inputArea {
		margin-top: 0.5rem;
	}
</style>
