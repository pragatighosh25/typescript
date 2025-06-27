abstract class UsePhoto{
  constructor(
    public cameraMode: string,
    public filter: string,
  ){}
  abstract getSepia(): void
  getReelTime(): number{
    return 8
  }
}

class Facebook extends UsePhoto{
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ){
    super(cameraMode, filter)
  }
  getSepia(): void {
    console.log("hi")
  }
}