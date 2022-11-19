import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1509394",
  key: "ce6251d9bc1c40f3a37f",
  secret: `${process.env.PUSHER_SECRET_KEY}`,
  cluster: "ap2",
  useTLS: true,
});

export const clientPusher = new ClientPusher('ce6251d9bc1c40f3a37f', {
  cluster: 'ap2',
  forceTLS: true,
});