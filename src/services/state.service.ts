export class stateService {
  private state:any = {};

  public read(key:string):any {

    return this.state[key];
  }

  public store(key:string, data:any) {

    this.state[key] = data;
  }

  public delete(key:string) {

    if (this.state[key] !== undefined) {
      delete this.state[key];
    }
  }
}