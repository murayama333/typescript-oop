export class Counter {

  private static counter: Counter = new Counter();

	private max: number;

  private constructor() {
  }

  public static getInstance(): Counter {
    return Counter.counter;
  }

	public countUp():void  {
		for (let i = 1; i <= this.max; i++) {
			console.log(i);
		}
	}

	public setMax(max: number): void {
		this.max = max;
	}
}
