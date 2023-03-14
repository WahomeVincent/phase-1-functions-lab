// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }
  
function distanceFromHqInFeet(pickupLocation) {
    const block = 264;
    const distance = distanceFromHqInBlocks(pickupLocation);
    return Math.abs( block * distance);
}

function distanceTravelledInFeet(start, destination) {
    return (Math.abs(start - destination) * 264);

}

function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return "cannot travel that far";
    }
  }
  
