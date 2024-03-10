/** 指定したミリ秒だけスリープします。 */
export async function sleepMillis(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

/** ボットにメッセージを送って応答を取得します。 */
export async function sendMessageToBot(content: string): Promise<string> {
	await sleepMillis(1000); // ボットが応答するまでの遅延をシミュレート
	return `You said "${content}"`; // ボットの応答内容をシミュレート
}
