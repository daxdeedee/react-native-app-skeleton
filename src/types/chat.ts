export interface ChatInfo {
  type: 'send' | 'receive';
  message: string;
  profile: string;
  name: string;
}
