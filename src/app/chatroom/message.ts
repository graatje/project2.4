export interface Message {
    msgid: number;
    sender: string;
    content: string;
    roomid: number;
    timestamp: number;
    // for future: roomid.
  }