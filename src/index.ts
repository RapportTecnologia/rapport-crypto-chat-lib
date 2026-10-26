/**
 * Public contracts shared by every Rapport Crypto Chat client implementation.
 * Defines portable chat boundaries without coupling consumers to React Native or Node.
 *
 * Author: Carlos Delfino
 * Email: consultoria@carlosdelfino.eti.br
 * WhatsApp: +55 (85) 98520-5490
 */
export interface CryptoChatIdentity {
 wallet: string;
 chainId: number;
 peerId: string;
 x25519PublicKey: string;
 timestamp: number;
 signature: string;
}

export interface CryptoChatMessage {
 id: string;
 conversationId: string;
 senderWallet: string;
 senderPeerId: string;
 type: string;
 ciphertext: string;
 timestamp: number;
}

export interface CryptoChatStorage {
 getItem(key: string): Promise<string | null>;
 setItem(key: string, value: string): Promise<void>;
 removeItem(key: string): Promise<void>;
 getAllKeys(): Promise<string[]>;
}

export interface CryptoChatTransport {
 start(): Promise<void>;
 stop(): Promise<void>;
 sendDirect(peer: string, message: CryptoChatMessage): Promise<void>;
 setGlobalHandler(handler: (message: CryptoChatMessage, peerId?: string) => Promise<void>): void;
}

export interface FinancialExecutionReview {
 operation: string;
 owner: `0x${string}`;
 contract: `0x${string}`;
 amount: string;
 risk: string;
}

export type ExplicitConfirmation = (review: FinancialExecutionReview) => Promise<boolean>;

export function assertSecureServiceUrl(value: string, label = 'service'): string {
 const url = new URL(value);
 if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash) throw new Error(`${label} URL must be credential-free HTTPS`);
 return url.toString().replace(/\/$/, '');
}
