export const registerSocketHandlers = (io) => {
    io.on('connection', (socket) => {
      socket.on('join-album', (albumId) => {
        socket.join(albumId);
      });
    });
  };