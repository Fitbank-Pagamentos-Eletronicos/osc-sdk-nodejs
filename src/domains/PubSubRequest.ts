export class PubSubRequest {
  private topic_id: string;
  private subscription_id: string;
  private project_id: string;
  private service_account: string;

  public getTopic_id(): string {
    return this.topic_id;
  }

  public setTopic_id(topic_id: string): void {
    this.topic_id = topic_id;
  }

  public getSubscription_id(): string {
    return this.subscription_id;
  }

  public setSubscription_id(subscription_id: string): void {
    this.subscription_id = subscription_id;
  }

  public getProject_id(): string {
    return this.project_id;
  }

  public setProject_id(project_id: string): void {
    this.project_id = project_id;
  }

  public getService_account(): string {
    return this.service_account;
  }

  public setService_account(service_account: string): void {
    this.service_account = service_account;
  }
}
