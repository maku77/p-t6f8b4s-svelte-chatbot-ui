<script lang="ts">
	import './global.css';
	import { sendMessageToBot } from '$lib/utils';
	import Chat, { type ChatBubbleData } from '$lib/Chat/Chat.svelte';

	/** ChatBubble に表示する内容（ユーザーと Bot のメッセージのリスト） */
	let bubbles: ChatBubbleData[] = [];

	/**
	 * ユーザーがメッセージを入力し終わったときに呼ばれるコールバック関数です。
	 *
	 * ユーザーの入力内容は直ちにチャットバブルとして表示し、ボットに入力内容を送ります。
	 * ボットからの応答が返ってきたときに、その内容をチャットバブルとして表示します。
	 */
	async function handleSend(userMessage: string): Promise<void> {
		bubbles = [...bubbles, { name: 'You', content: userMessage }];
		const botMessage = await sendMessageToBot(userMessage);
		bubbles = [...bubbles, { name: 'Bot', content: botMessage }];
	}
</script>

<Chat {bubbles} onSend={handleSend} />
