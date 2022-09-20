

const small_Car = {
    petrol :0.1495,
    Diesel:0.1376,
    "Hybrid":0.1049
};
const medium_Car = {
    "petrol":0.1879,
    "Diesel":0.1650,
    "Hybrid":0.1096
};
const large_Car = {
    "petrol":0.2791,
    "Diesel":0.2072,
    "Hybrid":0.1515
};

exports.Calulcate_tranport = () => {
    let distance_on_car;
    // let total_time_travelled , distance_on_car , distance_on_train , distance_on_plane, distance_on_bus ;
    distance_on_car = parseInt(prompt("Do you travel by car if yes please enter the distance travelled by car anually otherwise type 0"));
    // distance_on_train = parseInt(prompt("Do you travel by train if yes please enter the distance travelled by train anually otherwise type 0"));
    // distance_on_bus = parseInt(prompt("Do you travel by bus if yes please enter the distance travelled by bus anually otherwise type 0"));
    let efficiency_onCar = 0.5;
    let car_type = 1;
    let fuel_type = 2;
    if(car_type === 1){
        if(fuel_type === 1) efficiency_onCar = small_Car.petrol;
        if(fuel_type === 2)  efficiency_onCar = small_Car.Diesel;
        if(fuel_type === 3) efficiency_onCar = small_Car.Hybrid;

    }
    else if(car_type === 2){
        if(fuel_type ===1) efficiency_onCar = medium_Car.petrol;
        if(fuel_type === 2)  efficiency_onCar = medium_Car.Diesel;
        if(fuel_type === 3) efficiency_onCar = medium_Car.Hybrid;
    }
   else {
        if(fuel_type ===1) efficiency_onCar = large_Car.petrol;
        if(fuel_type === 2)  efficiency_onCar = large_Car.Diesel;
        if(fuel_type === 3) efficiency_onCar = large_Car.Hybrid;
    }

    
    let carbon_consumption_onCar = distance_on_car * efficiency_onCar
    console.log("test" + carbon_consumption_onCar);

    
}