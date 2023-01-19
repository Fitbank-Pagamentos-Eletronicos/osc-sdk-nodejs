// Imports the Google Cloud client library
import { PubSub, ClientConfig } from '@google-cloud/pubsub';

export const PubsubSubscribe = async (
  topicId: string,
  subscriptionId: string,
  projectId: string,
  serviceAccount: string,
  listeningFunction: Function
) => {
  // Instantiates a client
  const pubsub = new PubSub({
    projectId: projectId,
    credentials: JSON.parse(serviceAccount)
  } as ClientConfig);

  const subscription = await pubsub.subscription(subscriptionId);

  // Receive callbacks for new messages on the subscription
  subscription.on('message', (message: any) => {
    console.log('Received message:', message.data.toString());
    listeningFunction();
    message.ack();
    process.exit(0);
  });

  // Receive callbacks for errors on the subscription
  subscription.on('error', (error: string) => {
    console.error('Received error:', error);
    process.exit(1);
  });
};
