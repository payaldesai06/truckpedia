import { io } from 'socket.io-client';
import constants from './config/constants';
import store from './store/store';
const token = localStorage.getItem('access_token');
const serverUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://api23.truckpedia.io/'
    : 'http://127.0.0.1:3000/';

const socket = io(serverUrl, {
  query: { token },
});

socket.on('connect', () => {
  console.log('Connected to socket.io');
  const currentUser = store.getters['auth/user'];
  const userId = (currentUser || {}).user_id || null;
  if (userId) {
    // This is only called after reconnect. So no duplicate emit().
    socket.emit(constants.socketIoEvents.joinRoom, userId);
  }
});

socket.on('disconnect', () => {
  console.log('Socket.io disconnected');
});

// When first open website, only this is called. So no duplicate emit().
export const joinSocketRoom = (userId) => {
  socket.emit(constants.socketIoEvents.joinRoom, userId);
};

export { socket };
