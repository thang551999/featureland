import { message } from 'antd';

export default function showMessage(
  msgType: 'info' | 'success' | 'error' | 'warning' | 'loading',
  msgContent = 'message.E35'
) {
  message.config({
    maxCount: 1,
  });

  message[msgType]({
    content: msgContent,
    className: 'event-message',
    duration: 3,
  });
}
