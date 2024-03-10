<script lang="ts">
	/** ユーザー入力テキスト */
	let text = '';

	/** ユーザー入力が完了したときに呼び出されるコールバック関数 */
	export let onSend: (userMessage: string) => void;

	function handleSubmit() {
		if (text) {
			onSend(text);
			text = ''; // Clear the input
		}
	}
</script>

<!-- チャットウィンドウの入力欄 -->
<form class="container" on:submit|preventDefault={handleSubmit}>
	<!-- svelte-ignore a11y-autofocus -->
	<input
		class="chat-input"
		type="text"
		autofocus
		bind:value={text}
		placeholder="Write a message..."
	/>
	<button class="send-button" type="submit">Send</button>
</form>

<style>
	.container {
		display: flex;
	}

	/* チャットウィンドウの入力欄のスタイル */
	.chat-input {
		flex: 1; /* 残りの幅を全て使う */
		padding: 0.5em;
		color: black;
		border: 1px solid #ccc;
		border-radius: 0.5em 0 0 0.5em; /* 左上と左下の角を丸める */
		outline: none; /* フォーカス時のデフォルトの枠線を表示しない */

		&:focus {
			border-color: #07f;
			box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
		}
	}

	/* 送信ボタンのスタイル */
	.send-button {
		width: 4em;
		border: none;
		background-color: #07f;
		color: white;
		border-radius: 0 5px 5px 0; /* 右上と右下の角を丸める */
		cursor: pointer;
	}
</style>
