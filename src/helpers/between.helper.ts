class BetweenHelper{
  public IsBetween(x:number, less:number, high?:number):boolean{
    if(less == x){
      return true;
    }

    if(!high){
      return less <= x;
    }

    if(less <= x && high >= x){
      return true;
    }

    return false;
  }
}

const beetweenHelper = new BetweenHelper();

export default beetweenHelper;